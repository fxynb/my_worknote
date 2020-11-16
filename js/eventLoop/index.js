//nextTick 总是发生在当前任务队列的异步任务之前

setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0)

process.nextTick(function A() {
    console.log(1);
    process.nextTick(function B() { console.log(2); });
});
// 1
// 2
// TIMEOUT FIRED

console.log(5456456456)