
$(document).ready(function(){
    /*设置导航栏第四部分的轮播图*/
    let aDiv=$("div.i-part-4-slideshow");
    let aLi=$("div.i-part-4-4 li");
    let oDiv=$("div.i-part-4-4");
    let i=1;

    /*设置自动轮播*/
    slideshow();
    oDiv.mouseover(function () {
       clearInterval(timer);
    });
    oDiv.mouseout(function () {
        slideshow();
    });

    /*设置鼠标移入的效果*/
    for (let j=0;j<aLi.length;j++){
        aLi.eq(j).mouseover(function () {
            clearInterval(timer);
            i=j;
            aDiv.removeClass("part4Active");
            aDiv.eq(i).addClass("part4Active");
            aLi.css("background-color","gold");
            aLi.eq(i).css("background-color","red");
        })
    }

    function slideshow(){
        timer=setInterval(function () {
            aDiv.removeClass("part4Active");
            aDiv.eq(i).addClass("part4Active");
            aLi.css("background-color","gold");
            aLi.eq(i).css("background-color","red");
            if(i==3){
                i=0
            }else{
                i++;
            }
        },2000)
    }

    /*设置抽奖区域的图片翻转*/
    let aPart5Div=$(".i-part-5-2-transform");
    let aPart5Img=$(".i-part-5-2-lucky img");
    let onOff=true;
    aPart5Div.eq(0).click(function () {
        if (onOff){
            $(".i-part-5-2-transform:nth-of-type(1) div").css("background","url('img/MT-Part5-lucky1-2.png')center/cover no-repeat");
            for (let i = 1; i < aPart5Div.length; i++) {
                aPart5Div.eq(i).css("transform", "rotateY(180deg)");
               setTimeout(function () {
                    aPart5Img.removeClass("transformActive");
                    setTimeout(function () {
                        aPart5Div.eq(i).css("transform", "rotateY(0)");
                    },100);
                },500);
            }
            onOff=false;
        }else {
            $(".i-part-5-2-transform:nth-of-type(1) div").css("background","url('img/MT-Part5-lucky1-1.png')center/cover no-repeat");
            console.log(3);
            for (let i = 1; i < aPart5Div.length; i++) {
                aPart5Img.addClass("transformActive");
                aPart5Div.eq(i).click(function () {
                    $(".Popout").css("display","block")
                })
            }
            onOff=true;
        }
    });

    /*设置弹出框的变化*/
    for (let i = 1; i < aPart5Div.length; i++) {
        aPart5Div.eq(i).click(function () {
            $(".Popout").css("display","block");
            $(".MT-index").css("opacity","0.5")
        })
    }
    $(".Popout4").click(function () {
        $(".Popout").css("display","none");
        $(".MT-index").css("opacity","1")
    });


    /*设置中奖名单的变化*/
    let aPart5Li=$(".i-part-5-2-person li");
    let newTop=new Array();

    person();
    setInterval(function () {
        for (j=0;j<aPart5Li.length;j++) {
            aPart5Li.eq(j).css("top", (parseInt(aPart5Li.eq(j).css("top"))-1) + "px");
            newTop = [];
        }
        if(parseInt(aPart5Li.eq(aPart5Li.length-1).css("top"))<=0){
            person();
        }
    },100);

    function person() {
        for (j=0;j<aPart5Li.length;j++){
            aPart5Li.eq(j).css("top",j*18+"px");
        }
    }

});

