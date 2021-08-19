<template>
  <div
    class="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen overflow-hidden transition-opacity bg-gray-900 text-gray-50 animate-slide-in-right animate-duration-500 lg:flex lg:items-center lg:static lg:bg-transparent lg:animate-none lg:h-auto lg:w-auto"
  >
    <nav>
      <ul
        class="text-4xl text-center space-y-15 font-heading lg:space-y-0 lg:flex lg:flex-row lg:justify-around lg:items-center lg:space-x-10 lg:font-body lg:text-xl lg:space-x-15 lg:text-2xl xl:space-x-20"
      >
        <li><NuxtLink to="/" @click.native="clearScroll">Accueil</NuxtLink></li>
        <li>
          <NuxtLink to="/menu" @click.native="clearScroll">Menu</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" @click.native="clearScroll">Contact</NuxtLink>
        </li>
        <li
          class="hidden lg:px-5 lg:py-0.5 lg:block lg:bg-orange-500 lg:rounded-full lg:hover:bg-orange-600 lg:transition-colors lg:duration-300"
        >
          <NuxtLink id="contact" to="/contact" @click.native="clearScroll"
            >Commander</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

// <script>
import { clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
  methods: {
    clearScroll() {
      clearAllBodyScrollLocks()
    },
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: rgba(249, 115, 22);
}

#contact.nuxt-link-exact-active {
  --tw-text-opacity: 1;
  color: rgba(250, 250, 250, var(--tw-text-opacity));
}
</style>
