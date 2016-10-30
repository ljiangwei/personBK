var gdAcc;
var isOverAcc=false;
$(function(){

	setDom();

	function setDom() {
		gdAcc= new Accordion({
			target:$('#gdAcc ul'),
			border:1,
			mixWidth:240,
			onStart:accStart,
			onComplete:accComp
		});
		gdAcc.init();
	}
	function accStart(_old, _new) 
	{
		var $new= $('#gdAcc ul li').eq(_new);
		$('#gdAcc ul li').find('p').hide();
		$new.find('p').show();
		$new.find('img').hide();
		// console.log('accStart');
		if(!isOverAcc){
			isOverAcc= true;
			$('#gdAcc .txt').hide();
		}
	}
	function accComp(_old, _new) {
		// console.log('accComp._old:'+ _old+" _new:"+ _new);
		if(_old!= -1){
			$('#gdAcc ul li').each(function (i) {
				if(i!= _old && i!= _new) {
					$(this).find('img').show();
				}else if(i== _old){
					$(this).find('img').fadeIn(100);
				}
			})
		}
	}

	//点击按钮改变座椅
	 $('.bt div').click(function(){
		var index = $(this).index();
		btnColor();
		$('.bt'+(index+1)).find('img').eq(0).attr('src','images/co3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/co3.png*/);
		$('.bt'+ (index+1) +'_font').css('display','block');
		$('.zuoyi img').attr('src','images/zuoyi'+ (index+1) +'.png');
	})
	function btnColor(){
		$('.p').css('display','none');
		$('.bt1 img').eq(0).attr('src','images/co4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/co4.png*/);
		$('.bt2 img').eq(0).attr('src','images/co4.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/co4.png*/);
	}

	//点击LED灯
	$('.mybox2Btn li').click(function(){
		btnLed();
		var index = $(this).index();
		$('.mybox2Btn li').find('img').eq(index).attr('src','images/btn'+(index+1)+'_on.png');

		$('.mybox2 .right').hide();
		$('.mybox2 .right').eq(index).show();
		//.mybox2 .right
	})
	function btnLed(){
		//到时候记得改第一张！！！！！
		$('.mybox2Btn li').find('img').eq(0).attr('src','images/btn1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/btn1.png*/);
		$('.mybox2Btn li').find('img').eq(1).attr('src','images/btn2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/btn2.png*/);
		$('.mybox2Btn li').find('img').eq(2).attr('src','images/btn3.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/btn3.png*/);
		// $('.mybox2 .right').css('background-image','url("")');
	}
})

function trace(argument) {
	// console.log(argument);
}


