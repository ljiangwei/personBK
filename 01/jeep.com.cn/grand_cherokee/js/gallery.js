
var isControl=true;
var videoNow= -1;
var maxHight=$(window).height()-100;

var videoType= '';
var videoId= '';

var wgPicNow=0;
var nspicNow=0;
var imgAry= new Array();
var imgAry2= new Array();
var bigPicAry, bigPicInterval;

var area= 'galleryImg';
var $myImgAry;


$(function(){
    

    setDom();
    addEvt();

    function setDom() {
        $myImgAry= $('.'+ area+ ' a');
        setBigPicAry(area+ " a");
        trace('sd:'+ $myImgAry.length);

        videoType= YoukuVideo.ie()>9? 'video':'swf';

        YoukuVideo.play('XMTU4NDY1Nzk2NA==', 'videoContainer1', 'player1');
        YoukuVideo.play('XMTU4NDY1NzM3Ng==', 'videoContainer2', 'player2');
        YoukuVideo.play('XMTU4NDY1MDkyNA==', 'videoContainer3', 'player3');
        YoukuVideo.play('XMTU4NDY1MDQ3Mg==', 'videoContainer4', 'player4');
        // YoukuVideo.play('XMTU4NDY1NzY4OA==', 'videoContainer5', 'player5');
        // YoukuVideo.play('XOTIwMzgxODQ0', 'videoContainer5', 'player5');

        if(videoType=='video'){
            var _video5= '../media/video5.mp4'/*tpa=http://www.jeep.com.cn/grand_cherokee/media/video5.mp4*/;
            YoukuVideo.addVideo('videoContainer5', _video5);
        }else{
            YoukuVideo.swf('XMTU4NDY1NzY4OA==', 'videoContainer5', 'player5');
        }
        
    }
    function addEvt() {
        $(".galleryBtn a").click(titleClick);
        $('.galleryImg a').click(galleryImgClick);
        $('.galleryvd a').click(galleryVdClick);
        $('#videoClose').click(videoCloseClick);

        $('.blackAll .close').click(pubImgClose);
        $('#imgBg').click(pubImgClose);
    }

    function videoCloseClick() {
        trace('videoCloseClick.'+ isControl)

        if(isControl){
            isControl= false;
            delayControlTrue(300);

            if(videoType== 'video'){
                if( $id('videoContainer'+ (videoNow+1)).nodeName == 'video' || $id('videoContainer'+ (videoNow+1)).nodeName == 'VIDEO' ) $id('videoContainer'+ (videoNow+1)).pause();
            }
            else if(videoType== 'swf'){
                thisMovie('videoContainer'+ (videoNow+1)).jsSay("stop");
            }

            $('#videoPop .videoBox').eq(videoNow).hide();
            $('#videoPop').hide();

            videoNow= -1;
        }
    }

    function galleryVdClick() {
        videoNow= $(this).index();
        $('#videoPop').show();
        $('#videoPop .videoBox').eq(videoNow).show();
        trace('vd:'+ videoNow);
        // videoId= $('#videoPop .videoBox').eq(videoNow).find('')
        if( $id('videoContainer'+ (videoNow+1)).nodeName == 'video' || $id('videoContainer'+ (videoNow+1)).nodeName == 'VIDEO' ) $id('videoContainer'+ (videoNow+1)).play();
    }

    //nav
    function titleClick() 
    {
        var thisid = $(this).attr("data");
        $(".galleryBtn a").removeClass("on").eq($(this).index()).addClass("on");
        $(".galleryall").hide();
        $(".gallery"+thisid).show();

        if(thisid!= 'vd'){
            $myImgAry= $('.gallery'+ thisid+ ' a');
            area= 'gallery'+ (thisid=='all'? 'Img':thisid);

            setBigPicAry(area+ " a");
        }
    }

    function galleryImgClick() {
        if(isControl){
            isControl= false;
            wgPicNow= $myImgAry.index($(this));
            setBicLi($(this), wgPicNow, imgAry);
        }
        trace('imgs.click.'+ wgPicNow);
    }

    function setBigPicAry(_a) 
    {
        imgAry= [];
        $('.'+_a).each(function (i) {
            imgAry[i]= $(this).attr('data-url');
        })
        // trace(_a+ ': '+imgAry[0]);

        var wr='';
        $('.'+_a).each(function (i) {
             wr+='<li> <img src="'+imgAry[i]+'" /> </li>'
        });
        $('.blackBox ul').empty().append(wr);
        bigPicAry= $('.blackBox ul').find('li');
    }


    //close
    function pubImgClose() {
        bigPicAry.eq(wgPicNow).css({'display':'none'});
        wgPicNow= -1;
        $('.blackAll').hide();
    }
    //hover
    $('.galleryall a').hover(function(){
        $(this).find('img').attr('id','box');
        TweenMax.to($id('box'), 1, { scale:1.1, ease:Cubic.easeOut});
    },function(){
        TweenMax.to($id('box'), 1, { scale:1, ease:Cubic.easeOut});
        $(this).find('img').attr('id','');
    });
    
    
    function setBicLi(_this, _key, ary) {
        var alength=ary.length;
        var wgIndex=_key;
        
        $('.blackAll').show();
        setBigPicTop(bigPicAry.eq(wgIndex));
    }

    function setBigPicTop(_bigImg) 
    {
        _bigImg.css({'display':'block'});
        // trace('setBigPicTop.');
        if(_bigImg.height()<= 0){
            clearInterval(bigPicInterval);
            bigPicInterval= setInterval(function () {
            if(_bigImg.height()>0){
                _bigImg.css({'margin-top':Math.floor(_bigImg.height()/2)* -1});
                _bigImg.css({'opacity':1});
                isControl= true;
                clearInterval(bigPicInterval);
                if(_bigImg.height()>maxHight){
                	setMyHight(_bigImg);
                }
                }
            }, 33);
        }else{
            isControl= true;
            _bigImg.css({'margin-top':Math.floor(_bigImg.height()/2)* -1, 'opacity':1});
        }
    }
    function setMyHight(_img) {
    	var biLi=maxHight/_img.height();
    	_img.find('img').css("width",biLi*940);
    	var newHight=_img.find('img').height();
    	_img.css('margin-top',Math.floor(newHight/2)* -1);
    }
    //left
    $('.blackBox .left').click(function(){
        if(isControl){
            isControl =false;
            
            bigPicAry.eq(wgPicNow).css({'display':'none'});
            wgPicNow= (wgPicNow> 0)? wgPicNow-1: bigPicAry.length-1;
            setBigPicTop(bigPicAry.eq(wgPicNow));
        }
    })
    //right
    $('.blackBox .right').click(function(){
        if(isControl){
            isControl =false;

            bigPicAry.eq(wgPicNow).css({'display':'none'});
            wgPicNow= (wgPicNow< bigPicAry.length-1)? wgPicNow+1: 0;
            setBigPicTop(bigPicAry.eq(wgPicNow));
        }
    })
    //动画部分
    function changeCam(_out, _in, _dir) {
        TweenLite.to(_out, 0.8, { left:100* _dir+ '%', ease:Cubic.easeInOut, onComplete:function() {
            _out.style.display= 'none';
        } });
        TweenLite.set(_in, { left:-100* _dir+ '%', display:'block'});
        TweenLite.to(_in, 0.8, { left:0, ease:Cubic.easeInOut });
    }
    //motion
})


function $id(_id) {
    return document.getElementById(_id);
}   
function trace(argument) {
    // console.log(argument);
}
function delayControlTrue (_delay) {
    _delay = _delay || 0;
    setTimeout(function () {
        isControl= true;
    }, _delay)
}

function thisMovie(flashName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[flashName];
    } else {
        return document[flashName];
    }
}
function asSay(argument) {
    if(argument=='swfPlayerReady'){
        setTimeout(function (){ 
            thisMovie('videoContainer'+ (videoNow+1)).jsSay('play');
        }, 100);
    }
}


