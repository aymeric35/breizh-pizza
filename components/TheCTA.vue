<template>
  <section class="text-center bg-gray-900 text-gray-50 lg:flex lg:flex-row">
    <div
      class="bg-cta-order-m h-[50vh] bg-cover bg-blend-overlay flex flex-col justify-center items-center sm:bg-cta-order-hd lg:w-full lg:h-screen ret:bg-cta-order-x2"
    >
      <div class="container space-y-4">
        <h2 class="text-4xl font-heading">Commandez votre pizza</h2>
        <p class="text-2xl font-heading">En livraison ou à emporter</p>
          <PrimaryButton label="Commander" destination="/contact"
            ><ButtonIconCouverts></ButtonIconCouverts
          ></PrimaryButton>
      </div>
    </div>
    <div
      class="bg-cta-book-m h-[50vh] bg-cover bg-blend-overlay flex flex-col justify-center items-center sm:bg-cta-book-hd lg:w-full lg:h-screen ret:bg-cta-book-x2"
    >
      <div class="container space-y-4">
        <h2 class="text-4xl font-heading">Réservez une table</h2>
        <p class="text-2xl font-heading">
          et découvrez l’ambiance chaleureuse de notre restaurant
        </p>
          <SecondaryButton label="Réserver" destination="/contact"
            ><ButtonIconChevron></ButtonIconChevron
          ></SecondaryButton>
      </div>
    </div>
  </section>
</template>

<script>
import Chevron from '~/assets/images/buttons/chevron.svg'

export default {
  data() {
    return {
      chevron: Chevron,
    }
  }
}
</script>