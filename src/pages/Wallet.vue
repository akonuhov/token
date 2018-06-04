<template lang="html">
  <layout-default>
    <div class="container-fluid">
      <div class="col-12 bg-white">
        <ul class="row nav nav-tabs" id="tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="tab-DASHoken" data-toggle="tab" href="#tab-content-DASHoken" role="tab" aria-controls="tab-DASHoken" aria-selected="true">DASH</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="tab-bitcoin" data-toggle="tab" href="#tab-content-bitcoin" role="tab" aria-controls="tab-bitcoin" aria-selected="false">Bitcoin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="tab-ethereum" data-toggle="tab" href="#tab-content-ethereum" role="tab" aria-controls="tab-ethereum" aria-selected="false">Ethereum</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="tab-dollar" data-toggle="tab" href="#tab-content-dollar" role="tab" aria-controls="tab-dollar" aria-selected="false">Dollar</a>
          </li>
        </ul>
        <div class="tab-content mt-4" id="tab-content">
          <div class="tab-pane fade show active" id="tab-content-DASHoken" role="tabpanel" aria-labelledby="tab-content-DASHoken">
            <div class="row d-flex justify-content-between">
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="d-flex justify-content-start">
                  <h3 class="title title-dash">wallet <br> <sub>Balance</sub></h3>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <div class="d-flex justify-content-end">
                  <button type="button" name="button" class="btn btn-primary mr-2" data-toggle="modal" data-target="#deposit-modal">Deposit BTC</button>
                  <button type="button" name="button" class="btn btn-secondary" data-toggle="modal" data-target="#withdraw-modal">Withdraw BTC</button>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <h1 class="text-dash">0DASH <small class="text-black">~ $0</small></h1>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th>#</th>
                        <th>TRANSACTION ID</th>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center" colspan="6">No data available in table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-content-bitcoin" role="tabpanel" aria-labelledby="tab-content-bitcoin">
            <div class="row d-flex justify-content-between">
              <div class="col-6">
                <div class="d-flex justify-content-start">
                  <h3 class="title title-bitcoin">wallet <br> <sub>Balance</sub></h3>
                </div>
              </div>
              <div class="col-6 text-right">
                <button type="button" name="button" class="btn btn-primary mr-2" data-toggle="modal" data-target="#deposit-modal">Deposit BTC</button>
                <button type="button" name="button" class="btn btn-secondary" data-toggle="modal" data-target="#withdraw-modal">Withdraw BTC</button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <h1 class="text-yellow">0BTC <small class="text-black">~ $0</small></h1>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th>#</th>
                        <th>TRANSACTION ID</th>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center" colspan="6">No data available in table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-content-ethereum" role="tabpanel" aria-labelledby="tab-content-ethereum">
            <div class="row d-flex justify-content-between">
              <div class="col-6">
                <div class="d-flex justify-content-start">
                  <h3 class="title title-ethereum">wallet <br> <sub>Balance</sub></h3>
                </div>
              </div>
              <div class="col-6 text-right">
                <button type="button" name="button" class="btn btn-primary mr-2" data-toggle="modal" data-target="#deposit-modal">Deposit BTC</button>
                <button type="button" name="button" class="btn btn-secondary" data-toggle="modal" data-target="#withdraw-modal">Withdraw BTC</button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <h1 class="text-dark-blue">0ETH <small class="text-black">~ $0</small></h1>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th>#</th>
                        <th>TRANSACTION ID</th>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center" colspan="6">No data available in table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-content-dollar" role="tabpanel" aria-labelledby="tab-content-dollar">
            <div class="row d-flex justify-content-between">
              <div class="col-6">
                <div class="d-flex justify-content-start">
                  <h3 class="title title-dollar">wallet <br> <sub>Balance</sub></h3>
                </div>
              </div>
              <div class="col-6 text-right">
                <button type="button" name="button" class="btn btn-primary mr-2" data-toggle="modal" data-target="#deposit-modal">Deposit BTC</button>
                <button type="button" name="button" class="btn btn-secondary" data-toggle="modal" data-target="#withdraw-modal">Withdraw BTC</button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <h1 class="text-green">0$ <small class="text-black">0$</small></h1>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th>#</th>
                        <th>TRANSACTION ID</th>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center" colspan="6">No data available in table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
  name: 'WalletPage',
  components: {
    LayoutDefault
  }
}
</script>

<style lang="scss">
</style>
