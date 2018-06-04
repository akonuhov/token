<template lang="html">
  <header id="header" class="header">
    <div class="container-fluid">
      <div class="row">
        <div id="header-menu" class="d-flex justify-content-between align-items-center header-menu">
          <img src="static/images/ic_dash.png" alt="">
          <div class="d-flex justify-content-between align-items-center">
            <div id="header-menu-btn" class="d-flex flex-column justify-content-between header-menu-btn" @click="menuToggleCollapse">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div id="header-menu-btn-sub" class="d-xl-none d-lg-none d-flex flex-column justify-content-between header-menu-btn-sub" @click="subMenuToggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div id="header-panel" class="d-flex justify-content-between align-items-center header-panel">
          <div class="col-4 col-lg-6 col-xl-6 text-left text-lg-right text-xl-right">
            <div class="dropdown d-inline-block">
              <img src="static/images/coin.gif" alt="" class="icon-add-plus" data-toggle="dropdown">
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#qar-modal"><img src="static/images/ic_bitcon.png" alt="" class="ml-2"> Deposit Bitcoin</a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#qar-modal"><img src="static/images/ic_ethereum.png" alt="" class="ml-2"> Deposit Ethereum</a>
              </div>
            </div>
          </div>
          <div id="header-profile" class="col-8 col-lg-6 col-xl-6 text-right header-profile">
            <div class="dropdown">
              <div class="d-inline-block" data-toggle="dropdown">
                <img src="static/images/ic_user.png" alt="" class="icon-user">
                <span class="header-profile-name">{{ getFirstName }} {{ getLastName }}</span>
                <img src="static/images/ic_down.png" alt="" class="icon-arrow-down">
              </div>
              <div class="dropdown-menu">
                <div class="header-profile-menu mb-4">
                  <p>{{ getFirstName }} {{ getLastName }}</p>
                  <p>{{ getEmail }}</p>
                </div>
                <hr>
                <button type="button" class="btn btn-light ml-4 mb-4" @click="onLogout">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    getFirstName () {
      return this.$store.state.account.firstName
    },
    getLastName () {
      return this.$store.state.account.lastName
    },
    getEmail () {
      return this.$store.state.account.email
    }
  },
  methods: {
    menuToggleCollapse () {
      const body = document.body
      body.classList.toggle('aside-closed')
    },
    subMenuToggle () {
      const panel = document.getElementById('header-panel')
      panel.classList.toggle('active')
    },
    onLogout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
</style>
