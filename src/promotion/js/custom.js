import "./util/_toggleClass";
import "./util/_scaleRoot";
import "./util/_lightbox";
import "./util/_scrollwatch";
// import {dndPromotion, getAwardSrcById} from "./util/_promotion";
import "lazysizes";
// import "./util/_scrollFrame";
import scrollFrame from "./util/_scrollFrame";
// import {milestonesHybrid} from "./util/_milestones";

// import Swiper, {Navigation} from "swiper";
// import 'swiper/swiper-bundle.css';

import "@fancyapps/fancybox";

// import rerender from "./util/_rerender";


$(function () {

    $("#asideRightToggle").toggleClassname({
        toggle: [
            {
                el: $('#asideRight'),
                className: 'active'
            }
        ]
    });

    $("#topnavBurger").toggleClassname({
        toggle: [
            {
                el: $("#topnavBurger + ul"),
                className: 'active'
            },
            {
                el: $("#topnavBurger"),
                className: 'is-active'
            }
        ]
    });

    // if ($("#registerTrigger").length > 0) {
    //     $("#registerTrigger").on("click", function(e){
    //         e.preventDefault();
    //         $("#registerTrigger").addClass("active");
    //         var elIframe = $("#registerIframe");
    //         var dataSrc = elIframe.attr("data-src");
    //         elIframe.attr("src", dataSrc);
    //         elIframe.addClass("active");
    //     })
    // }



    $("#wrapper").scalePlatform({
        designSafe: {
            // if width of device smaller safe zone, then init scale. 
            desktop: 1200,
            mobile: 588
        },
        designWidth: {
            desktop: 2024,
            mobile: 1037
        },
        designHeight: {
            desktop: 912,
            mobile: 1800
        }
    });



    if ($("[data-lightbox]").length > 0) {
        $("[data-lightbox]").each(function () {
            $(this).lightBox({
                objLightBox: $(this).attr('href'),
                type: $(this).data('lightbox-type')
            });
        });
    }

    // if ($("#playInnerClip").length > 0) {
    //     $("#playInnerClip").on("click", function(e){
    //         e.preventDefault();
    //         let src = $("#innerClip").attr('src');

    //         if (src.indexOf("?autoplay=1") < 0) {
    //             src += "?autoplay=1";
    //             $("#playInnerClip").addClass("playing");
    //         } else {
    //             src = src.replace("?autoplay=1", "");
    //             $("#playInnerClip").removeClass("playing");
    //         }

    //         $("#innerClip").attr('src', src);
    //     })
    // }

    // re-render rank table

    // Swiper.use([Navigation]);


    // var rewardResult;
    // rerender.rankDisplayApi(function(){
    //     var rankTop10;
    //     if ($("#rankTop10").length > 0) {
    //         let swiperName = 'rankTop10';
    //         rankTop10 = new Swiper("#" + swiperName, {
    //             // spaceBetween: 32,
    //             slidesPerView: 3,
    //             navigation: {
    //                 prevEl: '.swiper-button-prev-rankTop10',
    //                 nextEl: '.swiper-button-next-rankTop10',
    //             },
    //             breakpoints: {
    //                 '@0.00': {
    //                     slidesPerView: 3,
    //                 },
    //                 '@1.00': {
    //                     slidesPerView: 4,
    //                 }
    //             }
    //         });
    //     }
    // });


    // dndPromotion({
    // url: urlPromotion,
    // callback: function(){
    //     if ($("#rewardResult").length > 0) {
    //         let swiperName = 'rewardResult';
    //         rewardResult = new Swiper("#" + swiperName, {
    //             // spaceBetween: 32,
    //             slidesPerView: 1,
    //             centeredSlides: true,
    //             navigation: {
    //                 prevEl: '.swiper-button-prev-rewardResult',
    //                 nextEl: '.swiper-button-next-rewardResult',
    //             }
    //         });
    //     }

    // }
    // }); 

    // window['getAwardSrcById'] = getAwardSrcById;

    scrollFrame.init();

    // milestonesHybrid.init();


    var MobileDetect = require('mobile-detect');
    var md = new MobileDetect(window.navigator.userAgent);
    // console.log(md.os());  

    if ($(".osdetect").length > 0) {
        $(".osdetect").each(function () {
            var hrefIos = $(this).attr("data-app");
            var hrefAnd = $(this).attr("data-goo");
            if (md.os() === 'iOS') {
                $(".osdetect").attr("href", hrefIos);
            } else {
                $(".osdetect").attr("href", hrefAnd);
            }
        })
    }


    function readURL(idChange, input, number) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                idChange.eq(number).children('img').attr('src', e.target.result);
                idChange.eq(number).children('img').show();
                idChange.eq(number).children('img').removeClass("placeholder");
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#img-big .upload").on("change", function () {
        var idChange = $("#img-big");
        var ind = $(this).parent().index();
        readURL(idChange, this, ind);
    });
    $("#img-user li .upload").on("change", function () {
        var idChange = $("#img-user li");
        var ind = $(this).parent().index();
        readURL(idChange, this, ind);
    });
    $("#img-id li .upload").on("change", function () {
        var idChange = $("#img-id li");
        var ind = $(this).parent().index();
        readURL(idChange, this, ind);
    });

    if ($(".prizes").length > 0) {
        $(".prize__thumb").on("click", function () {
            $(".prize__thumb").removeClass("active");
            $(this).addClass("active");
            var fullPrizeDesktop = $(this).attr("data-thumbdesktop");
            var fullPrizeMobile = $(this).attr("data-thumbmobile");
            $("#fullPrizeDesktop").attr("src", fullPrizeDesktop);
            $("#fullPrizeMobile").attr("src", fullPrizeMobile);
        });
    }


    if ($(".tabcontent").length > 0) {
        $(".tabcontent > .tabcontent__tab > li > input").on("change", function(){
            let tabContent = $(this).attr("data-content");

            $(".tabcontent > .tabcontent__content > li").removeClass("active"); 

            $(tabContent).addClass("active");
        })
    }
    

});


