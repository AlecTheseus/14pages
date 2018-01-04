/**
 * Created by CIAE presencepolymorph@gmail.com on 2017/10/11.
 */
    /*var mainFn = {
        pageNo:0,/!*当前页面*!/
        maxPage:7,/!*最大页面*!/
        /!*页面控制*!/
        arrowCheck:function (p) {
            /!*按钮*!/
            if(mainFn.pageNo == 0){
            $('#btnLeft').css('display','none')
            }else{
            $('#btnLeft').css('display','block')
            }
            if(mainFn.pageNo == mainFn.maxPage){
            $('#btnRight').css('display','none')
            }else{
            $('#btnRight').css('display','block')
            }
            console.log(mainFn.pageNo )
        }
    };
    /!*右翻页*!/
    $("#btnRight").on("tap",function(){
        mainFn.pageNo++
        $('.page').eq(mainFn.pageNo-1).removeClass('activePage')
        $('.page').eq(mainFn.pageNo).addClass('activePage')
        mainFn.arrowCheck()
    });
    /!*左翻页*!/
    $("#btnLeft").on("tap",function(){
        mainFn.pageNo--
        $('.page').eq(mainFn.pageNo+1).removeClass('activePage')
        $('.page').eq(mainFn.pageNo).addClass('activePage')
        mainFn.arrowCheck()
    });*/
    /*var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',

        // 如果需要分页器
        // pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    })*/
    /*$("p").on("swipeleft",function(){
     alert("You swiped left!");
     });*/
  // window.pageGo=mainFn.pageGo
    setTimeout(function () {
        $('body').animate({scrollTop: (document.body.scrollHeight)}, 5800)
    },2000)
    $("body").on("tap",function(){
        $('body').stop()
    })
        .on("taphold",function(){
            $('body').stop()
        })
        .on("scrollstart",function(){
            $('body').stop()
        });
