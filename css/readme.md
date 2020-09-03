# 省略文字
    overflow:hiden 超出部分隐藏
    white-space:nowrap  文字不换行
    text-overflow:ellipsis 文字超出省略


# 对于后端接口穿过来的字符串识别换行
    white-space:pre-wrap  保留空白符序列，但是正常地进行换行。
    white-space:pre-line   合并空白符序列，但是保留换行符。


# vue 识别富文本编辑器中内容识别成html结构
    v-html={我要识别的文本内容}