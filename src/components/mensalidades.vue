<template>
  <div class="w-full">
    <div
      class="stats shadow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-4 mx-2"
      v-for="mes in meses"
      :key="mes.nome"
    >
      <div class="stat">
        <div class="stat-title">{{ mes.nome }}</div>
        <div class="valor" :class="{ pago: mes.status }">200,00</div>
        <div class="stat-desc">Venc: 5 de {{ mes.nome }}</div>
      </div>
    </div>
  </div>
  <div>
    <button class="btn-pagar" @click="atualizaMes()">Pago</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  
  const meses = ref([
    {
      nome: 'Janeiro',
      status: false
    },
    {
      nome: 'Fevereiro',
      status: false
    },
    {
      nome: 'Março',
      status: false
    },
    {
      nome: 'Abril',
      status: false
    },
    {
      nome: 'Maio',
      status: false
    },
    {
      nome: 'Junho',
      status: false
    },
    {
      nome: 'Julho',
      status: false
    },
    {
      nome: 'Agosto',
      status: false
    },
    {
      nome: 'Setembro',
      status: false
    },
    {
      nome: 'Outubro',
      status: false
    },
    {
      nome: 'Novembro',
      status: false
    },
    {
      nome: 'Dezembro',
      status: false
    }
  ])
  
  const atualizaMes = () => {
    for (const mes in meses.value) {
      if (!meses.value[mes].status) {
        meses.value[mes].status = true
        return;
      }
    }
  }

</script>

<style lang="sass">

.btn-pagar
  @apply btn btn-primary btn-wide

.valor
  @apply stat-value text-base-300

.pago
  @apply text-success
  

</style>