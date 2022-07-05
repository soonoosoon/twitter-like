<script setup>
import ProfileTab from './ProfileTab.vue'
</script>

<template>
  <div class="flex flex-col w-[37.5rem]">
    <profile-tab />
    <router-view />
  </div>
</template>
