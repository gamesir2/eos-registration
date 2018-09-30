
buy = require('./wise_module/buy')
sell = require('./wise_module/sell')
monitor = require('./wise_module/monitor')

getBalance = require('./wise_module/balance')

scheduleTask = require('./wise_module/schedule').single

getAccount = require('./wise_module/account')

getSpiderPage = require('./wise_module/spider')

transfrom = require('./wise_module/transfrom')


// new date时月份要减1
var date = new Date(2018,8,28,21,28,1);

console.log('test')

/**
 * 
 * 获取当前账户信息
 * 
 */
var asyncTask = async function() {
    var account = await getAccount()
    // 查询eos余额
    console.log(account.core_liquid_balance)

    var bla = await getBalance()
    console.log(bla)
    // 查询cpu是否足够
    var cpu_used = account.cpu_limit.used
    var cpu_available = account.cpu_limit.available
    // cpu足够的情况下再进行下一步请求
    if (cpu_used <= cpu_available) {
        console.log('cpu is enough')
    }
    console.log(cpu_available,cpu_used)
    // var spider = await getSpiderPage()
    // console.log('爬取结束')
}
asyncTask()



var test = async function() {
    await scheduleTask(buy('0.0122 EOS',''),date)
    var bla = await getBalance()
    if(transfrom.to_amout(bla)>0){
        await scheduleTask(monitor(sell(bla)),date)
    }
}
test()