$(function () {
  //电梯导航功能
  var flag = true;
  var toolTop = $(".recommend").offset().top;
  toggleTool();

  function toggleTool() {
    if ($(document).scrollTop() >= toolTop) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
  }
  $(window).scroll(function () {
    toggleTool();
    if (flag) {
      $(".floor .w").each(function (i, ele) {
        if ($(document).scrollTop() >= $(ele).offset().top) {
          $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
        }
      });
    }
  });
  $(".fixedtool li").click(function () {
    flag = false;
    var current = $(".floor .w").eq($(this).index()).offset().top;
    $("body,html")
      .stop()
      .animate(
        {
          scrollTop: current,
        },
        function () {
          flag = true;
        }
      );
    $(this).addClass("current").siblings().removeClass();
  });
});
