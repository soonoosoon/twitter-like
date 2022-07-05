<script setup>
import IconMedia from './IconMedia.vue'
import IconGIF from './IconGIF.vue'
import IconPoll from './IconPoll.vue'
import IconEmoji from './IconEmoji.vue'
import IconSchedule from './IconSchedule.vue'
import AvatarBox from '../AvatarBox.vue'
import PublisherButton from './PublisherButton.vue'
import IconClose from '../IconClose.vue'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'

const { user } = storeToRefs(useUserStore())

let tweeting = ref('')

let media = ref(null)

let file = ref(null)

let uploadMedia = (event) => {
  file.value = event.target.files[0]
  media.value = URL.createObjectURL(file.value)
}

let closeMedia = () => {
  media.value = null
}

let sendTweet = async () => {
  let path = null
  if (media.value) {
    path = await useUserStore().storeMediaAndReturnPath(file.value)
  }
  await useUserStore().sendTweet(tweeting.value, path)
  tweeting.value = ''
  media.value = null
}
</script>

<template>
  <div class="flex p-3 border-b border-ashy">
    <AvatarBox :avatar="user.avatar_url" />

    <div class="w-full flex flex-col gap-2">
      <input v-model="tweeting" class="py-3 px-2 text-xl focus:outline-none" placeholder="What's happening" />
      <div v-if="media" class="relative">
        <IconClose
          @click="closeMedia"
          class="h-8 w-8 p-2 m-1 absolute left-0 rounded-full bg-black/50 fill-white hover:bg-black/60 hover:transition-colors duration-100 ease-out"
        />
        <img :src="media" class="rounded-xl" />
      </div>

      <div class="flex justify-between items-center">
        <div class="flex">
          <input type="file" class="absolute h-6 w-6 opacity-0" accept="image/*" @change="uploadMedia" />
          <IconMedia @click="uploadMedia" />
          <IconGIF />
          <IconPoll />
          <IconEmoji />
          <IconSchedule />
        </div>

        <PublisherButton :isDisabled="tweeting === '' && media == null" @click="sendTweet" />
      </div>
    </div>
  </div>
</template>
