const http = require('http')

http.createServer((req, res) => {
    //本身的编码方式是GBK，而浏览器识别的是utf-8，所以设置响应头通过告诉浏览器Content-Type字段设置解析方式是utf-8
    res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
    res.end('我的第一个服务器')
}).listen(3000)