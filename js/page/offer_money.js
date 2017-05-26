/*
 * 管理平台-报价规则
 * 开发时间：2017/05/03
 * 开发人员：344822559@qq.com
 * */

$(function(){
	
	var addHtml=$('#qujian_box').html();
	
	/*点击查看计费区间*/
	$('.table #check_offer').on('click',function(){
		layer.open({
		  type: 2,
		  title:"序号1的计费规则",
		  skin: 'layui-layer-rim', //加上边框
		  area: ['600px', '450px'], //宽高
		  content: 'offer_alert.html'
		});
		
	})

	
	/*增加计费区间*/
	$('.table #add_offer').on('click',function(){
		layer.open({
		  type: 2,
		  title:"新增报价规则",
		  skin: 'layui-layer-rim', //加上边框
		  area: ['600px', '450px'], //宽高
		  content: 'offer_add.html'
		});
		
	})


	/*新增弹出页面 再加一条*/
	$('#add_once').on('click',function(){
		
		$('#qujian_box').append(addHtml);

	})

	
	
})
