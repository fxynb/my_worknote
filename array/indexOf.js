//箭头函数是自带返回值的
var listData = [
    { id: "1234", name: "bob" },
    { id: "2451", name: "mary" },
    { id: "6666", name: "tom" },
    { id: "5675", name: "jerry" },
    { id: "8421", name: "ken" },

]
let index = listData.findIndex(item => item.id == '8421');
// console.log(index) //4
//当箭头函数中使用的括号是，是没有返回值的
var listData = [
    { id: "1234", name: "bob" },
    { id: "2451", name: "mary" },
    { id: "6666", name: "tom" },
    { id: "5675", name: "jerry" },
    { id: "8421", name: "ken" },

]
index = listData.findIndex((item) => { item.id == '8421' });
// console.log(index) //-1



//字符串反转

const message = 'message'

console.log(message.split(''))

console.log(message.split('').reverse().join(''))