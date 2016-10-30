// share

  var shareTitle = "访问Jeep中国官网,了解Chrysler克莱斯勒、Jeep全车系产品:全新原装进口大切诺基,牧马人,Jeep指南者,自由客的产品详情、精美图片、新闻历史、原装配件、技术专利等、更可注册信息参与体验全系产品。  http://www.jeep.com.cn";
  var shareUrl = "";
  var sharePic="http://"+document.domain+"/images/jeep.jpg";

function shareWB(){
    var url = shareUrl;
    var type = '3';
    var count = ''; /**是否显示分享数，1显示(可选)*/
    //var appkey = '89984785'; /**您申请的应用appkey,显示分享来源(可选)*/
	var appkey = '';
    var title = shareTitle; /**分享的文字内容(可选，默认为所在页面的title)*/
    var pic = sharePic; /**分享图片的路径(可选)*/
    var ralateUid = '1669823982'; /**关联用户的UID，分享微博会@该用户(可选)*/
	var language = 'zh_cn'; /**设置语言，zh_cn|zh_tw(可选)*/
    
	window.open("http://service.weibo.com/share/share.php?url="+encodeURIComponent(url)+"&appkey="+appkey+"&title="+encodeURIComponent(title)+"&pic="+encodeURIComponent(pic)+"&ralateUid="+ralateUid+"&language="+language,"_blank","width=615,height=505");
}
	
   function shareDouban(id,url,title,pic){
		if(title==null || title=="")
		{
			title = shareTitle;
		}
		if(url==null || url=="")
		{
			url = shareUrl;
		}
		if(id!=null && id!="")
		{
			url =  url+"?id="+id;
		}
		var f='http://www.douban.com/recommend/?';
		var u=url;//||document.location;
		var p=['url=',encodeURIComponent(u),'&title=',encodeURIComponent(title),'&message=""','&image_src=',encodeURIComponent(pic)].join('');
		window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=550,height=460,left=',(screen.width-550)/2,',top=',(screen.height-
460)/2].join(''));
	}	
	   function wenxin(id,url,title,pic){
			window.open ('../weixin.html','newwindow','height=455,width=607,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no') 
	}

	function shareRR(id,url,title,pic){
		if(title==null || title=="")
		{
			title = shareTitle;
		}
		if(url==null || url=="")
		{
			url = shareUrl;
		}
		if(id!=null && id!="")
		{
			url =  url+"?id="+id;
		}
		var f='http://share.renren.com/share/buttonshare.do?';
		var u=url;//||document.location;
		var p=['link=',encodeURIComponent(u),'&title=',encodeURIComponent(title),'&message=""','&image_src=',encodeURIComponent(pic)].join('');
		window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=550,height=460,left=',(screen.width-550)/2,',top=',(screen.height-
460)/2].join(''));
	}
	
function shareQQ(){
		
		var _t = encodeURI("访问Jeep中国官网,了解Chrysler克莱斯勒、Jeep全车系产品:全新原装进口大切诺基,牧马人,Jeep指南者,自由客的产品详情、精美图片、新闻历史、原装配件、技术专利等、更可注册信息参与体验全系产品。  http://www.jeep.com.cn");
		var _url = encodeURIComponent(shareUrl);
		var _appkey = encodeURI("");//讯玫appkey
		var _pic = encodeURI("http://"+document.domain+"/images/jeep.jpg");//纾簐ar _pic='图片url1|图片url2|图片url3....
		var _site = shareUrl;//站址
		var _u = ' http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
		window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );

		
	}