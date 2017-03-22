for (var i = 0; i < 20; i++) {
    var randomSize = Math.random() * 300 //随机大小
    var rc = document.createElement('div')
    rc.style.width = randomSize + 'px'
    rc.style.height = randomSize + 'px'
    rc.style.borderRadius = '50%'
    rc.style.position = 'absolute'
    var randomTop = Math.random() * 300
    var randomLeft = Math.random() * 500
    rc.style.left = randomLeft + 'px'
    rc.style.top = randomTop + 'px'
    //通过hsl设置随机颜色 0=<Math.random()<1
    var randomColor = Math.floor(Math.random() * 360)
    rc.style.backgroundColor = 'hsl(' + randomColor + ',70%,60%)'
    // rc.innerText = i
    document.body.appendChild(rc)
}