<template>
  <div class="flex justify-between items-center pb-3 lg:w-4/10">
    <p class="whitespace-nowrap font-heading text-lg text-left">{{ drink }}</p>

    <svg
    class="w-full px-4 stroke-gray-50"
      width="3500"
      height="20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke-dasharray="5, 5"
        x1="0"
        y1="10"
        x2="3500"
        y2="10"
      ></line>
    </svg>

    <p class="font-heading text-lg text-right">{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    drink: {
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