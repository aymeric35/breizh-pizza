<template>
  <div
    class="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen overflow-hidden transition-opacity bg-gray-900 text-gray-50 animate-slide-in-right animate-duration-500 md:flex md:items-center md:static md:bg-transparent md:animate-none md:h-auto md:w-auto"
  >
    <nav>
      <ul class="text-4xl text-center space-y-15 font-heading md:space-y-0 md:flex md:flex-row md:justify-around md:items-center md:space-x-10 md:font-body md:text-xl lg:space-x-15 lg:text-2xl xl:space-x-20">
        <li><NuxtLink to="/" @click.native="clearScroll">Accueil</NuxtLink></li>
        <li><NuxtLink to="/menu" @click.native="clearScroll">Menu</NuxtLink></li>
        <li><NuxtLink to="/contact" @click.native="clearScroll">Contact</NuxtLink></li>
        <li class="hidden md:px-5 md:py-0.5 md:block md:bg-orange-500 md:rounded-full"><NuxtLink to="/contact" @click.native="clearScroll">Commander</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

// <script>
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

export default {
  methods: {
    clearScroll() {
      clearAllBodyScrollLocks();
    },
  },
}

</script>

<style scoped>
a.nuxt-link-exact-active {
  color: rgba(249, 115, 22);
}
</style>
