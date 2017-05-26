/*
 *项目名称：国际业务系统框架
 *调用页面：欢迎首页-welcome.html
 *开发人员：344822559@qq.com
 *开发日期：2017-02-07
 * */

$(function(){
	
	
	/*会员等级提示*/
	layer.tips('等级越高，折扣越高哦！', '#layer_tip', {
	  tips: [2, '#3595CC'],
	  time: 4000
	});
	
	
	/*订单状态列表切换*/
	$('.order_title li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.order_box').eq($(this).index()).addClass('order_box_block').siblings().removeClass('order_box_block');
	})
	
	
	/*鼠标经过订单弹出信息框*/
	$('.order_box dl').on('mouseover',function(){
		
		var Height=$(this).height()+15+'px';
		$('.order_box dl div.order_show_box').eq($(this).index()).css('top',Height);
		$('.order_box dl div.order_show_box').eq($(this).index()).show();
	})
	
	$('.order_box dl').on('mouseleave',function(){
		$('.order_box dl div.order_show_box').eq($(this).index()).hide();
	})
	
	/*收货绑定的鼠标经过事件*/
	$('.order_box dl dt button').on('mouseover',function(event){
		$(this).parent().siblings('.order_show_box').hide();
		event.stopPropagation();
	});
	
	/*切换注册国家*/
	$('.chage_nation').on('click',function(){
		
		var str="<div class='List_nation'><ul>";
			str+="<li>美国</li>";
			str+="<li>英果</li>";
			str+="<li>法国</li>";
			str+="<li>日本</li>";
			str+="<li>韩国</li>";
			str+="</ul></div>";
		
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  shadeClose: true,
		  skin: 'layui-layer-demo', //样式类名
		  content: str
		});
		
	})
	

})