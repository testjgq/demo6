// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
module.exports = async function (params, context, logger) {
  // 日志功能
  // logger.info(`${new Date()} 函数开始执行`);

  // 在这里补充业务代码
  function test(AA, BB) {
    // 入参处理
    console.log("入参：" + AA);
    console.log("入参：" + BB);
  
    // 执行一些操作
    var sum = AA + BB;
  
    // 出参处理
    var result = "出参：" + sum;
    console.log(result);
    return result;
  }
  var AA = 5;
  var BB = 10;
  var output = test(AA, BB);
  console.log(output);
}