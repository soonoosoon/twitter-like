import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/AppLanding.vue')
  },
  {
    path: '/',
    name: 'main',
    redirect: '/landing',
    component: () => import('../views/AppMain.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/AppHome.vue')
      },
      {
        path: 'explore',
        name: 'explore',
        component: () => import('../views/AppExplore.vue')
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: () => import('../views/AppNotifications.vue')
      },
      {
        path: 'messages',
        name: 'messages',
        component: () => import('../views/AppMessages.vue')
      },
      {
        path: 'bookmarks',
        name: 'bookmarks',
        component: () => import('../views/AppBookmarks.vue')
      },
      {
        path: 'lists',
        name: 'lists',
        component: () => import('../views/AppLists.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/AppProfile.vue'),
        children: [
          {
            path: '',
            component: () => import('../components/Profile/ProfileTweets.vue')
          },
          {
            path: 'replies',
            component: () => import('../components/Profile/ProfileTweets.vue')
          },
          {
            path: 'media',
            component: () => import('../components/Profile/ProfileMedia.vue')
          },
          {
            path: 'likes',
            component: () => import('../components/Profile/ProfileLikes.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
