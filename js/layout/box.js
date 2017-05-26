/*
 *项目名称：国际业务系统框架
 *开发人员：344822559@qq.com
 *开发日期：2016-11-30
 * 
 * */

$(function() {

	/*项目署名*/
	var str = "项目名称：国际业务系统框架\n";
	str += "开发人员：344822559@qq.com\n";
	str += "开发日期：2016-11-30\n";
	str += "mark：低调做事，低调走人~\n";
	//console.log(str);

	/*右侧最顶部栏目高度*/
	var rightTopHeight = 50;

	/*右侧二级tab切换区域高度*/
	var rightTabHeight = 45;

	/*右侧底部版权栏高度*/
	var rightCopyHeight = 53;

	/*左侧logo区域高度*/
	var leftLogoHeight = 60;

	
	/*iframe外框的高度*/
	var iframeHeight=$('#content').height() - rightTabHeight - rightCopyHeight - rightTopHeight;

	
	$('.show_iframe .main_zm').height(iframeHeight);
	var left_nav = $('#content').height() - leftLogoHeight - 90 + 'px';
	$('.left .nav_box').height(left_nav);

	/*框架左侧导航点击事件*/
	$('.left .nav p').on('click', function() {
		var hasActive = $(this).find('a').hasClass('active');
		if(!hasActive) {
			$(this).addClass('active');
			$('.left .nav ul a').removeClass('active');
			$('.left .nav p a').removeClass('active');
			var a = $(this).find('a').addClass('active');
			$('.left .nav').find('ul').slideUp();
			$(this).next('ul').slideDown();
		}

	})

	/*左侧菜单点击变色*/
	$('.nav ul a').on('click', function() {
		$(this).addClass("active").siblings().removeClass('active');
		var IframeUrl = $(this).attr('_href');
		$('#iframe').attr('src', IframeUrl);
	})



	/*iframe高度自适应*/
	$(window).resize(function() {
		$('.show_iframe .main_zm').height($('#content').height() - rightTabHeight - rightCopyHeight - rightTopHeight);
		var left_nav = $('#content').height() - leftLogoHeight - 90 + 'px';
		$('.left .nav_box').height(left_nav);
		
		/*判断tab中的li的总宽度是否超过外框的宽度如果不超过则让现实靠左*/
		var liallWidth=liAllWidths();
		var tabALLBox=tabBox();
		
		
		
		
		var activeLiW=$('.show_iframe .top_tab .tab_new_add ul li.active').width()+27;
		
		if(liallWidth<tabALLBox){
			$('.show_iframe .top_tab .tab_new_add ul').css('left','0px').css('right','initial');
		}else{
			
			/*当前选中状态的li标签左边距*/
			if($('.show_iframe .top_tab .tab_new_add ul li.active').size()){
				var poleft=$('.show_iframe .top_tab .tab_new_add ul li.active').position().left;
				var leftOff=Math.abs(poleft);
			}
			
			/*则表示当前的选中栏目已经被隐藏了*/
			if(leftOff>tabALLBox){
				var newLeftP=(leftOff-tabALLBox)+activeLiW;
				$('.show_iframe .top_tab .tab_new_add ul').css('right','initial').css('left',(-newLeftP)+'px');
			}
			

		}


	})

	/*框架顶部导航点击事件*/
	$('.right_top .top_nav a').on('click', function() {

		var Index = $(this).index();

		$(this).addClass('active').siblings().removeClass('active');

		//var test = $('.left .nav_box').eq(Index).addClass('nav_box_block').siblings().removeClass('nav_box_block');
		return false;
	})

	/*右侧顶部用户信息点击事件*/
	$('.user_set .user_box').on('click', function() {
		var width = $(this).width() + 86 + 'px';
		$('.user_set .user_box .user_nav').width(width).slideToggle();
	})

	/*禁止事件冒泡*/
	$('.user_nav').on('click', function(event) {　　　　
		event.stopPropagation();
	})

	/*顶部tab标签切换*/
	$('body').on('click', '.show_iframe .top_tab .tab_new_add ul li', function(event) {
		$(this).addClass('active').siblings().removeClass('active');
		$('.show_iframe .top_tab .tab_home').removeClass('active');
		var tag = $(this).attr('tag');
		$(".main_zm[tag='" + tag + "']").addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
		event.stopPropagation();
	})
	
	
	/*顶部tab默认首页标签切换*/
	$('body').on('click', '.show_iframe .top_tab .tab_home', function(event) {
		$(this).addClass('active');
		var tag = $(this).attr('tag');
		$(".main_zm[tag='" + tag + "']").addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
		$('.show_iframe .top_tab .tab_new_add ul li').removeClass('active');
		event.stopPropagation();
	})
	


	/*关闭顶部tab标签*/
	$('body').on('click', '.show_iframe .top_tab .tab_new_add ul li i', function(event) {
		/*
		 * 其实只需要判断当前点击的这个tab的li标签是否有active 就可以知道外面是否还有active标签
		 * 如果hasActive是true 那说明剩余就没有active的li标签了
		 * */
		var hasActive = $(this).parent('li').hasClass('active');
		var Tabli = $(this).parent('li').index();
		var Tag = $(this).parent('li').attr('tag');
		$(".main_zm[tag='" + Tag + "']").remove();
		$(this).parent('li').remove();
		
		var tabLiSize=$('.show_iframe .top_tab .tab_new_add ul li').size();

		if(hasActive) {
			
			if(tabLiSize>0){
				$('.show_iframe .top_tab .tab_new_add ul li:last').addClass('active').find('i').addClass('active');
				$('.main_zm:last').addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
			}else{
				$('.show_iframe .top_tab .tab_home').addClass('active');
				$(".main_zm[tag='home']").addClass('main_zm_block').siblings('.main_zm').removeClass('main_zm_block');
			}	
			
		} else {
			$('.main_zm').siblings().removeClass('main_zm_block');
			var divTag = $('.show_iframe .top_tab .tab_new_add ul li[class="active"]').attr('tag');
			$(".main_zm[tag='" + divTag + "']").addClass('main_zm_block');
		}
		event.stopPropagation();
	})
	
	
	/*点击tab标签左右滚动*/
	$('.top_tab .next_pre .click_left,.top_tab .next_pre .click_right').on('click',function(){
		
		var divclass=$(this).attr('class');
		var liallWidth=liAllWidths();
		var tabALLBox=tabBox();
		
		var leftUL=$(".show_iframe .top_tab .tab_new_add ul").position().left;
		var newleftUl=Math.abs(leftUL);
		
		var newwidth=$(".show_iframe .top_tab .tab_new_add ul").width(liallWidth);	
		var lastchildEWW=$(".show_iframe .top_tab .tab_new_add ul").position().left;
		
		
		if(liallWidth>tabALLBox){
			
			if(divclass=='click_left'){					
					if((tabALLBox-liallWidth)>lastchildEWW){

						$(".show_iframe .top_tab .tab_new_add ul").animate({ 
						    left: ((tabALLBox-newwidth))+'px'
						}, 'fast');
						
					}else{

						$(".show_iframe .top_tab .tab_new_add ul").animate({ 
						    left: '-'+(newleftUl+80)+'px'
						}, 'fast');
					}
	
						
			}else{
				
				if(leftUL<0&&newleftUl>80){
					$(".show_iframe .top_tab .tab_new_add ul").animate({ 
					    left: '+=80px'
					  }, 'fast');
				}
				if(leftUL<0&&newleftUl<80){
					$(".show_iframe .top_tab .tab_new_add ul").animate({ 
					    left: '0px'
					  }, 'fast');
				}
	
			}
			
		}
		

		
	})
	
	
	
	
	
	

})

/*点击默认页系统板块给框架页面添加tab标签*/
function addTopTab(url, title, tag) {

	/*添加之前去除兄弟模块的选中状态*/
	$(".show_iframe .top_tab .tab_new_add ul li.active").removeClass('active');
	$('.show_iframe .top_tab .tab_home').removeClass('active');

	/*根据tag标签判断这个标签是否存在，如果存在就设置成选中状态*/
	var isTag = $(".show_iframe .top_tab .tab_new_add ul li[tag='" + tag + "']").length;
	var homeTag=$('.top_tab .tab_home').hasClass('active');
	
	
	/*放置tab标签的外框的宽度,*/
	var newTabBox=tabBox();

	if(!isTag) {
		var Wh = $(window).height()-95-53;

		/*给父级添加tab标签*/
		var strTab = "<li data-src='" + url + "' class='active' tag='" + tag + "'><span>" + title + "</span><i></i></li>";
		$(".show_iframe .top_tab .tab_new_add ul").append(strTab);
		
		var liAllWidth=liAllWidths();
		
		if(liAllWidth>newTabBox){
			
			$(".show_iframe .top_tab .tab_new_add ul").width(liAllWidth);
			 $(".show_iframe .top_tab .tab_new_add ul").animate({
				right:'0px',
				left:'initial'
			  }, 1000 );
			
		}
		
		/*给父级框架注入iframe*/
		var iframeDiv = "<div class='main_zm main_zm_block' tag='" + tag + "' style='height:" + Wh + "px'><iframe scrolling='yes' frameborder='0' src='" + url + "'></iframe></div>";
		$('.main_zm').removeClass('main_zm_block');
		$('.main_zm:last').after(iframeDiv);

	} else {
		$(".show_iframe .top_tab .tab_new_add ul li[tag!='" + tag + "']").find('i').removeClass('active');
		$(".show_iframe .top_tab .tab_new_add ul li[tag='" + tag + "']").addClass('active').siblings('li').removeClass('active');;
		$('.main_zm').eq($(".show_iframe .top_tab .tab_new_add ul li[tag='" + tag + "']").index()).addClass('main_zm_block').siblings().removeClass('main_zm_block');
	}

}

/*记录添加新标签之后的所有li标签的宽度总和*/
function liAllWidths(){

	a=0;
	$(".show_iframe .top_tab .tab_new_add ul li").each(function(){
	   a+=$(this).width()+27;
	});
	
	return a;
	
}

/*所有默认的外部的tab外框的宽度*/
function tabBox(){
	return $('.show_iframe .top_tab .tab_new_add').width();
}



