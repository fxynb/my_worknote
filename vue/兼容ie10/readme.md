# 虚假的 兼容ie 10 

正常是安装 @babel/polyfill   通过 npm install --save-dev babel/polyfill

在packgae.json中找到browserslist添加

 "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8",
    "ie 8"
  ]

在babel.config.js中添加 
  module.exports = {
    presets: [
      ['@vue/app', {
        useBuiltIns: 'entry'
    }]
    ]
  }




然后通过mian.js 文件最顶部  import '@babel/polyfill'


然后疯狂报错。。。。。

事实上是因为 import '@babel/polyfill' 已经被抛弃

因此，事实上是 去babel官网查看最新的 @babel/polyfill 的使用写法

目前的写法是这样的：

import "core-js/stable";
import "regenerator-runtime/runtime";


但还是会报错，可以试一试，那真让人头大





# 真实的ie10兼容

因为现在用到了vuecli3，老的写法已经不适用了，因此需要vue-cli的浏览器兼容babel的配置 (这个是真的难找，花了我好久)

通过browserslist来指定项目的目标浏览器范围，编译时会根据配置的目标浏览器来有针对性的转义。
参考地址：github关于browserslist开源项目使用介绍 https://github.com/browserslist/browserslist 。



1.首先 在package.json配置浏览器兼容的ie版本

    "browserslist": [
        "> 1%",
        "last 2 versions",
        "IE 10"
    ]

这里的 browserslist 内容的含义可以自己去搜索查看

2.其次安装两个插件，自己可以看一下有没有，有的话就没必要安装啦 

安装dev  "@vue/cli-plugin-babel"
安装save  "core-js" 这里是指3以上的版本




3.通过babel.config.js（新版本的cli支持这个方式）来结合上面进行babel转义的配置；


module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset', [
            '@babel/preset-env',
            {
                'useBuiltIns': 'entry',
                'corejs': 3
            }
        ]
    ],
    plugins: []
}

4.在public中的index.html中文件加入判断 ie浏览器兼容的条件注释 <!--[if lt IE 10]>  请使用高版本浏览器 !!! <![endif]-->  当ie浏览器版本小于10的时候提示



大功告成 用自己的vue项目跑一下试一下  


















