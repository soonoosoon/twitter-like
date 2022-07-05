<script setup>
import PublisherHeader from '../components/Publisher/PublisherHeader.vue'
import PublisherBox from '../components/Publisher/PublisherBox.vue'
import TimelineTweets from '../components/Timeline/TimelineTweets.vue'
</script>

<template>
  <div class="flex flex-col w-[37.5rem] border-x border-ashy min-h-[10000px]">
    <PublisherHeader />
    <PublisherBox />
    <TimelineTweets />
  </div>
</template>
