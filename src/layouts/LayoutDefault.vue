<template lang="html">
  <div>
    <Header />
    <Aside />
    <main id="main" class="main">
      <slot></slot>
    </main>
    <Footer/>
    <div id="qar-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">DEPOSIT BITCOIN</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <img src="/static/images/qar.jpg" alt="qar" class="img-fluid">
            </div>
            <p class="text-center mb-4">To deposit Bitcoin to your account, please send Bitcoin to the address below. You can scan the QR code in order to copy the address.</p>
            <div class="input-group">
              <input type="text" value="1KNa3fNuewgoxhgyBjugQSyYX76gciXeQw" class="form-control">
              <div class="input-group-prepend">
                <button type="button" name="button" class="btn btn-secondary"><i class="fi flaticon-copy"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import Footer from '@/components/Footer'

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>

<style lang="scss">
</style>
