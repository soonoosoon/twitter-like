<script setup>
import TrendingSearch from './TrendingSearch.vue'
import TrendingHappening from './TrendingHappening.vue'
import TrendingFollow from './TrendingFollow.vue'
import { useTrendStore } from '../../stores/trend'
import { storeToRefs } from 'pinia'
const { trending, whoToFollow } = storeToRefs(useTrendStore())
</script>

<template>
  <div class="md:block hidden px-8 space-y-2">
    <div class="flex flex-col">
      <!-- search -->
      <trending-search />
      <!-- what's happening -->
      <div class="flex flex-col mb-4 rounded-xl bg-smoke sticky">
        <h1 class="p-4 text-xl font-extrabold">What's happening</h1>
        <div v-for="(trend, index) in trending" :key="index">
          <trending-happening
            :trending-type="trend.type"
            :trending-title="trend.title"
            :trending-tweets="trend.quantity"
          />
        </div>
        <p class="p-4 text-twitterblue">Show more</p>
      </div>
      <!-- who to follow -->
      <div class="flex flex-col mb-4 rounded-xl bg-smoke sticky top-1">
        <h1 class="p-4 text-xl font-extrabold text-black">Who to follow</h1>
        <div v-for="(who, index) in whoToFollow" :key="index">
          <trending-follow :name="who.nickname" :username="who.username" :avatar="who.avatarURL" />
        </div>
        <p class="p-4 text-twitterblue">Show more</p>
      </div>
    </div>
  </div>
</template>
