<template>
  <footer
    class="bg-gray-200 p-8 text-white"
  >
    <section class="container mx-auto max-w-7xl">
      <h1
        class="mb-12 text-center text-sm font-bold uppercase tracking-wide text-gray-800"
      >
        Made By Karam Isa • Vue - Tailwind CSS - Vuex
      </h1>
      <div class="grid grid-cols-2 gap-10 text-center lg:grid-cols-5">
        <div class="flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
            alt="vite Logo"
            class="block h-8 object-contain"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            alt="vue Logo"
            class="block h-8 object-contain"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/tailwindcss.svg"
            alt="tailwindcss Logo"
            class="block h-8 object-contain"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="JS Logo"
            class="block h-8 object-contain"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="https://kutty.netlify.app/logos/visual-studio-code.svg"
            alt="visual-studio-code Logo"
            class="block h-8 object-contain"
          />
        </div>
      </div>
    </section>
  </footer>
  <UserMsg />
</template>

<script>
import appNav from "./app-nav.vue";
import UserMsg from "./user-msg.vue";
export default {
  components: {
    AppNav: appNav,
    UserMsg,
  },
};
</script>
