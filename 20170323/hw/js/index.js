//编辑区域
var divEditor = document.createElement('div')
//内容显示区域
var divShow = document.createElement('div')

//创建输入框
var input = document.createElement('textarea')
input.cols = 60 //设置列
input.rows = 10 //设置行
//创建按钮
var btn = document.createElement('button')
btn.innerText = '确定' //为按钮添加文字
btn.onclick = function(){//为按钮添加一个事件(click)
    //点击按钮之后获取输入框中的内容 通过trim去除开始和结尾的空格
    var strTxt = input.value.trim() //获取输入框的输入内容
    if(strTxt==''){
        alert('输入内容不能为空')
    }
    else{
        var h5 = document.createElement('h5')//创建标签
        h5.innerText = strTxt//设置标签的文本内容
        divShow.appendChild(h5)
        input.value = ''//清空输入框的内容
    }
}

var btnHtml = document.createElement('button')
btnHtml.innerText = 'HTML' //为按钮添加文字
btnHtml.onclick = function(){//为按钮添加一个事件(click)
    //点击按钮之后获取输入框中的内容 通过trim去除开始和结尾的空格
    var strTxt = input.value.trim() //获取输入框的输入内容
    if(strTxt==''){
        alert('输入内容不能为空')
    }
    else{
        var h5 = document.createElement('h5')//创建标签
        h5.innerHTML = strTxt//设置标签的文本内容
        divShow.appendChild(h5)
        input.value = ''//清空输入框的内容
    }
}

//把标签插入页面中 appendChild在标签的内部加入子节点,子节点出现在最后面
document.body.appendChild(divEditor) //把编辑区域的容器加入页面body
document.body.appendChild(divShow) //把显示区域的容器加入body页面

divEditor.appendChild(input)
divEditor.appendChild(btn)
divEditor.appendChild(btnHtml)