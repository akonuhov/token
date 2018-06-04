<template lang="html">
  <aside id="aside" class="aside">
    <nav class="nav flex-column">
      <router-link class="nav-link" to="/" exact><i class="fas fa-desktop"></i> <span class="nav-link-name">Token sale overview</span></router-link>
      <router-link class="nav-link" to="calculator" exact><i class="fas fa-calculator"></i> <span class="nav-link-name">Calculator</span></router-link>
      <router-link class="nav-link" to="profile" exact><i class="fas fa-user"></i> <span class="nav-link-name">My profile</span></router-link>
      <router-link class="nav-link" to="wallet" exact><i class="fas fa-credit-card"></i> <span class="nav-link-name">My wallet</span></router-link>
      <router-link class="nav-link" to="referral" exact><i class="fas fa-users"></i> <span class="nav-link-name">Referral program</span></router-link>
      <router-link class="nav-link" to="password" exact><i class="fas fa-key"></i> <span class="nav-link-name">Change password</span></router-link>
      <router-link class="nav-link" to="email" exact><i class="fas fa-envelope"></i> <span class="nav-link-name">Change email</span></router-link>
      <!-- <a class="nav-link" href="ico.html"><i class="fi flaticon-arrows"></i> ICO</a> -->
    </nav>
  </aside>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
