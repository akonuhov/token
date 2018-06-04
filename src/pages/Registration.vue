<template lang="html">
  <layout-auth>
    <h1 class="text-center">Registration</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text"
               id="loginFirstName"
               class="form-control"
               placeholder="Enter first name"
               v-model="loginFirstName">
      </div>
      <div class="form-group">
        <input type="text"
               id="loginLastName"
               class="form-control"
               placeholder="Enter last name"
               v-model="loginLastName">
      </div>
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
        <input type="password"
               id="loginRepeatPassword"
               class="form-control"
               placeholder="Repeat password"
               v-model="loginRepeatPassword">
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
  name: 'RegistrationPage',
  data () {
    return {
      loginFirstName: '',
      loginLastName: '',
      loginEmail: '',
      loginPassword: '',
      loginRepeatPassword: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.loginPassword === this.loginRepeatPassword) {
        axios.post(
          'http://localhost:8888/api/users/registration',
          {
            firstName: this.loginFirstName,
            lastName: this.loginLastName,
            email: this.loginEmail,
            password: this.loginPassword
          }
        ).then(response => {
          this.$store.dispatch('auth/register', response.data.user)
          this.$router.push('/')
        }).catch(error => {
          console.log(error)
        })
      }
    }
  },
  components: {
    LayoutAuth
  }
}
</script>

<style lang="scss">
</style>
