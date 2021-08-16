<template>
  <a :href="tag" class="bg-orange-900 text-orange-500 font-body rounded-full px-4 bg-opacity-40">{{ message }}</a>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    }
  },
}
</script>