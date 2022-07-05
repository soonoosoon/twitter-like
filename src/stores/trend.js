import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTrendStore = defineStore('trend', {
  state: () => ({
    trending: [
      {
        type: 'Trending in United States',
        title: 'nayeon',
        subtile: '',
        quantity: '1,151'
      },
      {
        type: 'Trending in United States',
        title: '#IM_NAYEON',
        subtile: '',
        quantity: '5,032'
      },
      {
        type: 'Trending in United States',
        title: 'TWICE',
        subtile: '',
        quantity: '293K'
      }
    ],
    whoToFollow: [
      {
        nickname: '나연 🐰🍒 ⁰⁷',
        username: 'sukinayeon',
        avatarURL:
          'https://vfhzqfumuewiclufqapc.supabase.co/storage/v1/object/public/gallery/avatars/sunglass_avatar.png'
      },
      {
        nickname: 'NAYEON🍒',
        username: 'pop_pop',
        avatarURL:
          'https://vfhzqfumuewiclufqapc.supabase.co/storage/v1/object/public/gallery/avatars/handsup_avatar.png'
      },
      {
        nickname: '🐰nayeon🦋',
        username: 'nayeonyny',
        avatarURL:
          'https://vfhzqfumuewiclufqapc.supabase.co/storage/v1/object/public/gallery/avatars/nayeon_avatar.png'
      }
    ]
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTrendStore, import.meta.hot))
}
