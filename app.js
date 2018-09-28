
buy = require('./wise_module/buy')
sell = require('./wise_module/sell')

scheduleTask = require('./wise_module/schedule').single

// new date时月份要减1
var date = new Date(2018,8,28,21,28,1);

console.log('test')

scheduleTask(buy('0.001 EOS'),date)