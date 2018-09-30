/**
 * 
 *   查询eos账户当前账户余额
 *   @author tianling
 */
eos = require('./eos')

despose_account = require('./config').despose

function getAccount() {
    return eos.getAccount(despose_account)
}

module.exports = getAccount
