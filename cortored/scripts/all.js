(function(cash) { "use strict";
  var obj;
	function center_image(){
		$('.center_img').each(function(){
			obj = $(this);
			var bg_ratio = obj.attr('data-width-img') / obj.attr('data-height-img');
			var wrapper_ratio = obj.parent().width() / obj.parent().height();
			if(bg_ratio<wrapper_ratio){
				var center = (obj.parent().width() / bg_ratio - obj.parent().height())*(-0.5);
				obj.css({'left':'0px', 'top':center, 'width':'100%', 'height':'auto'});
			}
			else{
				var center_hor = (bg_ratio*obj.parent().height() - obj.parent().width())*(-0.5);
				obj.css({'left':center_hor, 'top':'0px', 'height':'100%', 'width':'auto'});
			}
		});
	}
                 
    function center_bg(){
		$('.center-image1').each(function(){
		  var bgSrc = $(this).attr('src');
		  $(this).parent().css({'background-image':'url('+bgSrc+')'});
		  $(this).remove();
		});
	}
	center_bg();

//////////////////////////////////////////////////////-===SLIDERS===-////////////////////////////////////////////////                 


                 
var full_scrin;         
		 $(function(){
			  full_scrin = $('.main-slider').swiper({
				loop:true,
				slidesPerView: 1,
                autoplay: 0,
                grabCursor: true
			});
		}); 
            
     $('.main-slider .slide-prev').on("click", function() { 
		full_scrin.swipePrev();
		return false;
	  });
	
	  $('.main-slider .slide-next').on("click", function() { 
		full_scrin.swipeNext();
		return false;
	  });

var fancy;
$(function(){             
       var fancy = $(".fancybox").fancybox({
		    loop:true,
            nextClick: true,
            showNavArrows: true,
            beforeLoad: function() {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
               }
            },
            helpers	: {
			title	: {
				type: 'inside'
			}
            },
            afterLoad : function() {
                this.title = this.title + '<span class="count">' + '&lt;&ensp;&ensp;&ensp;&ensp;' + (this.index + 1) + ' - ' + this.group.length + '&ensp;&ensp;&ensp;&ensp;&gt;' + '<span>';
            }
	    });
       
     });

                 
//////////////////////////////////////////////////////-===CLICK===-////////////////////////////////////////////////    

$('.nav-menu-icon a').on("click", function() { 
  if ($('.navigation').hasClass('slide')) {
      $('.navigation').removeClass('slide');
      $(this).removeClass('active');
      $('.nav-menu-icon a i').removeClass('icon-color');
  }else {
      $('.navigation').addClass('slide');
      $(this).addClass('active');
      $('.nav-menu-icon a i').addClass('icon-color');
  }
    return false;
 
});
                 
    $('.button-totop').on( "click", function() {              
        $('body,html').animate({
             scrollTop: 0
         }, 400);
           return false;
    }); 
                 
    $(window).load(function(){
         center_image();
        $('.preload').hide();
            var $container = document.querySelector('.container-masonry');
             var msnry = new Masonry( $container, {
                  itemSelector: '.item',
                  columnwidth: '.item'
                });
    });
                 
    $(window).resize(function(){
         center_image();
    });             

})(jQuery); 