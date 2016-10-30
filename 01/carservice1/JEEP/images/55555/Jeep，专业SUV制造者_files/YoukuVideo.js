/**
 * Created by APLee on 16/5/16.
 */
var YoukuVideo= {};

YoukuVideo.play= function (_vid, _container, _size) {
    // console.log('AddSwf.play.');
    if(YoukuVideo.ie()> 9){
        YoukuVideo.getUrl(_vid, _container);
    }else{
        YoukuVideo.swf(_vid, _container, _size);
    }
}

YoukuVideo.getUrl= function(_vid, _container){
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
                // console.log(result.data);

                var files= result.data.files; //.mp4.segs.url;
                var flv= files.hd2? files.hd2.segs.url: files.flv.segs.url

                YoukuVideo.addVideo(_container, files.mp4.segs.url, flv);
                // console.log('AddSwf.');
            }else{
                // console.log('AddSwf.getError.'+ result.status)
            }
        }
    });
}
YoukuVideo.addVideo= function(_container, _video)
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
    var _ie= _version.indexOf('MSIE 6')!= -1? 6: _version.indexOf('MSIE 7')!= -1? 7: _version.indexOf('MSIE 8')!= -1? 8: _version.indexOf('MSIE 9')!= -1? 9:10;
    return _ie;
}

YoukuVideo.swf= function (_vid, _container, _size) {
    var _flashvars = { vid:_vid, auto:"stop", aspect:_size };
    var _params = { menu:"false", wmode:'transparent' };
    var _attributes = {name:"myFlash" };
    swfobject.embedSWF("/newcherokee/swf/player_stream.swf", _container, "100%", "100%", "9.0.0", "/newcherokee/swf/expressInstall.swf",_flashvars,_params,_attributes);
}