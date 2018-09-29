const eos = require('./eos.js')
const userAccount = require('./config').user
const desposeAccout = require('./config').despose;

async function buyToken(amount,memo) {
    eos.transaction({
        actions: [
            {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                    actor:userAccount,
                    permission: 'active'
                }],
                data: {
                    from: userAccount,
                    to: desposeAccout,
                    quantity: amount,
                    memo: memo
                }
            }
        ]
    });
}

module.exports = buyToken
