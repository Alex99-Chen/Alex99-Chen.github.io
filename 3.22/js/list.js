var div = document.createElement('div')
div.style.width = '500px'
div.style.height = '300px'
//rgba设置颜色的时候取值范围为0-255之间
//a的值表示透明度从0-1之间
div.style.backgroundColor = 'rgba(85,0,0,0.6)' //通过rgba方式设置颜色
document.body.appendChild(div)

var h1 = document.createElement('h1')
h1.innerText = '我是一个h1标签'
h1.style.color = 'white'
div.appendChild(h1) //把h1标签插入在div容器的最后面
var h3 = document.createElement('h3')
h3.innerText = '我是一个h3标签'
h3.style.color = 'green'
div.insertBefore(h3,h1)//把h3插入页面中 放在h1的前面

div.appendChild(h3) //在div中再次插入一个h3 h3出现在了h1的后面,而且只出现这一次

var h5 = document.createElement('h5')
h5.innerText = '我是一个h5标签'
div.insertBefore(h5,h3) //把h5标签插入在h3标签的前面

// var h2 = document.createElement('h2')
// h2.innerText = '我是一个h2标签'
console.log(h5.parentNode) //获取指定标签的父节点
console.log(div.lastChild)//获取指定标签的结尾子节点
console.log(div.firstChild)//获取指定标签的第一个子节点
/*
在指定标签的后面加入一个元素
参数一 新加入的标签
参数二 需要加入的标签位置(参考物) 
 */
function insertAfter(newChild,refChild){
    var parentContainer = refChild.parentNode //获取父容器
    var next = refChild.nextElementSibling //获取参考物的下一个节点
    if(next){
        //在下一个节点的上一个位置加入
        parentContainer.insertBefore(newChild,next)//
    }
    else{
        parentContainer.appendChild(newChild) //如果当前节点是结尾节点
    }
}
var span = document.createElement('span')
span.innerText = '我是一个span,应该被插入在h3的后面'
insertAfter(span,h3)
var b = document.createElement('b')
b.innerText = '我是一个b标签,应该被放入h5标签的后面'
insertAfter(b,h5)

console.clear()
//通过div.childNodes 可以获取所有的子节点(标签)
console.dir(div.childNodes)
console.log(div.children)
//删除指定的子节点
div.removeChild(span)
//div.remove() //删除节点