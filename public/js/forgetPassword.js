$(document).ready(function () {
    /*判断下面的按钮是否可以按*/
    let oBtn=$(".fget-btn-submit");
    let oInput=$("input");
    oBtn.mouseover(function () {
        console.log(oInput.val());
        if (oInput.val()===""){
            oBtn.css("cursor","not-allowed");
        }else {
            oBtn.css({"cursor":"pointer","color":"dodgerblue"})
        }
    });
    oBtn.mouseout(function () {
        oBtn.css("color"," #d9d9d9")
    })
});