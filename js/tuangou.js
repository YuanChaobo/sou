$(function(){


	// 健身nav
	$('#nav').find('.nav-list').hover(
		function(){
			$(this).siblings('li').find('i').removeClass('sanjiao');
			$(this).find('i').addClass('sanjiao');
			$(this).find('.list-div').css({
				'display':'block',
			});
			// .parents('.nav-list').siblings('.nav-list').find('.list-div').css({
			// 	'display':'none',
			// })
		},function(){
			$(this).find('i').removeClass('sanjiao');
			$(this).find('.list-div').css('display','none');
			$(this).parents('.nav-f-ul').find('.nav-list').eq(1).find('i').addClass('sanjiao').parents('.nav-list').find('.list-div').addClass('block');
		}
	)
	// 团购分类hover
	$('#categories').find('.tg-dropmenu-li').hover(
		function(e){
			$(this).has('div').css('border-right','none').find(".tg-nav-submenu").css('display','block');
		},function(){
			$(this).css('border-right','1px solid #eaeaea').children(".tg-nav-submenu").css('display','none');
		}
	);

	$('.tg-jutifenlei').find('.more').hover(
		function(){
			$(this).parents('.tg-classify-spot').find('.tg-hot-div').css({
				'overflow':'visible',
			}).find('dl').css({
				'border':'1px solid red',
				'background':'#fff',
				'z-index':'1000',
			})
		},
		function(){
			$(this).parents('.tg-classify-spot').find('.tg-hot-div').css({
				'overflow':'hidden',
			}).find('dl').css({
				"border":'none',
				'z-index':'100',
			})
			console.log($(this).parents('.tg-classify-spot').find('.tg-hot-div'));
		}
	)
})