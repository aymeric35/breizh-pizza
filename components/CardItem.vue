<template>
  <div class="container relative pt-12 pb-24 bg-cover bg-body-pattern lg:bg-body-pattern-2x">
    <figure class="absolute left-0 top-0 right-0">
      <picture>
        <source
          :data-srcset="ret"
          media="(min-width:2000px)"
          type="image/jpg"
        />
        <source :data-srcset="lg" media="(min-width:640px)" type="image/jpg" />
        <img
          :data-src="sm"
          class="shadow-md lg:w-4/6 lazyload image-rendering-opt lg:rounded-bl-[20%]"
        />
      </picture>
    </figure>
    <div
      class="container relative z-50 py-5 bg-no-repeat shadow-md rounded-xl mt-30 bg-card-gradient bg-pizza-pattern-position text-gray-50"
    >
      <h2 class="text-2xl font-font-heading">Lorem Ipsum</h2>
      <p class="font-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tincidunt leo quis lacus ultricies sollicitudin. Ut blandit, tortor nec
        pulvinar aliquam, velit est sollicitudin metus, laoreet rutrum est enim
        ut nisl. Mauris interdum orci auctor, mollis justo in, luctus ipsum. Sed
        accumsan ultrices tellus, nec placerat augue interdum ut.
      </p>
    </div>
  </div>
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