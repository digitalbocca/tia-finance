<template>
  <div class="card w-full sm:w-3/4 lg:w-2/3 bg-base-100 shadow-md">
    <div class="card-body">
      <novo-cliente></novo-cliente>
      <lista-clientes></lista-clientes>
    </div>
  </div>
</template>

<script setup>

import NovoCliente from './../components/novo-cliente.vue'
import ListaClientes from './../components/lista-clientes.vue'

</script>