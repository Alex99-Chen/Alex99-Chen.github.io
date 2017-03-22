/**
 * 需要实现效果
 * 1. 点击之后创建一个h5标签放置在.container的容器内
 * 2. h5标签中的文本内容为我输入框中填入的文字
 * 3. 当输入的文字为空的时候提示(alert)用户不能输入空字符串
 */
var tagTxt = document.querySelector('#txt') //获取页面中的文本输入框
var tagContainer = document.querySelector('.container')//获取容器div
function btnClickHandle() {
    // alert('0000000')
    var strValue = tagTxt.value.trim() //获取输入框中输入的内容
    //通过trim操作把 字符串开始和结束的空白内容进行删除
    if (strValue == "") {//判断输入内容是否为空
        alert('不能输入空白内容！')
    }
    else {
        var h5 = document.createElement('h5')
        h5.innerText = strValue
        tagContainer.appendChild(h5)
    }
}
//向编辑框中加入一个按钮
var editorContainer = document.querySelector('.editor')
var btn = document.createElement('button')
btn.innerText = '按钮'
btn.onclick = function(){ //添加click事件
    alert('按钮被点击了...')
}
editorContainer.appendChild(btn)