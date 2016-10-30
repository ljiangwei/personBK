
$(function () {

	YoukuVideo.play('XMTU4NDY1NTE4MA==', 'videoContainer', 'player1');

	addEvt();

	function addEvt() {
		$('#videoPlayBt').click(videoPlayBtClick);
	}

	function videoPlayBtClick() {
		$(this).hide();

        $('#videoBox').show();
        if(YoukuVideo.ie()>9) {
        	if( $id('videoContainer').nodeName == 'video' || $id('videoContainer').nodeName == 'VIDEO' ) {
        		$id('videoContainer').play();
        	}
        }
	}

    $('.yjp .pabox a').click(function(){
        var index=$(this).index();
        $('.yjp a').removeClass('on');
        $(this).addClass('on');
        $('.yjppic').hide();
        $('.yjppic').eq(index).show();
    })
})
function $id(argument) {
    return document.getElementById(argument);
}
function thisMovie(flashName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[flashName];
    } else {
        return document[flashName];
    }
}
function asSay(s) {
    // console.log(s);
    if(s== 'swfPlayerReady') {
        setTimeout(function (){ 
            thisMovie('videoContainer').jsSay('play');
        }, 100);
    }
}