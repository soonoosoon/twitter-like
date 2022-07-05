<script setup>
import AppTrending from '../components/Trending/AppTrending.vue'
import AppSidebar from '../components/Sidebar/AppSidebar.vue'
</script>

<template>
  <div class="grid-cols-[auto,1fr] xl:max-w-7xl md:max-w-5xl max-w-2xl mx-auto">
    <AppSidebar />
    <main class="grid grid-cols-[auto,1fr] xl:ml-72 ml-16 min-h-screen">
      <router-view />
      <AppTrending />
    </main>
  </div>
</template>
