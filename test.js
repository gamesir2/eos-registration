var page = require('webpage').create();
// 打开页面
page.open('https://youbao.io/', function(status) {
  if(status === "success") {
        console.log(page.content);
  }
  phantom.exit();
});