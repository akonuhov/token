/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account.
 */

import Transformer from './Transformer'

export default class AccountTransformer extends Transformer {
  /**
   * Method used to transform a fetched account.
   *
   * @param account The fetched account.
   *
   * @returns {Object} The transformed account.
   */
  static fetch (data) {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      telegram: data.telegram,
      facebook: data.facebook,
      address: data.address,
      placeBirth: data.placeBirth,
      dateBirth: data.dateBirth,
      sourceOfFunds: data.sourceOfFunds
    }
  }

  /**
   * Method used to transform a send account.
   *
   * @param account The account to be send.
   *
   * @returns {Object} The transformed account.
   */
  static send (data) {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      telegram: data.telegram,
      facebook: data.facebook,
      address: data.address,
      placeBirth: data.placeBirth,
      dateBirth: data.dateBirth,
      sourceOfFunds: data.sourceOfFunds
    }
  }
}
