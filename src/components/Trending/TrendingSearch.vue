<template>
  <div class="bg-white/80 backdrop-blur-md py-3 sticky top-0 z-20">
    <div class="flex items-center gap-4 px-4 py-3 bg-gray-100 rounded-full">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 p-1"
        preserveAspectRatio="none"
      >
        <mask
          id="mask0_11_1233"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#C4C4C4"></rect>
        </mask>
        <g mask="url(#mask0_11_1233)">
          <path
            d="M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z"
            fill="#5C6C79"
          ></path>
        </g>
      </svg>
      <input
        type="text"
        placeholder="Search Twitter"
        class="text-base placeholder:text-base focus:outline-none bg-transparent"
      />
    </div>
  </div>
</template>
