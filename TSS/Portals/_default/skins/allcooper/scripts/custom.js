
	 //For Menu Lavalamp:

jQuery(document).ready(function ($) {
        animationShow({"#mobile_icon":"#mobile_menu"});
        animationShow({"#searchbut":"#search"});
    })
	
	
jQuery(document).ready(function($) {
	jQuery('#to_top').click(function() {
		jQuery('body,html').animate({
			scrollTop: 0
		},
		800);
	});
	var backtop=function(){
	Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop)>245?jQuery('#to_top').fadeIn(300):jQuery('#to_top').fadeOut(300)
	}
	$(window).load(function(){
		backtop();
	})
	$(window).scroll(function(){
		backtop();
	})
	
});

	/*OwlCarousel 2*/
	$(".owl-carousel").each(function () {
		var e = $(this);
		var itme = e.data("items") ? e.data("items") : 4;
		var carousel_default = {
			items : itme,
			loop : true,
			center : false,
			rewind : false,
			mouseDrag : true,
			touchDrag : true,
			pullDrag : true,
			freeDrag : false,
			margin : 0,
			stagePadding : 0,
			merge : false,
			mergeFit : true,
			autoWidth : false,
			startPosition : 0,
			rtl : false,
			smartSpeed : 250,
			fluidSpeed : false,
			dragEndSpeed : false,
			responsiveRefreshRate : 200,
			responsiveBaseElement : window,
			fallbackEasing : 'swing',
			info : false,
			nestedItemSelector : false,
			MobileSmall : 1,
			autoplay : false,
			autoplayTimeout : 3000,
			autoplayHoverPause : true,
			autoHeight : false,
			nav : true,
			animateOut : '',
			animateIn : '',
			navText : ['<', '>'],
			navSpeed : false,
			navElement : 'div',
			navContainer : false,
			slideBy : 1,
			dots : true,
			dotsEach : false,
			dotsData : false,
			dotsSpeed : false,
			dotsContainer : false,
			maxHeight:false,
			model3D:false,
			mobile : Math.max(itme - 3, 1),
			tablet : Math.max(itme - 2, Math.min(2, itme)),
			desktopSmall : Math.max(itme - 1, Math.min(3, itme)),
			desktop : Math.max(itme - 1, Math.min(3, itme))
		};

		for (i in carousel_default) {
			if (e.data(i) != undefined) {
				carousel_default[i] = e.data(i);
			} else if (e.data(i.toLowerCase()) != undefined) {
				carousel_default[i] = e.data(i.toLowerCase());
			}
		};
		carousel_default["responsive"] = {
			0 : {
				items : carousel_default["MobileSmall"]
			},
			321 : {
				items : carousel_default["mobile"]
			},
			481 : {
				items : carousel_default["tablet"]
			},
			769 : {
				items : carousel_default["desktopSmall"]
			},
			993 : {
				items : carousel_default["desktop"]
			},
			1201 : {
				items : carousel_default["items"]
			}
		};
		
		if(carousel_default["model3D"]){
			carousel_default["maxHeight"]=true;
			carousel_default["center"]=true;
			carousel_default["mouseDrag"]=false;
			
			var moves=0,rotate=true;
			e.on("translated.owl.carousel",function(x){
				rotate=true;
			})
			var prev=true,next=true;
			e.on("drag.owl.carousel",function(x){ 
				e.addClass("owl-grab owl-drag")
				moves==0?moves=x.originalEvent.offsetX:"";
				 if(x.originalEvent.offsetX - moves >20 && rotate && prev){
					moves = x.originalEvent.offsetX;
					e.trigger('prev.owl');
					next=false;
				 }
				if(x.originalEvent.offsetX - moves < -20 && rotate && next){
					moves=x.originalEvent.offsetX;
					e.trigger('next.owl');
					prev=false;
				}
				if(x.originalEvent.screenX ==0){
					moves=0;
					prev=true;
					next=true;
					e.removeClass("owl-grab owl-drag");
				}
			})
		}
		
		if(carousel_default["maxHeight"]){
			e.on("refreshed.owl.carousel",function(x){
					var max_height=0;
					e.find(".owl-item.center").addClass("temporary");
					e.find(".owl-item").addClass("center");
					e.find(".owl-item.center").each(function() {
					   max_height=Math.max(max_height,$(this).innerHeight());
					});
					e.find(".owl-item").removeClass("center");
					e.find(".owl-item.temporary").addClass("center").removeClass("temporary");
					e.find(".owl-stage-outer").css("height",max_height)
			})
		}
		
		if(carousel_default["center"]){
			e.on("initialized.owl.carousel translate.owl.carousel",function(x){
				e.find(".owl-item.next").removeClass("next");
				e.find(".owl-item.prev").removeClass("prev");
				e.find(".owl-item").eq(x.item.index).addClass("center");
				e.find(".owl-item").eq(x.item.index+1).addClass("prev");
				e.find(".owl-item").eq(x.item.index-1).addClass("next");
			})
		}
	//	e.find(".item").on("click",function(){
	//	console.log($(this).index())
		
	//	})
		
		if(carousel_default["maxHeight"] || e.attr("class").indexOf("dg-testimonial")){
			ImgLoad(function () {
				e.owlCarousel(carousel_default);
			},e)
		}else{
			e.owlCarousel(carousel_default);
		}
		
		
		
	})

