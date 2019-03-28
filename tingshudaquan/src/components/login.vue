<template>
	<div class="main">
		<div class="header">
			<span class="span1"><img src="../assets/register/wsg_01.gif" width="100%"/></span>
			登录
			<router-link to='index'>
			   <span class="span2"><img src="../assets/register/wsg_02.gif" width="100%"/></span>
			</router-link>

		</div>
		<div class="section">
			<form action="" method="post">
				<div class="sect1">
				   <span class="phone"></span>
				   <input type="text" placeholder="请输入手机号"/>
			   </div>
			    <div class="sect1">
				   <span class="password"></span>
				   <input type="text" placeholder="请输入密码"/>
			    </div>
			    <div class="login">登录</div>
			    <div class="register"><router-link to='register'>注册</router-link></div>
			    <div class="section1">
			    	-------------&nbsp;&nbsp;&nbsp;&nbsp;使用合作账号登录&nbsp;&nbsp;&nbsp;&nbsp;-------------
			    </div>
			</form>
			<div class="kong"></div>
			<div class="footer">
				<div class="foot1"><img src="../assets/register/weixin.gif" width="100%"/></div>
				微信
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="css" scoped>
	.main{
    	width: 750px;
    	margin: 0 auto;
    }
    .header{
    	width: 750px;
    	height: 100px;
    	float: left;
    	line-height: 100px;
    	font-size: 52px;
    	color: #353535;
    	text-align: center;
    	margin-bottom: 50px;
    }
    .span1{
    	display: inline-block;
    	width: 40px;
    	height: 40px;
    	float: left;
    }
    .span2{
    	display: inline-block;
    	width: 72px;
    	height: 72px;
    	float: right;
    	margin-top: 15px;
    }
    .section{
    	float: left;
    	width: 750px;
    }
    .sect1{
    	width: 750px;
    	height: 116px;
    	float: left;
    	border-bottom: 2px solid #e6e6e6;
    	position: relative;
    }
    .sect1 input{
    	border: 0;
    	width: 750px;
    	font-size: 38px;
    	float: left;
    	text-indent: 100px;
    	height: 112px;
    }
    .phone{
    	display: inline-block;
    	width: 49px;
    	height: 47px;
    	float: left;
    	position: absolute;
    	top: 30px;
    	left: 20px;
    	background: url(../assets/register/wsg_03.gif) no-repeat;
    	background-size: contain;
    }
    .password{
    	display: inline-block;
    	width: 42px;
    	float: left;
    	height: 53px;
    	position: absolute;
    	top: 30px;
    	left: 20px;
    	background: url(../assets/register/wsg_04.gif) no-repeat;
    	background-size: contain;
    }
    .login{
    	width: 340px;
    	height: 83px;
    	float: left;
    	line-height: 83px;
    	color: white;
    	text-align: center;
    	background:#1aac19;
    	margin-left: 24px;
    	margin-top: 26px;
    	margin-bottom: 100px;
    }
    .register{
    	width: 340px;
    	height: 83px;
    	float: right;
    	line-height: 83px;
    	text-align: center;
    	color: #9b9b9b;
    	border: 1px solid #bbbbbb;
    	margin-right: 24px;
    	margin-top: 26px;
    	margin-bottom: 100px;
    }
    .section1{
    	width: 700px;
    	height: 44px;
    	float: left;
    	text-align: center;
    	font-size: 30px;
    	color: #636363;
    	margin-bottom: 33px;
    	line-height: 44px;
    }
    a{
    	color:#8b8b8b;
    }
    .footer{
    	width: 80px;
    	color:#111111;
    	font-size: 26px;
    	text-align: center;
    	margin: 33px auto 33px auto;

    }
</style>