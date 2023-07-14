<template>
  <div class="py-8 flex flex-col justify-center">
    <input
      class="input input-bordered"
      v-model="client.name"
      type="text"
      placeholder="Nome completo"
    >

    <input
      class="input input-bordered mt-2"
      v-model="client.phone"
      type="text"
      placeholder="(11) 99999-9999"
    >

    <input
      class="input input-bordered my-2"
      v-model="client.fee"
      type="text"
      placeholder="200"
    >

    <button
      class="btn btn-secondary"
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
  phone: '',
  fee: ''
})

const loading = ref(false)

const enviar = async () => {
  const auth = getAuth()
  const db = getFirestore()

  try {
    loading.value = true
    const docRef = await addDoc(collection(db, `users/${auth.currentUser.uid}/clients`), client)

    client.name = ''
    client.phone = ''
    client.fee = ''

    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  } finally {
    loading.value = false
  }
}

</script>
