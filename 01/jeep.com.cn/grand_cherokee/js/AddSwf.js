/**
 * Created by APLee on 16/5/16.
 */
var YoukuVideo= {};

YoukuVideo.play= function (_vid, _container, _id, _flv) {
    // console.log('AddSwf.play.');
    if(YoukuVideo.ie()> 9){
        YoukuVideo.getUrl(_vid, _container, _id);
    }else{
        YoukuVideo.swf(_vid, _container);
    }
}

YoukuVideo.getUrl= function(_vid, _container, _id){
    $.soap({
        url: "http://events.youku.com/2015/video-source/api/soap/video-files-service.php",
        method: "getVideoFiles",
        appendMethodToURL: false,
        soap12: true,
        data: {
            vid: _vid,
            password: ''
        },
        success: function(soapResponse){
            var response = $.xml2json(soapResponse.toString());
            var soapResult = response.Body.getVideoFilesResponse.getVideoFiles;
            var result = $.xml2json(soapResult.toString());
            if (result.status == 1){
                var files= result.data.files; //.mp4.segs.url;
                // console.log(_vid);
                // console.log(files);
                // console.log('AddSwf.');
                var flvObj= files.hd2 || files.flv;
                
                YoukuVideo.addVideo(_container, files.mp4.segs.url, flvObj.segs.url);
            }else{
                // console.log('AddSwf.getError.'+ result.status)
            }
        }
    });
}
YoukuVideo.addVideo= function(_container, _video, _flv)
{
    var _videoHtml= '<video width="100%" height="100%" controls>'+
        '<source src="'+ _video+ '" type="video/mp4">   </video>';
    $('#'+ _container).before(_videoHtml);
    
    var _pt= $('#'+ _container).parent();
    $('#'+ _container).remove();
    _pt.find('video').attr('id', _container);
}

YoukuVideo.ie= function(){
    var _version= navigator.appVersion;
    var _ie= _version.indexOf('MSIE 6')>0? 6: _version.indexOf('MSIE 7')>0? 7: _version.indexOf('MSIE 8')>0? 8: _version.indexOf('MSIE 9')>0? 9:10;
    return _ie;
}

YoukuVideo.swf= function (_vid, _container) {
    var _flashvars = { vid:_vid, auto:"stop" };
    var _params = { menu:"false", wmode:'transparent' };
    var _attributes = {name:"myFlash" };
    swfobject.embedSWF("../../newcherokee/swf/player_stream.swf"/*tpa=http://www.jeep.com.cn/newcherokee/swf/player_stream.swf*/, _container, "100%", "100%", "9.0.0", "../../newcherokee/swf/expressInstall.swf"/*tpa=http://www.jeep.com.cn/newcherokee/swf/expressInstall.swf*/,_flashvars,_params,_attributes);
}