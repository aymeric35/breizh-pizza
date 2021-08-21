<template>
  <h2 :id="customID" :class="customClass" class="text-center pt-8 lg:pt-15 pb-2 title-h2">{{ content }}</h2>
</template>

<script>
export default {
  props: {
    customID: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
}
</script>