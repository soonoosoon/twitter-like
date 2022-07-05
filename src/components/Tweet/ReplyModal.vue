<script setup>
import IconMedia from '../Publisher/IconMedia.vue'
import IconGIF from '../Publisher/IconGIF.vue'
import IconPoll from '../Publisher/IconPoll.vue'
import IconEmoji from '../Publisher/IconEmoji.vue'
import IconSchedule from '../Publisher/IconSchedule.vue'
import PublisherButton from '../Publisher/PublisherButton.vue'
import AvatarBox from '../AvatarBox.vue'
import IconClose from '../IconClose.vue'
import TweetHeader from '../Tweet/TweetHeader.vue'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

defineProps({
  avatar: String,
  name: String,
  username: String,
  time: String,
  tweet: String,
  media: String,
  reply: Number
})

const emit = defineEmits(['close'])

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

let sendReply = async () => {
  let path = null
  if (media.value) {
    path = await userStore.storeMediaAndReturnPath(file.value)
  }
  await userStore.sendTweet(tweeting.value, path)
  tweeting.value = ''
  media.value = null
}
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div
      class="w-[37.5rem] max-h-[37.5rem] overflow-scroll flex flex-col bg-white rounded-xl shadow-lg relative p-4"
    >
      <div class="w-[2px] h-14 bg-ashy absolute left-[54px] top-[136px]"></div>
      <IconClose
        @click="emit('close')"
        class="w-9 h-9 p-2 rounded-full m-2 fill-gray-600 hover:bg-gray-200 hover:transition-colors"
      />
      <div class="flex p-4">
        <AvatarBox :avatar="avatar" />
        <div class="px-4">
          <TweetHeader :name="name" :username="username" :time="time" />
          <div>{{ tweet }}</div>
          <div class="text-carbon pt-2">
            Replying to <span class="text-twitterblue">@{{ username }}</span>
          </div>
        </div>
      </div>

      <div class="flex p-4">
        <AvatarBox :avatar="user.avatar_url" />
        <div class="flex flex-col w-full px-4">
          <input v-model="tweeting" class="py-3 text-xl focus:outline-none" placeholder="Tweet your reply" />
          <div v-if="media" class="relative">
            <IconClose
              @click="closeMedia"
              class="h-8 w-8 p-2 m-1 absolute left-0 rounded-full bg-black/50 fill-white hover:bg-black/60 hover:transition-colors duration-100 ease-out"
            />
            <img :src="media" class="rounded-xl" />
          </div>
          <div class="flex justify-between items-center -mx-2 mt-4 -mb-2">
            <div class="flex">
              <input type="file" class="absolute h-6 w-6 opacity-0" accept="image/*" @change="uploadMedia" />
              <IconMedia @click="uploadMedia" />
              <IconGIF />
              <IconPoll />
              <IconEmoji />
              <IconSchedule />
            </div>
            <PublisherButton :isDisabled="tweeting === '' && media == null" @click="sendReply" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
