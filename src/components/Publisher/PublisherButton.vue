<script setup>
defineProps({
  isDisabled: Boolean
})
</script>
<template>
  <button
    :disabled="isDisabled"
    class="flex items-center py-2 px-4 rounded-full bg-twitterblue text-white font-bold enabled:hover:bg-sky-600 disabled:opacity-50 hover:transition-colors duration-500 ease-out"
  >
    Tweet
  </button>
</template>
