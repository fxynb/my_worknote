// 问题:

// function test() {
//     console.log(1)
//     return new Promise((resolve) => {
//         resolve('14544456')
//     })
// }

// async function dea() {
//     const mm = await test()
//     console.log(mm)
//     console.log(mm)
// }

// dea()

// 1
// 14544456
// 14544456



// async function timeOut() {
//     return 'hellow world'
// }

// console.log(timeOut())

// 返回一个promise对象 PromiseStatus 为fulfilled  和 PromiseValue 为'hellow world'


// async的内部实现原理就是如果该函数中有一个返回值，当调用该函数时，默认会在内部调用Promise.resolve() 方法把它转化成一个Promise 对象作为返回，
// 若函数内部抛出错误，则调用Promise.reject()返回一个Promise 对象  如下例子:

// await即等待，用于等待一个Promise对象。它只能在异步函数 async function中使用，否则会报错
// 它的返回值不是Promise对象而是Promise对象处理之后的结果
// await表达式会暂停当前 async function的执行，等待Promise 处理完成。若 Promise 正常处理(fulfilled),
// 其回调的resolve函数参数作为 await 表达式的值，继续执行 async function，若 Promise 处理异常(rejected)，
// await 表达式会把 Promise 的异常原因抛出。​如果 await 操作符后的表达式的值不是一个 Promise，那么该值将被转换为一个已正常处理的 Promise。



// async function timeOut() {
//     return 'hellow world'
// }

// timeOut().then((res) => {
//     console.log(res)
// })

// console.log('先后执行顺序')

// 先后执行顺序
// hellow world


// async await 与 promise  对比

// takeLongTime() {
//     return new Promise(resolve => {

//     })
// }




var a;
var b = null;

if (!a) {
    console.log("a是假的");
}

if (!b) {
    console.log("b是假的");
}