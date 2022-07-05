<script setup>
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import TweetBox from '../Tweet/TweetBox.vue'

const userStore = useUserStore()

const { isUserLikedTweet, getTotalLikedById, getAllLikedTweets } = storeToRefs(userStore)
</script>

<template>
  <div class="flex flex-col" v-for="(item, index) in getAllLikedTweets()" :key="index">
    <TweetBox
      :avatar="item.avatar_url"
      :name="item.nickname"
      :username="item.username"
      :time="item.createdTime"
      :id="item.id"
      :tweet="item.tweet"
      :media="item.media"
      :reply="item.reply"
      :retweet="item.retweet"
      :like="getTotalLikedById(item.id)"
      :enableLiked="isUserLikedTweet(item.id)"
      :enableRetweeted="false"
    />
  </div>
</template>
