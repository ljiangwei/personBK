var datas = [
    {
        "width": 500,
        "top": 85,
        "left": 0,
        "opacity": 0.2,
        "zIndex": 2
    },//0
    {
        "width": 550,
        "top": 68,
        "left": 65,
        "opacity": 0.8,
        "zIndex": 3
    },//1
    {
        "width": 600,
        "top": 50,
        "left": 150,
        "opacity": 0.8,
        "zIndex": 3
    },//1
    {
        "width": 700,
        "top": 16,
        "left": 250,
        "opacity": 1,
        "zIndex": 4
    },//2
    {
        width: 600,
        top: 50,
        left: 450,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        width: 550,
        top: 68,
        left: 580,
        opacity: 0.8,
        zIndex: 3
    },//5
    {
        "width": 500,
        "top": 85,
        "left": 700,
        "opacity": 0.2,
        "zIndex": 2
    }//4
];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
//1. 找对象
var wrapper = document.getElementById("wrapper");
var slide = wrapper.children[0];
var ul = slide.children[0];
var lis = ul.children;
var arrow = document.getElementById("arrow");
var leftArr1 = document.getElementById("left1");
var rightArr1 = document.getElementById("right1");
var flag = true;//把节流阀打开了
//2. 让箭头显示隐藏
// 2.1 鼠标经过盒子的时候，让箭头渐渐的显示（opacity）
wrapper.onmouseover = function () {
    animate(arrow, {"opacity": 1});
}
// 2.2 鼠标离开盒子的时候，让箭头渐渐的隐藏
wrapper.onmouseout = function () {
    animate(arrow, {"opacity": 0});
}
//3. 各就各位，分配位置
function assign() {
    for (var i = 0; i < lis.length; i++) {
        animate(lis[i], datas[i], function () {
            //alert("动画执行完了");
            //动画执行完了，就把节流阀打开
            flag = true;
        });
    }
}
//一进来就分配位置
assign();
//4. 点击右箭头,修改配置单，
rightArr1.onclick = function () {
    //我查看节流阀有没有打开，如果打开了才执行
    if(flag) {
        //把节流阀给关了,等动画执行完了才把节流阀打开
        flag = false;
        //让第一个配置跑到最后一个配置
        datas.push(datas.shift());
        //重新分配位置
        assign();
    }
    //不能在这里打开节流阀
    //flag = true;
}
//5. 点击左箭头
leftArr1.onclick = function () {
        //让最后一个配置跑到第一个配置
        datas.unshift(datas.pop());
        assign();
    }
