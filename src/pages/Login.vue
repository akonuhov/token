<template lang="html">
  <layout-auth>
    <h1 class="text-center">Login</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <input type="email"
               id="loginEmail"
               class="form-control"
               placeholder="Enter email"
               v-model="loginEmail">
      </div>
      <div class="form-group">
        <input type="password"
               id="loginPassword"
               class="form-control"
               placeholder="Enter password"
               v-model="loginPassword">
      </div>
      <div class="form-group">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="loginCheck">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-lg btn-block">Send</button>
      </div>
    </form>
  </layout-auth>
</template>

<script>
import axios from 'axios'
import LayoutAuth from '@/layouts/LayoutAuth'

export default {
  name: 'LoginPage',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    onSubmit () {
      axios.post(
        'http://localhost:8888/api/users/authenticate',
        {
          email: this.loginEmail,
          password: this.loginPassword
        }
      ).then(response => {
        console.log(response)
        this.$store.dispatch('auth/login', response.data)
        this.$router.push('/')
      }).catch(error => {
        console.log(error.response.data)
      })
    }
  },
  components: {
    LayoutAuth
  }
}
</script>

<style lang="scss">
</style>
