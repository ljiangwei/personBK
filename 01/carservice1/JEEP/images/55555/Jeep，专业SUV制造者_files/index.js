var indexKvInterval= 0,
	idKvNow= 0;

var kvPoints,
	kvPointUrl,
	kvLis,
	kvOver= 'NONE';

var bodyWidth, bodyHeight;
var isCanPlayType,
	isVideoReady= false,
	swfPlayIntervar= 0;

var frame= 0;

var scrollTimeout= 0;
var kvPointClass= 'abs';

// var _browserNew={
//     versions:function(){ 
//         var u = navigator.userAgent, app = navigator.appVersion; 
//         return {//移动终端浏览器版本信息 
//             mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
//             android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
//             iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//             ie:app.indexOf('MSIE 6')> -1? 6: app.indexOf('MSIE 7')> -1? 7: app.indexOf('MSIE 8')> -1? 8: app.indexOf('MSIE 9')> -1? 9: 10,
//             app:app
//         };
//     }()
// }


$(index_init);

function index_init() {

	kvPointUrl= [$('#kvPoint li').eq(0).find('img').attr('src'), $('#kvPoint li').eq(1).find('img').attr('src')];
	kvPoints= $id('kvPoint').getElementsByTagName('li');
	kvLis= $id('kv').getElementsByTagName('li');
	
	setDom();
	addEvt();

	function setDom() {
		var i;
		isCanPlayType= (_browserInxex.versions.ie<10)? false: true;

		var videos= $id('kv').getElementsByTagName('video');
		if(videos.length>0){
			if(!isCanPlayType){
				for (i = 0; i < videos.length; i++) {
					var _par= videos[i].parentNode.id;
					var _url= attr(videos[i], 'swf');
					addSwfKv(_par, 'kvSwf'+ i, '/swf/index/player.swf', {video:_url});
				}
			}
		}

		bodyWidth = window.innerWidth || document.documentElement.clientWidth;
		bodyHeight = window.innerHeight || document.documentElement.clientHeight;

		var kvImgInter= setInterval(function () {
			if($('#index_kv_bg').height()>0) {
				clearInterval(kvImgInter);
				windowScroll();
			}
		}, 30);
	}

	function addEvt() {
		clearInterval(indexKvInterval);
		indexKvInterval= setInterval(indexKvLoop, 4000);

		$('#kvArrLeft').click(kvArrLeftClick);
		$('#kvArrRight').click(kvArrRightClick);

		$('#kvPoint li').click(kvPointClick);

		var _winResize;
		if(window.onresize) _winResize= window.onresize;
		window.onresize= function() {
			if(_winResize) _winResize();
			bodyWidth = window.innerWidth || document.documentElement.clientWidth;
			bodyHeight = window.innerHeight || document.documentElement.clientHeight;
			windowScroll();
		}
		window.onscroll= windowScroll;
	}

	function windowScroll() 
	{
		clearTimeout(scrollTimeout);
		scrollTimeout= setTimeout(function () {
			var _scrollLine= (document.body.scrollTop || document.documentElement.scrollTop)+ bodyHeight;
			var _kvLine= $id('index_kv_bg').height+ 65;
			if(_scrollLine> _kvLine){
				if(kvPointClass== 'fix'){
					$('#kvPoint').attr('class', 'kvPoint');
					kvPointClass= 'abs';
				}
			}else{
				if(kvPointClass== 'abs') {
					$('#kvPoint').attr('class', 'kvPointFixed');//_hei- bodyHeight+ 65+ 15);
					kvPointClass= 'fix';
				}
			}
			log('sc:'+ _scrollLine+"  kv:"+ _kvLine+ "  class:"+ kvPointClass);
		}, 20);
	}
	

	function kvPointClick() {
		var _new= $('#kvPoint li').index(this);
		if(isControl && idKvNow!= _new){
			isControl= false;
			delayControlTrue(500);
			
			changeKv(idKvNow, _new);
			idKvNow= _new;
			
			clearInterval(indexKvInterval);
			indexKvInterval= setInterval(indexKvLoop, 4000);
		}
	}

	


	function kvClick(e) 
	{
		trace(isControl);
		if(isControl){
			isControl= false;
			delayControlTrue(400);

			e= e|| event;
			var _new;
			if(e.clientX< bodyWidth*0.5)
			{
				_new= (idKvNow>0)? idKvNow- 1: kvPoints.length-1;
				changeKv(idKvNow, _new);
				idKvNow= _new;
			}
			else if(e.clientX>= bodyWidth*0.5)
			{
				_new= (idKvNow< kvPoints.length-1)? idKvNow+ 1:0;
				changeKv(idKvNow, _new);
				idKvNow= _new;
			}
			clearInterval(indexKvInterval);
			indexKvInterval= setInterval(indexKvLoop, 4000);
		}
	}
	function kvArrLeftClick() {
		// alert('kvArrLeftClick.');
		if(isControl){
			isControl= false;
			delayControlTrue(400);

			_new= (idKvNow>0)? idKvNow- 1: kvPoints.length-1;
			changeKv(idKvNow, _new);
			idKvNow= _new;

			clearInterval(indexKvInterval);
			indexKvInterval= setInterval(indexKvLoop, 4000);
		}
	}
	function kvArrRightClick() {
		// alert('kvArrRightClick.');
		if(isControl){
			isControl= false;
			delayControlTrue(400);

			_new= (idKvNow< kvPoints.length-1)? idKvNow+ 1:0;
			changeKv(idKvNow, _new);
			idKvNow= _new;

			clearInterval(indexKvInterval);
			indexKvInterval= setInterval(indexKvLoop, 4000);
		}
	}





	// kv
	function indexKvLoop() 
	{
		var _new= (idKvNow< kvPoints.length-1)? idKvNow+ 1:0;
		changeKv(idKvNow, _new);
		idKvNow= _new;
	}
	function changeKv(_out, _in) 
	{
		TweenLite.set(kvLis[_out], { zIndex:1});
		TweenLite.set(kvLis[_in], { zIndex:2, opacity:0, display:'block' });
		TweenLite.to(kvLis[_in], 0.4, { opacity:1, ease:Linear.easeNone, onComplete:function() {
			TweenLite.set(kvLis[_out], { opacity:0, display:'none' });
		} });
		// if(_browserNew.ie<10){

		// }

		kvPoints[_out].getElementsByTagName('img')[0].src= kvPointUrl[1];
		kvPoints[_in].getElementsByTagName('img')[0].src= kvPointUrl[0];
	}
}
function $id (argument) {
    return document.getElementById(argument);
}

function addSwfKv (_container, _name, _swf, _vars) {
	var _flashvars = _vars;  
	var _params = { menu:"false", wmode:'transparent' };
	var _attributes = {name:_name};
	swfobject.embedSWF(_swf, _container, "100%", "100%", "9.0.0", "/swf/expressInstall.swf",_flashvars,_params,_attributes);
	setHash('adswf.');
}


function getVideoUrl(_vid, _videoDiv, _id) {
	var video1Url=[];
	$.soap({
		url: "http://events.youku.com/2015/video-source/api/soap/video-files-service.php",
		method: "getVideoFiles",
		appendMethodToURL: false,
		soap12: true,
		data: {
			vid: _vid,
			password: ''
		},
		success: function(soapResponse){
			var response = $.xml2json(soapResponse.toString());
			var soapResult = response.Body.getVideoFilesResponse.getVideoFiles;
			var result = $.xml2json(soapResult.toString());
			if (result.status == 1){
				video1Url[0]= result.data.files.mp4.segs.url;
				$('#'+ _videoDiv).append('<video width="100%" id="'+ _id +'" controls="controls" loop="loop"><source src="'+video1Url[0]+'" type="video/mp4"></video>');
				isVideoReady= true;
			}
		}
	});
}
function setHash(_str) {
	// location.hash= _str+":"+ location.hash;
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
		isVideoReady= true;
	}
}
function log(_str) {
	// $id('log').innerHTML= $id('log').innerHTML+ '<br>'+ _str;
}




