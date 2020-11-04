// 1.请写出你知道的html中的表单控件有哪些

// 2. 前端存储有哪些？ 读写操作api是啥？


// 3. localStorage sessionStorage cookie token

// 4.数组都有哪些方法？

// 5.如何创建新节点?

// 6.CSS选择器有哪些？优先级如何？


// 7.如何判断一个对象的类型？


// 8.请写出下列代码的输出结果
//注释: a++ 是先执行a的表达式，在把a+1 执行的还是原来的a，但a存储的是a+1后的值  ++a 则是实际意义上的先计算表达式
// var a = 0,
//     b = 0;

// function A(a) {
//     A = function(b) { console.log(a + b++); }
//     console.log(a++)
// }
// A(1); //1
// A(2) //4


// var c = 0
// console.log(c++)
// console.log(++c)
// console.log(c + 3)
// console.log(3 + c)

// d = c++

//     console.log(d) //0


// 9.  //重复定义的name，if不形成作用域，if中的var name 提升到作用域的最前端，所以name === undefined 是true
// var name = 'World!';
// (function() {
//     if (typeof name === 'undefined') {
//         var name = 'jack'
//         console.log('Goodbye' + name)
//     } else {
//         console.log('Hello' + name)
//     }
// })()


// 10. 请写出下列代码的输出结果:  //定义的变量是内向外查找，
// var a = 10;
// (function() {
//     console.log(a)
//     a = 5
//     console.log(window.a)
//     var a = 20;
//     console.log(a)
// })()
// undefined
// 10
// 20


// 11.
// if (true) { var name = 'zhangsan' }
// console.log(name) // zhangsan

// 12.  ???  为什么，if判断也能形成作用域？  //看错了，实际上并没有形成作用域链，var提升变量了而已
// if (true) { let name = 'zhangsan' }
// console.log(name) //undefined



// 13.设计一个函数，将连字符格式的字符串转化为驼峰式的字符串，即 my-common-function 转成 myCommonFunction


//14.实现一个函数 find(obj, str)，满足:如var obj = {a:{b:{c:1}}};find(obj,'a.b.c') //返回1find(obj,'a.d.c') //返回undefined


// 15.简写下ajax执行流程

//16.实现一个vue弹窗组件，如下：<Modal :title="我是title" :visible="">   
{ /* <content>我是content</content></Modal> */ }
// import {Button, Modal} from 'antd';
{ /* <Button></Button><Modal :title @onOk="" @onCancel=""></Modal> */ }



// let [a, b, c, d, e] = "hello";

// console.log([a, b, c, d, e])