/**
 * Created by Tracy      Mcgrady on 2016/08/21.
 */
function animate(obj, json, fn) {
    //进来即判断timer是否存在，如果存在，就清掉定时
    if (obj.timer) {
        clearInterval(obj.timer);
    }

    //点击实现动画效果
    obj.timer = setInterval(function () {
        var flag = true;
        //因为使用单一对象，要想同时实现多个功能比较困哪，所以采用对象的方式实现多个功能同时实现的效果
        //对象的遍历使用for....in
        for (var k in json) {
            if (k == "opacity") {
                var leader = getStyle(obj, k);//获取的为带单位的字符串,所以需要取整处理
                leader = leader * 1000;
                leader = parseInt(leader) || 0;
                var step = (json[k] * 1000 - leader) / 10;//取不到完整的值，所以需要改进
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                leader = leader + step;

                obj.style[k] = leader / 1000;

                if (leader != json[k] * 1000) {
                    flag = false;
                }
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//获取的为带单位的字符串,所以需要取整处理
                leader = parseInt(leader) || 0;
                var step = (json[k] - leader) / 10;//取不到完整的值，所以需要改进
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                leader = leader + step;

                obj.style[k] = leader + "px";

                if (leader != target) {
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }

    }, 15);
}

//获取当前对象的所有样式
function getStyle(obj, attr) {
    //能力检测
    //如果支持getComputedStyle,就可以直接使用
    if (getComputedStyle) {
        return getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}