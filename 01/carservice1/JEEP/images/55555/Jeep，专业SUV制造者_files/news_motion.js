var indexNews,
	indexNewsWidth= 24.53+ 0.626,  //css  24.53%;
	indexNewsAry= [],
	indexNewsInterval= 0;

$(index_news_init);

function index_news_init() {
	
	indexNews= $id('index_news').getElementsByTagName('li');

	setDom();
	if(indexNews.length>4) {
		addEvt();
	}else{
		$('#newsArrLeft img,#newsArrRight img').hide();
	}
	
	function setDom() 
	{
		for (var i = 0; i < indexNews.length; i++) {
			indexNewsAry.push(indexNews[i]);
			indexNews[i].style.top= 0;
			indexNews[i].style.left= indexNewsWidth* i+ '%';
			indexNews[i].style.position= 'absolute';
		}
	}

	function addEvt() {
		setTimeout(function(){
			clearInterval(indexNewsInterval);
			indexNewsInterval= setInterval(indexNewLoop, 4000);
		}, 700);
		
		$('#newsArrLeft').click(newsArrLeftClick);
		$('#newsArrRight').click(newsArrRightClick);
	}


	function newsArrLeftClick() {
		if(isControl){
			isControl= false;
			delayControlTrue(550);

			changeNewsLeft();
			clearInterval(indexNewsInterval);
			indexNewsInterval= setInterval(indexNewLoop, 4000);
		}
	}
	function newsArrRightClick() {
		if(isControl){
			isControl= false;
			delayControlTrue(550);

			trace('newsArrRightClick.');
			changeNews();
			clearInterval(indexNewsInterval);
			indexNewsInterval= setInterval(indexNewLoop, 4000);
		}
	}

	function indexNewLoop() {
		changeNews();
	}

	//////// motion
	function changeNews() {
		for (var i = 0; i < indexNewsAry.length; i++) {
			if(i<indexNewsAry.length-1) TweenLite.to(indexNewsAry[i], 0.5, { left:indexNewsWidth* (i-1)+ '%', ease:Cubic.easeInOut });
			else TweenLite.to(indexNewsAry[i], 0.5, { left:indexNewsWidth* (i-1)+ '%', ease:Cubic.easeInOut, onComplete:function(){
				TweenLite.set(indexNewsAry[0], { left:indexNewsWidth* (i-1)+ '%' });
				indexNewsAry.push( indexNewsAry.shift() );
			} });
		}
	}
	function changeNewsLeft() {
		indexNewsAry.unshift( indexNewsAry.pop() );
		TweenLite.set(indexNewsAry[0], { left:-indexNewsWidth+ '%' });
		for (var i = 0; i < indexNewsAry.length; i++) {
			TweenLite.to(indexNewsAry[i], 0.5, { left:indexNewsWidth* i+ '%', ease:Cubic.easeInOut });
		}
	}
}
















