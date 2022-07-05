<script setup>
import { ref } from 'vue'
import LoginModal from '../components/LoginModal.vue'
import RegisterModal from '../components/RegisterModal.vue'
import LogoTwitter from '../components/LogoTwitter.vue'

const loginModal = ref(false)
const registerModal = ref(false)
</script>

<template>
  <div class="flex">
    <img class="min-h-screen max-w-3xl object-cover" src="../assets/images/twitter_image.png" />

    <div class="flex flex-col space-y-10 space-x-10">
      <LogoTwitter class="h-12 w-12 mt-20 ml-10" />
      <p class="text-6xl font-bold">Happening now</p>
      <p class="text-3xl font-bold">Join Twitter today</p>

      <div class="flex flex-col space-y-4">
        <button
          class="w-[18.75rem] p-1.5 rounded-full border bg-white text-black font-medium hover:bg-gray-200"
        >
          Sign up with Google
        </button>

        <button
          class="w-[18.75rem] p-1.5 rounded-full border bg-white text-black font-medium hover:bg-gray-200"
        >
          Sign up with Apple
        </button>
      </div>

      <div class="flex flex-col space-y-1">
        <button
          @click="registerModal = true"
          class="w-[18.75rem] p-1.5 rounded-full border bg-twitterblue text-white font-medium hover:bg-sky-400"
        >
          Sign up with phone or email
        </button>

        <p class="text-xs w-[18.75rem]">
          <span>By singing up you agree to the </span>
          <span class="text-twitterblue">Terms of Service</span>
          <span> and </span>
          <span class="text-twitterblue">Privacy Policy</span>
          <span>, including </span>
          <span class="text-twitterblue">Cookie Use</span>
          <span>.</span>
        </p>
      </div>

      <div class="flex flex-col space-y-1 pt-10">
        <p class="text-lg">Already have an account?</p>
        <button
          @click="loginModal = true"
          class="w-[18.75rem] p-1.5 rounded-full border bg-white text-twitterblue font-medium hover:bg-sky-100"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>

  <RegisterModal v-show="registerModal" @close="registerModal = false" />
  <LoginModal v-show="loginModal" @close="loginModal = false" />
</template>
