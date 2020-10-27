//this的指向永远指向最后调用它的函数，setTimeout是全局对象调用，所以this指向的是Windows
var a = {
    name: 'asdasd',
    a: function() {
        console.log(1)
    },
    b: function() {
        setTimeout(function c() {
            console.log(this)
        }, 1000)
    }
}

a.b()


//箭头函数指向的是定义this的对象
// 　　Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
// 　　那么什么是类数组对象呢？所谓类数组对象，最基本的要求就是具有length属性的对象。


//手写 call
Function.prototype.call = function(context) {
    const ctx = context || window //判断传入的内容是否是空的 不传就是Windows
        //改变this的指向，将当前被调用的对象定义在ctx.fun上 让ctx具有ctx方法
    ctx.fun = this
        //将传入的参数转变成真数组，并除掉传入的第一个参数
    const arg = Array.from(arguments).slice(1)
        //判断是否传入了参数，
    const res = arguments.length > 1 ? ctx.fun(...arg) : ctx.fun()

    delete ctx.fun //清除方法，防止污染

    return res
}

//手写apply 
//方向相同 只是传入的参数不同，call是按顺序 apply是以数组的形式 
Function.prototype.apply = function(context) {
    const ctx = context || window //判断传入的内容是否是空的 不传就是Windows
        //改变this的指向，将当前被调用的对象定义在ctx.fun上 让ctx具有ctx方法
    ctx.fun = this

    //判断是否传入了参数， 因为是一个数组，不需要处理，直接结构出来
    const res = arguments[1] > 1 ? ctx.fun(...arguments[1]) : ctx.fun()

    delete ctx.fun //清除方法，防止污染

    return res
}

//手写bind