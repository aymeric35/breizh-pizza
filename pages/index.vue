<template>
  <div>
    <TheHeader></TheHeader>
    <vue100vh>
      <LandingMobile></LandingMobile>
      <LandingDesktop></LandingDesktop>
    </vue100vh>
    <section
      class="bg-gray-900 relative md:flex md:gap-10 md:items-center 2xl:pb-24"
    >
      <figure
        class="container pt-12 md:flex md:max-w-full md:pt-0 md:pr-0 md:pl-0 md:gap-10"
      >
        <picture>
          <source
            :srcset="pizzaPreparation.ret"
            media="(min-width:2000px)"
            type="image/jpg"
          />
          <source
            :srcset="pizzaPreparation.lg"
            media="(min-width:640px)"
            type="image/jpg"
          />
          <img
            :src="pizzaPreparation.sm"
            class="rounded-xl shadow-md w-screen image-rendering-opt md:rounded-none md:object-cover md:rounded-br-[5rem] md:mb-20 lg:h-screen xl:object-right-bottom ret:h-7xl"
          />
        </picture>
      </figure>
      <div
        class="container flex flex-col h-full py-12 text-gray-50 items-start justify-center sm:py-20 lg:px-20"
      >
        <h2 class="font-heading pb-3 text-3xl">
          Lorem ipsum <span class="text-orange-500">coge</span>
        </h2>
        <p class="font-body pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt leo quis lacus ultricies sollicitudin. Ut blandit, tortor
          nec pulvinar aliquam, velit est sollicitudin metus, laoreet rutrum est
          enim ut nisl. Mauris interdum orci auctor, mollis justo in, luctus
          ipsum. Sed accumsan ultrices tellus, nec placerat augue interdum ut.
        </p>
        <SecondaryButton label="Voir le menu" destination="/menu">
          <ButtonIconMenu></ButtonIconMenu>
        </SecondaryButton>
      </div>
    </section>
    <MatchMedia v-slot="{ matches }" query="(max-width: 767px)">
      <CardItemMobile
        v-if="matches"
        :sm="pizzaMains.sm"
        :lg="pizzaMains.lg"
        :ret="pizzaMains.ret"
      ></CardItemMobile>
      <CardItemMobile
        v-if="matches"
        :sm="pizzaFour.sm"
        :lg="pizzaFour.lg"
        :ret="pizzaFour.ret"
      ></CardItemMobile>
      <CardItemDesktop
        v-else
        :sm-m="pizzaMains.sm"
        :lg-m="pizzaMains.lg"
        :ret-m="pizzaMains.ret"
        :sm-f="pizzaFour.sm"
        :lg-f="pizzaFour.lg"
        :ret-f="pizzaFour.ret"
      ></CardItemDesktop>
    </MatchMedia>
    <TheCTA></TheCTA>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import vue100vh from 'vue-100vh'
import { MatchMedia } from 'vue-component-media-queries'
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
  components: { vue100vh, MatchMedia },
  transition: 'home',
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
html {
  scroll-behavior: smooth;
}

body {
  --tw-bg-opacity: 1;
  background-color: rgba(23, 23, 23, var(--tw-bg-opacity));
}

.home-enter-active,
.home-leave-active {
  transition: all 0.4s ease;
}

.home-enter,
.home-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}

@media (min-width: 768px) {
  .home-enter,
  .home-leave-active {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>