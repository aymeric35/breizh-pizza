<template>
  <div class="bg-orange-900">
    <vue100vh>
      <div class="container flex flex-col h-screen items-center justify-center">
        <h1 class="font-heading text-center text-4xl">Attributions</h1>
        <a href="https://thenounproject.com/term/divider/1070821/" class="h-1/2"
          ><img class="h-full" :src="divider" alt="Divider"
        /></a>
      </div>
    </vue100vh>
  </div>
</template>

<script>
import vue100vh from 'vue-100vh'
import Divider from '~/assets/images/menu/divider.svg'
export default {
  components: { vue100vh },
  transition: 'home',
  data() {
    return {
      divider: Divider,
    }
  },
}
</script>