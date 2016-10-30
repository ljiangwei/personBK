var popNow = -1;
var videoName, otherVideoName;

$(function () {

	// YoukuVideo.play('XMTU4NDY1NTk2MA==', 'videoContainer1', 'player1');
	// YoukuVideo.play('XMTU4NDY1NjU2MA==', 'videoContainer2', 'player2');
    
    YoukuVideo.swf('XMTU4NDY1NTk2MA==', 'videoContainer1');
    YoukuVideo.swf('XMTU4NDY1NjU2MA==', 'videoContainer2');
    
	addEvt();

	function addEvt() {
		$('#fdjmid .bt').click(btClick);
		$('#fdjmid .close').click(closeClick);
		$('#videoPlayBt1').click(videoPlayBt1Click);
		$('#videoPlayBt2').click(videoPlayBt2Click);
	}

	function videoPlayBt1Click() {
        $(this).hide();
        videoName= 'videoContainer1';
        otherVideoName= 'videoContainer2';

        $('#videoBox1').show();
        // 此页为 flv 播放
        // if(YoukuVideo.ie()>9) {
        // 	if( $id('videoContainer1').nodeName == 'video' || $id('videoContainer1').nodeName == 'VIDEO' ) {
        // 		$id('videoContainer2').pause();
        // 		$id('videoContainer1').play();
        // 	}
        // }
    }
    function videoPlayBt2Click() {
        $(this).hide();
        videoName= 'videoContainer2';
        otherVideoName= 'videoContainer1';

        $('#videoBox2').show();
        // 此页为 flv 播放
        // if(YoukuVideo.ie()>9) {
        // 	if( $id('videoContainer2').nodeName == 'video' || $id('videoContainer2').nodeName == 'VIDEO' ) {
        // 		$id('videoContainer2').play();
        // 		$id('videoContainer1').pause();
        // 	}
        // }
    }

	function btClick() {
		var _key= $(this).index();
		trace(_key);

		if(popNow!= -1) $('#fdjmid .pop').eq(popNow).hide();
		$('#fdjmid .pop').eq(_key).show();
		popNow= _key;
	}
	
	function closeClick() {
		$('#fdjmid .pop').eq(popNow).hide();
		popNow= -1;
	}
})
function trace(argument) {
	// console.log(argument);
}
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
            thisMovie(videoName).jsSay('play');
            thisMovie(otherVideoName).jsSay('stop');
        }, 100);
    }
}