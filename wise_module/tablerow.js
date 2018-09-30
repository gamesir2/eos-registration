/**
 * 
 *   获取合约上的数据
 *   @author tianling
 */

const eos = require('./eos.js')
const userAccount = require('./config').user
const desposeAccout = require('./config').despose;

/**
 * 
 * {code: "youbaoyoubao", scope: "youbaoyoubao", table: "bancor", json: true}
 * 
 */
async function getTableRow(code,scope,table) {
    return eos.getTableRows(true,code,scope,table)
}

module.exports = getTableRow