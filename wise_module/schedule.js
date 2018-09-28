var schedule = require("node-schedule");

function scheduleSingleTask(task,date) {
    schedule.scheduleJob(date,function(){
        console.log('start to run task');
        try {
            task();
        } catch(e) {
            console.log(e)
        }
        console.log('finish task')
    })
}

function scheduleRecurrentTask(task) {
    var rule = new schedule.RecurrenceRule();
    var times = [];
    for (var i = 1; i< 60 ;i++) {
        times.push(i);
    }
    rule.second = times;
    var count=0; 　　
    var j = schedule.scheduleJob(rule, function(){ 　
        try {
            task();
        } catch(e) {
            console.log(e)
        }
        count++;　
        console.log(count); 　　
    });
}
module.exports = {
    'single':scheduleSingleTask,
    'recurrent':scheduleRecurrentTask
};