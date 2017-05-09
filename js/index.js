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
		$(this).css({'background':'#fff','border-color':'#f39800'}).children('.apparatus').fadeIn('2000');
		var a=$(this).children('span').find('img').attr('src');
		var b =a.lastIndexOf('.');
		var c=a.substring(0,b);
		$(this).children('span').find('img').attr('src',c+='1.gif');
	},function(){
		$(this).css({'background':'#209dd9','border-color':'#209dd9'}).children('.apparatus').css('display','none');
		$(this).children('a').css({'color':'#ffffff'});
		var a=$(this).children('span').find('img').attr('src');
		var b =a.lastIndexOf('1');
		var c=a.substring(0,b);
		$(this).children('span').find('img').attr('src',c+'.jpg');
	}
	);
 	
 	// table菜单加箭头样式
	$('#content').find('.first-nav li').on('click',function(){
		var wh=$(this).width()/2-10+'px';
		$(this).find('i').css({
			left:wh,
			display:'block'
		}).parent('li').siblings('li').find('i').css('display','none');

		var b =$(this).index();
		$(this).parents('.tablemain').find('.parentdiv-div').eq(b).show().siblings().hide();
		console.log()
	});
	// 移动定位
	$(window).scroll(function(){
		if($('body').scrollTop()>543){
			$("#nav-left").css("position","fixed");
		}else{
			$("#nav-left").css("position","absolute");
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