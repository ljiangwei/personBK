/**
 * Created by Administrator on 2016/8/30 0030.
 */

$(function () {
    $("#login1").click(function () {
        $("#mask").css("display","block");
        $("#s_box").css("display","block");
    })

    $("#close_box").click(function () {
        $("#mask").css("display","none");
        $("#s_box").css("display","none");
    })




    $("#shbtn").focus(function () {
        var value=$(this).val();
        if(value==="邮箱/用户名/已验证手机"){
            $(this).val("");
        }
    })
    $("#shbtn").blur(function () {
        var value=$(this).val();
        if(value===""){
            $(this).val("邮箱/用户名/已验证手机");
        }
    })


    $("#mmbtn").focus(function () {
        if($(this).val() === "密码") {
            //清空
            $(this).val("");
        }
    })

    $("#mmbtn").blur(function () {
        //4. 如果txt的值为空的话，恢复默认值
        if($(this).val() === "") {
            $(this).val("密码");
        }
    })

})





