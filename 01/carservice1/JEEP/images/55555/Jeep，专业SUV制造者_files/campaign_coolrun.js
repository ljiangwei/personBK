
var camCoolRunPopName= 'NONE',
	camCrPicsNow= -1,
	camCrPicsAry;

var cam= 'coolRun';

var swfPlayIntervar= 0;

var isLeicaLoaded= false;

var camChangeInterval= 0,
	camIsOpen= false;


$(index_leica_init);

function index_leica_init() {

	camCrPicsAry= $id('camCoolRunPics').getElementsByTagName('li');

	setDom();
	addEvt();

	function setDom() 
	{

		if(YoukuVideo.ie()>9) {
			isCanPlayType= true;
			camCoolRunPopName= 'VIDEO';
		}else{
			isCanPlayType= false;
			camCoolRunPopName= 'SWF';
		}
		// console.log('setDom.'+ YoukuVideo.ie());

		YoukuVideo.play('XMTU5OTE4MDUxNg==', 'camCrVideo', 960/432);
	}

	function addEvt() 
	{
		// $('#camCrPicsBt').click(camCrPicsBtClick);
		$('#camCrPicsBt2').click(camCrPicsBtClick);

		$('#camCoolRunPopClose').click(campPopCloseClick);
		$('#camCoolRunPopBg').click(campPopCloseClick);
		
		$('#camCoolRunRight').click(camCrRightClick);
		$('#camCoolRunLeft').click(camCrLeftClick);
		
		$('#coolRunVideoBt').click(coolRunVideoClick);
		// $('#camCrSignBt1,#camCrSignBt2').click(camCrSignBtClick);

		// $('#camRightArr').click(camRightClick);
		// $('#camLeftArr').click(camLeftClick);

		// clearInterval(camChangeInterval);
		// camChangeInterval= setInterval(camChangeLoop, 5000);
	}
	// function camChangeLoop() {
	// 	if(!camIsOpen){
	// 		camRightClick();
	// 	}
	// }

	// function camRightClick() {
	// 	if(isControl && !camIsOpen && cam== 'coolRun'){
	// 		isControl=false;

	// 		if(!isLeicaLoaded){
	// 			loadLeica(function() {
	// 				cam= 'leica';
	// 				delayControlTrue(810);

	// 				changeCam($id('camCoolRun'), $id('camLeica'), -1);
	// 			});
	// 		}else{
	// 			cam= 'leica';
	// 			delayControlTrue(810);
	// 			changeCam($id('camCoolRun'), $id('camLeica'), -1);
	// 		}

	// 		// clearInterval(camChangeInterval);
	// 		// camChangeInterval= setInterval(camChangeLoop, 5000);
	// 	}
	// 	else if(isControl && !camIsOpen && cam== 'leica'){
	// 		isControl=false;
	// 		delayControlTrue(810);

	// 		cam= 'coolRun';
	// 		changeCam($id('camLeica'), $id('camCoolRun'), -1);

	// 		// clearInterval(camChangeInterval);
	// 		// camChangeInterval= setInterval(camChangeLoop, 5000);
	// 	}
	// }
	// function camLeftClick() 
	// {
	// 	if(isControl && !camIsOpen && cam== 'leica'){
	// 		isControl=false;
	// 		delayControlTrue(810);

	// 		cam= 'coolRun';
	// 		changeCam($id('camLeica'), $id('camCoolRun'), 1);

	// 		// clearInterval(camChangeInterval);
	// 		// camChangeInterval= setInterval(camChangeLoop, 5000);
	// 	}
	// 	else if(isControl && !camIsOpen && cam== 'coolRun')
	// 	{
	// 		isControl=false;
	// 		if(!isLeicaLoaded){
	// 			loadLeica(function() {
	// 				cam= 'leica';
	// 				delayControlTrue(810);
	// 				changeCam($id('camCoolRun'), $id('camLeica'), 1);
	// 			});
	// 		}else{
	// 			cam= 'leica';
	// 			delayControlTrue(810);
	// 			changeCam($id('camCoolRun'), $id('camLeica'), 1);
	// 		}

	// 		// clearInterval(camChangeInterval);
	// 		// camChangeInterval= setInterval(camChangeLoop, 5000);
	// 	}
	// }

	function coolRunVideoClick() {
		if(isControl){
			isControl= false;
			delayControlTrue(500);

			camIsOpen= true;
			// console.log('coolRunVideoClick.'+ isCanPlayType);

			if(isCanPlayType)
			{
				camCoolRunPopName= 'VIDEO';
				$('#camCoolRunPop').show();
				$('#camCrVideoBox').show();
				$('#camCrVideoBox').css('top', Math.floor( ($('#camCoolRunPop').height() - $('#camCrVideoBox').height()) / 2)  );
				setTimeout(function(){
					$('#camCrVideoBox').css('top', Math.floor( ($('#camCoolRunPop').height() - $('#camCrVideoBox').height()) / 2)  );
				},1000);
				$id('camCrVideo').play();
			}
			else{
				camCoolRunPopName= 'SWF';
				$('#camCoolRunPop').show();
				$('#camCrVideoBox').show();
				$('#camCrVideoBox').css('top', Math.floor( ($('#camCoolRunPop').height() - $('#camCrVideoBox').height()) / 2)  );
				setTimeout(function(){
					$('#camCrVideoBox').css('top', Math.floor( ($('#camCoolRunPop').height() - $('#camCrVideoBox').height()) / 2)  );
				},1000);
				clearInterval(swfPlayIntervar);
				swfPlayIntervar= setInterval(function () {
					if(isVideoReady){
						clearInterval(swfPlayIntervar);
						thisMovie("camCrVideo").jsSay("play");
					}
				}, 100);
			}
			
		}
	}

	function camCrSignBtClick() {
		if(isControl){
			isControl= false;
			delayControlTrue(500);

			camIsOpen= true;
			camCoolRunPopName= 'SIGN';
			$('#camCoolRunPop').show();
			$('#camCoolRunSign').show();
		}
	}

	function camCrPicsBtClick() {
		if(isControl){
			isControl= false;
			delayControlTrue(400);

			camIsOpen= true;
			camCoolRunPopName= 'PICS';
			$('#camCoolRunPop').show();
			$('#camCoolRunPics').show();

			if(camCrPicsNow==-1) {
				openCamCrPics(camCrPicsAry, 0, camCrPicsNow);
				camCrPicsNow= 0;
			}
		}
	}
	
	
	
	function camCrRightClick() {
		if(isControl){
			isControl= false;
			delayControlTrue(300);

			if(camCrPicsNow> -1) attr(camCrPicsAry[camCrPicsNow], 'class', 'out');
			// $('#campLeicaPop').show();
			var _key= (camCrPicsNow<camCrPicsAry.length-1)? camCrPicsNow+ 1: 0;
			
			openCamCrPics(camCrPicsAry, _key, camCrPicsNow);
			camCrPicsNow= _key;
		}
	}
	function camCrLeftClick() {
		if(isControl){
			isControl= false;
			delayControlTrue(300);

			if(camCrPicsNow> -1) attr(camCrPicsAry[camCrPicsNow], 'class', 'out');
			// $('#campLeicaPop').show();
			var _key= (camCrPicsNow> 0)? camCrPicsNow- 1: camCrPicsAry.length-1;

			openCamCrPics(camCrPicsAry, _key, camCrPicsNow);
			camCrPicsNow= _key;
		}
	}

	
	function openCamCrPics(_bigAry, _key, _now) 
	{
		_bigAry[_key].style.display= 'block';
		attr(_bigAry[_key], 'class', 'show');
		if(_now> -1) _bigAry[_now].style.display= 'none';
	}
	function campPopCloseClick() 
	{
		if(camCoolRunPopName== 'SIGN') {
			$('#camCoolRunSign').hide();
		}
		else if(camCoolRunPopName== 'PICS') {
			$('#camCoolRunPics').hide();
		}
		else if(camCoolRunPopName== 'VIDEO'){
			$id('camCrVideo').pause();
			$('#camCrVideoBox').hide();
		}
		else if(camCoolRunPopName== 'SWF'){
			if(!isVideoReady) thisMovie("camCrVideo").jsSay("stop");
			setTimeout(function(){
				thisMovie("camCrVideo").jsSay("stop");
			}, 100);
			isVideoReady= false;
			$('#camCrVideoBox').hide();
		}
		$('#camCoolRunPop').hide();
		camCoolRunPopName= 'NONE';
		camIsOpen= false;
	}

	// function changeCam(_out, _in, _dir) {
	// 	TweenLite.to(_out, 0.8, { left:100* _dir+ '%', ease:Cubic.easeInOut, onComplete:function() {
	// 		_out.style.display= 'none';
	// 	} });

	// 	TweenLite.set(_in, { left:-100* _dir+ '%', display:'block'});
	// 	TweenLite.to(_in, 0.8, { left:0, ease:Cubic.easeInOut });
	// }

	// function loadLeica(_comp) 
	// {
	// 	$("#camLeica").load("index_cam_leica.html", function(){
	// 		trace("ajax camLeica comp.");
	// 		setTimeout(function () {
	// 			index_leica_init();
	// 			isLeicaLoaded= true;
	// 			_comp();
	// 		}, 100);
	// 	});
	// }
}
















