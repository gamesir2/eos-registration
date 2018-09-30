eos = require('./eos')
const userAccount = require('./config').user
const desposeAccout = require('./config').despose
const syboml = require('./config').syboml

async function getbalance() { 
    var bla = await eos.getCurrencyBalance(desposeAccout,userAccount,syboml)
    return bla[0]?bla[0]:'0'+' '+syboml
}

module.exports = getbalance