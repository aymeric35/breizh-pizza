<template>
  <div>
    <vue100vh>
      <LandingMobile></LandingMobile>
      <LandingDesktop></LandingDesktop>
    </vue100vh>
    <section
      class="container py-16 bg-gray-900 relative md:flex md:gap-15 md:items-center"
    >
      <figure class="md:flex md:w-full">
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
            class="rounded-lg shadow-md w-screen image-rendering-opt md:object-cover xl:object-right-bottom xl:h-[80vh]"
          />
        </picture>
      </figure>
      <div
        class="flex flex-col h-full pt-6 md:pt-0 text-gray-50 items-start justify-center md:w-full"
      >
        <h2 class="title-h2 pb-3 lg:pb-5">
          Lorem ipsum <span class="text-orange-500">coge</span>
        </h2>
        <p class="font-body pb-5 lg:pb-6 2xl:w-max-[35vw]">
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