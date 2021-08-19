<template>
  <div class="bg-gray-900">
    <TheHeader></TheHeader>
    <section class="container text-gray-50 relative">
      <h1 class="font-heading text-center py-8 text-3xl">Menu</h1>
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
      <div class="text-center sticky top-0 pt-3 pb-4 overflow-x-scroll whitespace-nowrap sm:flex sm:justify-between sm:overflow-hidden lg:hidden">
        <MenuButton tag="#entrées" message="Entrées"></MenuButton>
        <MenuButton tag="#pizzas" message="Pizzas"></MenuButton>
        <MenuButton tag="#desserts" message="Desserts"></MenuButton>
        <MenuButton tag="#boissons" message="Boissons"></MenuButton>
        <MenuButton tag="#vins" message="Vins"></MenuButton>
      </div>
      <MenuList></MenuList>
    </section>
    <section>
      <TheCTA></TheCTA>
    </section>
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
}
</script>