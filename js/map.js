$(function(){
	$('#left').find('.left-table div').on('click',function(){
		$(this).addClass('bacfff').siblings('div').removeClass('bacfff');
	})
	$('#left').find('.rulidate input').on('click',function(e){
		event.stopPropagation();
		$(this).css('border','1px solid #3cb0d0').siblings('input').css('border','0 none')
	})
	$(document).on('click',function(e){
		e ? e : window.event;
		var target=$(e.target);
		$('#left').find('.rulidate input').css('border','1px solid transparent')
	})
})