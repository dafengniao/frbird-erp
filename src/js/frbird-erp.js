;(function(){
	$('li.dropdown.inherit')
	.mouseover(function() {   
     $(this).addClass('open'); 
     alert(123);   
 	})
 	.mouseout(function() {        
 		$(this).removeClass('open');   
  	});
})(jQuery);