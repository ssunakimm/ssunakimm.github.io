let body;
let dim
$(document).ready(function () {

    // intro
    setTimeout(function () {
        $(".intro").animate({
            top: '-300px',
            opacity: 0
        }, 400, function () {
            $(".intro").css("display", "none");
        });
    }, 7000);


    // project scroll event
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var winHeight = $(window).height();
        var currentYear = null;

        var offsetTop = 0;
        var height = 0;


        $(".project .item dd").each(function () {
            offsetTop = $(this).offset().top;
            height = $(this).outerHeight();

            if (scrollTop + winHeight / 2 >= offsetTop &&
                scrollTop + winHeight / 3 < offsetTop + height) {
                currentYear = $(this).data("year");
                // 해당 dd 엘리먼트에만 'on' 클래스를 추가합니다.
                $(".project .item dd").removeClass("on");
                $('.project .item dd[data-year="' + currentYear + '"]').addClass("on");                

                return false; // 가장 먼저 발견된 요소만 처리하고 반복문을 멈춥니다.
            }
        });

        // 이제 반복문 밖에서도 offsetTop과 height에 접근할 수 있습니다.
        if (currentYear) {
            if(currentYear == "prev") {
                $(".project .list .year").html("~20<i>20</i>");
            } else {
                $(".project .list .year").html("20<i>"+currentYear+"</i>");
            }            
        }        
    });
});