import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { collection, query, onSnapshot, getFirestore } from 'firebase/firestore'

const db = getFirestore()
const auth = getAuth()

export const useClientsStore = defineStore('clients', () => {
  const clients = ref([])

  const getClients = computed(() => clients.value)

  async function fetchClients () {
    const q = query(collection(db, `users/${auth.currentUser.uid}/clients`))

    onSnapshot(q, querySnapshot => {
      const snapshotedUsers = []
      querySnapshot.forEach(doc => {
        snapshotedUsers.push({
          id: doc.id,
          ...doc.data()
        })
      })

      clients.value = snapshotedUsers
    })
  }

  return {
    getClients,
    fetchClients
  }
})
