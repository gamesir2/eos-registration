/**
 * 
 *   查询eos账户当前账户余额
 *   @author tianling
 */
eos = require('./eos')

user_account = require('./config').user

function getAccount() {
    return eos.getAccount(user_account)
}

module.exports = getAccount
