$(function(){
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