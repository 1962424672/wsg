<template lang="html">
	<div class="main">
		<div class="header">
			<span class="span1"><img src="../assets/register/wsg_01.gif" width="100%"/></span>
			手机号注册
			<router-link to='index'>
			   <span class="span2"><img src="../assets/register/wsg_02.gif" width="100%"/></span>
		    </router-link>
		</div>
		<div class="section">
			<form action="" method="post">
				<div class="sect1">
				   <span class="phone"></span>
				   <input type="text" v-model="phone" placeholder="请输入手机号"/>
			    </div>
			    <div class="sect1">
				   <span class="password"></span>
				   <input type="text" v-model="password" placeholder="请输入8-20位数字字符组合密码"/>
			    </div>
			    <div class="sect1">
				   <span class="password"></span>
				   <input type="text" placeholder="请输入验证码"/>
			    </div>
			    <div class="sect2">
			    	<span class="span3"><img src="../assets/register/wsg_05.gif" width="100%"/></span>
			    	同意氧气听书   <span style="color:#32a33b;">“用户服务协议”</span>
			    </div>
			    <div class="divsub" v-on:click="userRegister()">注册</div>
			    <div class="kong"></div>
			</form>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
			userRegister:function(event){
					let sendDate={
						phone:this.phone,
						password:this.password,
					}
					this.$http.post('/api/users/register',sendDate).then((data)=>{
						if(data.body.status==1){
							alert(data.body.message)
						}else{
							alert("注册成功")
							this.$router.push({path:'login'})
						}
					})
			}
		}
	}
</script>

<style lang="css" scoped>
    .main{
    	width: 750px;
    	margin: 0 auto;
    }
    .header{
    	width: 750px;
    	height: 100px;
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
    	width: 750px;
    }
    .sect1{
    	width: 750px;
    	height: 116px;
    	border-bottom: 2px solid #e6e6e6;
    	position: relative;
    }
    .sect1 input{
    	border: 0;
    	width: 750px;
    	font-size: 38px;
    	text-indent: 100px;
    	height: 112px;
    }
    .phone{
    	display: inline-block;
    	width: 49px;
    	height: 47px;
    	position: absolute;
    	top: 30px;
    	left: 20px;
    	background: url(../assets/register/wsg_03.gif) no-repeat;
    	background-size: contain;
    }
    .password{
    	display: inline-block;
    	width: 42px;
    	height: 53px;
    	position: absolute;
    	top: 30px;
    	left: 20px;
    	background: url(../assets/register/wsg_04.gif) no-repeat;
    	background-size: contain;
    }
    .sect2{
    	width: 750px;
    	height: 116px;
    	line-height: 116px;
    	font-size: 38px;
    	/*border-bottom: 2px solid #e6e6e6;*/
    	/*position: relative;*/
    }
    .span3{
    	display: inline-block;
    	float: left;
    	margin-left: 15px;
    	margin-top: 12px;
    	margin-right: 35px;
    	width: 50px;
    	height: 40px;
    }
    .divsub{
    	width: 690px;
    	height: 70px;
    	background:#08a506;
    	margin-top: 22px;
    	color: white;
    	font-size: 24px;
    	text-align: center;
    	line-height: 70px;
    	margin-left: 30px;
    }
    .kong{
    	width: 750px;
    	height: 1000px;
    }
</style>