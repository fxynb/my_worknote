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

//下面的例子中的this却不是指向是windows对象，为什么呢？因为a.fn并没有调用改函数，而是把a.fn给了f，执行f()的时候实际上是在windows上调用，最后调用函数的是windows，
// 因此this指向windows

var name = "windowsName";
var a = {
    name: null,
    // name: "Cherry",
    fn: function() {
        console.log(this.name); // windowsName
    }
}

var f = a.fn;
f();




//箭头函数指向的是定义this的对象，并不是执行时的对象

var name = "windowsName";

var a = {
    name: "Cherry",

    func1: function() {
        console.log(this.name)
    },

    func2: function() {
        setTimeout(() => {
            this.func1()
        }, 100);
    }

};

a.func2() // Cherry