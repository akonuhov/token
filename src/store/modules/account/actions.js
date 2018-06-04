/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import Transformer from '@/transformers/AccountTransformer'
import * as types from './mutation-types'
import axios from 'axios'

export const find = ({ commit }, userId) => {
  axios.get(
    'http://localhost:8888/api/users/' + userId
  ).then(response => {
    commit(types.FIND, Transformer.fetch(response.data))
  }).catch(error => {
    console.log(error.response.data)
  })
}

export const update = ({ commit }, data) => {
  commit(types.UPDATE, Transformer.send(data))
}

export default {
  find,
  update
}
