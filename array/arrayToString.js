//数组转换成字符串
let a = [1, 2, 3]

let s = a.toString()

// console.log(a)
// console.log(s)

let b = [1, 2, 3]
console.log(b.join(','))


//将对象转换成数组的形式,比如下a对象所示，我想要获取对象中的key值组成的数组，就可以通过Object.keys(a)返回一个key值的数组 

var m = {
    1: '123',
    2: '123',
    3: '123',
    4: '123',
}


console.log(Object.keys(m)) //[ '1', '2', '3', '4' ]