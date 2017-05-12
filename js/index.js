$(function(){
	

	 var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    // loop: true,
		    // 点击跳转图片
		 	paginationClickable :true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination', 
		    // 跳转时间、毫秒   
		    autoplay:3000,
		  })  
	// header部分鼠标滑过显示
	$('#header').find('.header-ul li').hover(function(){
		$(this).find('div').css('display','block')

	},function(){
		$(this).find('div').css('display','none')
	});

	// 城市列表
	$('.header-city').hover(function(){
		$(this).find('ul').css('display','block');
	},function(){
		$(this).find('ul').css('display','none')
	})


	// 导航hover
	$('#nav .nav-list').hover(function(){
		$(this).children('.list-div').css('display','block').siblings('a').children('i').css('display','block');
	},function(){
		$(this).children('div').css('display','none').siblings('a').children('i').css('display','none');
	})


	// 轮播图部分hover显示
	$('#carousel-position .position-li').hover(function(){
		$(this).children('a').css({'color':'#f39800'});
		$(this).css({'background':'#fff','border-color':'#f39800'}).children('.apparatus').fadeIn('2000').prevAll('.iconfont').css('color','#f39800');
	},function(){
		$(this).children('a').css({'color':'#ffffff'});
		$(this).css({'background':'#0088d3','border-color':'#0088d3'}).children('.apparatus').css('display','none').prevAll('.iconfont').css('color','#fff');

	}
	);
 	
 	// table菜单
 	$('#content').find('.first-nav li').on('mouseenter',function(){
 		$(this).css("color",'#0088d3');
 	})
 	$('#content').find('.first-nav li').on('mouseleave',function(){
 		$(this).css('color','#666');
 	})
 	// $('#content').find('')

	$('#content').find('.first-nav li').on('click',function(){
		var wh=$(this).width()/2-10+'px';
		$(this).css('color','#0088d3').find('i').css({
			'left':wh,
			'display':'block'
		}).parent('li').siblings('li').css('color','#686666').find('i').css('display','none');

		var b =$(this).index();
		$(this).parents('.tablemain').find('.parentdiv-div').eq(b).show().siblings().hide();
		
	});
	// 地区table菜单
	$(".parentdiv-abc-li").on('click',function(){
		index = $(this).index();
		$(this).find('a').css({
			'background':'#0088d3',
			'color':'#fff',
			'cursor':'default',
		}).parents('.parentdiv-abc-li').siblings('li').find('a').css({
			'background':'none',
			'color':'#0088d3',
			'cursor':'pointer',
		})
		$(this).parents('.parentdiv-div-city').find('.soujianshen-qb-quanbu').eq(index).css('display','block').siblings('.soujianshen-qb-quanbu').css('display','none');

	})

	// 移动定位
	$(window).scroll(function(){
		if($('body').scrollTop()>543){
			$("#nav-left").css("position","fixed");
			// $('#nav-left').css({
			// 	'position':'find',
			// 	'top':'60px',
			// })
			$("#nav-left").find('li').eq(1).find("a").addClass('linkbp-b').parents('li').siblings('li').find('a').removeClass('linkbp-b');
		}else{
			$("#nav-left").css("position","absolute");
		};
		if($('body').scrollTop()>1253){
			$("#nav-left").find('li').eq(1).find("a").addClass('linkbp-b').parents('li').siblings('li').find('a').removeClass('linkbp-b');
		};
		if($('body').scrollTop()>1573){
				// $("#nav-left").find('li').eq(0).find('a').addClass('linkbp-b');
				// console.log($("#nav-left").find('li').eq(0).find('a'))
			$("#nav-left").find('li').eq(2).find("a").addClass('linkbp-b').parents('li').siblings('li').find('a').removeClass('linkbp-b');
		}
		if ($('body').scrollTop()>1700) {
			$("#nav-left").find('li').eq(3).find("a").addClass('linkbp-b').parents('li').siblings('li').find('a').removeClass('linkbp-b');
		}
		if($('body').scrollTop()>1900){
			$("#nav-left").find('li').eq(4).find("a").addClass('linkbp-b').parents('li').siblings('li').find('a').removeClass('linkbp-b');
		}
	})

	// 点击返回顶部
	$('#nav-left').find('li').last().on('click',function(){
		console.log('sss');
		// $('body,html').scrollTop(0);
		$('body,html').animate({
			'scrollTop':'0',
		},250)
	})
})