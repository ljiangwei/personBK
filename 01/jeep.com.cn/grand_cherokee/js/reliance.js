
var videoType= '';
var videoId= '';
var isControl=true;
var isVideoControl=true;

var videoNow= 0; 
var kvNow= 0;
var myInterval;

var isPlay=false;
var videoInterval;
$(function () {


	var $reJdTxts= $('#reJd .rightTxtBox div');
	var $reKvTxts= $('#reKvTxtBox dl');
	var myLis= $id('myLi1').getElementsByTagName('li');
	var videoLi= $id('videoUl').getElementsByTagName('li');
	
    setDom();
	addEvt();

	function setDom() {

		YoukuVideo.play('XMTU4NDY1MDkyNA==', 'videoContainer1', 'player1');
        YoukuVideo.play('XMTU4NDY1MjUyNA==', 'videoContainer2', 'player2');
        YoukuVideo.play('XMTU4NDY1MDQ3Mg==', 'videoContainer3', 'player3');
        YoukuVideo.play('XMTU4NDY0NzM4OA==', 'videoContainer4', 'player4');
        YoukuVideo.play('XMTU4NDY1MjA2OA==', 'videoContainer5', 'player5');
        
        videoType= YoukuVideo.ie()>9? 'video':'swf';
	}
	function addEvt() 
	{
		$('#reJd .bts li').click(reJdBtsClick);
		$('#kvBtBox li').click(kvBtsClick);
		$('#videoUl a').click(playBtClick);
		kvBtsHover();
		$('#lrbox .left').click(leftClick);
		$('#lrbox .right').click(rightClick);

		clearInterval(myInterval);
		myInterval= setInterval(myLoop, 8000);

		clearInterval(videoInterval)
		videoInterval= setInterval(videoLoop, 5000);

		
	}
	function leftClick() {
		if(isControl){
			isControl= false;
			if( kvNow>0 && kvNow<$('#kvBtBox li').length){
				_key=kvNow-1;

				changeKv(kvNow, _key);
				
				$reKvTxts.eq(kvNow).hide();
				$reKvTxts.eq(_key).show();

				changeIcon($('#kvBtBox img'), kvNow, _key);
				kvNow--;
			} else{
				changeKv(0, 6);
				
				$reKvTxts.eq(0).hide();
				$reKvTxts.eq(6).show();

				changeIcon($('#kvBtBox img'), 0, 6);
				kvNow=6;
			}
			clearInterval(myInterval);
			myInterval= setInterval(myLoop, 8000);
		}
	}
	function rightClick() {
		if(isControl){
			isControl= false;
			if( kvNow>=0 && kvNow <$('#kvBtBox li').length-1){
				_key=kvNow+1;

				changeKv(kvNow, _key);
				
				$reKvTxts.eq(kvNow).hide();
				$reKvTxts.eq(_key).show();

				changeIcon($('#kvBtBox img'), kvNow, _key);
				kvNow++;
			} else{
				changeKv(6, 0);
				
				$reKvTxts.eq(6).hide();
				$reKvTxts.eq(0).show();

				changeIcon($('#kvBtBox img'), 6, 0);
				kvNow=0;
			}
			clearInterval(myInterval);
			myInterval= setInterval(myLoop, 8000);
		}
	}
	function kvBtsHover() {
		$('#kvBtBox li').mouseenter(function(){
			var index =$(this).index();
			if(index!=kvNow){
				$(this).find('img').attr('src','images/kv1'+index+'-y.png');
			}
		})
		$('#kvBtBox li').mouseleave(function(){
			var index =$(this).index();
			if(index!=kvNow){
				$(this).find('img').attr('src','images/kv1'+index+'.png');
			}
		})
	}
	function myLoop() 
	{
		if(isControl){
			isControl= false;

			var _new= (kvNow< $('#kvBtBox li').length- 1)? kvNow+ 1:0;

			changeKv(kvNow, _new);

			$reKvTxts.eq(kvNow).hide();
			$reKvTxts.eq(_new).show();

			changeIcon($('#kvBtBox img'), kvNow, _new);

			kvNow= _new;
		}
		
	}
	function changeKv(_out, _in) 
	{
		TweenLite.set(myLis[_out], { zIndex:1 });
		TweenLite.set(myLis[_in], {  opacity:0, display:'block', zIndex:2 });
		TweenLite.to(myLis[_in], 0.4, { opacity:1, ease:Linear.easeNone, onComplete:function() {
			TweenLite.set(myLis[_out], { opacity:0, display:'none', zIndex:1 });
			isControl= true;
		} });
	}
	function playBtClick() {
		// if(videoNow== -1){
		// 	videoNow= 0;
			isPlay=true;

			$(this).hide();
			$('#videoBox'+ (videoNow+1)).show();
			if( $id('videoContainer'+ (videoNow+1)).nodeName == 'video' || $id('videoContainer'+ (videoNow+1)).nodeName == 'VIDEO' ) {
				$id('videoContainer'+ (videoNow+1)).play();
			}else{
				setTimeout(function (){ 
		            thisMovie('videoContainer'+ (videoNow+1)).jsSay('play');
		        }, 100);
			}
		// }
	}

	function kvBtsClick() {
		var _key= $(this).index();
		if(isControl && kvNow!=_key){
			isControl= false;

			
			trace(_key);

			// $('#reKv').css({'background-image':'images/kv0'+ (_key+1) +'.jpg'});
			changeKv(kvNow, _key);
			
			$reKvTxts.eq(kvNow).hide();
			$reKvTxts.eq(_key).show();

			changeIcon($('#kvBtBox img'), kvNow, _key);
			kvNow= _key;

			clearInterval(myInterval);
			myInterval= setInterval(myLoop, 8000);
		}
	}

	function reJdBtsClick() {
		var _key= $(this).index();
		if(isVideoControl&& videoNow!=_key){
			isVideoControl=false;
			
			trace(_key);

			$reJdTxts.eq(videoNow).hide();
			$reJdTxts.eq(_key).show();
			changeIcon($('#reJd .bts img'), videoNow, _key);
			changeVideo(videoNow, _key);

			videoNow= _key;
			clearInterval(videoInterval)
			videoInterval= setInterval(videoLoop, 5000);
		}
	}
	function videoLoop() {
		if(!isPlay&&isVideoControl){
			isVideoControl=false;
			var _key =(videoNow<$('#videoUl li').length-1)?videoNow+1:0;

			$reJdTxts.eq(videoNow).hide();
			$reJdTxts.eq(_key).show();
			changeIcon($('#reJd .bts img'), videoNow, _key);
			changeVideo(videoNow, _key);

			videoNow= _key;
		}
	}
	function changeIcon(_imgs, _out, _in) {
		_imgs.eq(_out).attr('src', _imgs.eq(_out).attr('data')+ '.png');
		_imgs.eq(_in).attr('src', _imgs.eq(_in).attr('data')+ '-y.png');
	}
	function changeVideo(_out,_in) {
		if(isPlay){
			isPlay=false;
			if(videoType== 'video'){
				$id('videoContainer'+ (_out+1)).pause();
				$id('videoContainer'+ (_out+1)).currentTime= 0;

			}else{
				thisMovie('videoContainer'+ (_out+1)).jsSay("stop");
			}
			$('#videoUl a').eq(_out).show();
			$('#videoBox'+(_out+1)).hide();
		}
		
		// $('#videoUl li').eq(_out).hide();
		// $('#videoUl li').eq(_in).show();
		TweenLite.set(videoLi[_out], { zIndex:1 });
		TweenLite.set(videoLi[_in], {  opacity:0, display:'block', zIndex:2 });
		TweenLite.to(videoLi[_in], 0.4, { opacity:1, ease:Linear.easeNone, onComplete:function() {
			TweenLite.set(videoLi[_out], { opacity:0, display:'none', zIndex:1 });
			isVideoControl= true;
		} });
	}
	// function changeVideo(_out, _in) {
	// 	if(_out!= -1){
	// 		if(videoType== 'video'){
	// 			$id('videoContainer'+ (_out+1)).pause();
	// 			$id('videoContainer'+ (_out+1)).currentTime= 0;
	// 		}else{
	// 			thisMovie('videoContainer'+ (_out+1)).jsSay("stop");
	// 		}
	// 	}
	// 	$('#videoBox'+ (_out+1)).hide();

	// 	$('#videoBox'+ (_in+1)).show();
	// 	if( $id('videoContainer'+ (_in+1)).nodeName == 'video' || $id('videoContainer'+ (_in+1)).nodeName == 'VIDEO' ) {
	// 		$id('videoContainer'+ (_in+1)).play();
	// 	}
	// }
});
function trace(argument) {
	// console.log(argument);
}
function $id(_id) {
    return document.getElementById(_id);
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


