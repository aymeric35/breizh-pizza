<template>
  <section class="flex flex-col lg:flex-row">
    <div class="bg-gray-900 text-center text-gray-50 overflow-hidden w-full">
      <div
        class="group bg-cta-order-m bg-cover bg-blend-overlay flex flex-col h-[50vh] lg:transition-all lg:duration-500 sm:bg-cta-order-hd ret:bg-cta-order-x2 lg:hover:transform lg:hover:scale-150 lg:hover:filter lg:hover:contrast-150 flex justify-center items-center lg:h-screen"
      >
        <div
          class="blur-scale-fix container space-y-4 lg:group-hover:transform lg:group-hover:scale-66 transition-transform duration-500"
        >
          <h2 class="title-h2">Commandez votre pizza</h2>
          <p class="font-heading text-2xl">En livraison ou à emporter</p>
          <PrimaryButton label="Commander" destination="/contact"
            ><ButtonIconCouverts></ButtonIconCouverts
          ></PrimaryButton>
        </div>
      </div>
    </div>
    <div class="bg-gray-900 text-center text-gray-50 overflow-hidden w-full">
      <div
        class="group bg-cta-book-m bg-cover bg-blend-overlay flex flex-col h-[50vh] lg:transition-all lg:duration-500 sm:bg-cta-book-hd ret:bg-cta-book-x2 lg:hover:transform lg:hover:scale-150 lg:hover:filter lg:hover:contrast-150 flex justify-center items-center lg:h-screen"
      >
        <div
          class="blur-scale-fix container space-y-4 lg:group-hover:transform lg:group-hover:scale-66 transition-transform duration-500"
        >
          <h2 class="title-h2">Réservez une table</h2>
          <p class="font-heading text-2xl">
            et découvrez l’ambiance chaleureuse de notre restaurant
          </p>
          <SecondaryButton label="Réserver" destination="/contact"
            ><ButtonIconChevron></ButtonIconChevron
          ></SecondaryButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .blur-scale-fix {
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;
    will-change: transform;
  }
</style>