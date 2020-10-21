// 在数组对象中每一项添加一个字段

let arr = [
    { name: 'lilei', age: '25' },
    { name: 'nike', age: '23' },
    { name: 'alisa', age: '23' }
]

// 1.使用Array map()方法
// map()方法将调用的数组的每个元素传递给指定的函数，并返回一个数组，它包含该函数的返回值，有三个参数
// 1、currentValue 必须。当前元素的值
// 2、index 可选。当前元素的索引值
// 3、index 可选。当前元素属于的数组对象

let _arr = []
arr.map((item, index) => {
        _arr.push(Object.assign({}, item, { sex: 'men' }))
    })
    //  _arr返回结果
    // [{ name: 'lilei', age: '25', sex: 'men' }, { name: 'nike', age: '23', sex: 'men' }, { name: 'alisa', age: '23', sex: 'men' }]








// 2.使用Array forEach()方法
// forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
// 1、currentValue 必须。当前元素的值
// 2、index 可选。当前元素的索引值
// 3、index 可选。当前元素属于的数组

arr.forEach((value, index) => {
        value['sex'] = 'men'
    })
    //  返回原数组arr
    // [
    //    {name: 'lilei',age: '25',sex: 'men'},
    //    {name: 'nike',age: '23',sex: 'men'},
    //    {name: 'alisa',age: '23',sex: 'men'}
    // ]