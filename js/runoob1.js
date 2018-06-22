document.write("大家好！！！");
// 将runoob2.js模块内容引入
// 使用require（"模块标识"）来引入模块，require（）的返回值是引入模块
var str = require("./runoob2.js");
document.write(str);

const x = require('./runoob3.js');
x.css();

//引入Loader打包css
require('!style-loader!css-loader!../css/style.css');