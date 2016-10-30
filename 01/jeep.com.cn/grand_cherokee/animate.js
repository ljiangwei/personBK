/**
 * Created by HUCC on 2016/8/20.
 */
//任意对象  任意样式   任意值
//添加一个回调函数，等动画执行完了，就执行这个回调函数
function animate(obj, json,fn) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {

        var flag = true;
        for(var k in json) {
            //属性名： attr  k
            //属性值： target：  json[k]
            var leader = getStyle(obj, k);//获取到的值带了单位
            leader = parseInt(leader) || 0;
            var step = (json[k] - leader) / 10;
            //如果step是负数的话，不能向上取整，应该向下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            //console.log("代码还执行吗");
 
            if (leader != json[k]) {
                flag = false;
            }
        }

        if(flag) {
            clearInterval(obj.timer);
            if(fn) {
                fn();
            }

        }

    }, 15);
}


function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[style];
    }
}
