<template>
  <div class="py-8">
    <input 
      class="input input-bordered mr-2"
      v-model="client.name"
      type="text"
      placeholder="Nome completo"
    >
    <input 
      class="input input-bordered mr-2"
      v-model="client.phone"
      type="text"
      placeholder="(11) 99999-9999"
    >
    <button class="btn btn-primary" @click="enviar()">Enviar</button>
  </div>
</template>

<script setup>

import { reactive } from 'vue'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const client = reactive({
  name: '',
  phone: ''
})

const enviar = async () => {
  const auth = getAuth()
  const db = getFirestore()

  try {
    const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/clients`), client);

    client.name = ''
    client.phone = ''
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

</script>