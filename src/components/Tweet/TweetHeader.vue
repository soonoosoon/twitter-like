<script setup>
import { getTimeFromPresent } from '../../helper/utility'
defineProps({
  name: String,
  username: String,
  time: String
})
</script>

<template>
  <div class="flex justify-start items-center gap-1">
    <h1 class="font-bold">{{ name }}</h1>
    <h2 class="text-neutral-500">@ {{ username }} · {{ getTimeFromPresent(time) }}</h2>
  </div>
</template>
