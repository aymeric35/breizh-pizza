<template>
  <div class="bg-gray-900">
    <TheHeader></TheHeader>
    <section>
      <div class="container flex flex-col py-8 justify-center">
        <h1 class="font-heading text-center pb-6 text-3xl text-gray-50">
          Contact
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d754.4437944737115!2d14.262144883273375!3d40.854859582464854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1629231710356!5m2!1sfr!2sfr"
          class="rounded-md h-[30vh] w-full md:h-[50vh] 2xl:h-[60vh]"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <p class="font-body text-center pt-6 pb-2 text-gray-50">
          80138 Napoli NA,<br />
          Via dei Tribunali,<br />
          Italia
        </p>
        <svg
          class="w-full"
          height="1"
          viewBox="0 0 500 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="500" y2="0.5" stroke="#F97316" />
        </svg>
        <p class="font-body text-center pt-2 pb-4 text-gray-50">
          Appelez-nous au <br />
          00 00 00 00 00<br />
          pour toute commande ou réservation
        </p>
        <button
          type="button"
          class="rounded-lg font-body mx-auto bg-orange-500 shadow-md text-lg py-2 px-6 text-gray-50 w-max focus:outline-none"
        >
          <a href="tel:+00000000">Appeler</a>
        </button>
        <p class="font-body text-sm text-center pt-4 pb-4 text-gray-50 italic">
          Pas encore choisi ? <br />
          Consultez notre menu
        </p>
        <SecondaryButton custom-class="mx-auto" label="Voir le menu" destination="/menu">
          <ButtonIconMenu></ButtonIconMenu>
        </SecondaryButton>
      </div>
      <TheFooter></TheFooter>
    </section>
  </div>
</template>

<script>
export default {
  transition: 'home',
}
</script>