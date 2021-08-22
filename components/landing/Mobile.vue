<template>
  <section class="h-full -mt-16 bg-cover bg-body-pattern lg:hidden">
    <div class="container flex flex-col h-full pt-12">
      <h1 class="title-h1 mt-auto text-center">
        Des pizzas <span class="text-orange-500">artisanales</span>
      </h1>
      <figure class="mt-auto">
        <picture>
          <source
            :srcset="webp.pizza.lg"
            media="(min-width:640px)"
            type="image/webp"
          />
          <source
            :srcset="png.pizza.lg"
            media="(min-width:640px)"
            type="image/png"
          />
          <source :srcset="webp.pizza.sm" type="image/webp" />
          <img
            :src="png.pizza.sm"
            class="w-full mx-auto x-sm:w-8/10 sm:w-1/2 image-rendering-opt filter drop-shadow-xl"
          />
        </picture>
      </figure>
      <p class="mt-auto text-lg text-center text-gray-50 font-body">
        Découvrez nos pizzas savoureuses cuites au feu de bois et réalisées à
        partir d’ingrédients locaux.
      </p>
      <div class="w-screen mt-auto relative left-1/2 -ml-[-50vw] flex flex-col">
        <NuxtLink
          to="/contact"
          type="button"
          class="py-2 text-lg bg-orange-500 text-gray-50 font-body text-center focus:outline-none"
        >
          Commander
        </NuxtLink>
        <NuxtLink
          to="/contact"
          type="button"
          class="py-2 text-lg bg-green-500 text-gray-50 font-body text-center focus:outline-none"
        >
          Réserver
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import PizzaSmWebp from '~/assets/images/homepage/pizza-m.webp'
import PizzaLgWebp from '~/assets/images/homepage/pizza-hd.webp'
import PizzaSmPng from '~/assets/images/homepage/pizza-m.png'
import PizzaLgPng from '~/assets/images/homepage/pizza-hd.png'

export default {
  data() {
    return {
      webp: {
        pizza: {
          sm: PizzaSmWebp,
          lg: PizzaLgWebp,
        },
      },
      png: {
        pizza: {
          sm: PizzaSmPng,
          lg: PizzaLgPng,
        },
      },
    }
  },
}
</script>

<style scoped>
@layer utilities {
  .image-rendering-opt {
    image-rendering: -webkit-optimize-contrast;
  }
}
</style>
