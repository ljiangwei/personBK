/**
 * Created by Tracy      Mcgrady on 2016/08/29.
 */
window.onload = function () {
    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ulList = ul.children;
    var ol = screen.children[1];
    var imgWidth = screen.offsetWidth;
    var timer = null;
    var arr = document.getElementById("arr");
    var leftArr = document.getElementById("left");
    var rightArr = document.getElementById("right");

//动态创建元素
//动态创建页面
//给ol添加li标签，并且给li标签添加内容,根据ul中有几张图片就创建几个li标签
    for (var i = 0; i < ulList.length; i++) {
//        var li = ulList[i];
        //创建li标签，并添加到ol中
        var li = document.createElement("li");
        ol.appendChild(li);
        //给每个li添加内容
        li.innerHTML = i + 1;
    }
//实现轮播图效果，需要将第一张图片克隆到ul中
    var clonePic = ulList[0].cloneNode(true);
    ul.appendChild(clonePic);
//简单轮播图
//对ol中的li进行操作，先找到ol
    var olList = ol.children;
//第一个小方框默认高亮
    olList[0].className = "current";
    for (var i = 0; i < olList.length; i++) {
        var li = olList[i];
        //设置一个索引值
        li.setAttribute("index", i);
        //注册鼠标放上去的事件
        li.onmouseover = function () {
            //鼠标放到小方框上，小方框高亮(知识放上去的那个高亮，所以想到排他)
            for (var j = 0; j < olList.length; j++) {
                //干掉所有人
                olList[j].className = "";
            }
            //留下我自己
            this.className = "current";

            //对应的小方框的背景图改变
            var idx = this.getAttribute("index");
            var target = -idx * imgWidth;
            animate(ul, {"left":target});

            //让索引值和移动的图片的数量值相等
            pic = square = idx;
        }
    }

    //左右焦点
    //鼠标放上去，左右焦点出现
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    }
    //鼠标离开，左右焦点消失
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(function () {
            rightArr.click();//点击事件的调用就是用click
        }, 2000);
    }
    //点击右键
    var pic = 0;//设置一个变量表示已经移动的图片的数字
    var square = 0;//设置一个变量表示小方框的索引值
    rightArr.onclick = function () {
        //点击一次，图片移动一次，pic累加
        //一直点击，pic一直加，所以需要在图片最后一张时停下来,并将pic等于第一张时的数字，ul的left也变为0
        if (pic == ulList.length-1) {
            pic = 0;
            ul.style.left = "0px";
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, {"left":target});

        //点击一个，索引加1
        //跑到最后时，square一直是增加，所以要在最后的时候停下来，直接返回第一张
        if (square == olList.length-1) {
            square = 0;
        } else {
            square++;
        }

        //只有一个高亮，其他的干掉
        for (var i = 0; i < olList.length; i++) {
            olList[i].className = "";
        }
        olList[square].className = "current";

    }
    //点击左键
    leftArr.onclick = function () {
        //右键点击后，pic已经拥有数值，所以点击左键时，pic--
        if (pic == 0) {
            pic = ulList.length - 1;
            ul.style.left = -pic * imgWidth + "px";
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, {"left":target});


        //右键点击square增加有值，所以左键点击时对应递减
        //跑到第一张时，跑出去
        if (square == 0) {
            square = olList.length - 1
        } else {
            square--;
        }

        //排他
        for (var i = 0; i < olList.length; i++) {
            olList[i].className = "";
        }
        olList[square].className = "current";
    }
    //定时播放
    timer = setInterval(function () {
        rightArr.click();//点击事件的调用就是用click
    }, 2000);
    //鼠标放上去时，停止。即清除定时（上边已经有鼠标经过事件，所以要写在上边，写在下边会覆盖）
    //鼠标离开时，继续执行
    //解决bug
    //图片与小方框的同步（在点击事件中）
    //让鼠标在哪儿停止后，继续在哪儿往后跑（让索引值和跑的图片的数量相等，在小方框的移动事件中设置）
}
