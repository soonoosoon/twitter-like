import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTrendStore = defineStore('trend', {
  state: () => ({
    trending: [
      {
        type: 'Trending in United States',
        title: 'Gravity Falls',
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
        title: 'Chan',
        subtile: "Stray Kids' Bang Chan entertains fans in his latest V Live stream",
        quantity: '293K'
      }
    ],
    whoToFollow: [
      {
        nickname: '스키나유타 🦋🍒 ⁰⁷',
        username: 'sukinayuta',
        avatarURL: '/src/assets/images/1.jpeg'
      },
      {
        nickname: '実桜🍒',
        username: 'ooo_yutamio',
        avatarURL: '/src/assets/images/2.jpeg'
      },
      {
        nickname: '🍒Yukkuri¹⁰²⁶🦋',
        username: 'Yeokshi_Yukkuri',
        avatarURL: 'src/assets/images/3.jpeg'
      }
    ]
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTrendStore, import.meta.hot))
}
