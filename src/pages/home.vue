<template>
	<div class="Home">
		<div class="search-wrap" :style="navBarStatu?'opacity: 1;':'opacity: 0;'">
			<input type="text" placeholder="Search">
		</div>
		<div class="navbar-main">
			<div class="navbar navbar-default" :style="navBarStatu?'top: 140px;':'60px;'">
				<div class="container clearfix">
					<div class="nav-header f-l">SIMPLE</div>
					<div class="nav-menu f-r display-flex">
						<ul class="display-flex">
							<li class="nav-down">HOME <b class="caret"></b></li>
							<li class="nav-down">BLOG <b class="caret"></b></li>
							<li class="nav-down">PROTFOLIO <b class="caret"></b></li>
							<li class="nav-down">PAGES <b class="caret"></b></li>
						</ul>
						<div class="nva-search" @click="showNavBar()">
							<img src="../assets/images/search.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<header class="header">
			<div class="head-wrap">
				<p>let us help you be something awesome</p>
				<p>we are here for you</p>
			</div>
		</header>
		<section>
			<div class="section-innerwrap">
				<div class="content-wrap part1">
					<div class="content-part">
						<div class="title t-c">
							<h1>a little about us</h1>
							<hr></hr>
						</div>
						<div class="message-list display-flex">
							<div class="message">
								Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes.
							</div>
							<div class="message">
								Arrived totally in as between private. Favour of so as on pretty though elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished so be expect polite valley. Whose asked stand it sense no spoil to. Prudent you too his conduct feeling limited and. Side he lose paid as hope so face upon be. Goodness did suitable learning put.
							</div>
						</div>
						<div class="title">
							<hr></hr>
						</div>
						<div class="message-list display-flex">
							<div class="message-box">
								<h2>we are fast</h2>
								<div class="content">
									Arrved totally in between private. Favour of so as on pretty through elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished
								</div>
							</div>
							<div class="message-box">
								<h2>we are reliable</h2>
								<div class="content">
									Arrved totally in between private. Favour of so as on pretty through elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished
								</div>
							</div>
							<div class="message-box">
								<h2>we get results</h2>
								<div class="content">
									Arrved totally in between private. Favour of so as on pretty through elinor direct. Reasonable estimating be alteration we themselves entreaties me of reasonably. Direct wished
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content-wrap part2">
					<div class="content-part">
						<div class="title t-c">
							<h1 class="c-fff">here is the proof</h1>
							<hr></hr>
						</div>
						<div class="message-list"></div>
					</div>
				</div>
			</div>
		</section>
		<div class="backImg">
			<img src="../assets/images/bgc.jpg" alt="">
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				name: 'hello',
				navBarStatu: false
			}
		},
		mounted() {
			//滚动到200,改变导航栏样式
			this.checkPageScroll();
		},
		methods: {
			linkTo() {
				this.$router.push({
					path: '/user'
				})
			},
			showNavBar() {
				this.navBarStatu = !this.navBarStatu;
			},
			checkPageScroll() {
				window.addEventListener('scroll', function(e) {
					if(document.documentElement.scrollTop >= 200) {
						$('.navbar').addClass('on');
						$('.nva-search img').attr('src', require('../assets/images/search_on.png'))
						
					}else {
						$('.navbar').removeClass('on');
						$('.nva-search img').attr('src', require('../assets/images/search.png'))
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.Home {
		.container {
			width: 970px;
			margin: 0 auto;
			padding: 0 15px;
		}
		.search-wrap {
			position: fixed;
			top: 30px;
			width: 100%;
			padding: 15px;
			z-index: 99;
			transition: all .4s linear;
			input {
				width: 1170px;
				padding: 10px;
				border: none !important;
				display: block;
				margin: 0 auto;
				background-color: #eee;
				transition: all .4s linear;
			}
		}
		.navbar-main {
			.navbar {
				position: fixed;
				left: 0;
				top: 60px;
				width: 100%;
				color: #fff;
				z-index: 9999;
				transition: all .5s ease-in-out;
				background: transparent;
				&.on {
					background: #fff;
					.nav-header {
						font-size: 36px !important;
						color: #777;
						transition: all .5s ease-in-out;
					}
					.nav-menu {
						.nav-down {
							color: #777;
							transition: all .5s ease-in-out;
							padding-bottom: 25px !important;
						}
					}
				}
				.nav-header {
					font-size: 38px;
					font-family: 'Raleway';
					font-weight: 700;
					cursor: pointer;
					position: relative;
					top: 10px;
				}
				.nav-menu {
					cursor: pointer;
					.nav-down {
						padding: 25px 15px;
						letter-spacing: 2px;
						text-transform: uppercase;
						font-weight: 700;
						font-size: 14px;
						font-family: 'Raleway';
						padding-bottom: 60px;
						.caret {
							display: inline-block;
							vertical-align: middle;
							width: 0;
							height: 0;
							border-top: 4px dashed;
							border-left: 4px solid transparent;
							border-right: 4px solid transparent;
						}
					}
					.nva-search {
						width: 25px;
						height: 25px;
						position: relative;
						top: 20px;
						margin-left: 16px;
						img {
							height: auto;
						}
					}
				}
			}
		}
		header {
			.head-wrap {
				padding-top: 250px;
				width: 80%;
				margin: 0 auto;
				p {
					color: #fff;
					font-size: 40px;
					font-weight: bold;
					letter-spacing: -1px;
					text-align: center;
					line-height: 40px;
					text-transform: uppercase;
					font-family: 'Raleway';
					margin-bottom: 25px;
				}
			}
		}
		section {
			display: block;
			margin-top: 240px;
			padding: 0 30px;
			.section-innerwrap {
				width: 1200px;
				margin: 0 auto;
			}
			.content-wrap {
				padding: 90px 30px;
				background: #fff;
				.content-part {	
					width: 100%;
					min-height: 400px;
					.title {
						text-transform: uppercase;
						hr {
							display: block;
							height: 1px;
							border: 0;
							border-top: 1px solid #ccc;
							margin: 20px auto 60px auto;
							padding: 0;
							width: 60%;
						}
					}
					
				}
				&.part1 {
					.message-list {
						.message {
							padding: 10px 30px;
							line-height: 26px;
						}
						.message-box {
							background: #f5f5f5;
							padding: 18px 25px 10px;
							border-bottom: 4px solid #999;
							margin-left: 100px;
							&:hover {
								border-bottom-color: #2980b9;
							}
							h2 {
								letter-spacing: -1px;
								text-transform: uppercase;
							}
							.content {
								margin-top: 16px;
								line-height: 26px;
							}
						}
					}
				}
				&.part2 {
					background: #000;
				}
			}
		}
		.backImg {
			position: fixed;
			top: 0;
			left: 0px;
			width: 100%;
			z-index: -9999;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				display: block;
				width: 100%;
				height: 100%;
				background: rgba(0,0,0,.5);
			}
		}
	}
</style>
