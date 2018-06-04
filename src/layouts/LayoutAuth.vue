<template lang="html">
  <div class="d-flex justify-content-center layout-auth">
    <div class="col-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutAuth'
}
</script>

<style lang="scss">
  .layout-auth {
    margin-top: 100px;

    h1 {
      margin-bottom: 20px;
    }
  }
</style>
