<template>
  <div class="card w-full sm:w-3/4 lg:w-2/3 bg-base-100 shadow-md glass">
    <div class="card-body flex flex-col items-center">
      <button
        class="btn-pagar"
        @click="login()"
      >
        <img class="w-4" src="./../img/google-icon.svg" alt="">
        <span class="ml-2">
          Login com Google
        </span>
      </button>
      <button
        class="btn-pagar"
        @click="logout()"
      >
        Sair
      </button>
    </div>
  </div>
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
  @apply btn btn-outline btn-wide

</style>