// var index=1;
// function time(){
//     index++;
//     var oldleft=$(".main").position().left;
//     var nowleft=oldleft-520;
//     $(".main").css('left',nowleft);
//     $('.List li').removeClass('active');
//     $('.List li').eq(index-1).addClass('active'); 
//     // console.log(index);
//     if(index==4){
//         $('.List li').eq(0).addClass('active');
//         index=1;
//         $(".main").css('left','-520px');
//     }
     
// }
// var timer=setInterval(time,1000);
// $('.container').mouseenter(function () { 
//    clearInterval(timer);
// });
// $('.container').mouseleave(function () { 
//     timer=setInterval(time,1000);
// });


// $('.List li').click(function(){
//     oldli=$('.List li').index();
//     console.log(oldli);
//     var newli=$(this).index();
//     // console.log(newli);
//     $(".main").css('left',(newli-oldli)*(-520));
//     $('.List li').removeClass('active');
//     $(this).addClass('active'); 
// })
var c=0;
function time(){
    if(c==3){
        $('.main img').css({'left':'0px'});
        c=0;
    }
    $('.main img').eq(c).show().siblings().hide();
    $('.List li').eq(c).addClass('active').siblings().removeClass();
    c++;
}
var timer=setInterval(time,1000);
$('.container').mouseenter(function () { 
   clearInterval(timer);
});
$('.container').mouseleave(function () { 
    timer=setInterval(time,1000);
});
$('.List li').click(function(){
    var c=$(this).index();
    $('.main img').eq(c).show().siblings().hide();
    $('.List li').eq(c).addClass('active').siblings().removeClass();

})