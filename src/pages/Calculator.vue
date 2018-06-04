<template lang="html">
  <layout-default>
    <div class="container-fluid">
      <div class="bg-white mb-section">
        <h2>Calculator</h2>
      </div>
      <div class="d-flex flex-column flex-xl-row justify-content-xl-between align-items-stretch row mb-section">
        <div class="col-12 col-xl-12">
          <div class="widget bg-white">
            <div class="table-responsive">
              <table class="table table-calculator">
                <caption>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <p>Balance: <span class="text-dark-blue">0 ETH</span></p>
                      <p><small>Enter investment sum</small></p>
                    </div>
                    <div>
                      <p>Balance: 0 QYK</p>
                      <p><small>You will earn tokens:</small></p>
                    </div>
                  </div>
                </caption>
                <tbody>
                  <tr>
                    <td class="text-left">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Ethereum">
                      </div>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Bitcoin">
                      </div>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Dash">
                      </div>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Litecoin">
                      </div>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Ripple">
                      </div>
                    </td>
                    <td class="text-center">
                      <img src="/static/images/exchange.png" class="mb-2" alt="exchange">
                    </td>
                    <td class="text-right">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="QYK">
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-right">
                      <button type="button" class="btn btn-secondary mr-2">Reset</button>
                      <button type="button" class="btn btn-primary">Buy</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column flex-xl-row justify-content-xl-between align-items-stretch row mb-section">
        <div class="col-12 col-xl-12">
          <div class="widget bg-white">
            <div class="table-responsive">
              <table class="table table-calculator">
              <caption>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p>Balance: 0 QYK</p>
                    <p><small>Desired amount of tokens:</small></p>
                  </div>
                  <div>
                    <p>Balance: <span class="text-dark-blue">0 ETH</span></p>
                    <p><small>It will cost:</small></p>
                  </div>
                </div>
              </caption>
              <tbody>
                <tr>
                  <td class="text-right">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="QYK">
                    </div>
                  </td>
                  <td class="text-center">
                    <img src="/static/images/exchange.png" class="mb-2" alt="exchange">
                  </td>
                  <td class="text-left">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Ethereum">
                    </div>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Bitcoin">
                    </div>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Dash">
                    </div>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Litecoin">
                    </div>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Ripple">
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="text-right">
                    <button type="button" class="btn btn-secondary mr-2">Reset</button>
                    <button type="button" class="btn btn-primary">Buy</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
  name: 'CalculatorPage',
  components: {
    LayoutDefault
  }
}
</script>

<style lang="scss">
  .table-calculator {
    tr {
      td {
        vertical-align: middle;

        .input-group {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>
