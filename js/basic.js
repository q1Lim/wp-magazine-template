/**
 * Created by q1 on 2017-01-12.
 */


$(document).ready(function(){

    window.moveTo(30,100);
  window.resizeTo(1440,900);

    // 이미지에 마우스 들어갔을때 빨간 테두리 효과

    $("#thumbFrame ul li img").mouseenter(function (event) {

        $(this).css("border","2px solid #CF0000");
    });

    $("#thumbFrame ul li img").mouseleave(function (event) {

        $(this).css("border","0px");
    });

    //이미지 클릭시 메인 프레임 이미지 바꾸기

    $("#thumbFrame ul li img").click(function (event) {

        var src = $(this).attr("src");
        $("#mainFrame img").attr("src",src);
    });

});