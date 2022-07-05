<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import LogoTwitter from './LogoTwitter.vue'
import IconClose from './IconClose.vue'

const emit = defineEmits(['close'])

const userStore = useUserStore()

const email = ref('')
const password = ref('')

const register = () => {
  userStore.register(email.value, password.value)
}
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center">
    <div class="w-[37.5rem] h-[42.5rem] flex flex-col items-center bg-white rounded-xl shadow-lg relative">
      <IconClose
        @click="emit('close')"
        class="absolute left-0 w-9 h-9 p-2 rounded-full m-2 fill-gray-600 hover:bg-gray-200 hover:transition-colors"
      />
      <LogoTwitter class="w-6 h-6 m-4" />

      <div class="w-[18.75rem] flex flex-col mx-auto mt-8 gap-8">
        <h1 class="text-4xl font-bold">Sign up to Twitter</h1>

        <input
          v-model="email"
          type="email"
          placeholder="Phone number, email address"
          class="p-3 rounded-md border focus:outline-twitterblue autofill:bg-transparent"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="p-3 rounded-md border focus:outline-twitterblue autofill:border autofill:bg-white"
        />

        <button @click="register" class="p-1.5 rounded-full bg-black text-white font-semibold">
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>
