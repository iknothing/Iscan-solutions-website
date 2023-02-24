$(document).ready(function() {
    $('#show-images').on('click', function() {
      var services = $('.service');
  
      services.each(function(i, service) {
        var img = $(service).find('.service-image');
        var delay = 0;
  
        setTimeout(function() {
          img.toggleClass('show');
        }, delay);
      });
    });
  });
  

  $(document).ready(function() {
    $('#show-images1').on('click', function() {
      var services = $('.service');
  
      services.each(function(i, service) {
        var img = $(service).find('.service-image1');
        var delay = 0;
  
        setTimeout(function() {
          img.toggleClass('show');
        }, delay);
      });
    });
  });

  $(document).ready(function() {
    $('#show-images2').on('click', function() {
      var services = $('.service');
  
      services.each(function(i, service) {
        var img = $(service).find('.service-image2');
        var delay = 0;
  
        setTimeout(function() {
          img.toggleClass('show');
        }, delay);
      });
    });
  });
  
//   $(document).ready(function() {
//   $('#show-images1').on('click', function() {
//     var services = $('.service');
//     var delay = 0;
  
//     services.each(function(i, service) {
//       var img = $(service).find('.service-image1');
//       delay += 100;
  
//       setTimeout(function() {
//         img.animate({
//           opacity: 'toggle',
//           height: 'toggle'
//         }, 500);
//       }, delay);
//     });
//   });
// });

// var btn = document.querySelector('#show-images');
// var services = document.querySelectorAll('.service');
// var images = document.querySelectorAll('.service-image');

// btn.addEventListener('click', function() {
//   for (var i = 0; i < services.length; i++) {
//     images[i].classList.toggle('show');
//   }
// });


  