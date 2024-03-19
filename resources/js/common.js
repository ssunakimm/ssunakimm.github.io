

let body;
let dim
$(document).ready(function(){
    
    // 애니메이션
    AOS.init();

    body = $('body');
    dim = $('.dim');

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

    // gnb 효과
    $('.header .gnb.web .gnb_main ul li a').on("mouseover", function() {
            let index = $(this).parent().index();
            $('.header .gnb.web .gnb_sub').stop().slideDown(350);
        
            $('.header .gnb.web .gnb_sub > div').hide();
            $('.header .gnb.web .gnb_sub > div').eq(index).fadeIn();
            $('.header .gnb.web .gnb_sub > div').eq(index).css('display','flex');    
    });
    $('.header .gnb.web').on("mouseleave", function() {
        $('.header .gnb.web .gnb_sub > div .img').addClass('none');
        $('.header .gnb.web .gnb_sub').stop().fadeOut(350, function() {
            $('.header .gnb.web .gnb_sub > div .img').removeClass('none');
        });
    });
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
        dim.show();
    } else {
        gnbSub.removeClass('open');        
        body.removeClass('no_scroll');
        dim.hide();
    }
}

/* 
    모바일용 GNB MENU Show / hide
 */
function toggleGnbMenuMobile(e){
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
        $('.header .gnb.web').on("mouseleave", function() {
            $('.header .gnb.web .gnb_sub').stop().slideUp(300, function() {
                
            });
        });
    }     


}


