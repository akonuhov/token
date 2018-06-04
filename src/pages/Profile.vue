<template lang="html">
  <layout-default>
    <div class="container-fluid">
      <div class="bg-white mb-section">
        <h2>Personal Details</h2>
        <div class="col-12">
          <div class="row affiliate">
            <p class="alert alert-warning size-20 text-center">Attention: for your safety, once you fill out the form, you can not change the answers or see your answers again (will be hidden). Please do not ignore the questions and fill in the fields.</p>
          </div>
        </div>
        <div class="row affiliate">
          <div class="col-6 mb-section">
            <div class="form-group">
              <label for="full-name">First and Last name</label>
              <input type="text" class="form-control" id="full-name">
            </div>
            <div class="form-group">
              <label for="additional-email">Additional email for password recovery</label>
              <input type="email" class="form-control" id="additional-email">
            </div>
            <div class="form-group">
              <label for="phone">Contact number</label>
              <input type="tel" class="form-control" id="phone">
            </div>
            <div class="form-group">
              <label for="telegram-login">Telegram login</label>
              <input type="text" class="form-control" id="telegram-login">
            </div>
          </div>
          <div class="col-6 mb-section">
            <div class="form-group">
              <label for="facebook-login">Facebook login</label>
              <input type="text" class="form-control" id="facebook-login">
            </div>
            <div class="form-group">
              <label for="address">Correct permanent address, including postal address</label>
              <input type="text" class="form-control" id="address">
            </div>
            <div class="form-group">
              <label for="birth">Date and place of birth</label>
              <input type="text" class="form-control" id="birth">
            </div>
            <div class="form-group">
              <label for="source-of-funds">Source of funds</label>
              <input type="text" class="form-control" id="source-of-funds">
            </div>
          </div>
        </div>
        <div class="col-12 text-center">
          <div class="d-inline-flex mb-5">
            <button type="button" name="button" class="btn btn-secondary mr-2">Reset</button>
            <button type="button" name="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'ProfilePage',
  components: {
    LayoutDefault
  }
}
</script>

<style lang="scss">
</style>
