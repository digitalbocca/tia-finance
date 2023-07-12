<template>
  <app-title/>
  <router-view/>
  <div class="footer">
    <a
      href="https://www.pexels.com/pt-br/foto/estudantes-multirraciais-com-pasta-de-trabalho-perto-do-onibus-na-cidade-5896482/"
      target="_blank"
    >
      Foto de Mary Taylor
    </a>
  </div>
</template>

<script setup>

import AppTitle from './components/app-title.vue'

</script>

<style lang="sass">

.footer
  @apply text-white text-center
  @apply my-6
  @apply flex justify-center

</style>
