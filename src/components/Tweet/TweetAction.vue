<script setup>
import IconReply from './IconReply.vue'
import IconRetweet from './IconRetweet.vue'
import IconLike from './IconLike.vue'
import IconShare from './IconShare.vue'
import ReplyModal from './ReplyModal.vue'
import { ref } from 'vue'

defineProps({
  reply: Number,
  retweet: Number,
  like: Number
})

const replyModal = ref(false)
</script>
<template></template>
