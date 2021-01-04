<template>
  <div class="login">
    <h1>Login</h1>
  </div>
</template>

<script>
import { AUTH_REQUEST } from '@/store/types/auth-types'

export default {
  name: 'Login',
  created: function() {
    this.$store.dispatch(AUTH_REQUEST, { user: "admin", password: "pass" }).then((data) => {
      console.log('success: ' + data.token)
    }, (errorMessage) => {
      console.log('error: ' + errorMessage)
    })
  }
}
</script>
