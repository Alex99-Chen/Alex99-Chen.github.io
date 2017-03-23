var main = document.getElementsByClassName('main')[0]
//以下属性为只读 不可修改
console.log(main.clientHeight) //内容区域 包含padding
console.log(main.offsetHeight)//内容区域 外加上边框
console.log(main.clientTop) //距离顶部的位移(边框) 偏移量 y轴方向(内容区域的位移顶部部分)
console.log(main.offsetTop) //距离顶部的距离 margin
/**
 * 以屏幕左上角为参考点 坐标(0,0) 坐标中,参数一表示x轴 参数二表示y轴
 */
console.log('----------')
console.log(main.clientWidth) //300+5+5=310
console.log(main.offsetWidth) // 300+5+5+8+8=326
console.log(main.clientLeft) //8
console.log(main.offsetLeft) //(屏幕尺寸-326)/2

document.body.clientHeight //高
document.body.clientWidth //宽

var divBL = document.createElement('div')//创建一个div
divBL.style.backgroundColor = '#00f' //蓝色背景
divBL.style.width = '300px'//宽度
divBL.style.height = '300px'//高度
divBL.style.position = 'absolute'//位置 定位方式
divBL.style.left = '0'//左 如果数字是0可以不用写单位,否则需要加单位
divBL.style.bottom = '0'//底部
document.body.appendChild(divBL)//插入页面底部
// divBL.onclick = function () {
//     divBL.style.left = divBL.offsetLeft + 1 + 'px'
// }
// setInterval(function(){
//     divBL.style.left = divBL.offsetLeft + 1 + 'px'
// },1000) //根据指定的时间间隔移动div

// requestAnimationFrame //
var directX = 1 //移动的方向
function move() {
    //divBL.style.left = divBL.offsetLeft + 1 + 'px'
    var w = document.body.clientWidth //页面宽度
    var cellWidth = divBL.offsetWidth
    if (divBL.offsetLeft + cellWidth >= w) { //
        console.log('已经移动到结尾位置')
        directX = -1 //移动到屏幕最右边的时候 反向
    }
    if (divBL.offsetLeft <= 0) {
        directX = 1 //移动到屏幕最左边的时候 调转方向
    }
    divBL.style.left = divBL.offsetLeft + directX * 5 + 'px'
    // else{
    // divBL.style.left = divBL.offsetLeft + 1 + 'px'
    // }
    //每秒钟执行60次
    requestAnimationFrame(move) //使用js的动画帧 调用自身移动的方法
}
move()

/**
 * var a = "2"
 * var b = 2
 * a+b //22
 * 把a字符串转换为数字的方法
 *  1. a*1
 *  2. Number(a)
 */
