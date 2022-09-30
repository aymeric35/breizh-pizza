<template>
  <div class="bg-gray-900 min-h-screen">
    <section>
      <div class="container flex flex-col py-8 justify-center">
        <h1 class="title-h1 text-center py-8 lg:py-15">Contact</h1>
        <div class="lg:flex lg:w-full lg:pb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d754.4437944737115!2d14.262144883273375!3d40.854859582464854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1629231710356!5m2!1sfr!2sfr"
            class="rounded-md h-[30vh] w-full md:h-[50vh]"
            style="border: 0"
            allowfullscreen=""
          ></iframe>
          <div class="lg:flex lg:flex-col lg:w-full lg:justify-center">
            <h2 class="title-h2 text-center pt-6 lg:pt-0">Nos coordonnées</h2>
            <p
              class="divider-selector font-body text-center pt-4 text-gray-50 after:w-24 after:h-0.5 after:bg-orange-500 after:block after:mx-auto after:my-2"
            >
              80138 Napoli NA,<br />
              Via dei Tribunali,<br />
              Italia
            </p>
            <p
              class="font-body text-center pb-4 text-gray-50 lg:pb-6"
            >
              Appelez-nous au <br />
              00 00 00 00 00<br />
              pour toute commande ou réservation
            </p>
            <div class="flex flex-col lg:flex-row lg:justify-center">
              <PrimaryButton
                custom-class="mx-auto lg:mx-5"
                label="Commander"
                destination="/contact"
              ></PrimaryButton>
              <p
                class="font-body text-sm text-center pt-4 pb-4 text-gray-50 italic lg:hidden"
              >
                Pas encore choisi ? <br />
                Consultez notre menu
              </p>
              <SecondaryButton
                custom-class="mx-auto lg:mx-5"
                label="Voir le menu"
                destination="/menu"
              >
                <ButtonIconMenu></ButtonIconMenu>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  transition: 'home',
}
</script>

<style scoped>
.divider-selector::after {
  content: '';
}
</style>