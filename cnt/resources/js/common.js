$(document).ready(function(){
    // gnb 효과
    let isGnbOpen = false;
    $('.header .gnb.web .gnb_main ul li a').on("mouseover", function() {
            let index = $(this).parent().index();
            $('.header .gnb.web .gnb_sub').stop().slideDown(300, function() {
                $('.main').addClass('dim');
            });
            $('.header .gnb.web .gnb_sub > div').hide();
            $('.header .gnb.web .gnb_sub > div').eq(index).css('display','flex');    
    });
    $('.header .gnb.web').on("mouseleave", function() {
        $('.header .gnb.web .gnb_sub').stop().slideUp(300, function() {
            $('.main').removeClass('dim');
        });
    });
});
function toggleGnb(){
    let gnbSub = $('.gnb.mobile .gnb_sub');
    $('.gnb.mobile .gnb_sub').toggleClass('open');        
    $('body').toggleClass('no_scroll');
}
function toggleGnbSub(e){
    let gnbSubBtn = $('.gnb.mobile .gnb_sub .depth1 .icon_toggle');
    let $targetLi = $(e).closest('li');
    let $targetDepth2 = $targetLi.find('.depth2');
    // 클릭된 요소를 제외한 다른 요소의 상태를 변경
    gnbSubBtn.not(e).removeClass('open').parents('li').find('.depth2').slideUp();
    // 클릭된 요소의 상태를 변경
    $(e).toggleClass('open');
    $targetDepth2.slideToggle();
}
/*
*/
function toggleGnbWeb(type){
    if(type == 'open'){
        $('body').addClass('no_scroll');
        $('.header .gnb.web .gnb_sub').addClass('nav');
        // 기존 마우스 아웃 이벤트 제거
        $('.header .gnb.web').off('mouseleave');
    }else {
        $('body').removeClass('no_scroll');
        $('.header .gnb.web .gnb_sub').removeClass('nav');
        $('.header .gnb.web').on("mouseleave", function() {
            $('.header .gnb.web .gnb_sub').stop().slideUp(300, function() {
                $('.main').removeClass('dim');
            });
        });
    }      
}