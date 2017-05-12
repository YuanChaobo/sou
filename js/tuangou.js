$(function(){


	// 健身nav
	$('#nav').find('.nav-list').hover(
		function(){
			$(this).siblings('li').find('i').removeClass('sanjiao');
			$(this).find('i').addClass('sanjiao');
			$(this).find('.list-div').css({
				'display':'block',
			});
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
	
	
	$('.tg-jutifenlei').find('.more').on('mouseover',function(){
		$(this).parents('.tg-hot-div').addClass('onb');
		$('.tg-hot-div').eq(1).on('mouseleave',function(){
			$(this).removeClass('onb');
		});
		
	});
	

})