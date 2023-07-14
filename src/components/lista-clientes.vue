<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { IconUser, IconCoin, IconSettingsFilled } from '@tabler/icons-vue'

import { useClientsStore } from '@/stores/clients'

const clientsStore = useClientsStore()

// const users = ref([])
// onMounted()

const router = useRouter()

const vaPra = id => {
  router.push(`/mensalidades/${id}`)
}

clientsStore.fetchClients()

</script>

<template>
  <div class="clients-list">
    <div
      class="clients-row"
      v-for="user in clientsStore.getClients"
      :key="user.id"
    >
      <div class="flex items-center space-x-3 mb-4 md:mb-0">
        <div class="avatar">
          <div class="mask rounded-full w-12 h-12">
            <div class="bg-gray-300 w-full h-full flex items-center justify-center">
              <icon-user class="text-gray-600 w-3/4 h-3/4"/>
            </div>
          </div>
        </div>
        <div>
          <div class="font-bold">{{ user.name }}</div>
          <div class="text-sm opacity-50">{{ user.phone }}</div>
        </div>
      </div>
      <div class="flex">
        <div class="pr-1 w-1/2">
          <button
            class="btn btn-success w-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 "
            @click="vaPra(user.id)"
          >
            <icon-coin class="w-3/4 h-3/4 text-white"/>
          </button>
        </div>
        <div class="pl-1 w-1/2">
          <button
            class="btn btn-secondary w-full"
            @click="vaPra(user.id)"
          >
            <icon-settings-filled class="w-3/4 h-3/4"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

.clients-list
  @apply w-full

  div:last-of-type
    border-bottom: none

.clients-row
  @apply flex flex-col
  @apply md:flex-row md:justify-between
  @apply py-4 border-b border-base-300

</style>
