// 返回给出的句子中最长的单词的长度。

// 你的返回应该是一个数字。

function findLongestWordLength(str) {
    let a = 0
    str.split(" ").map((e) => {
        a = e.length > a ? e.length : a
    })
    return a;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");