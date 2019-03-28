<template lang="html">
	<div class="aspectratio">
		<div class="aspectratio-content">
			<div class="main">
				<div class="header">
					<div class="headLeft">
						<span class="input1"></span>
						<input type="text" placeholder="书名/主播/作者"/>
					</div>
					<div class="headerRight"><span class="span1"><img src="../assets/index/header_02.gif" width="100%" style="margin-top: 4px;"/></span> 创建 <br />桌面</div>
				</div>
				<div class="nav">
					<ul>
						<li class="actionli">精选</li>
						<li><router-link to='fenlei'>分类</router-link></li>
						<li><router-link to='bangdan'>榜单</router-link></li>
						<li><router-link to='login'>我的</router-link></li>
					</ul>
				</div>
				<div class="action">
					<!--<img src="../assets/index/action_01.gif" width="100%"/>-->
					<Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/index/lunbo_01.jpg" width="100%" height="100%"/></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/index/lunbo_02.jpg" width="100%" height="100%"/></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="../assets/index/lunbo_03.jpg" width="100%" height="100%"/></div>
        </CarouselItem>
    </Carousel>
				</div>
				<div class="divbuttom"></div>
				<div class="section1">
					<div class="section11">
						<ul>
							<li class="li1"><img src="../assets/index/section_01.gif" width="100%" height="100%"/></li>
							<li>精品专区</li>
						</ul>
					</div>
					<div class="section11">
						<ul>
							<li class="li1"><img src="../assets/index/section_02.gif" width="100%" height="100%"/></li>
							<li>精彩专题</li>
						</ul>
					</div>
					<div class="section11">
						<ul>
							<li class="li1"><img src="../assets/index/section_03.gif" width="100%" height="100%"/></li>
							<li>优质主播</li>
						</ul>
					</div>
					<div class="section11">
						<ul>
							<li class="li1"><img src="../assets/index/section_04.gif" width="100%" height="100%"/></li>
							<li>收听历史</li>
						</ul>
					</div>
					<div class="section11">
						<ul>
							<li class="li1"><img src="../assets/index/section_05.gif" width="100%" height="100%"/></li>
							<li>意见反馈</li>
						</ul>
					</div>
				</div>
			    <div class="divbuttom"></div>
			    <div class="section2">
                     <div class="section2top">
                     	<div class="section2topleft">
                     		<span class="span2"></span>
                     		<span class="span4">热门强推</span>
                     		<span class="span5">重磅打造</span>
                     	</div>
                     	<div class="section2topright">
                     		更多&nbsp;&nbsp;>
                     	</div>
                     </div>
                     <div class="section2bottom">
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/remen_01.gif" width="100%" height="100%"/></li>
                     			<li class="li3">经典翻拍听原著</li>
                     		</ul>
                     	</div>
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/remen_02.gif" width="100%" height="100%"/></li>
                     			<li class="li3">匪大经典</li>
                     		</ul>
                     	</div>
                     	<div class="section2bottom1 lastsection2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/remen_03.gif" width="100%" height="100%"/></li>
                     			<li class="li3">完本|质量保证</li>
                     		</ul>
                     	</div>
                     </div>
			    </div>
			    <div class="divbuttom"></div>
			    <div class="section3">
			    	<div class="section3top">
			    		<div class="section2topleft"><span class="span3"></span><span class="span6">男生小说</span></div>
			    	    <div class="section2topright">
                     		进入频道&nbsp;&nbsp;>
                        </div>
			    	</div>
			    	<div class="section3center"><img src="../assets/index/section_08.gif" width="100%"/></div>
			        <div class="section2bottom">
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/book_01.gif" width="100%" height="100%"/></li>
                     			<li class="li3">大神新书|免费</li>
                     		</ul>
                     	</div>
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/book_02.gif" width="100%" height="100%"/></li>
                     			<li class="li3">天才透视神医</li>
                     		</ul>
                     	</div>
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/book_03.gif" width="100%" height="100%"/></li>
                     			<li class="li3">权谋官路</li>
                     		</ul>
                     	</div>
                    </div>
			    </div>
			    <div class="divbuttom"></div>
			    <div class="section3">
			    	<div class="section3top">
			    		<div class="section2topleft"><span class="span3"></span><span class="span6">女生小说</span></div>
			    	    <div class="section2topright">
                     		进入频道&nbsp;&nbsp;>
                        </div>
			    	</div>
			    	<div class="section3center"><img src="../assets/index/section_09.gif" width="100%"/></div>
			        <div class="section2bottom">
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/book_04.gif" width="100%" height="100%"/></li>
                     			<li class="li3">捧在手心宠一生</li>
                     		</ul>
                     	</div>
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/book_05.gif" width="100%" height="100%"/></li>
                     			<li class="li3">我偏要对你负责</li>
                     		</ul>
                     	</div>
                     	<div class="section2bottom1">
                     		<ul>
                     			<li class="li2"><img src="../assets/index/book_06.gif" width="100%" height="100%"/></li>
                     			<li class="li3">殉情穿越成皇妃</li>
                     		</ul>
                     	</div>
                    </div>
			    </div>
			    <div class="divbuttom"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>

<style lang="css" scoped>
	* {
		margin: 0px 0px;
	}
	
	.main {
		width: 750px;
		margin: 0 auto;
	}
	.header{
		float: left;
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
		color:#818181;
	}
	.span1{
		display: inline-block;
		width: 45px;
		height: 45px;
		float: left;
	}
	.nav{
		float: left;
		width: 750px;
		height: 80px;
		line-height: 50px;
		color:#727272;
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
	.action{
		float: left;
		width: 750px;
		height: 252px;
		overflow: hidden;
	}
	.divbuttom{
		float: left;
		width: 750px;
		height: 20px;
		background:#eef0ef;
	}
	.section1{
		width: 750px;
		height: 120px;
		float: left;
	}
	.section11{
		width: 102px;
		float: left;
		height: 98px;
		margin-left: 25px;
		margin-right: 20px;
		margin-top: 12px;
	}
	.section11 ul{
		width: 102px;
		height: 98px;
	}
	.section11 ul li{
		float: left;
		text-align: center;
		font-size: 22px;
	}
	.li1{
		width: 46px;
		height: 50px;
		margin-left: 20px;
	}
	.section2{
		float: left;
		width: 750px;
		height: 455px;
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
	}
	.section2top{
		float: left;
		width: 710px;
		height: 50px;
		margin-top: 20px;
	}
	.section2topleft{
		width: 400px;
		float: left;
		height: 40px;
		line-height: 40px;
	}
	.span2{
		display: inline-block;
		width: 42px;
		height: 50px;
		float: left;
		background: url(../assets/index/section_06.gif) 0 0 no-repeat;
		background-size: contain;
	}
    .span3{
		display: inline-block;
		width: 39px;
		height: 50px;
		float: left;
		background: url(../assets/index/section_07.gif) 0 0 no-repeat;
		background-size: contain;
	}
	
	.section2topright{
		font-size: 24px;
		height: 24px;
		float: right;
		margin-top: 10px;
		line-height: 24px;
	}
	.span4{
		color:#151515;
		font-size: 32px;
		float: left;
		margin-left: 15px;
	}
	.span5{
		display:inline-block;
		line-height:22px;
		float: left;
		font-size: 22px;
		margin-left: 15px;
		margin-bottom: 15px;
		margin-top: 10px;
	}
	.section2bottom{
		width: 710px;
		float: left;
		height: 370px;
	}
	.section2bottom1{
		float: left;
		width: 210px;
		margin-right: 26px;
	}
	.li2{
		float: left;
	    width: 210px;
	    height: 280px;
	}
	.li3{
		height: 80px;
		float: left;
		width: 210px;
		line-height: 80px;
		font-size: 25px;
	}
	.section3{
		width: 750px;
		float: left;
		padding-left:20px;
		padding-right: 20px;
		padding-top: 20px;
		box-sizing: border-box;
		height: 777px;
	}
	.section3center{
		float: left;
		width: 710px;
		height: 298px;
		margin-top: 20px;
		margin-bottom: 22px;
	}
	.span6{
		color:#151515;
		font-size: 32px;
		margin-left: 15px;
	}
	a{
		color:#6d6d6d;
	}
</style>