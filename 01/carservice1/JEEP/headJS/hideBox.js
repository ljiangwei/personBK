/**
 * Created by Tracy      Mcgrady on 2016/08/27.
 */
$(document).ready(function () {
    //导航栏显示隐藏
    //车型
    $(".rightNav>ul>.li03").mouseenter(function () {
        //alert("hehe");
        $(".hideBox>.carStyle").show();
    });
    $(".rightNav>ul>.li03").mouseleave(function () {
        $(".hideBox>.carStyle").hide();
    });
    $(".rightNav>ul>.li04").mouseenter(function () {
        $(".mService").show();
    });
    $(".rightNav>ul>.li04").mouseleave(function () {
        $(".mService").hide();
    });
    $(".rightNav>ul>.li06").mouseenter(function () {
        $(".lService").show();
    });
    $(".rightNav>ul>.li06").mouseleave(function () {
        $(".lService").hide();
    });
    $(".rightNav>ul>.li07").mouseenter(function () {
        $(".carService").show();
    });
    $(".rightNav>ul>.li07").mouseleave(function () {
        $(".carService").hide();
    });
    $(".rightNav>ul>.li08").mouseenter(function () {
        $(".joinService").show();
    });
    $(".rightNav>ul>.li08").mouseleave(function () {
        $(".joinService").hide();
    });
    $(".rightNav>ul>.li09").mouseenter(function () {
        $(".serService").show();
    });
    $(".rightNav>ul>.li09").mouseleave(function () {
        $(".serService").hide();
    });
});