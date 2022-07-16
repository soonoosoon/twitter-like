<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
import LogoTwitter from './LogoTwitter.vue'
import IconClose from './IconClose.vue'
import LandingLoader from './LandingLoader.vue'

const emit = defineEmits(['close'])

const userStore = useUserStore()

const router = useRouter()

const email = ref('ciwege2358@jrvps.com')

const password = ref('nayuta')

const isLanding = ref(false)

const login = async () => {
  isLanding.value = true
  await userStore.login(email.value, password.value)
  await userStore.getTweetsByTimeline()
  router.push('/home').then(() => {
    isLanding.value = false
  })
}
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center">
    <LandingLoader v-if="isLanding" />
    <div class="w-[37.5rem] h-[42.5rem] flex flex-col items-center bg-white rounded-xl shadow-lg relative">
      <IconClose
        @click="emit('close')"
        class="absolute left-0 w-9 h-9 p-2 rounded-full m-2 fill-gray-600 hover:bg-gray-200 hover:transition-colors"
      />
      <LogoTwitter class="w-6 h-6 m-4" />

      <div class="w-[18.75rem] flex flex-col mx-auto mt-8 gap-8">
        <h1 class="text-4xl font-bold">Sign in to Twitter</h1>

        <input
          v-model="email"
          type="email"
          placeholder=""
          class="p-3 rounded-md border focus:outline-twitterblue autofill:bg-transparent"
        />

        <input
          v-model="password"
          type="password"
          placeholder="password"
          class="p-3 rounded-md border focus:outline-twitterblue autofill:border autofill:bg-white"
        />

        <button @click="login" class="p-1.5 rounded-full bg-black text-white font-semibold">Sign in</button>

        <button class="p-1.5 rounded-full border bg-white text-black font-medium hover:bg-gray-200">
          Forgot password?
        </button>
      </div>
    </div>
  </div>
</template>
