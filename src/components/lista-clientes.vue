<template>
  <div class="clients-list">
    <div
      class="clients-row"
      v-for="user in users"
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
            @click="vaPra()"
          >
            <icon-coin class="w-3/4 h-3/4 text-white"/>
          </button>
        </div>
        <div class="pl-1 w-1/2">
          <button
            class="btn btn-secondary w-full"
            @click="vaPra()"
          >
            <icon-settings-filled class="w-3/4 h-3/4"/>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { collection, query, onSnapshot, getFirestore } from 'firebase/firestore'
import { IconUser, IconCoin, IconSettingsFilled } from '@tabler/icons-vue'

const users = ref([])

const auth = getAuth()
const db = getFirestore()

onMounted(async () => {
  const q = query(collection(db, `users/${auth.currentUser.uid}/clients`))
  const unsubscribe = onSnapshot(q, querySnapshot => {
    const snapshotedUsers = []
    querySnapshot.forEach(doc => {
      snapshotedUsers.push({
        id: doc.id,
        ...doc.data()
      })
    })
    users.value = snapshotedUsers
  })
})

const router = useRouter()

const vaPra = () => {
  router.push('/mensalidades')
}

</script>

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
