/**
 * Created by Tracy      Mcgrady on 2016/08/30.
 */
$(function () {
    $(".left-ul>li").mouseenter(function () {
        $(this).css("backgroundColor","#989898").siblings().css("backgroundColor","#a3a3a3");
        $(this).css("color","#ff9700").siblings().css("color","black");
    });
    $(".left-ul>li").click(function () {
        //alert("hhe");
        $(this).css("backgroundColor","#989898").siblings().css("backgroundColor","#a3a3a3");
        var idx = $(this).index();
        $(".right-div>div").eq(idx).css("display", "block").siblings().css("display", "none");
    });

    $("#services-sub>li").click(function () {
        $(this).css("backgroundColor","#ff9700").siblings().css("backgroundColor","white")
        $(this).css("color","white").siblings().css("color","#000000");
        var idx = $(this).index();
        $("#w4>.services-sub").eq(idx).css("display","block").siblings().css("display","none");
        $(".services-subNav").css("display","block");
    });
    $("#services-sub1>li").click(function () {
        $(this).css("backgroundColor","#ff9700").siblings().css("backgroundColor","white")
        $(this).css("color","white").siblings().css("color","#000000");
        var idx = $(this).index();
        $("#w7>.services-sub1").eq(idx).css("display","block").siblings().css("display","none");
        $(".services-subNav").css("display","block");
    });
});