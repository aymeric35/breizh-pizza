<template>
  <section
    class="hidden h-full -mt-16 lg:-mt-20 bg-cover lg:block bg-body-pattern-2x xl:-mt-24"
  >
    <div
      class="container flex items-center justify-center h-full pt-12 space-x-30"
    >
      <div class="w-1/2 space-y-6">
        <h1 class="text-4xl text-6xl text-gray-50 font-heading">
          Des pizzas <span class="text-orange-500">artisanales</span>
        </h1>
        <p class="text-lg text-gray-50 font-body">
          Découvrez nos pizzas savoureuses cuites au feu de bois et réalisées à
          partir d’ingrédients locaux.
        </p>
        <div class="space-x-6">
          <PrimaryButton label="Commander" destination="/contact"
            ><ButtonIconCouverts></ButtonIconCouverts
          ></PrimaryButton>
          <SecondaryButton label="Réserver" destination="/contact"
            ><ButtonIconChevron></ButtonIconChevron
          ></SecondaryButton>
        </div>
      </div>
      <figure class="w-1/2">
        <picture>
          <source
            :srcset="webp.pizza.xl"
            media="(min-width:2000px)"
            type="image/webp"
          />
          <source
            :srcset="png.pizza.xl"
            media="(min-width:2000px)"
            type="image/png"
          />
          <source :srcset="webp.pizza.lg" type="image/webp" />
          <img :src="png.pizza.lg" class="w-full filter drop-shadow-xl image-rendering-opt" />
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
