function lazyload() {
	    var images = document.getElementsByTagName('img');
	    var len    = images.length;
	    var n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历		
	    return function() {
		var seeHeight = document.documentElement.clientHeight;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		for(var i = n; i < len; i++) {
		    if(images[i].offsetTop < seeHeight + scrollTop) {
		        if(images[i].getAttribute('src') === 'images/loading.gif') {
			     images[i].src = images[i].getAttribute('data-src');
			}
			n = n + 1;
		     }
		}
	    }
	}
	var loadImages = lazyload();
	loadImages();          //初始化首页的页面图片
	window.addEventListener('scroll', loadImages, false);