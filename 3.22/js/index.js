var strDiv = '<div '
    +'style="width:200px;height:100px;background-color:#f00"></div>'
document.body.innerHTML = strDiv
/**
 * innerHTML 把html代码解析之后再页面显示
 * innerText 直接把html代码的源码内容以文本的形式显示出来
 */
var divBlue = '<div '
    +'style="width:200px;height:100px;background-color:#00f"></div>'
document.body.innerHTML += divBlue;

//通过document.createElement创建一个html标签对象，参数值为标签名字
var rect = document.createElement('div')
console.dir(rect)
rect.style.backgroundColor = '#0f0'
rect.style.width = '200px'
rect.style.height = '100px'
document.body.appendChild(rect)//把标签插入页面

var circle = document.createElement('div')
circle.style.backgroundColor = 'orange'
circle.style.width = '200px'
circle.style.height = '200px'
circle.style.borderRadius = '50%'
document.body.appendChild(circle)
