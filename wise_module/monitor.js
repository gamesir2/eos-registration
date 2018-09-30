getAccount = require('./account')

transfrom = require('./transfrom')

async function monitor(callback){
    var account = await getAccount()
    var bla_n = transfrom.to_amout(account.core_liquid_balance)
    var bla_max = bla_n
    do{
        account = await getAccount()
        bla_n = transfrom.to_amout(account.core_liquid_balance)
        bla_max = bla_n>bla_max?bla_n:bla_max
        console.log(bla_n)
    }
    while(bla_n >= bla_max*0.9);
    callback()
}

module.exports =monitor



