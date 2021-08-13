<template>
  <header>
    <div class="container z-10 flex items-center justify-between h-12 md:h-16 xl:h-24">
      <h1>
        <NuxtLink to="/" class="text-2xl text-gray-50 font-heading md:text-3xl lg:text-5xl">
          Breizh Pizza
        </NuxtLink>
      </h1>
      <button
        class="!md:hidden hamburger hamburger--spin focus:outline-none z-50"
        type="button"
        :class="{ active }"
        @click="toggle"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
          <span class="sr-only">Ouvrir le menu</span>
        </span>
      </button>
        <TheNavigation data-nav-menu="bodyScrollLock" :class="open ? 'block' : 'hidden'"></TheNavigation>
    </div>
  </header>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default {
  data() {
    return {
      active: false,
      open: false,
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
      this.open = !this.open
      const menu = document.querySelector('[data-nav-menu="bodyScrollLock"]');
      if (this.open === true) {
        disableBodyScroll(menu);
      } else if (this.open === false) {
        enableBodyScroll(menu)
      }
    },
  },
}
</script>

<style>
/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  height: 1.5rem;
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.active:hover {
  opacity: 0.7;
}
.hamburger.active .hamburger-inner,
.hamburger.active .hamburger-inner::before,
.hamburger.active .hamburger-inner::after {
  --tw-bg-opacity: 1;
  background-color: rgba(249, 115, 22, var(--tw-bg-opacity));
}

.hamburger-box {
  width: 2.5rem;
  height: 1.5rem;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -0.125rem;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 2.5rem;
  height: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgba(249, 115, 22, var(--tw-bg-opacity));
  border-radius: 0.25rem;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  display: block;
}
.hamburger-inner::before {
  top: -0.625rem;
}
.hamburger-inner::after {
  bottom: -0.625rem;
}

/*
     * Spin
     */
.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin.active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>