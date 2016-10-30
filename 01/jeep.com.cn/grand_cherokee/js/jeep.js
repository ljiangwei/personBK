var OnelineServiceUrl = document.URL;
function windowOpen(){
	
	window.open('http://serve.chrysler-online.com.cn/?url='+OnelineServiceUrl,'_blank','height=600,width=700,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no');
	_gsTracker.track('/targetpage/header_jeep_test_kefu_btn', true);
	}
function onlineSev(){
	window.open('http://serve.chrysler-online.com.cn/?url='+OnelineServiceUrl,'_blank','height=600,width=700,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no');
	_gsTracker.track('/targetpage/botton_jeep_test_kefu_btn', true);
	
	}
function onlineDealer(dealerId){
	if(dealerId){
	window.open('http://serve.chrysler-online.com.cn/Public/dealer/?'+dealerId,'_blank','height=600,width=700,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no');
	}else{
	window.open('http://serve.chrysler-online.com.cn/Public/dealer/','_blank','height=600,width=700,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no');	
		}
	_gsTracker.track('/targetpage/botton_jeep_test_dealer_btn', true);
	
	}


//车型信息
var jeep_compass = {
	name : '指南者',
	pricestart : 'http://www.jeep.com.cn/js/22.19',
	price : '22.19万-28.09万',
	youhao : '8.4',
	shoufu : '--',
	yuegong : '--'
	}
var jeep_wrangler = {
	name : '牧马人',
	pricestart : 'http://www.jeep.com.cn/js/42.95',
	price : '<span>42.95</span>万-<span>53.99</span>万',
	youhao : '8.8',
	shoufu : '<span>11.98</span>万',
	yuegong : '<span>499</span>元'
	}
var jeep_grand = {
	name : '全新大切诺基',
	pricestart : 'http://www.jeep.com.cn/js/55.99',
	price : '<span>55.99</span>万-<span>75.99</span>万',
	youhao : '8.1',
	shoufu : '<span>16.79</span>万',
	yuegong : '<span>931</span>元'
	}
var jeep_cherokee = {
	name : '进口自由光',
	pricestart : 'http://www.jeep.com.cn/js/37.59',
	price : '<span>37.59</span>万起*',
	youhao : '8.8',
	shoufu : '--',
	yuegong : '--'
	}
var jeep_newcherokee = {
	name : '全新Jeep自由光',
	pricestart : 'http://www.jeep.com.cn/js/20.98',
	price : '<span>20.98</span>万起',
	youhao : '8.1',
	shoufu : '--',
	yuegong : '--'
	}
var jeep_renegade = {
	name : '全新Jeep自由侠',
	pricestart : 'http://www.jeep.com.cn/js/14.18',
	price: '<span>14.18</span>万起',
	youhao : '7.0',
	shoufu : '--',
	yuegong : '--'
	}
/*var jeep_patriot = {
	name : '自由客',
	pricestart : 'http://www.jeep.com.cn/js/22.19',
	price : '22.19万-27.69万',
	youhao : '8.4',
	yundong20 : '前排多级安全气囊<br/>前排座椅主动式安全头枕<br/>制动防抱死系统(ABS)<br/>制动辅助系统(BAS)<br/>电子车身稳定系统(ESC)<br/>电子车身防翻滚系统(ERM)<br/>Sentry Key® 防盗系统<br/>荧光型照明杯托<br/>驾驶员座椅6向手动调节'
	
	}*/
$(function(){
	$(".menutab").hover(function (){
        $(this).children(".menu_item").addClass("menu_item_on");
	    $(".submenu_nav").hide();
		$(".jt").hide();
        $(this).children(".menu_item").next(".submenus").show();
		$(".winBg").show();

   },function(){  
   		$(this).children(".menu_item").removeClass("menu_item_on");   
		$(this).children(".menu_item").next(".submenus").hide();
		$(".winBg").hide();
	   });
   
   $(".submenu_menu a").each(function (i){
		 $(this).mouseover(function (){
		      $("#topmenu .submenu_menu a").removeClass("submenu_on");
			 // $("#topmenu .submenu_menu a").removeClass("jt");
			   $(".jt").hide().eq(i).show();
			  $(this).addClass("submenu_on");
			  $(".submenu_nav").hide().eq(i).show();
		 });
   
   })
   $("#submenu_allroadLi").hover(function (){
	   $("#submenu_allroad").show();
	   
	   },function(){
		 $("#submenu_allroad").hide();  
		   })

	$(".cx-grand .cx-name").html(jeep_grand.name);
	$(".cx-grand .cx-pr").html(jeep_grand.pricestart);
	$(".cx-grand .cx-pr2").html(jeep_grand.price);
	$(".cx-grand .cx-yh").html(jeep_grand.youhao);
	$(".cx-grand .cx-sf").html(jeep_grand.shoufu);
	$(".cx-grand .cx-yg").html(jeep_grand.yuegong);
	$(".cx-cherokee .cx-name").html(jeep_cherokee.name);
	$(".cx-cherokee .cx-pr").html(jeep_cherokee.pricestart);
	$(".cx-cherokee .cx-pr2").html(jeep_cherokee.price);
	$(".cx-cherokee .cx-yh").html(jeep_cherokee.youhao);
	$(".cx-cherokee .cx-sf").html(jeep_cherokee.shoufu);
	$(".cx-cherokee .cx-yg").html(jeep_cherokee.yuegong);
	
	$(".cx-newcherokee .cx-name").html(jeep_newcherokee.name);
	$(".cx-newcherokee .cx-pr").html(jeep_newcherokee.pricestart);
	$(".cx-newcherokee .cx-pr2").html(jeep_newcherokee.price);
	$(".cx-newcherokee .cx-yh").html(jeep_newcherokee.youhao);
	$(".cx-newcherokee .cx-sf").html(jeep_newcherokee.shoufu);
	$(".cx-newcherokee .cx-yg").html(jeep_newcherokee.yuegong);
/*	$(".cx-patriot h3").html(jeep_patriot.name);
	$(".cx-patriot .cx-pr").html(jeep_patriot.pricestart);
	$(".cx-patriot .cx-pr2").html(jeep_patriot.price);
	$(".cx-patriot .cx-yh").html(jeep_patriot.youhao);*/
	
	$(".cx-compass .cx-name").html(jeep_compass.name);
	$(".cx-compass .cx-pr").html(jeep_compass.pricestart);
	$(".cx-compass .cx-pr2").html(jeep_compass.price);
	$(".cx-compass .cx-yh").html(jeep_compass.youhao);
	//$(".cx-renegade .cx-pr2").html(jeep_renegade.pricestart);
	$(".cx-wrangler .cx-name").html(jeep_wrangler.name);
	$(".cx-wrangler .cx-pr").html(jeep_wrangler.pricestart);
	$(".cx-wrangler .cx-pr2").html(jeep_wrangler.price);
	$(".cx-wrangler .cx-yh").html(jeep_wrangler.youhao);
	$(".cx-wrangler .cx-sf").html(jeep_wrangler.shoufu);
	$(".cx-wrangler .cx-yg").html(jeep_wrangler.yuegong);

    //add 2016-5-23
	$(".cx-renegade .cx-name").html(jeep_renegade.name);
	$(".cx-renegade .cx-pr").html(jeep_renegade.pricestart);
	$(".cx-renegade .cx-pr2").html(jeep_renegade.price);
	$(".cx-renegade .cx-yh").html(jeep_renegade.youhao);
	$(".cx-renegade .cx-sf").html(jeep_renegade.shoufu);
	$(".cx-renegade .cx-yg").html(jeep_renegade.yuegong);
})