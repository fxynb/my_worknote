/*烧饼店*/
var Sesamecakeshop = {
    clienlist: [], //缓存列表
    addlisten: function(fn) { //增加订阅者
        this.clienlist.push(fn);
    },
    trigger: function() { //发布消息
        for (var i = 0, fn; fn = this.clienlist[i++];) {
            console.log(fn)
            fn.apply(this, arguments);
        }
    }
}

/*小明发布订阅*/
Sesamecakeshop.addlisten(function(price, taste) {
    console.log("小明发布的" + price + "元，" + taste + "味道的");
});
/*小龙发布订阅*/
Sesamecakeshop.addlisten(function(price, taste) {
    console.log("小龙发布的" + price + "元，" + taste + "味道的");
});

Sesamecakeshop.trigger(10, "椒盐");