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
  function addNumbers(num1, num2) {
    // 入参处理
    console.log("入参1：" + num1);
    console.log("入参2：" + num2);
    
    // 执行一些操作
    var sum = num1 + num2;
  
    // 出参处理
    var result = "出参：" + sum;
    console.log(result);
    return result;
  }
  
  // 调用函数并传入参数
  var num1 = 5;
  var num2 = 10;
  var output = addNumbers(num1, num2);
  console.log(output);
}