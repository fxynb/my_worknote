//1. 判断一个对象{}是否为空对象的方法

// 将其转化成字符串格式进行判断

var a = {}
var b = { m: 1 }

// console.log(JSON.stringify(a) === '{}') //true
// console.log(JSON.stringify(b) === '{}') //false


//获取对象的key值的数组，判断数组的长度,长度为0则是空

// c = Object.keys(a)

// console.log(c)  //[]