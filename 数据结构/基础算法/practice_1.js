// 返回一个给定整数的阶乘。

// 若 n 是一个整数，n 的阶乘就是所有小于等于 n 的正整数的乘积。

// n 的阶乘通常用符号 n!来表示。

// 例如： 5! = 1 * 2 * 3 * 4 * 5 = 120

// 只有非负整数会被作为函数的输入参数。

function factorialize(num) {
    if (num > 1) {
        return num = num * factorialize(num - 1);
    } else {
        return 1
    }
}

// factorialize(5)


// function factorialize(num) {
//     if (num == 1) {
//         return 1
//     } else {
//         return num = num * factorialize(num - 1);
//     }
// }

console.log(factorialize(5))