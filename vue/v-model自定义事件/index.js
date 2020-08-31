{ /* <my-component v-model="obj"></my-component>   父组件 */ }


// Vue.component('my-component', {     子组件
//     props: {
//         obj: Object,
//     },
//     model: {
//         prop: 'obj',
//         event: 'change'
//     },
//     methods: {
//         onchange: function() {
//             this.$emit('change', this.obj);
//         }
//     }
// });



// Vue 想通过v - model实现子组件与父组件的双向绑定

// 1. 首先需要通过传值从父组件传递到子组件， 用props接收
// props对象中， 需要定义一个能够从外部传入的变量， 这里我定义了一个obj。 这样就可以用下面这行代码进行传递值
//     <
//     my - component: obj = "obj对象" > < /my-component>

// 2. 为了能够使用v - model语法糖， 我们定义了model对象。 model对象包含两个属性，
// 一个是prop， 一个是event。 prop默认是value， event默认是input， 我们这里写model是为了改变默认的东西，
// 使用我们自己定义的变量。 写好之后就可以用第一行代码了。




// 3. 虽然可以这么用， 但还是不能从子组件传递数据到外部。 因为change事件并没有被触发。
// 这个change事件是我自定义的， 所以这里需要写一个方法onchange。 方法名是次要的， 主要的是里面的那行代码。


// this.$emit('change', this.obj);