<script setup>
import IconDots from './IconDots.vue'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'

const { user } = storeToRefs(useUserStore())
</script>
<template>
  <button
    class="w-full flex justify-between items-center p-3 my-3 rounded-full hover:bg-ashy hover:transition"
  >
    <div class="flex items-center gap-4">
      <img class="flex h-12 w-12 rounded-full" :src="user.avatar_url" />
      <div class="xl:block hidden">
        <h1 class="font-bold text-left">{{ user.nickname }}</h1>
        <h1 class="opacity-60">@{{ user.username }}</h1>
      </div>
    </div>
    <IconDots class="xl:block hidden" />
  </button>
</template>
