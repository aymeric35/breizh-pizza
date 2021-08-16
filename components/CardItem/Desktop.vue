<template>
  <section class="bg-cover bg-body-pattern-2x pt-12 pb-calc-card xl:pt-24">
    <div class="px-4 pt-20">
      <div
        class="container bg-no-repeat bg-card-gradient bg-pizza-pattern-position rounded-xl shadow-md -mb-[10%] ml-0 py-5 text-gray-50 w-4/6 z-40 relative p-6 lg:p-8 xl:w-1/2 xl:ml-auto xl:-mb-[5%] 2xl:w-4/10"
      >
        <h2 class="font-font-heading text-2xl">Lorem Ipsum</h2>
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
            :data-srcset="retM"
            media="(min-width:2000px)"
            type="image/jpg"
          />
          <source
            :data-srcset="lgM"
            media="(min-width:640px)"
            type="image/jpg"
          />
          <img
            :data-src="smM"
            class="object-cover shadow-md rounded-md lazyload image-rendering-opt mx-auto w-5/6"
          />
        </picture>
      </figure>
    </div>
    <div class="px-4 pt-20">
      <figure class="mr-auto w-1/2 static">
        <picture>
          <source
            :data-srcset="retF"
            media="(min-width:2000px)"
            type="image/jpg"
          />
          <source
            :data-srcset="lgF"
            media="(min-width:640px)"
            type="image/jpg"
          />
          <img
            :data-src="smF"
            class="object-cover shadow-md rounded-md lazyload image-rendering-opt mx-auto w-5/6"
          />
        </picture>
      </figure>
      <div
        class="container bg-no-repeat bg-card-gradient bg-pizza-pattern-position rounded-xl shadow-md -mt-[10%] mr-0 py-5 text-gray-50 w-4/6 z-40 relative p-6 lg:p-8 xl:w-1/2 xl:mr-auto xl:-mt-[5%] 2xl:w-4/10"
      >
        <h2 class="font-font-heading text-2xl">Lorem Ipsum</h2>
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