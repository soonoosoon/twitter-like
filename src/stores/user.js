import { defineStore, acceptHMRUpdate } from 'pinia'
import supabase from '../supabase'
import { getTime } from '../helper/utility'

export const useUserStore = defineStore('user', {
  // 开启持久化
  //persist: true,

  state: () => ({
    user: null,
    followings: [],
    ownTweets: [],
    followingTweets: [],
    tweets: []
  }),

  getters: {
    getAllFollowingId: (state) => {
      return () => state.followings.map((following) => following.id)
    },

    getFollowingById: (state) => {
      return (id) => state.followings.find((following) => following.id === id)
    },

    isUserLikedTweet: (state) => {
      return (id) => {
        return state.user.liked_tweet_id ? state.user.liked_tweet_id.includes(id) : false
      }
    },

    getTotalLikedById: (state) => {
      return (id) => {
        const tweet = state.tweets.find((tweet) => tweet.id === id)
        return tweet.liked_user_id ? tweet.liked_user_id.length : 0
      }
    }
  },

  actions: {
    async register(email, password) {
      const { user, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
    },

    async logout() {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },

    async login(email, password) {
      const { user, error } = await supabase.auth.signIn({ email: email, password: password })
      if (error) throw error
      if (user) await this.getUserProfile(user.id)
    },

    /**
     * Login with google, apple
     */
    async loginWithSocialProvider(token) {
      const { user, error } = await supabase.auth.signIn({ provider })
      if (error) throw error
      if (user) this.user = user
    },

    /**
     * Get user
     */
    async getUserProfile(id) {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', id)
      if (error) throw error
      if (data) this.user = data[0]
    },

    /**
     * Get following profile (id, avatar_url, ...)
     */

    async getFollowingProfile(id) {
      const { data, error } = await supabase.from('profiles').select('*').in('id', id)
      if (error) throw error
      if (data) this.followings = data
    },

    /**
     * Get all followings
     */
    async getFollowings() {
      const { data, error } = await supabase
        .from('followings')
        .select('followingId')
        .eq('userId', this.user.id)
      if (error) throw error
      if (data) {
        const id = []
        for (const item of data) {
          id.push(item.followingId)
        }
        await this.getFollowingProfile(id)
      }
    },

    /**
     * Get all tweets by self
     */
    async getOwnTweets() {
      const { data, error } = await supabase
        .from('tweets')
        .select('id, userId, tweet, media, createdTime, liked_user_id')
        .eq('userId', this.user.id)
      if (error) throw error
      if (data) {
        data.sort((a, b) => {
          const at = new Date(a.createdTime)
          const bt = new Date(b.createdTime)
          return bt - at
        })
        this.ownTweets = data.map((item) => {
          return {
            ...item,
            avatar_url: this.user.avatar_url,
            username: this.user.username,
            nickname: this.user.nickname
          }
        })
      }
    },

    /**
     * Get all tweets by followings
     */
    async getFollowingTweets() {
      const { data, error } = await supabase
        .from('tweets')
        .select('id, userId, tweet, media, createdTime, liked_user_id')
        .in('userId', this.getAllFollowingId())
      if (error) throw error
      if (data)
        this.followingTweets = data.map((item) => {
          return {
            ...item,
            avatar_url: this.getFollowingById(item.userId).avatar_url,
            username: this.getFollowingById(item.userId).username,
            nickname: this.getFollowingById(item.userId).nickname
          }
        })
    },

    /**
     * Get all tweets by timeline
     */
    async getTweetsByTimeline() {
      await this.getFollowings()
      await this.getOwnTweets()
      await this.getFollowingTweets()
      const arr = this.ownTweets.concat(this.followingTweets)
      arr.sort((a, b) => {
        const at = new Date(a.createdTime)
        const bt = new Date(b.createdTime)
        return bt - at
      })
      this.tweets = arr
    },

    /**
     * Send single tweet
     */
    async sendTweet(tweet, media) {
      const time = getTime()
      const { data, error } = await supabase
        .from('tweets')
        .insert([{ userId: this.user.id, tweet: tweet, media: media ? media : null, createdTime: time }])
      if (error) throw error
      if (data) this.getTweetsByTimeline()
    },

    /**
     * Store media in storage and return path with token
     * @param file
     * @returns url or null
     */
    async storeMediaAndReturnPath(file) {
      const { error: uploadError } = await supabase.storage.from('avatars').upload(file.name, file)
      if (uploadError) throw uploadError
      const { publicURL, error: pathError } = supabase.storage.from('avatars').getPublicUrl(file.name)
      if (pathError) throw uploadError
      if (publicURL) return publicURL
      else return null
    },

    /**
     * delete like in liked_tweet_id
     */
    async cancelLikeInUser(tweet_id) {
      const arr = this.user.liked_tweet_id.filter((item) => item !== tweet_id)
      const { data, error } = await supabase
        .from('profiles')
        .update({ liked_tweet_id: arr })
        .match({ id: this.user.id })
      if (error) throw error
      if (data) this.getUserProfile(this.user.id)
    },

    async cancelLikeInTweet(tweet_id) {
      const tweet = this.tweets.filter((item) => item.id === tweet_id)
      let arr = tweet[0].liked_user_id
      arr = arr.filter((item) => item !== this.user.id)
      const { data, error } = await supabase
        .from('tweets')
        .update({ liked_user_id: arr })
        .match({ id: tweet_id })
      if (error) throw error
      if (data) this.getTweetsByTimeline()
    },

    async confirmLikeInTweet(tweet_id) {
      const tweet = this.tweets.filter((item) => item.id === tweet_id)
      const arr = tweet[0].liked_user_id
      arr.push(this.user.id)

      const { data, error } = await supabase
        .from('tweets')
        .update({ liked_user_id: arr })
        .match({ id: tweet_id })
      if (error) throw error
      if (data) this.getTweetsByTimeline()
    },

    /**
     * insert like in like_tweet_id
     */
    async confirmLikeInUser(tweet_id) {
      const arr = this.user.liked_tweet_id
      arr.push(tweet_id)
      const { data, error } = await supabase
        .from('profiles')
        .update({ liked_tweet_id: arr })
        .match({ id: this.user.id })
      if (error) throw error
      if (data) this.getUserProfile(this.user.id)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
