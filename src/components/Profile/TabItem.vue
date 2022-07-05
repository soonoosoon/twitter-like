<script setup>
defineProps({
  tab: String,
  name: String
})
</script>
<template>
  <router-link
    :to="tab"
    class="hover:bg-gray-200 hover:transition-colors duration-500 ease-out group px-[41.75px]"
  >
    <div class="py-3">
      {{ name }}
    </div>
  </router-link>
</template>

<style scoped>
.router-link-exact-active div {
  border-bottom: solid 4px #1da1f2;
  color: black;
}
</style>
