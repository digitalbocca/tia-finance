<template>
  <div class="card w-full sm:w-3/4 lg:w-2/3 bg-base-100 shadow-md">
    <div class="card-body">
      <h2 class="card-title">Listão de Alunos</h2>
      <novo-cliente></novo-cliente>
      <lista-clientes></lista-clientes>
    </div>
  </div>
</template>

<script setup>

import NovoCliente from './../components/novo-cliente.vue'
import ListaClientes from './../components/lista-clientes.vue'

</script>