/**
 * 2016.5.17  add event onStart onComplete.
 * Created by APLee on 16/5/15.
 */
function Accordion(obj){
    this.$target= obj.target;
    this.$pics = this.$target.find('li');
    this.mixWidth= obj.mixWidth;
    this.border= obj.border || 0;
    this.now= obj.now== undefined? -1:obj.now;
    this.data= [];
    this.onStart= obj.onStart;
    this.onComplete= obj.onComplete;

    // trace('AC:'+ this.$pics.length);
}
Accordion.prototype.init= function()
{
    var _widthMax= this.$target.width()- (this.mixWidth+ this.border)* (this.$pics.length-1);

    var _this= this;
    var i;
    
    setDom();
    addEvt();

    function setDom(){
        if(_this.now==-1)
        {
            var _widthDefault= (_this.$target.width()- _this.border* (_this.$pics.length-1))/ _this.$pics.length;
            _this.$pics.each(function (i) {
                 _this.data[i]= [(_widthDefault+_this.border)* i , _widthDefault];
            });
        }
        else{
            setData(_this.now);
        }

        _this.$pics.each(function (i) {
            $(this).css({'width':_this.data[i][1], 'left':_this.data[i][0]});
        });
        
        setTimeout(function () {
            _this.$pics.each(function (i) {
                $(this).css({'position':'absolute'});
            });
        },100);
    }
    function addEvt(){
        _this.$pics.each(function () {
            $(this).mouseover(picsMouseMove);
        })
    }
    function picsMouseMove(){
        var _key= _this.$pics.index(this);

        if(_this.now != _key)
        {
            _widthMax= _this.$target.width()- (_this.mixWidth+ _this.border)* (_this.$pics.length-1);
            setData(_key);
            if(_this.onStart) _this.onStart(_this.now, _key);

            _this.$pics.each(function (i) {
                var _now= _this.now;
                $(this).stop(true);
                $(this).animate(
                    {'width':_this.data[i][1], 'left':_this.data[i][0]}, 
                    { easing: 'easeInOutQuad', duration:400, complete:function () {
                        if(_this.onComplete && i== _this.$pics.length-1) _this.onComplete(_now, _key);
                    } });
            });
            
            // trace('over:'+ _key);
            _this.now = _key;
        }
    }
    function setData(_now) {
        for(i=0; i<_this.$pics.length; i++){
            if(i< _now){
                _this.data[i]= [(_this.mixWidth+ _this.border)* i, _this.mixWidth];
            }
            else if(i== _now){
                _this.data[i]= [(_this.mixWidth+ _this.border)* i, _widthMax];
            }
            else{
                _this.data[i]= [(_this.mixWidth+ _this.border)* (i-1)+ (_widthMax+ _this.border), _this.mixWidth];
            }
        }
    }

    function $indexOf(_ary, _ele){
        var _key= -1;
        for(var i=0; i<_ary.length; i++){
            if(_ary[i]== _ele) { _key= i;break; }
        }
        return _key;
    }
};