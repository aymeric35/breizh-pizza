<template>
  <section class="bg-cover bg-body-pattern relative lg:bg-body-pattern-2x">
    <div class="container pt-12 pb-24 sm:pt-20 sm:pb-34">
      <figure class="top-0 right-0 left-0 absolute">
        <picture>
          <source
            :srcset="ret"
            media="(min-width:2000px)"
            type="image/jpg"
          />
          <source
            :srcset="lg"
            media="(min-width:640px)"
            type="image/jpg"
          />
          <img
            :src="sm"
            loading="lazy"
            class="shadow-md image-rendering-opt object-cover"
          />
        </picture>
      </figure>
      <div
        class="container bg-no-repeat bg-card-gradient bg-pizza-pattern-position rounded-lg shadow-md mt-[40%] py-5 text-gray-50 z-40 relative sm:mt-[55%]"
      >
        <h2 class="title-h2 pb-2">Lorem Ipsum</h2>
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
    ret: {
      type: String,
      required: true,
    },
    lg: {
      type: String,
      required: true,
    },
    sm: {
      type: String,
      required: true,
    },
  },
}
</script>