$(function(){

	$('#main .main-left-nav').find('li').on('click',function(){
		var index=$(this).index();
		$(this).find('span').addClass('main-nav-sanjiao').parents('li').siblings('li').find('span').removeClass('main-nav-sanjiao');
		$('.main-table-content').find('.main-left-content').eq(index).removeClass('none-block').siblings('.main-left-content').addClass('none-block');
	})
	// 导航hover
	$('#nav').find('.nav-li').hover(function(){
		$(this).find('.nav-li-a span').addClass('block').parents('.nav-li').siblings('.nav-li').find('.nav-li-a span').removeClass('block');
		$(this).find('.list-div').addClass('block').parents('.nav-li').siblings('.nav-li').find('.list-div').removeClass('block');
		$(this).children('a').css('background','#2b69aa');
		$(this).has('.list-div').children('a').each(function(){
			var thisa=$(this);
			setTimeout(function(){
				thisa.css('background','#0088d3');
			},300)
		})

	},function(){
		$('#nav').find('.nav-li').eq(0).find('.nav-li-a span').addClass('block').parents('.nav-li').siblings('.nav-li').find('.nav-li-a span').removeClass('block');
		$('#nav').find('.nav-li').eq(0).find('.list-div').addClass('block').parents('.nav-li').siblings('.nav-li').find('.list-div').removeClass('block');
		$(this).children('a').css('background','#0088d3')
	});

	$('#main').find('.main-left-nav li').has('.cityList').on('click',function(){
		$(this).find('.cityList').toggle();
	})


	// 无缝滚动
	var lunbodiv=$('.content-img')[0];
	lunbodiv.innerHTML+=lunbodiv.innerHTML;
	var aimg=$(lunbodiv).find('a');
	$(lunbodiv).width((aimg[0].offsetWidth)*aimg .length+'px');
	var speed=1;
	function move(){
		if(lunbodiv.offsetLeft < -lunbodiv.offsetWidth/2){
			lunbodiv.style.left=0;
		}
		if(lunbodiv.offsetLeft > 0){
			lunbodiv.style.left= -lunbodiv.offsetWidth/2+'px';
		}
		lunbodiv.style.left=lunbodiv.offsetLeft+speed+'px';
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
		speed=1;
	})
})