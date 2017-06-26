$(function(){
	

	 var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop : true,
		    // 点击跳转图片
		 	paginationClickable :true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination', 
		    // 跳转时间、毫秒   
		    autoplay:3000,
		    speed:1000,
		    setWrapperSize:true,
		    // 导航按钮
		    nextButton: '.swiper-button-next',
    		prevButton: '.swiper-button-prev',
		  })  
	// header部分hover
	$('#header').find('.header-ul li').hover(function(){
		$(this).find('div').css('display','block')

	},function(){
		$(this).find('div').css('display','none')
	});

	// 城市列表hover
	$('.header-city').hover(function(){
		$(this).find('ul').css('display','block');
	},function(){
		$(this).find('ul').css('display','none')
	})


	// 导航hover
	$('#nav .nav-list').hover(function(){
		$(this).children('.list-div').css('display','block').siblings('a').children('i').css('display','block');
		$(this).children('a').css('background','#2b69aa');

		$(this).has('.list-div').children('a').each(function(){
			$(this).css('background','#2b69aa');
			var thisa=$(this);
			setTimeout(b,300);
			function b(){
				thisa.css('background','#0088d3');
			}
		})
	},function(){
		$(this).children('div').css('display','none').siblings('a').children('i').css('display','none');
		$(this).children('a').css('background','#0088d3')
	})

	$('#nav .nav-t-div').find('.ladn-register a').hover(function(){
		$(this).css('text-decoration','underline');
	},function(){
		$(this).css('text-decoration','none');
	})
	$('#nav .nav-t-div').find('.mysjs a').hover(function(){
		$(this).css('text-decoration','underline');
	},function(){
		$(this).css('text-decoration','none');
	})
	$('#nav .nav-t-div').find('.denglu-dingdan .dingdan').hover(function(){
		$(this).css('text-decoration','underline');
	},function(){
		$(this).css('text-decoration','none');
	})

	$('#nav .nav-t-div').hover(function(){
		$(this).find('.denglu-dingdan').css('display','block');
	},function(){
		$(this).find('.denglu-dingdan').css('display','none');
	})


	// 轮播图部分hover显示
	$('#carousel-position .position-li').hover(function(){
		$(this).children('a').css({'color':'#f39800'});
		$(this).css({'background':'#fff','border-color':'#f39800'}).children('.apparatus').css('display','block').prevAll('.iconfont').css('color','#f39800');
	},function(){
		$(this).children('a').css({'color':'#ffffff'});
		$(this).css({'background':'#0088d3','border-color':'#0088d3'}).children('.apparatus').css('display','none').prevAll('.iconfont').css('color','#fff');

	}
	);
 	
 	// table菜单
 	$('#content').find('.first-nav li').hover(function(){
 		$(this).css('color','#0088d3');
 	},function(){
 		$(this).css('color','#666');
 	})
 	$('#content').find('.first-nav li').on('click',function(){
 			var wh=$(this).width()/2-0+'px';
		$(this).addClass('currency-all').find('i').css({
			'left':wh,
			'display':'block'
		}).unbind('hover').parent('li').siblings('li').removeClass('currency-all').find('i').css('display','none');

		var b =$(this).index();
		$(this).parents('.tablemain').find('.parentdiv-div').eq(b).show().siblings().hide();
		
 	});
 	// box-shadow
 	$('#soujianshen').find('.soujianshen-qb .soujianshen-padding li').hover(function(){
 		$(this).find('.hoverboxshow').addClass('boxshadow')
 	},function(){
 		$(this).find('.hoverboxshow').removeClass('boxshadow');
 	})
 	$('#second').find('.second-ul>li').hover(function(){
 		$(this).find('.information').addClass('boxshadow');
 	},function(){
 		$(this).find('.information').removeClass('boxshadow');
 	})
 	$('#activity-v').find('.activity-zhd li>div').hover(function(){
 		$(this).find('.activity-detail').addClass('boxshadow');
 	},function(){
 		$(this).find('.activity-detail').removeClass('boxshadow');
 	})
 	$('#train').find('li').hover(function(){
 		$(this).find('.train-v-mone').addClass('boxshadow');
 	},function(){
 		$(this).find('.train-v-mone').removeClass('boxshadow');
 	})
	// 地区table菜单
	$(".parentdiv-abc-li").hover(function(){
		$(this).find('a').css({
			'background':'#0088d3',
			'color':'#fff',
		})

	},function(){
		$(this).find('a').css({
			'background':'none',
			'color':'#0088d3',
		})
	})
	$(".parentdiv-abc-li").on('click',function(){
		var index=$(this).index();
		$(this).parents('.parentdiv-div-city').find('.soujianshen-qb-quanbu').eq(index).css('display','block').siblings('.soujianshen-qb-quanbu').css('display','none');
		$(this).addClass('cobfff').siblings('li').removeClass('cobfff');
	})


	// 移动定位
	$(window).scroll(function(){
		if($(document).scrollTop()>300){
			$('#nav-left').css({
				'position':'fixed',
				'top':'200px',
			})
			$('#nav-left').find('li').eq('0').find('a').addClass('linkbp-bd').parents('li').siblings('li').find('a').removeClass('linkbp-bd');
		}else{
			if($('body').scrollTop()<300){
				$("#nav-left").css({
					'position':'absolute',
					'top':'0px',
				})
			}
		};
		if($(document).scrollTop()>700){
			$('#nav-left').find('li').eq('1').find('a').addClass('linkbp-bd').parents('li').siblings('li').find('a').removeClass('linkbp-bd');
		}
		if($(document).scrollTop()>1437){
			$('#nav-left').find('li').eq('2').find('a').addClass('linkbp-bd').parents('li').siblings('li').find('a').removeClass('linkbp-bd');
		}
	
		if($(document).scrollTop()>1813){
			$('#nav-left').find('li').eq('3').find('a').addClass('linkbp-bd').parents('li').siblings('li').find('a').removeClass('linkbp-bd');
		}
		if($(document).scrollTop()>2242){
			$('#nav-left').find('li').eq('4').find('a').addClass('linkbp-bd').parents('li').siblings('li').find('a').removeClass('linkbp-bd');
		}
		if($(document).scrollTop()>2800){
			$('#nav-left').find('li').eq('5').find('a').addClass('linkbp-bd').parents('li').siblings('li').find('a').removeClass('linkbp-bd');
		}
		if($(document).scrollTop()>3200){
			$('#nav-left').find('li').eq('6').find('a').addClass('linkbp-bd').parents('li').siblings('li').find('a').removeClass('linkbp-bd');
		}
	});
	$('#nav-left').find('li').hover(function(){
		$(this).find('a em').css('display','none');
	},function(){
		$(this).find('a em').css('display','block');
	})

	$('#nav-left').find('li').hover(function(){
		$(this).find('.linkbp span').css({
			'display':'block',
			'background':'#0088d3',
			'color':'#fff',
		});
		$(this).find('.linkbp em').css('display','none');
		if($(this).find('a').hasClass('linkbp-bd')==false){
			$(this).prev('li').find('a').css('border','none');
		}
	},function(){
		$(this).prev('li').find('a').css('border-bottom','1px solid #8a8a8a');
		$(this).find('.linkbp span').css('display','none');
		$(this).find('.linkbp em').css('display','inline-block');
	})
	// 
	$('#nav-left').find('li').on('click',function(){
		$(this).prev('li').find('a').css('border-bottom','1px solid #8a8a8a');
		$(this).siblings('li').find('a').removeClass('linkbp-bd');
		$(this).find('a').addClass('linkbp-bd');
	})
	$('#nav-left').find('li').eq(0).on('click',function(){
		$('body,html').animate({
			'scrollTop':'513px',
		},250);
	})
	$('#nav-left').find('li').eq(1).on('click',function(){
		$('body,html').animate({
			'scrollTop':'970px',
		},250)
	})
	$('#nav-left').find('li').eq(2).on('click',function(){
		$('body,html').animate({
			'scrollTop':'1751px',
		},250)
	})
	$('#nav-left').find('li').eq(3).on('click',function(){
		$('body,html').animate({
			'scrollTop':'2140px',
		},250)
	})
	$('#nav-left').find('li').eq(4).on('click',function(){
		$('body,html').animate({
			'scrollTop':'2540px',
		},250)
	})
	$('#nav-left').find('li').eq(5).on('click',function(){
		$('body,html').animate({
			'scrollTop':'3195px',
		},250)
	})
	$('#nav-left').find('li').eq(6).on('click',function(){
		$('body,html').animate({
			'scrollTop':'3300px',
		},250)
	})

	$('#nav-left').find('li').last().on('click',function(){
		$('body,html').animate({
			'scrollTop':'0',
		},250)
	})



})