var w = document.body.clientWidth //页面高度
var h = document.body.clientHeight //页面宽度
var arrBalls = []
for (var i = 0; i < 5; i++) {
    //定义一个球
    var ball = document.createElement('div') //定义标签
    ball.style.position = 'absolute' //定位方式
    ball.style.left = Math.random()*(w-120)+'px' //left
    ball.style.top = Math.random()*(h-120)+'px' //top
    ball.style.borderRadius = '50%' //圆角
    ball.style.width = '120px' //宽
    ball.style.height = '120px' //高
    ball.style.backgroundColor = 'orange' //背景色
    ball.dataset['directX'] = 1 //设置x方向
    ball.dataset['directY'] = 1  //设置y方向
    document.body.appendChild(ball) //元素加入页面
    arrBalls.push(ball)
}


// var directX = 1
// var directY = 1

function move() {
    for (var i = 0; i < arrBalls.length; i++) {
        var ball = arrBalls[i]
        if (ball.offsetLeft + ball.offsetWidth >= w) {//移到最右 改变方向
            ball.dataset['directX'] = -1
        }
        if (ball.offsetLeft <= 0) {//移到屏幕最左边的时候 改变方向
            ball.dataset['directX'] = 1
        }
        if (ball.offsetTop + ball.offsetHeight >= h) { //移动到底部 改变方向
            ball.dataset['directY'] = -1
        }
        if (ball.offsetTop <= 0) { //移动到顶部 改变方向
            ball.dataset['directY'] = 1
        }
        ball.style.left = ball.offsetLeft + ball.dataset['directX'] * 2 + 'px' //改变小球位置
        ball.style.top = ball.offsetTop + ball.dataset['directY'] * 4 + 'px' //改变y轴方向位置
    }

    requestAnimationFrame(move)//动画帧调用
}
move()
//重置窗口大小事件
window.onresize = function () { //改变窗口大小之后 重置w和h的值
    w = document.body.clientWidth
    h = document.body.clientHeight
}