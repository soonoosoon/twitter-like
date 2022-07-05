<script setup>
import LogoTwitter from '../LogoTwitter.vue'
import IconHome from './IconHome.vue'
import IconExplore from './IconExplore.vue'
import IconNotifications from './IconNotifications.vue'
import IconMessages from './IconMessages.vue'
import IconBookmarks from './IconBookmarks.vue'
import IconLists from './IconLists.vue'
import IconProfile from './IconProfile.vue'
import IconMore from './IconMore.vue'
import ButtonTweet from './ButtonTweet.vue'
import ButtonSelf from './ButtonSelf.vue'
</script>

<template>
  <div class="flex flex-col items-center xl:items-start justify-between min-h-screen fixed">
    <div class="flex flex-col gap-1.5 items-center xl:items-stretch">
      <LogoTwitter class="w-12 h-12 p-2 mt-2" />
      <div class="flex flex-col gap-1.5 text-xl">
        <IconHome />
        <IconExplore />
        <IconNotifications />
        <IconMessages />
        <IconBookmarks />
        <IconLists />
        <IconProfile />
        <IconMore />
      </div>
      <ButtonTweet />
    </div>
    <ButtonSelf />
  </div>
</template>
