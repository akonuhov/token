/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { FIND, UPDATE } from './mutation-types'

export default {
  [FIND] (state, data) {
    state.firstName = data.firstName
    state.lastName = data.lastName
    state.email = data.email
    state.phone = data.phone
    state.telegram = data.telegram
    state.facebook = data.facebook
    state.address = data.address
    state.placeBirth = data.placeBirth
    state.dateBirth = data.dateBirth
    state.sourceOfFunds = data.sourceOfFunds
  },
  [UPDATE] (state, data) {
    state.firstName = data.firstName
    state.lastName = data.lastName
    state.email = data.email
    state.phone = data.phone
    state.telegram = data.telegram
    state.facebook = data.facebook
    state.address = data.address
    state.placeBirth = data.placeBirth
    state.dateBirth = data.dateBirth
    state.sourceOfFunds = data.sourceOfFunds
  }
}
