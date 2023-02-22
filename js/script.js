$(document).ready(function() {
    $('#show-images').on('click', function() {
      var services = $('.service');
  
      services.each(function(i, service) {
        var img = $(service).find('.service-image');
        var delay = i * 500;
  
        setTimeout(function() {
          img.toggleClass('show');
        }, delay);
      });
    });
  });
  