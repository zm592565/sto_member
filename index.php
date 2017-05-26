<?php

	
	/*获取当前这段代码中的图片*/
		$str=<<<html
	<div class="show_iframe clearfix">
					<div class="right_top">
						<!--<div class="top_index active" title="welcome.html">首页</div>-->
						<div class="top_nav">
							<a title="welcome.html" class="active" href="javascript:;">首页</a>
							<a href="javascript:;">仓储转运</a>
							<a href="javascript:;">客户服务</a>
							<a href="javascript:;">账户设置</a>
							<a href="javascript:;">管理平台页面</a>
						</div>
						<div class="user_set">
							<div class="ring">
							<IMG title="dsad" src="img/132132.gif" />
								<div class="ring_num">20</div>
							</div>
							<div class="user_box">
								<img src="img/user_face.png" />
								<div class="user_name">zm592565</div>
								<div class="user_nav">
									<ul>
										<li><a href="#">编辑资料</a></li>
										<li><a href="#">安全退出</a></li>
									</ul>
								</div>
							</div>
						</div>
						
					</div>
					<div class="footer">
						版权所有：申通集团股份有限公司　　申通快递有限公司：上海市青浦区赵重公路1888号　　邮编：201706　　沪ICP备13037807号-1
					</div>
					<IMG title="dsad" src="img/132132.gif" />
				</div>
html;

		$pattern="/<[img|IMG].*?src=[\'|\"](.*?(?:[\.gif|\.jpg|\.png]))[\'|\"].*?[\/]?>/i";
		preg_match($pattern, $str,$matches);
		print_r($matches);




		/*获取当前时间往后设定区间的时间*/

		/*下一个周一*/
		echo date('Y-m-d',strtotime("next Monday"));

		/*上一个周日*/
		echo date('Y-m-d',strtotime("last Sunday"));

		/*一周后*/
		echo date('Y-m-d',strtotime("+1 week"));

		/*从今天开始一个月后*/
		echo  date("Y-m-d", strtotime("+1 months", time()));

		/*从指定日期的一个月后*/
		echo  date("Y-m-d", strtotime("+1 months", strtotime("2010-10-06")));


		/*从现在开始+一周+3天时间*/
		echo(date("Y-m-d",strtotime("+1 week 3 days")));










?>