/**
 * Created by Paul on 2016/4/6.
 */
 var isControl= true;
 var indexSearchKeyword;

var _browserNew={
    versions:function(){ 
        var u = navigator.userAgent, app = navigator.appVersion; 
        return {//移动终端浏览器版本信息 
            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            ie:app.indexOf('MSIE 6')> -1? 6: app.indexOf('MSIE 7')> -1? 7: app.indexOf('MSIE 8')> -1? 8: app.indexOf('MSIE 9')> -1? 9: 10,
            app:app
        };
    }()
}

_browserNew.ie= _browserNew.versions.ie;

$(function() {
    header_init();
});

function header_init(){
    trace('jq init.');

    indexSearchKeyword= $('#hdSearchIp').attr('placeholder');
    
    setDom();
    addEvt();

    function setDom() {

        if(_browserNew.versions.iPhone || _browserNew.versions.android){
            window.location = "http://www.jeep.com.cn/mobile/";
        }else if(_browserNew.versions.ie==7){
            $('head').append('<link href="../css/ie7_new.css"/*tpa=http://www.jeep.com.cn/css/ie7_new.css*/ rel="stylesheet" type="text/css">');

        }else if(_browserNew.versions.ie==6){
            $('head').append('<link href="../css/ie6_new.css"/*tpa=http://www.jeep.com.cn/css/ie6_new.css*/ rel="stylesheet" type="text/css">');
        }
    
        if(_browserNew.versions.ie<10){
            $('#hdNavJeepLife').css({"padding-top":"21px", "height":"44px"});
            $('.deale a,.appointment a').css({"padding-top":"17px"});
        }

        if( $('.subnav').length )
        {
        	if( $('.kvDiv').length ){
				$('.kvDiv').css('margin-top','34px');
        	}
        	else if( $('.specification').length ){
        		$('.specification').css('margin-top','34px');
        	}
        	else if( $('.photoWrap').length ){
        		$('.photoWrap').css('margin-top','34px');
        	}
        	else if( $('.interior_cont').length ){
        		$('.interior_cont').css('margin-top','34px');
        	}
        	else{
        		$('.subnav').next().css('margin-top','34px');
        	}

            if( $('.MainContainer').length ){
                $('.MainContainer').css('margin-top','0');
            }
        } 
    }
    function addEvt() {
        $('.hdNavTab').hover(hdNavTabHOver, hdNavTabHOut);
        $('.rightNav a').hover(rNavOver, rNavOut);
        
        $('#rNavQaOnline,#hdSubNavQaOnline,#ftQaOnline').click(function(){
            window.open("http://serve.chrysler-online.com.cn/?url=http://www.jeep.com.cn/","_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=700, height=600");
        });

        $('#hdSubSearchBtn').click(function() {
            if($('#hdSearchIp').val() != '') indexSearchKeyword= $('#hdSearchIp').val();
            window.location= 'http://www.jeep.com.cn/results/?q='+ indexSearchKeyword
        })

        $('#rNavWechatQrBt,#ftWechatQrBt').click(function () {
            $('#wechatQr').show();
        });

        $('#wechatQrClose, #wechatQrBg').click(function(){
            $('#wechatQr').hide();
        })

        var _winResize, bodyWidth = window.innerWidth || document.documentElement.clientWidth;
        if(window.onresize) _winResize= window.onresize;
        setNavWidth(bodyWidth);
        
        window.onresize= function() {
            if(_winResize) _winResize();
            bodyWidth = window.innerWidth || document.documentElement.clientWidth;
            setNavWidth(bodyWidth);
        }
        function setNavWidth(_bodyWidth) {
            if(_bodyWidth< 1004){
                $('.headBox').css('width', 1004);
            }
            else if(_bodyWidth< 1258){
                $('.headBox').css('width', _bodyWidth);
            }
            else{
                $('.headBox').css('width', 1258);
            }
        }
    }

    function hdNavTabHOver() {
        $(this).addClass('on');
        if($(this).children('div').length>0) $(this).children('div').eq(0).show();

        if($(this).attr('id') == 'hdNavCar'){
            $('#hdCarMasker').show();
        }
    }
    function hdNavTabHOut() {
        $(this).removeClass('on');
        if($(this).children('div').length>0) $(this).children('div').eq(0).hide();

        if($(this).attr('id') == 'hdNavCar'){
            $('#hdCarMasker').hide();
        }
    }
    function rNavOver() {
        // this.style.width= '219px';
        if(_browserNew.ie<10) TweenLite.set(this, { width:219 });
        else TweenLite.to(this, 0.4, { width:219 });
        // alert(this.style.width);
    }
    function rNavOut() {
        // this.style.width= '56px';
        if(_browserNew.ie<10) TweenLite.set(this, { width:56 });
        else TweenLite.to(this, 0.4, { width:56 });
    }

    function getParastr(strname) 
    { 
        var hrefstr,pos,parastr,para,tempstr; 
        hrefstr = window.location.href;
        pos = hrefstr.indexOf("?");
        parastr = hrefstr.substring(pos+1); 
        para = parastr.split("&"); 
        tempstr=""; 
        for(var i=0;i<para.length;i++) 
        {  
            tempstr = para[i];  
            pos = tempstr.indexOf("=");  
            if(tempstr.substring(0,pos) == strname) 
            {   
                return tempstr.substring(pos+1);  
            }
        }
        return "";
    } 
}



function $id (argument) {
    return document.getElementById(argument);
}
function $indexOf (_ary, _ele) {
    for (var i = 0; i < _ary.length; i++) {
        if(_ary[i] == _ele) return i;
    }
    return -1;
}
function trace (argument) {
    // console.log(argument);
}
function attr (_target, _prop, _str) {
    if(_str== undefined){
        return _target.getAttribute(_prop);
    }else{
        _target.setAttribute(_prop, _str);
    }
}
function $prop (_ary, _prop, _str) {
    var ary= [], _attr;
    for (var i = 0; i < _ary.length; i++) {
        _attr= _ary[i].getAttribute(_prop);
        _attr && _attr.indexOf(_str)!= -1 && ary.push(_ary[i]);
    }
    return ary;
}
function delayControlTrue (_delay) {
    setTimeout(function () {
        isControl= true;
    }, _delay)
}









