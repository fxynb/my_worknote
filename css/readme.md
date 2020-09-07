# 省略文字
    overflow:hiden 超出部分隐藏
    white-space:nowrap  文字不换行
    text-overflow:ellipsis 文字超出省略


# 对于后端接口穿过来的字符串识别换行
    white-space:pre-wrap  保留空白符序列，但是正常地进行换行。
    white-space:pre-line   合并空白符序列，但是保留换行符。


# vue 识别富文本编辑器中内容识别成html结构
    v-html={我要识别的文本内容}


# 图片之间会有间隙
    图片之间有时候会有一点间隙，产生的原因是浏览器把两个img标签之间的空格当成了空白节点
    解决方式：1.多个img写在一行 
              2.在img标签的父级上写：font-size:0;//这个在解决display：inline-block出现的问题也有帮助
              3.使用display：block(img是内联元素)//要float一下才行 
              4.使用letter-spacing属性  letter-spacing：属性增加或减少字符间的空白（字符间距）。 




