/**
 * Created by Tracy      Mcgrady on 2016/08/29.
 */
$(function () {
    $(".headcenter ul>.lisa").mouseenter(function () {
        $(this).children("ul").show();
        $(this).children("ul").css("opacity","0.8");
    });
    $(".headcenter ul>.lisa").mouseleave(function () {
        $(this).children("ul").hide();
    });


});