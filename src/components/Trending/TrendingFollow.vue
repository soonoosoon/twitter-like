<script setup>
defineProps({
  name: String,
  username: String,
  avatar: String
})
</script>

<template>
  <div class="px-4 py-3 flex hover:bg-ashy hover:transition-colors duration-500 ease-out">
    <img class="w-12 mr-3 rounded-full" :src="avatar" />
    <div class="w-full flex justify-between items-center">
      <div class="h-8 flex flex-col justify-center">
        <p class="text-sm font-bold text-black">{{ name }}</p>
        <p class="opacity-60 text-sm text-black">@{{ username }}</p>
      </div>

      <div class="h-8 flex justify-center items-center px-4 py-2.5 rounded-[50px] bg-black">
        <p class="text-sm font-bold text-white">Follow</p>
      </div>
    </div>
  </div>
</template>
