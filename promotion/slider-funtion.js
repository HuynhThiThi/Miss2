
$( document ).ready(function() {
    $h_slider_options =  {
      gallery: true,
      item: 1,
      loop:true,
      slideMargin: 0,
      thumbItem: 3,
      galleryMargin: 15,
     thumbMargin: 20,
      }; 
  h_slider = $('#lightSlider').lightSlider($h_slider_options);
  $selector = '#lightSlider li:not(".clone") a';
  $selector += ',#lightSliderVertical li:not(".clone") a';
  $().fancybox({
    width: 560,  // default 800
    height: 340, // default 600
    selector : $selector,
    backFocus : false, 
    buttons : [          
      'close'
    ],
    parentEl: '.wrapper',
    btnTpl: {
      close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
      '<div class="icon-close"></div>' +
      "</button>",
      arrowLeft:
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<div class="icon-prev">icon</div>' +
      "</button>",

    arrowRight:
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<div class="icon-next">icon</div>' +
      "</button>",
    }
  }); 
});

$(function() {
  
  $('.dropdown_select').on('click', function() {
   
    $(this).toggleClass('open');
  });
  
  $('.dropdown_select > .list > .item').on('click', function() {  
  $('.dropdown_select > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
  });
  
  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown_select').removeClass('open');
    }
  });
  
  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown_select > .caption").length === 0 ) {
      $('.dropdown_select').removeClass('open');
    }
  });
  
});