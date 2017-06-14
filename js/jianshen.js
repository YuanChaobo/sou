$(function(){

	$('#main .main-left-nav').find('li').on('click',function(){
		var index=$(this).index();
		$(this).find('span').addClass('main-nav-sanjiao').parents('li').siblings('li').find('span').removeClass('main-nav-sanjiao');
		$('.main-table-content').find('.main-left-content').eq(index).removeClass('none-block').siblings('.main-left-content').addClass('none-block');
	})

	// 无缝滚动
	// var div=document.getElementsByClassName('lunbodiv')[0];
	// div.innerHTML+=div.innerHTML;
	// var a=$(div).find('a');
	// var speed=2;
	// $(div).width((a[0].offsetWidth+12)*a.length+20+'px');
	// console.log(-div.offsetWidth/2)
	// function move(){
	// 	if(div.offsetLeft< -div.offsetWidth/2){
	// 		div.style.left='0';
	// 	}
	// 	if(div.offsetLeft > 0){
	// 		 div.style.left = -div.offsetWidth / 2  + 'px';
	// 	}
	// 	div.style.left = div.offsetLeft-32 + speed + 'px';
	// }
	// 	console.log(div.offsetLeft)
	// var setmove=setInterval(move,30)
	
	var lunbodiv=$('.lunbodiv')[0];
	lunbodiv.innerHTML+=lunbodiv.innerHTML;
	var aimg=$(lunbodiv).find('a');
	console.log($(lunbodiv))
	$(lunbodiv).width((aimg[0].offsetWidth+12)*aimg .length+20+'px');
	var speed=2;
	function move(){
		if(lunbodiv.offsetLeft < -lunbodiv.offsetWidth/2){
			lunbodiv.style.left='0';
		}
		if(lunbodiv.offsetLeft > 0){
			lunbodiv.style.left= -lunbodiv.offsetWidth/2+'px';

		}
		lunbodiv.style.left=lunbodiv.offsetLeft-32+speed+'px';
	}
	var setmove=setInterval(move,30);
	$('.jiudianlunbo-content').hover(function(){
		clearInterval(setmove);
	},function(){
		setmove=setInterval(move,30)
	})
	$('.left-button').on('click',function(){
		speed=-1;
	})
	$('.right-button').on('click',function(){
		speed=2;
	})
})