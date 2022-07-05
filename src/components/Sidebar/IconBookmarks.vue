<template>
  <router-link to="/bookmarks">
    <div class="inline-flex hover:bg-ashy hover:transition rounded-full p-3">
      <svg viewBox="0 0 24 24" class="h-6 w-6">
        <g>
          <path
            d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
          ></path>
        </g>
      </svg>
      <svg viewBox="0 0 24 24" class="h-6 w-6 absolute opacity-0">
        <g>
          <path
            d="M19.9 23.5c-.2 0-.3 0-.4-.1L12 17.9l-7.5 5.4c-.2.2-.5.2-.8.1-.2-.1-.4-.4-.4-.7V5.6c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2v17.1c0 .3-.2.5-.4.7 0 .1-.1.1-.2.1z"
          ></path>
        </g>
      </svg>
      <span class="ml-5 xl:block hidden">Bookmarks</span>
    </div>
  </router-link>
</template>

<style scoped>
.router-link-exact-active div {
  font-weight: bold;
}

.router-link-exact-active div svg:first-child {
  opacity: 0;
}

.router-link-exact-active div svg:nth-child(2) {
  opacity: 1;
}
</style>
