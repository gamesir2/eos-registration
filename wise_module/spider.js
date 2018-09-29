/**
 * 
 *   爬虫系统，查询页面余额
 *   @author tianling
 */

/**
 * 获取依赖
 * @type {*}
 */
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
/**
 * 定义请求地址
 * @type {*}
 */
const reptileUrl = "https://youbao.io/";
/**
 * 处理空格和回车
 * @param text
 * @returns {string}
 */
function replaceText(text) {
  return text.replace(/\n/g, "").replace(/\s/g, "");
}
/**
 * 核心业务
 * 发请求，解析数据，生成数据
 */
var phantom = require('phantom');

async function getPage(){
  const instance = await phantom.create();
  const page = await instance.createPage();
  

  await page.on('onResourceRequested', function (requestData) {
    console.info('Requesting', requestData.url);
   
  });

  await page.on('onResourceReceived', function (requestData) {
   
    console.info('Requesting', '');
  });

  const status = page.open(reptileUrl);

  const content = await page.property('content');
  console.log(content);

  await instance.exit();
}

module.exports = getPage
