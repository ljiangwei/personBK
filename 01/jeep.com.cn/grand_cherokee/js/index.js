var gdAcc, quan2Acc;
var kvNow= 0;

var myDivTop=[];
var myTxt=[];
var mydpan;
var tipName;
var kvLis, indexKvInterval;

var isHao2Open= false;

$(function(){

	kvLis= $id('kv').getElementsByTagName('li');
	mydpan = $id('dpanbox').getElementsByTagName('span');
	setDom();
	addEvt();

	function setDom() {
		gdAcc= new Accordion({
			target:$('#gdAcc ul'),
			border:1,
			mixWidth:60,
			now:0
		});
		gdAcc.init();

		quan2Acc= new Accordion({
			target:$('#quan2 ul'),
			border:1,
			mixWidth:59,
			now:0,
			onStart:function(_old, _new){
				$('#quan2 ul a').eq(_old).hide();
				$('#quan2 ul a').eq(_new).show();
			}
		});
		quan2Acc.init();
	}

	function addEvt() {
		clearInterval(indexKvInterval);
		indexKvInterval= setInterval(indexKvLoop, 4000);
	}

	function indexKvLoop() 
	{
		var _new= (kvNow< $('#dotbox li').length- 1)? kvNow+ 1:0;
		changeKv(kvNow, _new);
		kvNow= _new;
	}
	function dpanShow(_index) {
		TweenLite.from(mydpan[_index],0.3,{delay:(_index*0.2),opacity:0,y:200,ease:Linear.easeNone});
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
		$('#dotbox li').eq(_out).removeClass('on');
		$('#dotbox li').eq(_in).addClass('on');
	}

	//dot
	$('.dotbox li').click(function(){
		var index =$(this).index();
		if(kvNow!= index){
			changeKv(kvNow, index);
			kvNow= index;
			clearInterval(indexKvInterval);
			indexKvInterval= setInterval(indexKvLoop, 4000);
		}
	})
	//skin
	$('.wkskin .nav1 li').click(function(){
		var index=$(this).index();
		$('.wkskin .nav1 li').removeClass('on');
		$(this).addClass('on');
		$('.navBox .navCar').hide();
		$('.navBox .navCar').eq(index).show();
		$('.navBox .navCar').find('li').removeClass('on');
		$('.navBox .navCar').eq(index).find('li').eq(0).addClass('on');
		$('.txtLine .txtl').hide();
		$('.txtLine .txtl ul').hide();
		$('.txtLine .txtl').eq(index).find('ul').eq(0).show();
		$('.txtLine .txtl').eq(index).show();
		if(index<3){

			$('.car .carImg').hide();
			// $('.car .carImg img').css('visibility','hidden');
			// $('.car .carImg').eq(0).find('img').eq(0).css('visibility','visible');
			$('.car .carImg').eq(0).show();

			$('.colorBox ul').hide();
			$('.colorBox ul').eq(0).show();
			// $('.colorBox ul').eq(0).find('p').hide();
			// $('.colorBox ul').eq(0).find('p').eq(0).show();
		} else if(index==3){
			$('.car .carImg').hide();
			// $('.car .carImg img').css('visibility','hidden');
			// $('.car .carImg').eq(3).find('img').eq(0).css('visibility','visible');
			$('.car .carImg').eq(3).show();
			$('.colorBox ul').hide();
			$('.colorBox ul').eq(3).show();
			// $('.colorBox ul').eq(3).find('p').hide();
			// $('.colorBox ul').eq(3).find('p').eq(0).show();
		} else{
			$('.car .carImg').hide();
			// $('.car .carImg img').css('visibility','hidden');
			// $('.car .carImg').eq(index).find('img').eq(0).css('visibility','visible');
			$('.car .carImg').eq(index).show();
			$('.colorBox ul').hide();
			$('.colorBox ul').eq(index).show();
			// $('.colorBox ul').eq(index).find('p').hide();
			// $('.colorBox ul').eq(index).find('p').eq(0).show();
		}
		
	})
	$('.navCar li').each(function(i){
		$(this).click(function(){
			$('.navCar li').removeClass('on');
			$(this).addClass('on');
			$('.txtLine ul').hide();
			$('.txtLine ul').eq(i).show();
		})
		
	})
	$('#navCar3 li').click(function(){
		var index =$(this).index();
		if(index==1){
			$('.car .carImg').hide();
			// $('.car .carImg img').css('visibility','hidden');
			// $('.car .carImg').eq(1).find('img').eq(0).css('visibility','visible');
			$('.car .carImg').eq(1).show();
			$('.colorBox ul').hide();
			$('.colorBox ul').eq(1).show();
			// $('.colorBox ul').eq(1).find('p').hide();
			// $('.colorBox ul').eq(1).find('p').eq(0).show();
		} else if(index==2){
			$('.car .carImg').hide();
			// $('.car .carImg img').css('visibility','hidden');
			// $('.car .carImg').eq(2).find('img').eq(0).css('visibility','visible');
			$('.car .carImg').eq(2).show();
			$('.colorBox ul').hide();
			$('.colorBox ul').eq(2).show();
			// $('.colorBox ul').eq(2).find('p').hide();
			// $('.colorBox ul').eq(2).find('p').eq(0).show();
		} else{
			$('.car .carImg').hide();
			// $('.car .carImg img').css('visibility','hidden');
			// $('.car .carImg').eq(0).find('img').eq(0).css('visibility','visible');
			$('.car .carImg').eq(0).show();
			$('.colorBox ul').hide();
			$('.colorBox ul').eq(0).show();
			// $('.colorBox ul').eq(0).find('p').hide();
			// $('.colorBox ul').eq(0).find('p').eq(0).show();
		}
	})
	$('.colorBox>.ul1 li').click(function(){
		var index =$(this).index();
		$('.colorBox>.ul1 li').find('.bg').attr('src','images/index/co21.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co21.png*/);
		$('.colorBox>.ul1 li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co20.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co20.png*/);
		$(this).find('p').show();
		$('.carImg').eq(0).find('img').css('visibility','hidden');
		$('.carImg').eq(0).find('img').eq(index).css('visibility','visible');
	})
	$('.colorBox>.ul2 li').click(function(){
		var index =$(this).index();
		$('.colorBox>.ul2 li').find('.bg').attr('src','images/index/co21.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co21.png*/);
		$('.colorBox>.ul2 li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co20.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co20.png*/);
		$(this).find('p').show();
		$('.carImg').eq(1).find('img').css('visibility','hidden');
		$('.carImg').eq(1).find('img').eq(index).css('visibility','visible');
	})
	$('.colorBox>.ul3 li').click(function(){
		var index =$(this).index();
		$('.colorBox>.ul3 li').find('.bg').attr('src','images/index/co21.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co21.png*/);
		$('.colorBox>.ul3 li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co20.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co20.png*/);
		$(this).find('p').show();
		$('.carImg').eq(2).find('img').css('visibility','hidden');
		$('.carImg').eq(2).find('img').eq(index).css('visibility','visible');
	})
	$('.colorBox>.ul4 li').click(function(){
		var index =$(this).index();
		$('.colorBox>.ul4 li').find('.bg').attr('src','images/index/co21.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co21.png*/);
		$('.colorBox>.ul4 li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co20.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co20.png*/);
		$(this).find('p').show();
		$('.carImg').eq(3).find('img').css('visibility','hidden');
		$('.carImg').eq(3).find('img').eq(index).css('visibility','visible');
	})
	$('.colorBox>.ul5 li').click(function(){
		var index =$(this).index();
		$('.colorBox>.ul5 li').find('.bg').attr('src','images/index/co21.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co21.png*/);
		$('.colorBox>.ul5 li').find('p').hide();
		$(this).find('.bg').attr('src','images/index/co20.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/index/co20.png*/);
		$(this).find('p').show();
		$('.carImg').eq(4).find('img').css('visibility','hidden');
		$('.carImg').eq(4).find('img').eq(index).css('visibility','visible');
	})
	


	//pup
	$('.closepup, .black').click(function(){
		$('.wkPup').hide();
	})

	//scroll
	$(window).scroll(function(){
		var myscrolltop = $(window).scrollTop();
		if(myscrolltop>0){
			for(var j=1;j<myDivTop.length; j++){
				if ($(window).scrollTop() >= myDivTop[j] && $(window).scrollTop() <= myDivTop[j + 1]) {
					$('#indexp').html(myTxt[j]);
	                tipName=myTxt[j];
	            } else if(myscrolltop>myDivTop[myDivTop.length-1]){
					$('#indexp').html(myTxt[myDivTop.length-1]);
					tipName=myTxt[j];
				}
			}
		} else{
			$('#indexp').html('进口全新大切诺基');
		}

		if(myscrolltop >= 6400 && !isHao2Open){
			isHao2Open= true;
			$('.hao2 .midcon').hide();
			$('.hao2 .anmbox').css('visibility','visible');
			$('.hao2 .anmbox .white').fadeIn(600);
			dpanShow(0);dpanShow(1);dpanShow(2);dpanShow(3);dpanShow(4);
		} 
		else if(myscrolltop < 6100 && isHao2Open){
			isHao2Open= false;
			$('.hao2 .anmbox .white').fadeOut(600);
			$('.hao2 .midcon').show();
			setTimeout(hao2Close,600)
		}
	})
	setMyDivTop();
	setMyTxt();


	
})
function hao2Close() {
	$('.hao2 .anmbox').css('visibility','hidden');
}
function setMyDivTop() {
	var $myDivTop =$('.author');
	for(var i = 0; i < $myDivTop.length; i++){
		myDivTop[i]= $($myDivTop[i]).offset().top;
	}
	// console.log(myDivTop);
}
function setMyTxt() {
	var $myTxt =$('.subNav .miaobox a');
	for(var i = 0; i < $myTxt.length; i++){
		myTxt[i]= $($myTxt[i]).html();
	}
	// console.log(myTxt);
}
function showPup(e) {
	$('.pupcon .midbox').hide();
	$('.pupcon .midbox').eq(e-1).show();
	$('.wkPup').show();
}
















