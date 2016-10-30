/**
 * Created by HUCC on 2016/8/20.
 */
//�������  ������ʽ   ����ֵ
//���һ���ص��������ȶ���ִ�����ˣ���ִ������ص�����
function animate(obj, json,fn) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {

        var flag = true;
        for(var k in json) {
            //�������� attr  k
            //����ֵ�� target��  json[k]
            var leader = getStyle(obj, k);//��ȡ����ֵ���˵�λ
            leader = parseInt(leader) || 0;
            var step = (json[k] - leader) / 10;
            //���step�Ǹ����Ļ�����������ȡ����Ӧ������ȡ��
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            //console.log("���뻹ִ����");
 
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
