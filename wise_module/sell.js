
const eos = require('./eos.js')
const userAccount = require('./config').user
const desposeAccout = require('./config').despose;

async function sellToken(amount) {
    eos.transaction({
        actions: [
            {
                account: desposeAccout,
                name:    'sell',
                authorization: [{
                    actor:      userAccount,
                    permission: 'active'
                }],
                data: {
                    account: userAccount,
                    token_in: amount
                }
            }
        ]
    });
}

module.exports = sellToken
