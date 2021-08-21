<template>
  <div class="flex pb-4 lg:w-4/10">
    <div class="w-8/10">
      <h3 class="title-h3 pb-0.5 after:w-8 after:h-0.5 after:bg-orange-500 after:block after:mt-1 md:after:mt-2">{{ title }}</h3>
      <p class="font-body italic text-sm text-gray-200 pt-1 pr-6">{{ ingredients }}</p>
    </div>
    <div class="w-2/10">
      <p class="font-heading text-lg text-right">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.title-h3::after {
    content: "";
}
</style>