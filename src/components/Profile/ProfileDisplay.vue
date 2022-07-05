<script setup>
import IconArrow from './IconArrow.vue'
import IconLocation from './IconLocation.vue'
import IconLink from './IconLink.vue'
import IconDate from './IconDate.vue'
import ButtonEdit from './ButtonEdit.vue'
import { getJoinedTimeFormat } from '../../helper/utility'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
const { user, ownTweets } = storeToRefs(useUserStore())
</script>

<template>
  <div class="flex flex-col">
    <!-- top -->
    <div class="h-[54px] flex justify-start px-4 gap-10 items-center">
      <icon-arrow />
      <div class="flex flex-col">
        <p class="text-lg font-semibold text-black">{{ user.nickname }}</p>
        <p class="text-sm text-black" v-if="ownTweets.length === 1">{{ ownTweets.length }} Tweet</p>
        <p class="text-sm text-black" v-else>{{ ownTweets.length }} Tweets</p>
      </div>
    </div>
    <!-- wall -->
    <div class="h-[200px] bg-ashy"></div>
    <!-- profile -->
    <div class="flex flex-col p-4 justify-start">
      <!-- avatar -->
      <div class="flex justify-between h-[68px]">
        <div class="w-[135.5px]">
          <div
            class="h-[135.5px] w-[135.5px] -translate-y-[83.5px] rounded-full bg-gray-50 absolute flex justify-center items-center"
          >
            <img class="h-[125px] w-[125px] rounded-full" :src="user.avatar_url" />
          </div>
        </div>

        <button-edit />
      </div>

      <div class="text-xl font-bold">{{ user.nickname }}</div>

      <div class="text-carbon mb-3">@{{ user.username }}</div>

      <div class="mb-3">{{ user.bio }}</div>

      <div class="flex justify-start items-center gap-5 text-carbon mb-3">
        <div class="flex justify-start items-center" v-if="user.location">
          <icon-location />
          <span>{{ user.location }}</span>
        </div>
        <div class="flex justify-start items-center" v-if="user.website">
          <icon-link />
          <a href="user.website">
            <span class="text-[rgba(57,145,245,0.91)]">{{ user.website }}</span>
          </a>
        </div>
        <div class="flex justify-start items-center" v-if="user.joined">
          <icon-date />
          <span>Joined {{ getJoinedTimeFormat(user.joined) }}</span>
        </div>
      </div>

      <div class="flex justify-start items-center text-sm gap-5 text-carbon mb-3">
        <div class="flex gap-1">
          <p class="font-bold text-black">{{ user.following_count }}</p>
          <p>Following</p>
        </div>
        <div class="flex gap-1">
          <p class="font-bold text-black">{{ user.follower_count }}</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  </div>
</template>
