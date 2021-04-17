// 1. 把数字转换为货币格式， 如 '1234567891'
// 转成 '1,234,567,891'

//错误
// function translate(aaa) {
//     //数字不能直接用split，而是要转换成字符串
//     let s = aaa.toString()

//     //将字符串转换成数组，并将数组反转
//     let m = s.split('').reverse()
//         // console.log(m.length)
//     for (let i = 2; i < m.length - 1; i + 3) { //这个循环是错的
//         m.splice(i + 1, 0, ',')
//     }
//     console.log(m)
//         // c = m.reverse().join('')
//         // console.log(c)
// }

// translate(12358975459)






// 2. 判断字符串中的 {}、[]、() 三种括号是否匹配， 需要考虑嵌套的情况

// 例：
// validBraces("(){}[]")     // true 
// validBraces("(}")         // false 
// validBraces("[(])")       // false 
// validBraces("([{}])")     // true


// let a = { c: 1 }

// let b = 2

// a = b

// console.log(a)




// 数字转换成货币格式的字符串，例如把1234567转换成 1,234,567 这样的
function int2str(num) {
    let numberStr = num.toString()
    let str = numberStr.split('').reverse()
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 4 === 0) {
            str.splice(i, 0, ',')
        }
    }
    // str.reverse()
    let handleResult = str.reverse().join('')
        // for (let j = 0; j < str.length; j++) {
        //     handleResult += str[j]
        // }
    console.log(handleResult)
}



let string = int2str(1234567445541)
    // print(string)输出结果为：1,234,567