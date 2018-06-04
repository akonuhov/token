<template lang="html">
  <layout-default>
    <div class="container-fluid">
      <ul class="d-flex flex-column flex-xl-row justify-content-xl-between list-purse bg-white">
        <li class="col-12 col-xl-4 list-purse-item">
            <p class="list-purse-name">DASH</p>
            <p class="list-purse-value text-black">${{ rate.DASH.USD }}</p>
            <p class="list-purse-value-previous">1 DASH = {{ rate.DASH.BTC }} BTC</p>
            <p class="list-purse-value-previous">1 DASH = {{ rate.DASH.ETH }} ETH</p>
        </li>
        <li class="col-12 col-xl-4 list-purse-item">
            <p class="list-purse-name">BITCOIN</p>
            <p class="list-purse-value text-yellow">${{ rate.BTC.USD }}</p>
            <p class="list-purse-value-previous">1 BTC = {{ rate.BTC.ETH }} ETH</p>
            <p class="list-purse-value-previous">1 BTC = {{ rate.BTC.DASH }} DASH</p>
        </li>
        <li class="col-12 col-xl-4 list-purse-item">
            <p class="list-purse-name">ETHEREUM</p>
            <p class="list-purse-value text-dark-blue">${{ rate.ETH.USD }}</p>
            <p class="list-purse-value-previous">1 ETH = {{ rate.ETH.BTC }} BTC</p>
            <p class="list-purse-value-previous">1 ETH = {{ rate.ETH.DASH }} DASH</p>
        </li>
      </ul>
      <div class="d-flex flex-column flex-xl-row justify-content-xl-between align-items-stretch row">
        <div class="col-lg-12 col-xl-6 mb-4 mb-xl-0">
          <div class="widget bg-white">
            <div class="table-responsive">
              <table class="table">
                <caption>
                  <b>PORTFOLIO</b>
                </caption>
                <tbody>
                  <tr>
                    <td><img src="static/images/ic_dash.png" alt="ic_ezcoin" class="mr-2"> DASH</td>
                    <td class="text-right text-dash">0 DASH</td>
                    <td class="text-right">$0.00</td>
                  </tr>
                  <tr>
                    <td><img src="static/images/ic_bitcon.png" alt="ic_bitcon" class="mr-2"> Bitcoin</td>
                    <td class="text-right text-yellow">0 BTC</td>
                    <td class="text-right">$0.00</td>
                  </tr>
                  <tr>
                    <td><img src="static/images/ic_ethereum.png" alt="ic_ethereum" class="mr-2"> Ethereum</td>
                    <td class="text-right text-dark-blue">0 ETH</td>
                    <td class="text-right">$0.00</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-right">
                      <b>$0.00</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-xl-6">
          <div class="widget bg-white">
            <div class="table-responsive">
              <table class="table">
                <caption>
                  <b>RECENT ACTIVITY</b>
                </caption>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex justify-content-start align-items-center">
                        <img src="static/images/ic_deposit_success.png" alt="ic_deposit_success" class="mr-3">
                        <div>
                          <p>Deposit Ethereum</p>
                          <p class="time">01/12/2018 15:54:46</p>
                        </div>
                      </div>
                    </td>
                    <td class="text-right">0 ETH</td>
                    <td class="text-right">$0</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex justify-content-start align-items-center">
                        <img src="static/images/ic_deposit_success.png" alt="ic_deposit_success" class="mr-3">
                        <div>
                          <p>Deposit Ethereum</p>
                          <p class="time">01/12/2018 15:29:44</p>
                        </div>
                      </div>
                    </td>
                    <td class="text-right">0 ETH</td>
                    <td class="text-right">$0</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex justify-content-start align-items-center">
                        <img src="static/images/ic_deposit_success.png" alt="ic_deposit_success" class="mr-3">
                        <div>
                          <p>Register bonus DASH</p>
                          <p class="time">01/12/2018 13:49:55</p>
                        </div>
                    </div>
                    </td>
                    <td class="text-right">0 EZT</td>
                    <td class="text-right">$0</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="text-right"></td>
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
import axios from 'axios'
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'MainPage',
  data () {
    return {
      rate: {},
      errors: []
    }
  },
  created () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH&tsyms=USD,BTC,ETH,DASH')
      .then(response => {
        this.rate = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  components: {
    LayoutDefault
  }
}
</script>

<style lang="scss">
</style>
