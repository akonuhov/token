<template lang="html">
  <layout-default>
    <div class="container-fluid">
      <div class="bg-white mb-section">
        <h2>Change password</h2>
        <div class="col-12">
          <div class="col-6 mb-section">
            <div class="form-group">
              <label for="email">Type your current Email</label>
              <input type="email" id="email" class="form-control">
            </div>
            <div class="form-group">
              <label for="current-password">Current password</label>
              <input type="password" id="current-password" class="form-control">
            </div>
            <div class="form-group">
              <label for="new-password">New password</label>
              <input type="password" id="new-password" class="form-control">
            </div>
          </div>
          <div class="col-6 text-center">
            <div class="d-inline-flex mb-5">
              <button type="button" name="button" class="btn btn-secondary mr-2">Reset</button>
              <button type="button" name="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'PasswordPage',
  components: {
    LayoutDefault
  }
}
</script>

<style lang="scss">
</style>
