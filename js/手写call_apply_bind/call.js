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