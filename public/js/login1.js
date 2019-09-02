
$(document).ready(function () {
    let onOff=true;
    let btnVerify=$("#btn-verify input");
/*
    let aA=$("div.login-part-top a");
    console.log(aA);
    console.log(aA.length);
    /!*设置手机号和电子邮电的动作*!/
    for (let i=0;i<2;i++){
        aA.eq(i).click(function () {
            aA.eq(i).css("background-color","#B40707")
        })
    }
*/

    /*设置验证按钮的动作*/
    btnVerify.mouseover(function () {
        if (onOff){
            btnVerify.css("background-image","-webkit-linear-gradient(top,#d9d9d9,white)")
        }
    });
    btnVerify.mouseout(function () {
        if (onOff){
            btnVerify.css("background-image","-webkit-linear-gradient(top,white,#d9d9d9)")
        }
    });
    btnVerify.click(function () {
        btnVerify.css({"background":"#EEFFF5","outline":"1px greenyellow soild"});
        btnVerify.attr("value","验证成功");
        onOff=false;
    });


    /*获取手机验证码*/

    $(".btn-note input").click(function () {
        let val=$("#phone").val();

        if (val.length===0){
            alert("请先输入电话号码！")
        }else if (val.length===11){
            alert("已向您的手机发送验证码，请注意查收！")
        }else {
            alert("您输入的电话号码有误，请仔细核对！")
        }
    });

    /*设置注册提交按钮*/
    let phone=$("#phone");
    let password=$("#password");
    $("#login").click(function () {
        let newPasswored=$(".password1");
        if (newPasswored.eq(0).val()!=newPasswored.eq(1).val()){
            alert("两次密码不相同，请检查！")
        }else{
            /*向数据库里面添加账号和密码*/

            alert("恭喜你注册成功！")
        }

    })
});

