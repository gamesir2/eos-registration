
const eos = require('./eos.js')

const userAccount = require('./config').user
const desposeAccout = require('./config').despose;


function withdraw() {
    eos.transaction({
        actions: [
            {
                account: desposeAccout,
                name:    'withdraw',
                authorization: [{
                    actor:      userAccount,
                    permission: 'active'
                }],
                data: {
                    account: userAccount
                }
            }
        ]
    });
}
