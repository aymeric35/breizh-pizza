<template>
  <section class="bg-cover bg-body-pattern-2x pt-12 pb-calc-card xl:pt-24">
    <div class="container pt-20">
      <div
        class="container bg-no-repeat bg-card-gradient bg-pizza-pattern-position rounded-lg shadow-md -mb-[10%] ml-0 py-5 text-gray-50 w-4/6 z-40 relative p-6 lg:p-8 xl:w-1/2 xl:ml-auto xl:-mb-[5%]"
      >
        <h2 class="font-heading text-3xl pb-3">Lorem Ipsum</h2>
        <p class="font-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt leo quis lacus ultricies sollicitudin. Ut blandit, tortor
          nec pulvinar aliquam, velit est sollicitudin metus, laoreet rutrum est
          enim ut nisl. Mauris interdum orci auctor, mollis justo in, luctus
          ipsum. Sed accumsan ultrices tellus, nec placerat augue interdum ut.
        </p>
      </div>
      <figure class="ml-auto w-1/2 static">
        <picture>
          <source
            :srcset="retM"
            media="(min-width:2000px)"
            type="image/jpg"
          />
          <source
            :srcset="lgM"
            media="(min-width:640px)"
            type="image/jpg"
          />
          <img
            :src="smM"
            loading="lazy"
            class="object-cover shadow-md rounded-lg image-rendering-opt mx-auto "
          />
        </picture>
      </figure>
    </div>
    <div class="container pt-40">
      <figure class="mr-auto w-1/2 static">
        <picture>
          <source
            :srcset="retF"
            media="(min-width:2000px)"
            type="image/jpg"
          />
          <source
            :srcset="lgF"
            media="(min-width:640px)"
            type="image/jpg"
          />
          <img
            :src="smF"
            loading="lazy"
            class="object-cover shadow-md rounded-lg image-rendering-opt mx-auto "
          />
        </picture>
      </figure>
      <div
        class="container bg-no-repeat bg-card-gradient bg-pizza-pattern-position rounded-lg shadow-md -mt-[10%] mr-0 py-5 text-gray-50 w-4/6 z-40 relative p-6 lg:p-8 xl:w-1/2 xl:mr-auto xl:-mt-[5%]"
      >
        <h2 class="font-heading text-3xl pb-3">Lorem Ipsum</h2>
        <p class="font-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt leo quis lacus ultricies sollicitudin. Ut blandit, tortor
          nec pulvinar aliquam, velit est sollicitudin metus, laoreet rutrum est
          enim ut nisl. Mauris interdum orci auctor, mollis justo in, luctus
          ipsum. Sed accumsan ultrices tellus, nec placerat augue interdum ut.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    retM: {
      type: String,
      required: true,
    },
    lgM: {
      type: String,
      required: true,
    },
    smM: {
      type: String,
      required: true,
    },
    retF: {
      type: String,
      required: true,
    },
    lgF: {
      type: String,
      required: true,
    },
    smF: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.pb-calc-card {
  padding-bottom: calc(3rem + 10%);
}

@media (min-width: 1280px) {
  .pb-calc-card {
    padding-bottom: calc(6rem + 5%);
  }
}
</style>