# MonthSelecter
一个选择月份的js插件,依赖于jQuery

## 功能介绍
可以选择1-12月之间的月份，多次选择不允许重复

## 功能截图
![功能截图](http://t.cn/Rcgv0Kw)

## 使用方法
### 引入MonthSelecrer.css，jQuery和MonthSelecter.js
	<link href="~/CSS/MonthSelecrer.css" rel="stylesheet"/>
	<script src="~/Javascript/jquery-1.10.2.min.js"></script>	
	<script src="~/Javascript/MonthSelecter.js"></script>
	
### DOM结构
	<input type="text" name="month" class="ms" id="month1"/><br/>
	<input type="text" name="month" class="ms" id="month2"/><br/>
	<input type="text" name="month" class="ms" id="month3"/>
	
### JS使用
	<script>
		$(".ms").monthSelecter();
	</script>

## 其他
* 点击确定按钮时，会在控制台打印所选月份，同时向触发元素中写入所选月份
* 清空按钮暂时没有实现功能

欢迎改进
