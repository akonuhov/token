/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import Vue from 'vue'
import { CHECK, REGISTER, LOGIN, LOGOUT } from './mutation-types'

export default {
  [CHECK] (state) {
    state.authenticated = !!localStorage.getItem('id_token')
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'id_token'
      )}`
    }
  },

  [REGISTER] (state, data) {
    state.authenticated = true
    localStorage.setItem('auth', true)
    localStorage.setItem('user_id', data.id)
    // localStorage.setItem('id_token', data.token)
  },

  [LOGIN] (state, data) {
    state.authenticated = true
    localStorage.setItem('auth', true)
    localStorage.setItem('user_id', data.user_id)
    localStorage.setItem('id_token', data.token)
  },

  [LOGOUT] (state) {
    state.authenticated = false
    localStorage.removeItem('auth')
    localStorage.removeItem('user_is')
    localStorage.removeItem('id_token')
  }
}
