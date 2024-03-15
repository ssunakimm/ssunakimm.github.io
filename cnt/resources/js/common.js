$(document).ready(function(){
    // gnb 효과
    

    

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