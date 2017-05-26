/*
 *项目名称：国际业务系统框架
 *开发人员：344822559@qq.com
 *开发日期：2016-11-30
 * 
 * */

$(function(){
	
	/*项目署名*/
	var str="项目名称：国际业务系统框架\n";
	 	str+="开发人员：344822559@qq.com\n";
		str+="开发日期：2016-11-30\n";
		str+="mark：低调做事，低调走人~\n";
	console.log(str);
	
	
	$('#iframe').height($(window).height()-70-53+'px');
	
	/*左侧导航栏高度自适应*/
	$('.left').css('height',$(window.document).height()+'px');
	$('.left_box').css('height',$(window.document).height()-150+'px');
	
	/*框架左侧导航点击事件*/
	$('.left .nav p').on('click',function(){
		var hasActive=$(this).find('a').hasClass('active');
		if(!hasActive){
			$(this).addClass('active');
			$('.left .nav ul a').removeClass('active');
			$('.left .nav p a').removeClass('active');
			var a=$(this).find('a').addClass('active');
			$('.left .nav').find('ul').slideUp();
			$(this).next('ul').slideDown();
		}
		
	})
	
	/*左侧菜单点击变色*/
	$('.nav ul a').on('click',function(){
		$(this).addClass("active").siblings().removeClass('active');
		var IframeUrl=$(this).attr('_href');
		$('#iframe').attr('src',IframeUrl);
	})
	
	/*iframe高度自适应*/
	$(window).resize(function(){
		 $('#iframe').height($(window).height()-70-53+'px');
		 $('.left').css('height',$(window.document).height()+'px');
		 $('.left_box').css('height',$(window.document).height()-150+'px');
		 
	})
	
	
	/*框架顶部导航点击事件*/
	$('.right_top .top_nav a').on('click',function(){
		var welHref=$(this).attr('title');
		if(welHref!='undefined'){
			var Index=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.right_top .top_index').removeClass('active');
			$('.left .nav_box').eq(Index).addClass('nav_box_block').siblings().removeClass('nav_box_block');
			$('#iframe').attr('src',welHref);
			
		}else{
			var Index=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.right_top .top_index').removeClass('active');
			$('.left .nav_box').eq(Index).addClass('nav_box_block').siblings().removeClass('nav_box_block');	
		}
		
		return false;
		
	})
	
	/*框架首页点击事件*/
	$('.right_top .top_index').on('click',function(){
		$(this).addClass('active');
		var hrefIndex=$(this).attr('title');
		$('#iframe').attr('src',hrefIndex);
		$('.right_top .top_nav a').siblings().removeClass('active');
	});
	
	
	/*右侧顶部用户信息点击事件*/
	$('.user_set .user_box').on('click',function(){
		var width=$(this).width()+86+'px';
		$('.user_set .user_box .user_nav').width(width).slideToggle();
	})
	
	/*禁止事件冒泡*/
	$('.user_nav').on('click',function(event){
　　　　event.stopPropagation(); 
	})
	
	
	
	
		
})


