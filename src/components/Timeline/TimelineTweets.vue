<script setup>
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import TweetBox from '../Tweet/TweetBox.vue'

const userStore = useUserStore()

const {
  tweets,
  getTweetById,
  isTweetLiked,
  isTweetRetweeted,
  getTotalRepliedById,
  getTotalRetweetedById,
  getTotalLikedById
} = storeToRefs(userStore)
</script>

<template>
  <div class="flex flex-col" v-for="(item, index) in tweets" :key="index">
    <TweetBox
      v-if="item.original_tweet_id !== null"
      :id="item.id"
      :avatar="getTweetById(item.original_tweet_id).avatar_url"
      :name="getTweetById(item.original_tweet_id).nickname"
      :username="getTweetById(item.original_tweet_id).username"
      :time="getTweetById(item.original_tweet_id).createdTime"
      :tweet="getTweetById(item.original_tweet_id).tweet"
      :media="getTweetById(item.original_tweet_id).media"
      :reply="getTotalRepliedById(item.original_tweet_id)"
      :retweet="getTotalRetweetedById(item.original_tweet_id)"
      :like="getTotalLikedById(item.original_tweet_id)"
      :enableLiked="isTweetLiked(item.original_tweet_id) || isTweetLiked(item.id)"
      :enableRetweeted="isTweetRetweeted(item.original_tweet_id) || isTweetRetweeted(item.id)"
      :isRetweeted="true"
      :originalTweetId="item.original_tweet_id"
    />
    <TweetBox
      v-else
      :avatar="item.avatar_url"
      :name="item.nickname"
      :username="item.username"
      :time="item.createdTime"
      :id="item.id"
      :tweet="item.tweet"
      :media="item.media"
      :reply="getTotalRepliedById(item.id)"
      :retweet="getTotalRetweetedById(item.id)"
      :like="getTotalLikedById(item.id)"
      :enableLiked="isTweetLiked(item.id)"
      :enableRetweeted="isTweetRetweeted(item.id)"
      :isRetweeted="false"
      :originalTweetId="item.original_tweet_id"
    />
  </div>
</template>
