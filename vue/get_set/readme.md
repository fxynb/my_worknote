vue模板的目的就是为进行简单的计算 如在vue_demo文件夹中的vue_demo_1 中的About页面页面中
我们需要将数据进行反转，'hello'  变成 'olleh' 就可以通过简单的计算来进行 
{{ message.split('').reverse().join('') }}  如果是这样写法，那么在模板中放入的逻辑计算。那么代码会非常难以维护，
可以通过vue实例进行简单的计算 可以用computed计算属性 如在vue_demo文件夹中的vue_demo_1 中的About页面页面中
