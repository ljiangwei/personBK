var myDivTop=[];
var bottomLine;
var isFixed= true;

$(function () {

	window.onload= setMyDivTop;
	
	$('.sidenav li').each(function(i){
		$(this).click(function(){
			var scTop = $('.carInfo div#pz'+(i+1)).offset().top;
			var liTop = 192+10+(26+10)*(i);
			$(window).scrollTop(scTop-liTop+3);
			$('.sidenav li').removeClass('on');
			$(this).addClass('on');
			trace('click:'+ $(this).index());
		})
	})

	$('.pz').click(function(){
		if($(this).find('a').hasClass('on')){
			$(this).find('a').removeClass('on');
			$(this).find('a').find('img').attr('src','images/icon2.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/icon2.png*/);
			$(this).next().hide();
		} else{
			$(this).find('a').addClass('on');
			$(this).find('a').find('img').attr('src','images/icon1.png'/*tpa=http://www.jeep.com.cn/grand_cherokee/js/images/icon1.png*/);
			$(this).next().show();
		}

		setMyDivTop();
	});
	$("input[name='same']").click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.carInfo').find('.same').show();
		} else{
			$(this).addClass('on');
			$('.carInfo').find('.same').hide();
		}
		setMyDivTop();
	})
	$(window).scroll(function(){

		var myscrolltop = $(window).scrollTop();
		var sideNavTop= $('.sidenav').offset().top;
		if(myscrolltop>0 && bottomLine-myscrolltop> 470)
		{
			for(var j=0;j <myDivTop.length; j++){
				if ($(window).scrollTop() >= myDivTop[j] && $(window).scrollTop() <= myDivTop[j + 1]) {
	                $('.sidenav li').eq(j).addClass('on');
	            } else if(myscrolltop>myDivTop[myDivTop.length-1]){
					$('.sidenav li').removeClass('on');
					$('.sidenav li').eq(myDivTop.length-1).addClass('on');
				} else{
	            	$('.sidenav li').eq(j).removeClass('on');
	            }
			}
			if(!isFixed) {
				isFixed= true;
				$('.sidenav').attr('style', 'top:192px');
			}
		}
		else if(bottomLine-myscrolltop<= 470){
			if(isFixed) {
				isFixed= false;
				$('.sidenav').attr('style', 'position:absolute;bottom:102px;');
			}
		}
		// trace($('#tips').offset().top+":"+ $('.sidenav').offset().top);
		trace(myscrolltop+":"+ bottomLine+":"+ (bottomLine-myscrolltop) );
	})

	function setMyDivTop() {
		var $myDivTop =$('.carInfo div');
		for(var i = 0; i < $myDivTop.length; i++){
			myDivTop[i]= $($myDivTop[i]).offset().top-(192+10+(26+10)*i);
		}

		bottomLine= $('#tips').offset().top; //- 278
	}
})

function down1() {
	var doc1 = new jsPDF();
	doc1.save('http://www.jeep.com.cn/grand_cherokee/js/download/newcherokee_cpsc.pdf');
}
function trace(argument) {
	// console.log(argument);
}

