<template>
  <NuxtLink
    :to="destination"
    :class="customClass"
    class="rounded-lg font-body shadow-md ring text-lg py-2 px-6 transition-all ring-green-500 text-green-500 gap-2 duration-300 items-center inline-flex hover:ring-green-600 hover:fill-green-600 hover:text-green-600 focus:outline-none"
  >
    {{ label }}
    <slot></slot>
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
    customClass: {
      type: String,
      default: '',
    }
  },
}
</script>