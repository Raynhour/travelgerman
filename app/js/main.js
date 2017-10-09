$('document').ready(function(){
	$('#message').click(function(){
		$(".header__box").toggle();
	});
	$('#inbox-list').click(function(){
		$(".inbox__list").toggle();
	});
	$('.owl-carousel').owlCarousel({
	    nav:true,
	    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
	    center:false,
	    loop:true,
		smartSpeed: 1000,
		fluidSpeed: true,
	    responsive: {
	    	0 : {
	    	  items:1
	    	},
	    	768 : {
	    	  items:3
	    	},
	    	1024 : {
	    		items:3
	    	}
	    }
	});
	
});