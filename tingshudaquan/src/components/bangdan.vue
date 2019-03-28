<template lang="html">
	<div class="aspectratio">
		<div class="aspectratio-content">
			<div class="main">
				<div class="header">
					<div class="headLeft"><span class="input1"></span><input type="text" placeholder="书名/主播/作者"/></div>
					<div class="headerRight"><span class="span1"><img src="../assets/index/header_02.gif" width="100%" style="margin-top: 4px;"/></span> 创建 <br />桌面</div>
				</div>
				<div class="nav">
					<ul>
						<li><router-link to='Index'>精选</router-link></li>
						<li><router-link to='fenlei'>分类</router-link></li>
						<li class="actionli">榜单</li>
						<li><router-link to='login'>我的</router-link></li>
					</ul>
				</div>
				<div class="section">
					<div class="section1"><img src="../assets/bangdan/section_01.gif" width="100%"/></div>
					<div class="section1"><img src="../assets/bangdan/section_02.gif" width="100%"/></div>
					<div class="section1"><img src="../assets/bangdan/section_03.gif" width="100%"/></div>
				</div>
				<div class="footer"></div>
			</div>
		</div>
	</div>
</template>
    
<script>
</script>

<style lang="css" scoped>
	.main{
		width: 750px;
	}
	.header{
		width: 750px;
		height: 102px;
	}
	.headLeft{
		width: 594px;
		height: 60px;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
		position: relative;
		box-sizing: border-box;
	}
	.headLeft input{
		width: 594px;
		height: 60px;
		border-radius: 28px;
		border: 0;
		text-indent: 60px;
		background:#e7e5e6;
		font-size: 24px;
		color:#595758;
	}
	.input1{
		display: inline-block;
		width: 30px;
		height: 28px;
		position: absolute;
		top: 15px;
		left: 20px;
		background: url(../assets/index/header_01.gif) no-repeat;
		background-size: contain;
	}
	.headerRight{
		width: 100px;
		float: right;
		margin-right: 22px;
		margin-top: 20px;
		font-size: 22px;
		box-sizing: border-box;
		color:#818181;
	}
	.span1{
		display: inline-block;
		width: 45px;
		height: 45px;
		float: left;
	}
	.nav{
		width: 750px;
		height: 80px;
		/*background: red;*/
		line-height: 50px;
		color:#727272;
		/*padding-left: 20px;*/
		/*box-sizing: border-box;*/
	}
	.actionli{
		color:#06a700;
	}
	.nav ul li{
		float: left;
		font-size: 28px;
		margin-left: 58px;
		margin-right: 60px;
	}
	.section{
		width: 750px;
		height: 1300px;
		background:#f0f0f0;
		padding-right: 20px;
		padding-left: 20px;
		box-sizing: border-box;
		/*box-sizing: content-box;*/
	}
	.section1{
		width: 720px;
		height: 300px;
		margin-top: 20px;
	}
	a{
		color:#6d6d6d;
	}
</style>