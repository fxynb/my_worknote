// 1. 在正则表达式中 用先行断言来匹配至少5个字符且有两个连续数字的密码。
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\w*\d{2})/; // 修改这一行
let result = pwRegex.test(sampleWord);


//其中两个条件 条件一：至少匹配五个字符(?=\w{5,})  条件二：其中有两个连续匹配的数字 (?=\w*\d{2})  \w*表示多个字符 后面接\d{2} 表示两个连续的字符串

//freecodecamp 上写的不知道是个什么东西，居然对了