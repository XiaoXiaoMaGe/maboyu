/*设置登录界面的js*/

$(document).ready(function () {
    /*设置登录框的头部点击*/

    let aSpan1=$(".part-right1-head span");

    for (let i=0;i<aSpan1.length;i++){

        aSpan1.eq(i).click(function () {
            console.log(1);
            for (let i=0;i<aSpan1.length;i++) {
                aSpan1.eq(i).removeClass("enterAtive")
            }
            aSpan1.eq(i).addClass("enterAtive");

            /*设置登录框的页面变化*/
            if (i===0){
                $(".part-body1").css("display","block");
                $(".part-body2").css("display","none");
            } else {
                $(".part-body1").css("display","none");
                console.log(2);
                $(".part-body2").css("display","block");
                console.log(1)
            }
        })
    }

    /*设置下面的“更多"按钮*/
    $(".set_more").click(function () {
        $(".set_more_div").toggleClass("blockDisplay")
    });

    /*设置二维码框的移动*/
    $(".part-body2-code").mouseover(function () {
        $(".part-body2-help").css("opacity","1");
        $(".part-body2-code").css("left","30px");
    });
    $(".part-body2-code").mouseout(function () {
        $(".part-body2-help").css("opacity","0");
        $(".part-body2-code").css("left","110px");
    });


    /*设置尾部的其他方式登录*/
    let aA=$(".part-foot2 a");
    for (let i=0;i<aA.length;i++){
        aA.mouseover(function () {
            $(this).css("backgroundPositionY","-50px");
        });
        aA.mouseout(function () {
            $(this).css("backgroundPositionY","-4px");
        });
    }

    /*设置手机验证码登录和账号登录的变换*/
    let phontEnter=$(".part-right2-head span");
    $(".phoneIcon").click(function () {
        $(".part-right2").css("display","block");
        $(".part-right1").css("display","none")
    });
    phontEnter.click(function () {
        $(".part-right2").css("display","none");
        $(".part-right1").css("display","block")
    });

    /*设置登录的提交按钮*/
    $("#login").click(function () {
        let phone = $("#phone").val();
        let password = $("#password").val();
        $.ajax({
            type:'post',
            data:{phone,password},
            url:'/user/login',
            success:function (data) {
                if(data.status===0){
                    alert(data.mes);
                    window.location.href = '/'
                }else{
                    alert(data.mes)
                }
            }
        })
    })

});









