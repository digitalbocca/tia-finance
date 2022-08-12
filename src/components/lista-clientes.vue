<template>
<div class="overflow-x-auto w-full">
  <table class="table w-full">
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask rounded-full w-12 h-12">
                <div class="bg-gray-300">
                  <user-icon class="text-gray-600"></user-icon>
                </div>
              </div>
            </div>
            <div>
              <div class="font-bold">{{ user.name }}</div>
              <div class="text-sm opacity-50">{{ user.phone }}</div>
            </div>
          </div>
        </td>
        <th class="text-right">
          <button class="btn btn-success" @click="vaPra()">
            <currency-dollar-icon class="w-8 text-white"></currency-dollar-icon>
          </button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
  
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { collection, query, onSnapshot, getFirestore } from 'firebase/firestore' 
import { UserIcon, CurrencyDollarIcon } from '@heroicons/vue/solid'

const users = ref([])

const auth = getAuth()
const db = getFirestore()

onMounted(async () => {
  const q = query(collection(db, `users/${auth.currentUser.uid}/clients`));
  const unsubscribe = onSnapshot(q, querySnapshot => {
    const snapshotedUsers = []
    querySnapshot.forEach(doc => {
      snapshotedUsers.push({
        id: doc.id,
        ...doc.data()
      })
    });
    users.value = snapshotedUsers
  });
})

const router = useRouter()

const vaPra = () => {
  router.push('/mensalidades')
}

</script>
