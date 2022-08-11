<template>
<div class="overflow-x-auto w-full">
  <div>
    <input v-model="novoUsuario" type="text">
    <button @click="enviar()">Enviar</button>
    <p>{{ novoUsuario }}</p>
  </div>
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="user in users" :key="user.login.uuid">
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img :src="user.picture.thumbnail" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{{ user.name.first }} {{ user.name.last }}</div>
              <div class="text-sm opacity-50">{{ user.phone }}</div>
            </div>
          </div>
        </td>
        <th>
          <button class="btn btn-ghost btn-xs" @click="vaPra()">details</button>
        </th>
      </tr>
    </tbody>
    <!-- foot -->
    <tfoot>
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
  
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, getFirestore } from 'firebase/firestore' 
import axios from 'axios'

const users = ref([])

onMounted(async () => {
  const response = (await axios.get('https://randomuser.me/api/?nat=br&results=20')).data
  users.value = response.results
})

const router = useRouter()

const vaPra = () => {
  router.push('/mensalidades')
}

// --

const novoUsuario = ref('')

const enviar = async () => {
  const auth = getAuth()
  const db = getFirestore()

  // console.log(auth)

  try {
    const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/clients`), {
      name: novoUsuario.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

</script>
