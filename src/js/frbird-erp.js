;(function(){
	$('.navbar-nav li.dropdown').click(function(){
		alert(123);
	});
	$('li.dropdown.hover')
	.mouseover(function() {   
     $(this).addClass('open');
 	})
 	.mouseout(function() {        
 		$(this).removeClass('open');   
  	});
})();