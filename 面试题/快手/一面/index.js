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
// 1. 创建ajax异步对象
// const xhr = new XMLHttpRequest()

// 2. 创建请求方式和地址
// xhr.open(method, url)

// 3. 发送请求
// xhr.send()

// 4. 监听响应状态变化
// xhr.onreadystatechange()

// 5. 返回响应数据

// xhr.responseText


//16.实现一个vue弹窗组件，如下：<Modal :title="我是title" :visible="">   
{ /* <content>我是content</content></Modal> */ }
// import {Button, Modal} from 'antd';
{ /* <Button></Button><Modal :title @onOk="" @onCancel=""></Modal> */ }



// let [a, b, c, d, e] = "hello";

// console.log([a, b, c, d, e])


// 17.浏览器从输入URL到渲染完页面的整个过程
// 从输入URL到渲染出整个页面的过程包括三个部分：

// 1、DNS解析URL的过程

// 2、浏览器发送请求与服务器交互的过程

// 3、浏览器对接收到的html页面渲染的过程

// 一、DNS解析URL的过程

//       DNS解析的过程就是寻找哪个服务器上有请求的资源。因为ip地址不容易记忆，

//       一般会使用URL域名（如www.baidu.com）作为网址。DNS解析就是将域名翻译成IP地址的过程。

// 具体过程：

//        1）浏览器缓存：浏览器会按照一定的频率 缓存DNS记录

//  　　2）操作系统缓存：如果浏览器缓存中找不到需要的DNS记录，就会取操作系统中找

// 　　 3）路由缓存：路由器也有DNS缓存

// 　　 4）ISP的DNS服务器：ISP有专门的DNS服务器应对DNS查询请求

// 　　 5）根服务器：ISP的DNS服务器找不到之后，就要向根服务器发出请求，进行递归查询

// 二、浏览器与服务器交互过程

// 　　1）首先浏览器利用tcp协议通过三次握手与服务器建立连接

// 　　http请求包括header和body。header中包括请求的方式（get和post）、请求的协议 （http、https、ftp）、请求的地址ip、缓存cookie。body中有请求的内容。

// 　　2）浏览器根据解析到的IP地址和端口号发起http的get请求.

// 　　3）服务器接收到http请求之后，开始搜索html页面，并使用http返回响应报文

// 　　4）若状态码为200显示响应成功，浏览器接收到返回的html页面之后，开始进行页面的渲染

// 三、浏览器页面渲染过程

// 　　1）浏览器根据深度遍历的方式把html节点遍历成dom 树

// 　　2）将css解析成CSS DOM树

// 　　3）将dom树和CSS DOM树构造成render树

// 　　4）JS根据得到的render树 计算所有节点在屏幕中的位置，进行布局（回流）

// 　　5）遍历render树并调用硬件API绘制所有节点（重绘）

//      补充： 构造render渲染树的过程