$(function(){
	

		// 切换城市
	$('#dingwei').find('.dingwei-chengshi-c input').focus(function(){
		$(this).css('font-size','18px');
		$('#dingwei').find('.dingwei-city').css('display','block');
		$(this).keydown(function(e){
			e?event:window.event;
			if(e.keyCode==13){
				console.log('sss')
			}
		})
	})
	$('#dingwei').find('.dingwei-chengshi-c input').blur(function(){
		$(this).css('font-size','14px');
	})	
	$(document).click(function(){
			$('.dingwei-city').css('display','none');
	})
	$("#dingwei").find('.dingwei-chengshi').on('click',function(e){
		e = e? event:window.event;
		e.stopPropagation();
		$('#dingwei').find('.dingwei-chengshi').css('border-color','#0088d3');
		$('#dingwei').find('.dingwei-city').css('display','block');
		$('#dingwei').find('.dingwei-chengshi-c input').css('font-size','18px');

	})
	$('#dingwei').find('.dingwei-city .dingwei-city-shuru span').on('click',function(e){
		e?event:window.event;
		e.stopPropagation();
		$('.dingwei-city').css('display','none');
	})
	$('#dingwei').find('.dingwei-city .dingwei-city-csszm').find('.dingwei-city-hot li').on('click',function(e){
		e?event:window.event;
		e.stopPropagation();
		$(this).addClass('hot_selected').siblings('li').removeClass('hot_selected');
		var int=$(this).index();
		console.log($(this).parents('.dingwei-city-csszm').find('.dingwei-city-chengshixq'));
		$(this).parents('.dingwei-city-csszm').find('.dingwei-city-chengshixq').eq(int).removeClass('displaynone').siblings('.dingwei-city-chengshixq').addClass('displaynone');
	})

	// 健身nav
	$('#nav').find('.nav-list').hover(
		function(){
			$(this).find('i').addClass('sanjiao').parents('.nav-list').siblings('li').find('i').removeClass('sanjiao');
			$(this).find('.list-div').addClass('block').parents('.nav-list').siblings('li').find('.list-div').removeClass('block');
			$(this).children('a').css('background-color','#2b69aa');
			$(this).has('.list-div').children('a').each(function(){
				var thisa=$(this);
				setTimeout(function(){
					thisa.css('background','#0088d3');
				},300)
			})

		},function(){
			$(this).parents('.nav-f-ul').find('.list-div').eq(1).addClass('block').parents('.nav-list').find('i').addClass('sanjiao').parents('.nav-list').siblings('.nav-list').find('.list-div').removeClass('block').parents('.nav-list').find('i').removeClass('sanjiao');
			$(this).children('a').css('background-color','#0088d3');
		}
	)
	$('#nav .nav-t-div').find('.ladn-register a').hover(function(){
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




	// 邮箱验证
	$('#tg-jianshen').find('.ify-sousuo').find("input[type='submit']").on('click',function(){
		
		var emali =$(this).parents('.ify-sousuo').find("input[name='text']").val();
		if(emali.length==0){
			alert('邮箱不能为空');
		}else{
			var szReg =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
			var back = szReg.test(emali);
			if(back==false){
				alert('请检查输入的邮箱是否正确');
			}
			else{
				return true;
			}
		}

	})


	// 团购分类hover
	$('#categories').find('.categories-qjtgfl li').hover(
		function(){
			$(this).has('div').css('border-right','none').find(".tg-nav-submenu").css('display','block');
			$(this).find('dl .tg-menu-arrow').css('display','none');
		},function(){
			$(this).find('dl .tg-menu-arrow').css('display','block');
			$(this).css('border-right','1px solid #eaeaea').children(".tg-nav-submenu").css('display','none');
		}
	);
	$('#categories').find('.categories-fl li').hover(function(){
		$(this).css('background','#e95900');
	},function(){
		$(this).css('background','none');
	})

	$('#categories').find('.categories-fl li').on('click',function(){
		$(this).addClass('categories-fl-fili').siblings('li').removeClass('categories-fl-fili');
	})

	
	$('#tg-jianshen').find('.more').on('mouseover',function(){
		$(this).find('.icon').css({
			'transform':'rotate(-180deg)',
		}).parents('.ify-hot-fl').addClass('on');
		
		$('.ify-hot-fl').on('mouseleave',function(){
			$(this).removeClass('on');
			$(this).find('.icon').css({
				'transform':'rotate(0deg)',
			})
		})
	})
	$('#tg-jianshen').find('.ify-rot-sq li a').hover(function(){
		$(this).css('color','#0088d3');
	},function(){
		$(this).css('color','#666');
	})
	$('#tg-jianshen').find('.categories-tgsy-ify').find('.lately>p a').on('click',function(){
		$(this).parents('.lately').css('display','none');
	})

	// fixed定位

	$(window).scroll(function(){
		// console.log($('body').scrollTop());
		if($(document).scrollTop()>1040){
			$("#nav-fixed").css({
				'position':'fixed',
				'top':'0',
			})
			$('#nav-fixed').find('li').eq(0).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}else{
			if($(document).scrollTop()<1036){
				$('#nav-fixed').css({
					'position':'absolute',
					'top':'0',
				})

			}
		}
		if($(document).scrollTop()>2000){
			$('#nav-fixed').find('li').eq(1).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}
		if($(document).scrollTop()>2712){
			$('#nav-fixed').find('li').eq(2).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}
		if($(document).scrollTop()>3443){
			$('#nav-fixed').find('li').eq(3).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}
		if($(document).scrollTop()>4160){
			$('#nav-fixed').find('li').eq(4).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}
		if($(document).scrollTop()>4877){
			$('#nav-fixed').find('li').eq(5).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}
		if($(document).scrollTop()>5583){
			$('#nav-fixed').find('li').eq(6).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}
		if($(document).scrollTop()>6326){
			$('#nav-fixed').find('li').eq(7).addClass('nav-fixed-bac').siblings('li').removeClass('nav-fixed-bac');
		}
	})

	$('#nav-fixed').find('li').eq(0).on('click',function(){
		$('body,html').animate({
			'scrollTop':'1043',
		},250)
	})
	$('#nav-fixed').find('li').eq(1).on('click',function(){
		$('body,html').animate({
			'scrollTop':'2062',
		},250)
	})
	$('#nav-fixed').find('li').eq(2).on('click',function(){
		$('body,html').animate({
			'scrollTop':'2778',
		},250)
	})
	$('#nav-fixed').find('li').eq(3).on('click',function(){
		$('body,html').animate({
			'scrollTop':'3493',
		},250)
	})
	$('#nav-fixed').find('li').eq(4).on('click',function(){
		$('body,html').animate({
			'scrollTop':'4210',
		},250)
	})
	$('#nav-fixed').find('li').eq(5).on('click',function(){
		$('body,html').animate({
			'scrollTop':'4927',
		},250)
	})
	$('#nav-fixed').find('li').eq(6).on('click',function(){
		$('body,html').animate({
			'scrollTop':'5643',
		},250)
	})
	$('#nav-fixed').find('li').eq(7).on('click',function(){
		$('body,html').animate({
			'scrollTop':'6360',
		},250)
		console.log('sss')
	})
	$('#nav-fixed').find('li').last().on('click',function(){
		$('body,html').scrollTop(0);
	})
})