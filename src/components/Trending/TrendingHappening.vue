<script setup>
import IconDots from './IconDots.vue'
defineProps({
  trendingType: String,
  trendingTitle: String,
  trendingTweets: String
})
</script>

<template>
  <div
    class="relative px-4 py-3 flex-col justify-start hover:bg-ashy hover:transition-colors duration-500 ease-out"
  >
    <p class="text-sm text-carbon">{{ trendingType }}</p>
    <p class="text-base font-bold text-black">{{ trendingTitle }}</p>
    <p class="text-sm text-carbon">{{ trendingTweets }} Tweets</p>
    <icon-dots class="absolute right-6 top-5" />
  </div>
</template>
