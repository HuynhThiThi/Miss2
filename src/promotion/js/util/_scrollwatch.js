import ScrollWatch from 'scrollwatch';

$.fn.scrollWatch = function(options){
    var defaults = {
      before: () => {},
      options: {
        watchOnce: false,
        watch: '#frame1',
        scrollThrottle: 20,
        onElementInView: function() {
            $(".topfloat").removeClass("fixed");
        },
        onElementOutOfView: function() { 
            $(".topfloat").addClass("fixed");
        }
      },
      after: () => {}
    }
    var settings = $.extend(defaults, options);
    settings.before();
    // console.log(settings.options);
    var sw = new ScrollWatch(settings.options);

    settings.after();
}