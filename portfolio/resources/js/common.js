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
    }, 0)


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











    // 애니메이션
    AOS.init({
        easing: 'ease-in-cubic',
        duration: 1000, // 1.2초
        offset: -100
    });

    body = $('body');
    dim = $('.dim');
    btnTop = $('.btn_top');


    $(document).on('mouseover', '.header .gnb.web .gnb_main ul li a', function () {
        let index = $(this).parent().index();
        mouseToggleMenuWeb('open', index);
    });

    $(document).on('mouseleave', '.header .gnb.web', function () {
        mouseToggleMenuWeb('close');
    });

    // search 버튼에 mouseover할 경우 gnbMenu닫기
    $(document).on('mouseover', '.header .gnb.web .gnb_main .menu .icon_search', function () {
        mouseToggleMenuWeb('close');
        // 기존 마우스 아웃 이벤트 제거
        $('.header .gnb.web').off('mouseleave');
    });
    // menu 버튼에 mouseover할 경우 gnbMenu닫기
    $(document).on('mouseover', '.header .gnb.web .gnb_main .menu .icon_menu', function () {
        mouseToggleMenuWeb('close');
    });

    // 검색창 입력할 경우 X버튼 show처리(메인/검색 페이지)
    $(document).on('input', '.gnb_search form label input,  .sub_search form label input', function () {
        if ($(this).val().trim() == '') {
            $(this).parents('form').find('.icon_search_close').css('visibility', 'hidden');
        } else {
            $(this).parents('form').find('.icon_search_close').css('visibility', 'visible');
        }
    });

    $(window).scroll(() => {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 10) {
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }

        if (isScrollBottom()) {
            $('.btn_top').addClass('fixed');
        } else {
            $('.btn_top').removeClass('fixed');

        }
    });

    // history 슬라이더 관련
    var historySlider = $('.history1 .slide');
    var historySlickOptions = {
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: true,
        responsive: [{
                breakpoint: 1024,
                settings: 'slick'
            },
            {
                breakpoint: 3840,
                settings: 'unslick'
            }
        ]
    };
    $(window).on('load resize', function () {
        historySlider.not('.slick-initialized').slick(historySlickOptions);

    });

    // careers > people 사람영역 탭
    $(".people_tab li").click(function () {
        event.preventDefault();

        let isFixed = false;
        let index = $(this).index() + 1;
        var peopleTabHeight = $('.people .people_tab').outerHeight() + 10;
        var peopleOffsetTop = $('.people .people_tab').offset().top;
        $(".people_tab li").removeClass('on');
        if ($(this).parent().hasClass('fixed')) {
            isFixed = true;
        }

        if (isFixed) {
            $(".people .people_tab li").eq($(this).index()).addClass('on');
        } else {
            $(".people_tab.fixed li").eq($(this).index()).addClass('on');
        }

        $(this).addClass('on');
        window.scrollTo({
            top: peopleOffsetTop + peopleTabHeight
        });



        $('.people .person').hide();
        $(`.people .person[data-tab="person${index}"]`).show();
        AOS.init({
            easing: 'ease-in-cubic',
            duration: 1000, // 1.2초
            offset: -100
        });
    })


    // careers > people 사람영역 스크롤 이벤트
    if ($('.people_tab').length > 0) {

        $(window).scroll(function () {

            var peopleTabHeight = $('.people .people_tab').outerHeight() / 2;
            var peopleOffsetTop = $('.people .people_tab').offset().top;
            var scrollTop = $(window).scrollTop();

            if (scrollTop > peopleOffsetTop + peopleTabHeight) {
                $('.people_tab.fixed').addClass('d_flex');
            } else {
                $('.people_tab.fixed').removeClass('d_flex');
            }
        });
    }



    // 인풋박스는 가운데 정렬
    $(".c_txt-input").each(function () {
        const dl = $(this).closest("dl");
        dl.css("align-items", "center");
    });

    $(".c_tab ul li").click(function () {
        let index = $(this).index();
        $(".c_tab ul li").removeClass('on');
        $(this).addClass('on');

        if (index == 0) {
            $('.c_tab_bar').removeClass("on");
            $('.c_tab_content[data-tab="process0"]').show();
            $('.c_tab_content[data-tab="process1"]').hide();
        } else {
            $('.c_tab_bar').addClass("on");
            $('.c_tab_content[data-tab="process0"]').hide();
            $('.c_tab_content[data-tab="process1"]').show();
        }
    });

    //텍스트 trim
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };

    //폼 field value 를 object 형태로 변환하는 jquery plugin
    jQuery.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] != undefined) {

                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    //화면 가운데 팝업
    jQuery.centerNewWin = function (url, name, width, height) {
        var wi = screen.width - width;
        var hi = screen.height - height;

        if (wi < 0)
            wi = 0;
        if (hi < 0)
            hi = 0;

        var info = 'left=' +
            (wi / 2) +
            ',top=' +
            (hi / 2) +
            ',width=' +
            width +
            ',height=' +
            height +
            ',resizable=yes,scrollbars=yes,menubars=no,status=no,toolbar=no, location=no';
        var newwin = window.open(url, name, info);
        newwin.focus();
    };

    //about/contact
    $(".chkview .chkRadio").click(function () {
        var index = $(".chkRadio").index(this);
        if (index == "1") $(".form .item dl.business_area").show();
        else $(".form .item dl.business_area").hide();
    });


});

/*
    푸터영역 넘어섰는지 리턴
 */
function isScrollBottom() {
    var scrollTop = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var footerHeight = $('footer').height();
    var minus = 12;

    // 모바일 사파리의 경우에만 값 변경
    var userAgent = navigator.userAgent;

    if (userAgent.match(/iPhone/i) && userAgent.match(/Safari/i) && !userAgent.match(/Chrome/i)) {
        minus = 100
    }

    var footerPos = documentHeight - windowHeight - footerHeight - minus;

    if (scrollTop > footerPos) {
        return true;
    } else {
        return false;
    }
}

/*
    스크롤 상단으로 이동
 */
function moveTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
/*
    검색 내용 삭제
 */
function removeSearchText(e) {
    $(e).css('visibility', 'hidden');
    $(e).parents('form').find('input').val('');
}

/*
    모바일용 GNB Show / hide
    type : open / hide
 */
function toggleGnbMobile(type) {
    let gnbSub = $('.gnb.mobile .gnb_sub');
    if (type == 'open') {
        gnbSub.addClass('open');
        body.addClass('no_scroll');
    } else {
        gnbSub.removeClass('open');
        body.removeClass('no_scroll');
    }
}

/*
    모바일용 GNB MENU Show / hide
 */
function toggleGnbMenuMobile(e) {
    toggleSearchMobile('close');
    let gnbSubDepth1 = $('.gnb.mobile .gnb_sub .depth1');
    let thisNode = $(e);
    let gnbSubDepth2 = thisNode.next();
    gnbSubDepth1.not(e).find('.icon_toggle').removeClass('open').parents('li').find('.depth2').slideUp();
    gnbSubDepth1.not(e).removeClass('on');
    $(e).toggleClass('on');
    $(e).find('.icon_toggle').toggleClass('open');
    gnbSubDepth2.slideToggle();
}

/*
    모바일용 검색영역 Show / hide
    type : open / hide
 */
function toggleSearchMobile(type) {
    let search = $('.header .gnb.mobile .gnb_search');
    let btnSearch = $('.header .gnb.mobile .gnb_main .menu .icon_search');
    let btnSearchClose = $('.header .gnb.mobile .gnb_main .menu .icon_close');
    if (type == 'open') {
        btnSearch.hide();
        btnSearchClose.show();
        search.slideDown(300);
        dim.show();
    } else {
        btnSearch.show();
        btnSearchClose.hide();
        search.slideUp(300);
        dim.hide();
    }
}


/*
    웹용 검색영역 Show / hide
    type : open / hide
 */
function toggleSearchWeb(type) {
    let search = $('.header .gnb.web .gnb_search');
    let btnSearch = $('.header .gnb.web .gnb_main .menu .icon_search');
    let btnSearchClose = $('.header .gnb.web .gnb_main .menu .icon_close');
    if (type == 'open') {
        btnSearch.hide();
        btnSearchClose.show();
        search.slideDown(300);
        dim.show();
    } else {
        btnSearch.show();
        btnSearchClose.hide();
        search.slideUp(300);
        dim.hide();
    }
}

/*
    웹용 GNB Show / hide
    type : open / hide
 */
function toggleMenuWeb(type) {
    if (type == 'open') {
        body.addClass('no_scroll');
        dim.show();
        $('.header .gnb.web .gnb_sub').addClass('nav');
        // 기존 마우스 아웃 이벤트 제거
        $('.header .gnb.web').off('mouseleave');
    } else {
        body.removeClass('no_scroll');
        dim.hide();
        $('.header .gnb.web .gnb_sub').removeClass('nav');

    }
}

/*
    웹용 GNB  Mouseover / Mouseleave
    type : open / hide
 */
function mouseToggleMenuWeb(type, index) {
    if (type == 'open') {
        $('.header .gnb.web .gnb_sub').stop().slideDown(350, function () {
            $('.header .gnb.web .gnb_sub').css("padding-top", "2.552vw");
            $('.header .gnb.web .gnb_sub').css("padding-bottom", "3.072vw");
            $('.header .gnb.web .gnb_sub').css("opacity", 1);
        });

        $('.header .gnb.web .gnb_sub > div').hide();
        $('.header .gnb.web .gnb_sub > div').eq(index).fadeIn();
        $('.header .gnb.web .gnb_sub > div').eq(index).css('display', 'flex');
        $('.header .gnb.web .gnb_sub > div .img').removeClass('none');


        dim.show();
    } else {
        $('.header .gnb.web .gnb_sub > div .img').addClass('none');
        $('.header .gnb.web .gnb_sub').stop().fadeOut(350);

        let search = $('.header .gnb.web .gnb_search');
        if (!search.is(':visible')) {
            dim.hide();

        }
    }
}


/*
    아코디언 Show / hide
 */
function toggleAccodion(e) {
    let thisNode = $(e);
    thisNode.parent('li').toggleClass('open')
    thisNode.next().slideToggle({
        duration: 400,
        easing: "swing",
        start: function () {
            thisNode.next().css("display", "flex");
            thisNode.addClass('bg_white');
        },
        complete: function () {
            if ($(this).is(":hidden")) {
                thisNode.next().css("display", "none");
                thisNode.removeClass('bg_white');
            }
        }
    });
    $(e).find('.icon_toggle').toggleClass('open');
}

/*
    드롭다운 클릭시 텍스트 변경
 */
const dropdownSelect = (e) => {
    $(e).parent().prev().text($(e).children().text());
};