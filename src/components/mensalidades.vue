<script setup>
import { computed, ref } from 'vue'
import { useClientsStore } from '@/stores/clients'

const props = defineProps({
  client: String
})

const clientsStore = useClientsStore()

const currentClient = computed(() => {
  return clientsStore.getClients.filter(el => el.id === props.client).shift()
})

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
      return
    }
  }
}

</script>

<template>
  <!-- <div class="text-white"> -->
  <!-- {{ client }} -->
  <!-- {{ currentClient }} -->
  <!-- </div> -->
  <div class="mensalidades">
    <div
      class="stats shadow w-full"
      v-for="mes in meses"
      :key="mes.nome"
    >
      <div class="stat">
        <div class="stat-title">{{ mes.nome }}</div>
        <div
          class="valor"
          :class="{ pago: mes.status }"
        >
          {{ currentClient.fee }},00
        </div>
        <div class="stat-desc">Venc: 5 de {{ mes.nome }}</div>
      </div>
    </div>
  </div>
  <div>
    <button
      class="btn-pagar"
      @click="atualizaMes()"
    >
      Pago
    </button>
  </div>
</template>

<style lang="sass">

.mensalidades
  @apply grid gap-4 items-center
  @apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  @apply my-4

.btn-pagar
  @apply btn btn-primary btn-wide

.valor
  @apply stat-value text-base-300

.pago
  @apply text-success
</style>
