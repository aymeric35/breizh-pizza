<template>
  <section class="h-full -mt-16 bg-cover hidden md:block bg-body-pattern-2x bg-cover xl:-mt-24">
    <div class="container flex items-center justify-center h-full pt-12 space-x-30">
      <div class="w-1/2 space-y-3">
        <h1
          class="text-4xl text-6xl text-gray-50 font-heading"
        >
          Des pizzas <span class="text-orange-500">artisanales</span>
        </h1>
        <p class="text-lg text-gray-50 font-body">
          Découvrez nos pizzas savoureuses cuites au feu de bois et réalisées à
          partir d’ingrédients locaux.
        </p>
        <div
          class="flex-inline"
        >
          <button
            type="button"
            class="px-6 py-2 text-lg bg-orange-500 rounded-full text-gray-50 font-body focus:outline-none"
          >
            <NuxtLink to="/contact">Commander</NuxtLink>
          </button>
          <button
            type="button"
            class="px-6 py-2 ml-4 text-lg text-green-500 rounded-full ring ring-green-500 text-gray-50 font-body focus:outline-none"
          >
            <NuxtLink to="/contact">Réserver</NuxtLink>
          </button>
        </div>
      </div>
      <figure class="w-1/2">
        <picture>
          <source
            :data-srcset="webp.pizza.xl"
            media="(min-width:2000px)"
            type="image/webp"
          />
          <source
            :data-srcset="png.pizza.xl"
            media="(min-width:2000px)"
            type="image/png"
          />
          <source :data-srcset="webp.pizza.lg" type="image/webp" />
          <img :data-src="png.pizza.lg" class="w-full lazyload image-rendering-opt" />
        </picture>
      </figure>
    </div>
  </section>
</template>

<script>
import PizzaLgWebp from '~/assets/images/homepage/pizza-hd.webp'
import PizzaXlWebp from '~/assets/images/homepage/pizza-x2.webp'
import PizzaLgPng from '~/assets/images/homepage/pizza-hd.png'
import PizzaXlPng from '~/assets/images/homepage/pizza-x2.png'

export default {
  data() {
    return {
      webp: {
        pizza: {
          lg: PizzaLgWebp,
          xl: PizzaXlWebp,
        },
      },
      png: {
        pizza: {
          lg: PizzaLgPng,
          xl: PizzaXlPng,
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
