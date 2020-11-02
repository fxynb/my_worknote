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

// d = c++

//     console.log(d) //0


9.
var name = 'World!',
    (function() {
        if (typeof name === 'undefined') {
            var name = 'jack'
            console.log('Goodbye' + name)
        } else {
            console.log('Hello' + name)
        }
    })()