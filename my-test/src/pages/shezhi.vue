<template>
	<div id="max">
		<div class="personal">
			<div>
				<a id="t-goback" href="javascript:window.history.go(-1)">
					<span class="iconfont icon-fanhui"></span>
				</a>
				<h1>设置</h1>
			</div>
		</div>
		<div class="center">
			<ul>
				<li>
					<p>清除缓存</p>
					<p>0.0B <span class="icon iconfont icon-jiantouyou"></span></p>
				</li>
				<li>
					<p>版本更新</p>
					<p>1.3.6 <span class="icon iconfont icon-jiantouyou"></span></p>
				</li>
				<li>
					<p>授权淘宝账号</p>
					<p>1.3.6 <span class="icon iconfont icon-jiantouyou"></span></p>
				</li>
				<li>
					<p>快速登录</p>
					<p><span class="icon iconfont icon-jiantouyou"></span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	#max{
		width: 100%;
		.personal{
			width: 100%;
			background: #fdde4a;
			>div{
				display: flex;
				width: 60%;
				justify-content: space-between;
				align-items: center;
				>a{
					>span{
						font-size: px2rem(25px);
					}
					
				}
				>h1{
					font-size: px2rem(25px);
				}
			}
			
		}
		.center{
			>ul{
				width: 100%;
				>li{
					width: 100%;
					height: px2rem(60px);
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					align-items: center;
					border-bottom: 1px solid lightgray;
					padding: px2rem(5px);
					box-sizing: border-box;
					>p:nth-of-type(2){
						color: darkgray;
					}
				}
			}
		}
	}
</style>