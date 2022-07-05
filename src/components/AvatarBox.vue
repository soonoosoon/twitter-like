<script setup>
defineProps({
  avatar: String
})
</script>

<template>
  <img class="w-12 h-12 rounded-full" :src="avatar" />
</template>
