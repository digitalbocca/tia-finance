<template>
  <h1>LOGIN</h1>
  <button
    class="btn-pagar"
    @click="login()"
  >
    Login com Google
  </button>
  <button
    class="btn-pagar"
    @click="logout()"
  >
    Sair
  </button>
</template>

<script setup>

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()
const provider = new GoogleAuthProvider()

const login = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log('ENTREI >>>', user)
    // ...
    router.push('/')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
}

const logout = () => {
  signOut(auth).then((batatinha) => {
    console.log(batatinha)
  }).catch(err => console.log(err))
}

</script>

<style lang="sass">

.btn-pagar
  @apply btn btn-primary btn-wide

</style>