<script setup>
import TabItem from './TabItem.vue'
</script>
<template>
  <div class="flex border-b border-ashy font-semibold text-carbon">
    <tab-item :tab="'/profile'" :name="'Tweets'" :on="true" />
    <tab-item :tab="'/profile/replies'" :name="'Tweets & replies'" />
    <tab-item :tab="'/profile/media'" :name="'Media'" />
    <tab-item :tab="'/profile/likes'" :name="'Likes'" />
  </div>
</template>
