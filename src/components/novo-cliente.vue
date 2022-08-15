<template>
  <div class="py-8 flex flex-col justify-center lg:flex-row">
    <input 
      class="input input-bordered lg:mr-2"
      v-model="client.name"
      type="text"
      placeholder="Nome completo"
    >
    <input 
      class="input input-bordered lg:mr-2 my-2 lg:my-0"
      v-model="client.phone"
      type="text"
      placeholder="(11) 99999-9999"
    >
    <button
      class="btn btn-primary"
      :class="{ loading: loading }"
      :disabled="loading"
      @click="enviar()"
    >
      <span v-if="loading">
        Salvando...
      </span>
      <span v-else>
        Salvar
      </span>
    </button>
  </div>
</template>

<script setup>

import { ref, reactive } from 'vue'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const client = reactive({
  name: '',
  phone: ''
})

const loading = ref(false)

const enviar = async () => {
  const auth = getAuth()
  const db = getFirestore()

  try {
    loading.value = true
    const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/clients`), client);

    client.name = ''
    client.phone = ''

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } finally {
    loading.value = false
  }
}

</script>