var kvNow= 0;
var myInterval;
var isControl=true;
$(function(){

	var roundAry= [];
	roundAry= $prop($id('dabox').getElementsByTagName('div'), 'class', 'round');
	roundAry= roundAry.concat( $prop($id('yulcon').getElementsByTagName('div'), 'class', 'round') );

	var txtAry= [
		'按下泊车按钮后，空气悬挂系统进入泊车状态，<br>底盘降低40mm，离地间隙为最低165mm，<br>方便驾乘人员下车。',
		'ZF全电子化8速自动变速箱调至运动模式，<br>空气悬挂系统进入高速状态，<br>底盘降低15mm，离地间隙为190mm，<br>提供更好的车身高速动态表现和驾驶乐趣。',
		'Selec-Terrain<sup>®</sup>调至自动模式或雪地模式，<br>空气悬挂系统进入常规状态，<br>离地间隙为205mm正常高度，<br>适合普通常规道路/非铺装路面的舒适驾驶。',
		'Selec-Terrain<sup>®</sup>调至沙地/泥地模式，<br>空气悬挂系统进入普通越野状态，<br>底盘上升33mm，离地间隙为237.5mm，<br>提升特殊环境下的车身通过性。',
		'Selec-Terrain<sup>®</sup>调至岩石模式，<br>空气悬挂系统进入极限越野状态，<br>底盘上升65mm，离地间隙为最高270mm，<br>确保极限环境下的车身通过性。'
		]

	setAnimate();

	function setAnimate() {
		for (var i = 0; i < roundAry.length; i++) {
			// TweenMax.to(roundAry[i], 1, { scale:1.8, opacity:0, ease:Sine.easeOut, repeat:-1});
			TweenMax.to(roundAry[i], 1, { width:36* 1.8, left:'-=14', top:'-=14', alpha:0, ease:Sine.easeOut, repeat:-1});
		}
	}
	var myLis= $('.three_right div');

	clearInterval(myInterval);
	myInterval= setInterval(myLoop, 4000);

	function myLoop() 
	{
		if(isControl){
			isControl= false;

			var _new= (kvNow< $('#myNewBt li').length- 1)? kvNow+ 1:0;

			changeKv(kvNow, _new);
			$('.btbox li').eq(0).find('img').attr('src','images/ex_bt1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt1.png*/);
			$('.btbox li').eq(1).find('img').attr('src','images/ex_bt2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt2.png*/);
			$('.btbox li').eq(2).find('img').attr('src','images/ex_bt3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt3.png*/);
			$('.btbox li').eq(3).find('img').attr('src','images/ex_bt4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt4.png*/);
			$('.btbox li').eq(4).find('img').attr('src','images/ex_bt5.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt5.png*/);

			$('.btbox li').eq(_new).find('img').attr('src','images/ex_bt'+(_new+1)+'_on.png');
			$('.btbox li').find('p').css({'color':'#2f2f2f','border-top':'4px solid #c9c9c9'});
			$('.btbox li').eq(_new).find('p').css({'color':'#ffb100','border-top':'4px solid #ffb100'});

			$('#ex_con1_threeTxt').html(txtAry[_new]);
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

	$('#myRightBox .myLeft').click(function () {
		if(isControl){
			isControl= false;
			if(kvNow>0 && kvNow<$('.btbox li').length){
				index = kvNow-1;
				$('.btbox li').eq(0).find('img').attr('src','images/ex_bt1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt1.png*/);
				$('.btbox li').eq(1).find('img').attr('src','images/ex_bt2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt2.png*/);
				$('.btbox li').eq(2).find('img').attr('src','images/ex_bt3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt3.png*/);
				$('.btbox li').eq(3).find('img').attr('src','images/ex_bt4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt4.png*/);
				$('.btbox li').eq(4).find('img').attr('src','images/ex_bt5.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt5.png*/);

				$('.btbox li').eq(index).find('img').attr('src','images/ex_bt'+(index+1)+'_on.png');
				$('.btbox li').find('p').css({'color':'#2f2f2f','border-top':'4px solid #c9c9c9'});
				$('.btbox li').eq(index).find('p').css({'color':'#ffb100','border-top':'4px solid #ffb100'});

				changeKv(kvNow,index);
				$('#ex_con1_threeTxt').html(txtAry[index]);
				kvNow--;
			} else{
				$('.btbox li').eq(0).find('img').attr('src','images/ex_bt1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt1.png*/);
				$('.btbox li').eq(1).find('img').attr('src','images/ex_bt2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt2.png*/);
				$('.btbox li').eq(2).find('img').attr('src','images/ex_bt3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt3.png*/);
				$('.btbox li').eq(3).find('img').attr('src','images/ex_bt4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt4.png*/);
				$('.btbox li').eq(4).find('img').attr('src','images/ex_bt5.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt5.png*/);

				$('.btbox li').eq(4).find('img').attr('src','images/ex_bt'+(4+1)+'_on.png');
				$('.btbox li').find('p').css({'color':'#2f2f2f','border-top':'4px solid #c9c9c9'});
				$('.btbox li').eq(4).find('p').css({'color':'#ffb100','border-top':'4px solid #ffb100'});

				changeKv(0,4);
				$('#ex_con1_threeTxt').html(txtAry[4]);
				kvNow=4;
			}
			clearInterval(myInterval);
			myInterval= setInterval(myLoop, 5000);
		}
	})
	$('#myRightBox .myRight').click(function () {
		if(isControl){
			isControl= false;
			if( kvNow>=0 && kvNow <$('.btbox li').length-1){
				index = kvNow+1;
				$('.btbox li').eq(0).find('img').attr('src','images/ex_bt1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt1.png*/);
				$('.btbox li').eq(1).find('img').attr('src','images/ex_bt2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt2.png*/);
				$('.btbox li').eq(2).find('img').attr('src','images/ex_bt3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt3.png*/);
				$('.btbox li').eq(3).find('img').attr('src','images/ex_bt4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt4.png*/);
				$('.btbox li').eq(4).find('img').attr('src','images/ex_bt5.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt5.png*/);

				$('.btbox li').eq(index).find('img').attr('src','images/ex_bt'+(index+1)+'_on.png');
				$('.btbox li').find('p').css({'color':'#2f2f2f','border-top':'4px solid #c9c9c9'});
				$('.btbox li').eq(index).find('p').css({'color':'#ffb100','border-top':'4px solid #ffb100'});

				changeKv(kvNow,index);
				$('#ex_con1_threeTxt').html(txtAry[index]);
				kvNow++;
			} else{
				$('.btbox li').eq(0).find('img').attr('src','images/ex_bt1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt1.png*/);
				$('.btbox li').eq(1).find('img').attr('src','images/ex_bt2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt2.png*/);
				$('.btbox li').eq(2).find('img').attr('src','images/ex_bt3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt3.png*/);
				$('.btbox li').eq(3).find('img').attr('src','images/ex_bt4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt4.png*/);
				$('.btbox li').eq(4).find('img').attr('src','images/ex_bt5.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt5.png*/);

				$('.btbox li').eq(0).find('img').attr('src','images/ex_bt'+(0+1)+'_on.png');
				$('.btbox li').find('p').css({'color':'#2f2f2f','border-top':'4px solid #c9c9c9'});
				$('.btbox li').eq(0).find('p').css({'color':'#ffb100','border-top':'4px solid #ffb100'});

				changeKv(4,0);
				$('#ex_con1_threeTxt').html(txtAry[0]);
				kvNow=0;
			}
			

			clearInterval(myInterval);
			myInterval= setInterval(myLoop, 5000);
		}
	})

	$('.btbox li').click(function(){
		var index= $(this).index();
		if(isControl && kvNow!= index){
			isControl= false;
			
			$('.btbox li').eq(0).find('img').attr('src','images/ex_bt1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt1.png*/);
			$('.btbox li').eq(1).find('img').attr('src','images/ex_bt2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt2.png*/);
			$('.btbox li').eq(2).find('img').attr('src','images/ex_bt3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt3.png*/);
			$('.btbox li').eq(3).find('img').attr('src','images/ex_bt4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt4.png*/);
			$('.btbox li').eq(4).find('img').attr('src','images/ex_bt5.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/ex_bt5.png*/);

			$(this).find('img').attr('src','images/ex_bt'+(index+1)+'_on.png');
			$('.btbox li').find('p').css({'color':'#2f2f2f','border-top':'4px solid #c9c9c9'});
			$(this).find('p').css({'color':'#ffb100','border-top':'4px solid #ffb100'});

			// $('.three_right').hide();
			// $('.three_right').eq(index).show();
			changeKv(kvNow,index);
			kvNow= index;
			$('#ex_con1_threeTxt').html(txtAry[index]);

			clearInterval(myInterval);
			myInterval= setInterval(myLoop, 5000);
		}
	})
	$('.dabox a').hover(function () {
		var index =$(this).index();
		if(index==1){
			$('.jiny span').hide();
			$('.datxt p').hide();
			$('.jiny .line1').show();
			$('.jiny .datxt2').show();
		} else if(index==3){
			$('.jiny span').hide();
			$('.datxt p').hide();
			$('.jiny .line2').show();
			$('.jiny .datxt4').show();
		} else{
			$('.jiny span').hide();
			$('.datxt p').hide();
			$('.datxt p').eq(index).show();
		}

		$(this).find('img').each(function () {
			$(this).attr('src', 'images/wh_'+ $(this).attr('data')+ '.png');
		})
	},function () {
		$('.jiny span').hide();
		$('.datxt p').hide();

		$(this).find('img').each(function () {
			$(this).attr('src', 'images/ye_'+ $(this).attr('data')+ '.png');
		})
	})

	$('.yulcon .dot').hover(function () {
		$(this).find('img').each(function () {
			$(this).attr('src', 'images/wh_'+ $(this).attr('data')+ '.png');
		})
	},
	function () {
		$(this).find('img').each(function () {
			$(this).attr('src', 'images/ye_'+ $(this).attr('data')+ '.png');
		})
	});

	$('.yulcon .dot1').click(function(){
		$('.yulcon>div').hide();
		$('.yulcon .dot').hide();
		$('.yulcon>div').eq(0).show();
		$('.yulcon .close').show();
	})
	$('.yulcon .dot2').click(function(){
		$('.yulcon>div').hide();
		$('.yulcon .dot').hide();
		$('.yulcon>div').eq(1).show();
		$('.yulcon .close').show();
	})
	$('.yul .close').click(function(){
		$('.yulcon .close').hide();
		$('.yulcon>div').hide();
		$('.yulcon .dot').show();
	})
})
function $prop (_ary, _prop, _str) {
	var ary= [];
	for (var i = 0; i < _ary.length; i++) {
		var _tp= _ary[i].getAttribute(_prop);
		_tp && _tp.indexOf(_str)!= -1 && ary.push(_ary[i]);
	}
	return ary;
}
function $id (argument) {
	return document.getElementById(argument);
}
function trace (s) {
    // console.log(s);
}




