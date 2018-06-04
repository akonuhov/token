<template lang="html">
  <layout-default>
    <div class="container-fluid">
      <div class="bg-white mb-section">
        <h2>Referral program</h2>
        <div class="col-12">
          <div class="row affiliate">
            <p class="size-18">5% of tokens are allocated to referral program</p>
          </div>
          <div class="row affiliate">
            <ul class="list">
              <li>For direct referral links, you get 8% of tokens</li>
              <li>For secondary referral links, you get 2% of tokens</li>
              <li>For third-party referral links, you get 1% of tokens</li>
              <li>For the remaining indirect referral links, you get 0.5% of tokens</li>
            </ul>
          </div>
          <div class="row affiliate">
            <form class="form-inline mb-section">
              <div class="form-group">
                <input type="text" class="form-control form-control-sm" id="link" placeholder="Comment">
              </div>
              <button type="submit" class="btn btn-primary btn-lg ml-4">Add link</button>
            </form>
          </div>
        </div>
      </div>
      <!-- <ul class="d-flex flex-column flex-xl-row justify-content-xl-between list-purse bg-white">
        <li class="col-lg-12 col-xl-4 list-purse-item">
            <p class="list-purse-name">NUMBER OF AFFILIATES</p>
            <p class="list-purse-value size-35">0</p>
        </li>
        <li class="col-12 col-xl-4 list-purse-item">
            <p class="list-purse-name">TOTAL AFFILIATED AMOUNT</p>
            <p class="list-purse-value size-35">0 EZT</p>
        </li>
        <li class="col-12 col-xl-4 list-purse-item">
            <p class="list-purse-name">TOTAL BONUS</p>
            <p class="list-purse-value size-35">0 EZT</p>
        </li>
      </ul> -->
      <div class="col-12 bg-white">
        <div class="row">
          <div class="table-responsive">
            <table class="table">
              <caption class="size-18"><b>Table of referral program</b></caption>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Link</th>
                  <th class="text-center">Conversion</th>
                  <th>Comment</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>http://balbla/tutu/tata/asd</td>
                  <td class="text-center">0</td>
                  <td>Hello world</td>
                  <td class="text-center">
                    <button type="submit" class="btn btn-success">Copy</button>
                    <button type="submit" class="btn btn-danger ml-2">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'ReferralPage',
  components: {
    LayoutDefault
  }
}
</script>

<style lang="scss">
</style>
