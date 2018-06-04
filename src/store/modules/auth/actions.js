/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */
import store from '@/store'
import * as types from './mutation-types'

export const check = ({ commit }) => {
  commit(types.CHECK)
}

export const register = ({ commit }, data) => {
  commit(types.REGISTER, data)
  store.dispatch('account/find', data.id)
}

export const login = ({ commit }, data) => {
  commit(types.LOGIN, data)
  store.dispatch('account/find', data.user_id)
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT, 'AUTH_LOGOUT')
}

export default {
  check,
  register,
  login,
  logout
}
