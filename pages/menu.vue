<template>
  <div class="bg-gray-900">
    <TheHeader></TheHeader>
    <section class="container text-gray-50 relative">
      <h1 class="title-h1 text-center py-8">Menu</h1>
      <figure>
        <picture>
          <source
            :srcset="menu.ret"
            media="(min-width:2000px)"
            type="image/jpg"
          />
          <source
            :srcset="menu.lg"
            media="(min-width:640px)"
            type="image/jpg"
          />
          <img
            :src="menu.sm"
            class="rounded-xl object-cover object-bottom h-30 shadow-md w-screen image-rendering-opt lg:h-[40vh] 2xl:h-[60vh]"
          />
        </picture>
      </figure>
      <div
        id="stickyMenu"
        class="container text-center sticky pt-3 pb-4 overflow-x-scroll whitespace-nowrap sm:flex sm:justify-between sm:overflow-hidden lg:hidden"
      >
        <MenuButton tag="#entrées" message="Entrées"></MenuButton>
        <MenuButton tag="#pizzas" message="Pizzas"></MenuButton>
        <MenuButton tag="#desserts" message="Desserts"></MenuButton>
        <MenuButton tag="#boissons" message="Boissons"></MenuButton>
        <MenuButton tag="#vins" message="Vins"></MenuButton>
      </div>
      <MenuList></MenuList>
    </section>
    <TheCTA></TheCTA>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import pizzaSm from '~/assets/images/menu/menu-sm.jpg'
import pizzaLg from '~/assets/images/menu/menu-lg.jpg'
import pizzaRet from '~/assets/images/menu/menu-ret.jpg'

export default {
  transition: 'home',
  data() {
    return {
      menu: {
        sm: pizzaSm,
        lg: pizzaLg,
        ret: pizzaRet,
      },
    }
  },
  mounted() {
    const stickyElm = document.getElementById('stickyMenu')

    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      { threshold: [1] }
    )

    observer.observe(stickyElm)
  },
}
</script>

<style>
/* thanks vsync for the trick https://stackoverflow.com/questions/16302483/event-to-detect-when-positionsticky-is-triggered */
#stickyMenu {
  top: -1px;
  padding-top: calc(1em + 1px);
  width: 100vw;
  margin-left: calc((100% - 100vw) / 2);
  transition: 0.3s;
}

#stickyMenu.isSticky {
  background-color: #0f0f0f;
}
</style>