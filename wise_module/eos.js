
const privateKey = require('./config').privateKey

Eos = require('eosjs')

config = {
    chainId :'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    keyProvider : privateKey,
    httpEndpoint:'http://api-mainnet.starteos.io',
    broadcast: true,
    verbose:false,
    sign: true
}

eos = Eos(config)


module.exports = eos