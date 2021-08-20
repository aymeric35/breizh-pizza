<template>
  <NuxtLink
    :to="destination"
    class="rounded-lg font-body bg-orange-500 shadow-md ring text-lg py-2 px-6 transition-all ring-orange-500 text-gray-50 gap-2 duration-300 items-center inline-flex hover:bg-orange-600 hover:ring-orange-600 hover:fill-orange-600 focus:outline-none"
  >
    <slot></slot>
    {{ label }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      default: '',
    },
  },
}
</script>