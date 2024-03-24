

let body;
let dim
$(document).ready(function(){
    
    // 애니메이션
    AOS.init({
        easing: 'ease-in-cubic',
        duration: 1000, // 1.2초
        offset: 0
      });

    body = $('body');
    dim = $('.dim');

    
    $(document).on('mouseover', '.header .gnb.web .gnb_main ul li a', function(){
        let index = $(this).parent().index();
        mouseToggleMenuWeb('open', index);
    });

    $(document).on('mouseleave', '.header .gnb.web', function(){
        mouseToggleMenuWeb('close');
    });

    // search 버튼에 mouseover할 경우 gnbMenu닫기
    $(document).on('mouseover', '.header .gnb.web .gnb_main .menu .icon_search', function(){
        mouseToggleMenuWeb('close');
        // 기존 마우스 아웃 이벤트 제거
        $('.header .gnb.web').off('mouseleave');
    });
    // menu 버튼에 mouseover할 경우 gnbMenu닫기
    $(document).on('mouseover', '.header .gnb.web .gnb_main .menu .icon_menu', function(){
        mouseToggleMenuWeb('close');
        // 기존 마우스 아웃 이벤트 제거
        //$('.header .gnb.web').off('mouseleave');
    });

    // history 슬라이더 관련
    var historySlider = $('.history1 .slide');  	
    var historySlickOptions = { 
		dots: false,
		arrows: false,
		infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: 'slick'
            },
            {
                breakpoint: 2560,
                settings: 'unslick'
            }
        ]
    };  	
    $(window).on('load resize', function() { 		
       historySlider.not('.slick-initialized').slick(historySlickOptions); 
    });

    // 인풋박스는 가운데 정렬
    $(".c_txt-input").each(function () {
        const dl = $(this).closest("dl");
        dl.css("align-items", "center");
      });



    // let previousScrollTop;
    // $(window).scroll(function() {
    //     const scrollTop = $(window).scrollTop();
      
    //     if (scrollTop > previousScrollTop) {
    //       // 스크롤 아래로 내림
    //       $('.header').removeClass('fix');
    //     } else {
    //       // 스크롤 위로 올림
    //       $('.header').addClass('fix')
    //     }
      
    //     previousScrollTop = scrollTop;
    //   });
    
});

/* 
    검색 내용 삭제
 */
function removeSearchText(){
    $('.header .gnb .gnb_search div input').val('');
}

/* 
    모바일용 GNB Show / hide
    type : open / hide
 */
function toggleGnbMobile(type){
    let gnbSub = $('.gnb.mobile .gnb_sub');
	if(type == 'open'){
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
function toggleGnbMenuMobile(e){
    toggleSearchMobile('close');
    let gnbSubDepth1 = $('.gnb.mobile .gnb_sub .depth1');
    let thisNode = $(e);
    let gnbSubDepth2 = thisNode.next();
    gnbSubDepth1.not(e).find('.icon_toggle').removeClass('open').parents('li').find('.depth2').slideUp();
    $(e).find('.icon_toggle').toggleClass('open');
    gnbSubDepth2.slideToggle();
}

/* 
    모바일용 검색영역 Show / hide
    type : open / hide
 */
function toggleSearchMobile(type){
    let search= $('.header .gnb.mobile .gnb_search');
    let btnSearch= $('.header .gnb.mobile .gnb_main .menu .icon_search');
    let btnSearchClose= $('.header .gnb.mobile .gnb_main .menu .icon_close');
    if(type == 'open'){
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
function toggleSearchWeb(type){
    let search= $('.header .gnb.web .gnb_search');
    let btnSearch= $('.header .gnb.web .gnb_main .menu .icon_search');
    let btnSearchClose= $('.header .gnb.web .gnb_main .menu .icon_close');
    if(type == 'open'){
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
function toggleMenuWeb(type){
    if(type == 'open'){      
        body.addClass('no_scroll');
        dim.show();
        $('.header .gnb.web .gnb_sub').addClass('nav');
        // 기존 마우스 아웃 이벤트 제거
        $('.header .gnb.web').off('mouseleave');
    }else {      
        body.removeClass('no_scroll');
        dim.hide();
        $('.header .gnb.web .gnb_sub').removeClass('nav');
        
    }    
}

/* 
    웹용 GNB  Mouseover / Mouseleave
    type : open / hide
 */
function mouseToggleMenuWeb(type, index){
    if(type == 'open'){      
        $('.header .gnb.web .gnb_sub').stop().slideDown(350, function() {
            $('.header .gnb.web .gnb_sub').css("padding-top", "2.552vw");
            $('.header .gnb.web .gnb_sub').css("padding-bottom", "3.072vw");
            $('.header .gnb.web .gnb_sub').css("opacity",1);
        }); 

        $('.header .gnb.web .gnb_sub > div').hide();
        $('.header .gnb.web .gnb_sub > div').eq(index).fadeIn();
        $('.header .gnb.web .gnb_sub > div').eq(index).css('display','flex'); 
        $('.header .gnb.web .gnb_sub > div .img').removeClass('none');
        
        
        dim.show();
    }else {      
        $('.header .gnb.web .gnb_sub > div .img').addClass('none');
        $('.header .gnb.web .gnb_sub').stop().fadeOut(350); 

        let search= $('.header .gnb.web .gnb_search');
        if(!search.is(':visible')){
            dim.hide();

        }
    }    
}


/* 
    아코디언 Show / hide
 */
    function toggleAccodion(e){
        let thisNode = $(e);
        thisNode.parent('li').toggleClass('open')
        thisNode.next().slideToggle({
            duration: 400,
            easing: "swing",
            start: function() {
                thisNode.next().css("display", "flex");                
                thisNode.addClass('bg_white');
            },
            complete: function() {
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

