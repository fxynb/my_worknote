// 返回一个数组， 它要由给出的所有子数组中的最大值的那个数组。 简单起见， 给出的数组总会包含4个子数组。

const arr = [
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
]

function largestOfFour(arr) {
    let max = 0
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i].map((e) => {
            if (e > a) {
                a = e
                max = i
            }
        })
    }
    // You can do this!
    return arr[max];
}

// console.log(largestOfFour(arr))



// 返回一个数组，它要由给出的每个子数组中的最大值组成。简单起见，给出的数组总会包含4个子数组


function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

// function largestOfFour(arr) {
//     // You can do this!
//       var a = 0
//       var num = 0
//     for(let i = 0;i<arr.length;i++) {

//       arr[i].map((e)=>{
//         if(e>a) {
//           a = e
//           num = i
//         }
//       })
//     }
//     return arr[num];
//     console.log(arr[num])
//   }

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);