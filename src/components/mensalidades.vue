<template>
  <div class="mensalidades">
    <div
      class="mes"
      :class="{ pago: mes.status }"
      v-for="mes in meses"
      :key="mes.nome"
    >
      {{ mes.nome }}
    </div>
  </div>
  <div>
    <button @click="atualizaMes()">Pago</button>
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