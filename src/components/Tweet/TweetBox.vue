<script setup>
import AvatarBox from '../AvatarBox.vue'
import TweetHeader from './TweetHeader.vue'
import IconReply from './IconReply.vue'
import IconRetweet from './IconRetweet.vue'
import IconLike from './IconLike.vue'
import IconShare from './IconShare.vue'
import ReplyModal from './ReplyModal.vue'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user'

const userStore = useUserStore()

const props = defineProps({
  avatar: String,
  name: String,
  username: String,
  time: String,
  id: String,
  tweet: String,
  media: String,
  reply: Number,
  retweet: Number,
  like: Number,
  enableLiked: Boolean,
  enableRetweeted: Boolean,
  isRetweeted: Boolean,
  originalTweetId: String
})

const replyModal = ref(false)

const makeRetweet = async () => {
  if (props.enableRetweeted) {
    // if user retweets tweet of someone else
    if (props.originalTweetId !== null) {
      await userStore.cancelRetweetInTweet(props.id, props.originalTweetId)
      await userStore.cancelRetweetInUser(props.originalTweetId)
    } else {
      await userStore.cancelRetweetInTweet(props.id, props.id)
      await userStore.cancelRetweetInUser(props.id)
    }
  } else {
    const id = props.originalTweetId !== null ? props.originalTweetId : props.id
    await userStore.confirmRetweetInTweet(id)
    await userStore.confirmRetweetInUser(id)
  }
}

const makeLike = async () => {
  if (props.enableLiked) {
    const id = props.originalTweetId !== null ? props.originalTweetId : props.id
    await userStore.cancelLikeInTweet(id)
    await userStore.cancelLikeInUser(id)
  } else {
    const id = props.originalTweetId !== null ? props.originalTweetId : props.id
    await userStore.confirmLikeInTweet(id)
    await userStore.confirmLikeInUser(id)
  }
}
</script>

<template>
  <div class="flex flex-col hover:bg-neutral-100 hover:transition-colors duration-500 ease-out">
    <div v-if="isRetweeted" class="flex items-center ml-4 text-carbon text-sm">
      <IconRetweet class="fill-carbon" />You Retweeted
    </div>
    <div class="grid grid-cols-[auto,1fr] gap-3 px-3 pt-3 pb-1 border-b">
      <AvatarBox :avatar="avatar" />

      <div>
        <TweetHeader :name="name" :username="username" :time="time" />
        <div>{{ tweet }}</div>
        <img :src="media" v-if="media" class="rounded-xl" />

        <div class="-ml-2 flex text-xs text-slate-600 hover:transition-colors duration-500 ease-out">
          <div class="flex items-center gap-1 group mr-auto">
            <IconReply
              @click="replyModal = true"
              class="fill-slate-600 group-hover:fill-sky-500 group-hover:bg-sky-100"
            />
            <span v-show="reply" class="group-hover:text-sky-500">{{ reply }}</span>
          </div>

          <div class="flex items-center gap-1 group mr-auto" @click="makeRetweet">
            <IconRetweet
              :class="enableRetweeted ? 'fill-green-500' : ''"
              class="fill-slate-600 group-hover:fill-green-500 group-hover:bg-green-100"
            />
            <span
              v-show="retweet"
              :class="enableRetweeted ? 'text-green-500' : ''"
              class="group-hover:text-green-500"
              >{{ retweet }}</span
            >
          </div>

          <div class="flex items-center gap-1 group mr-auto" @click="makeLike">
            <IconLike
              :class="enableLiked ? 'fill-rose-500' : ''"
              :selected="enableLiked"
              class="fill-slate-600 group-hover:fill-rose-500 group-hover:bg-rose-100"
            />
            <span
              v-show="like"
              :class="enableLiked ? 'text-rose-500' : ''"
              class="group-hover:text-rose-500"
              >{{ like }}</span
            >
          </div>

          <div class="mr-auto rounded-full hover:bg-sky-100 hover:transition-colors">
            <IconShare class="fill-slate-600 hover:fill-sky-500" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <ReplyModal
    v-show="replyModal"
    @close="replyModal = false"
    :avatar="avatar"
    :name="name"
    :username="username"
    :time="time"
    :tweet="tweet"
  />
</template>
