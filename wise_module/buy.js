const eos = require('./eos.js')
const userAccount = require('./config').user
const desposeAccout = require('./config').despose;

function buyToken(eosAmount) {
    options = {
        authorization: userAccount,
        broadcast: true,
        sign: true
    }
    eos.transfer(userAccount,desposeAccout,eosAmount,'',options);
}

module.exports = buyToken
