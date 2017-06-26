// 轮播图
	var movel = 0;
	var times;
	function start(){
		 times = setInterval(function(){
			if (movel >= $('#slide img').length - 1) movel = 0;
			var left = movel* -770 + 'px';
				$('#slide img').eq(movel).addClass('big').siblings().removeClass('big');
				$('.slideli a').eq(movel).addClass('cur').siblings().removeClass('cur');
			$('#slide').css('marginLeft',left);
			movel++;
		},5000)
	}
	start();
		$('#slide img').hover(function(){
			clearInterval(times);
		},function(){
			start()
		})

		$('.slideli a').hover(function(){
			clearInterval(times);
			$('#slide').css('marginLeft', $(this).index()*-770);
			$('#slide').eq((this).index()).addClass('big').siblings().removeClass('big');
			$(this).addClass('cur').siblings().removeClass('cur');
			left = $(this).index()+1;
		},function(){
			start();
		})

// 二级导航栏
$('.showlogo img').hover(function(){
	$(this).animate({'marginLeft':'-10px'},300);
},function(){
	$(this).animate({'marginLeft':'0px'},300)
})


$('.lsb').hover(function() {
	$(this).addClass('actionp');
	$('.rsb').removeClass('actionp');
	$('.catelist').css('display','block');
	$('.dogType').css('display','none');
})
$('.rsb').hover(function() {
	$(this).addClass('actionp');$('.lsb').removeClass('actionp');
	$('.dogType').css('display','block');
	$('.catelist').css('display','none');
})

$('.dogType li').hover(function() {

	$(this).stop().animate({'paddingLeft':'15px'},300);	
	$(this).children('.dlddst').css('display','block');
},function(){
	$(this).stop().animate({'paddingLeft':'0px'},300);
	$(this).children('.dlddst').css('display','none');
})

$('.dogType p').hover(function() {
	$(this).stop().animate({'paddingLeft':'2px'},300);	
},function(){
	$(this).stop().animate({'paddingLeft':'0px'},300);
})
// 倒计时区块
$('.timemenu ul li').hover(function() {
	$('.timemenu ul li div p').removeClass('on1');
	$('.timemenu ul li i').removeClass('on');
	$(this).children('div').children('p').addClass('on1');
	$(this).children('div').children('i').addClass('on');
	$('.time-proconli').children('div').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');

});

$('.liner li').hover(function() {
	$(this).children('i').addClass('in').parent().siblings().children('i').removeClass('in');
	// $('.timemenu ul li i').removeClass('on');
	// $(this).children('div').children('p').addClass('on1');
	// $(this).children('div').children('i').addClass('on');
	$(this).parent().parent().next().next().children().eq($(this).index()).css('display', 'block').siblings().css('display', 'none');

});

// 回到顶部

$(window).scroll(function(){

		if ($(window).scrollTop() > 300) {
			$('.gotop').css('display','block')
		} else {
			$('.gotop').css('display','none');
		}
})
$('.gotop').click(function(){
		$('body,html').animate({scrollTop:'0px'}, 600);
})

// 侧边栏
$('aside ul li').hover(function(){
	$(this).children('div').css('display','block')
},function(){
	$(this).children('div').css('display','none')
})
