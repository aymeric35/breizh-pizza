<template>
  <div>
    <TheHeader></TheHeader>
    <vue100vh>
      <LandingMobile></LandingMobile>
      <LandingDesktop></LandingDesktop>
    </vue100vh>
    <section
      class="relative bg-gray-900 lg:h-screen"
    >
      <div
        class="container flex flex-col items-center justify-center h-full space-y-8 py-12 lg:justify-end"
      >
        <figure class="lg:absolute lg:top-0 lg:left-0">
          <picture>
            <source
              :data-srcset="pizzaPreparation.ret"
              media="(min-width:2000px)"
              type="image/jpg"
            />
            <source
              :data-srcset="pizzaPreparation.lg"
              media="(min-width:640px)"
              type="image/jpg"
            />
            <img
              :data-src="pizzaPreparation.sm"
              class="shadow-md lg:w-4/6 lazyload rounded-xl image-rendering-opt lg:rounded-bl-[20%]"
            />
          </picture>
        </figure>
        <div class="text-gray-50">
          <h2 class="pb-3 text-3xl font-heading">
            Lorem ipsum <span class="text-orange-500">coge</span>
          </h2>
          <p class="pb-5 font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt leo quis lacus ultricies sollicitudin. Ut blandit, tortor
            nec pulvinar aliquam, velit est sollicitudin metus, laoreet rutrum
            est enim ut nisl. Mauris interdum orci auctor, mollis justo in,
            luctus ipsum. Sed accumsan ultrices tellus, nec placerat augue
            interdum ut.
          </p>
          <button
            type="button"
            class="px-6 py-2 text-lg text-green-500 rounded-lg shadow-md ring ring-green-500 text-gray-50 font-body focus:outline-none"
          >
            <NuxtLink to="/menu">Voir le menu</NuxtLink>
          </button>
        </div>
      </div>
      <CardItem :sm="pizzaMains.sm" :lg="pizzaMains.lg" :ret="pizzaMains.ret"></CardItem>
      <CardItem :sm="pizzaFour.sm" :lg="pizzaFour.lg" :ret="pizzaFour.ret"></CardItem>
    </section>
    <TheCTA></TheCTA>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import vue100vh from 'vue-100vh'
import PizzaPrepM from '~/assets/images/homepage/pizza-preparation-m.jpg'
import PizzaPrepHD from '~/assets/images/homepage/pizza-preparation-hd.jpg'
import PizzaPrep2x from '~/assets/images/homepage/pizza-preparation-x2.jpg'
import PizzaMainsM from '~/assets/images/homepage/pizza-mains-m.jpg'
import PizzaMainsHD from '~/assets/images/homepage/pizza-mains-hd.jpg'
import PizzaMains2x from '~/assets/images/homepage/pizza-mains-x2.jpg'
import PizzaFourM from '~/assets/images/homepage/pizza-four-m.jpg'
import PizzaFourHD from '~/assets/images/homepage/pizza-four-hd.jpg'
import PizzaFour2x from '~/assets/images/homepage/pizza-four-x2.jpg'

export default {
  components: { vue100vh },
  data() {
    return {
      pizzaPreparation: {
        sm: PizzaPrepM,
        lg: PizzaPrepHD,
        ret: PizzaPrep2x,
      },
      pizzaMains: {
        sm: PizzaMainsM,
        lg: PizzaMainsHD,
        ret: PizzaMains2x,
      },
      pizzaFour: {
        sm: PizzaFourM,
        lg: PizzaFourHD,
        ret: PizzaFour2x,
      },
    }
  },
}
</script>

<style>
/* lazyload */
img.lazyloading {
  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: #f97316;
  border-bottom-color: #f97316;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

img.lazyloading:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75em;
  height: 0.75em;
  border: 3px solid #f97316;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>