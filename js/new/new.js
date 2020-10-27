//手写new方法
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

function _new() {
    var obj = Object.create(null) //或者使用var obj = {}  
    Contructor = [].shift.call(arguments) //要创建的对象在argument的第一位，取出要创建的对象
    obj.__proto__ = Constructor.prototype
    var ret = Constructor.call(obj, arguments)
    return typeof res == Object ? ret : obj
}