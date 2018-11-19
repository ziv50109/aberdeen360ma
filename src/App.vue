<template>
	<div id="app" @wheel="changeMenu($event)">
		<ipoheader :class="`header ${mobileMenu ? 'open' : ''}`"
			@mobileMenu="toggleMobileMenu"
			@popupSalesOpen="openPopup(2)">
		</ipoheader>
		<mobilemenu :class="`mobilemenu ${mobileMenu ? 'open' : ''}`"
			:pagesOffsetTop="pagesOffsetTop"
			@toggleMenu="toggleMobileMenu">
		</mobilemenu>
		<main :class="`main ${mindex !== null ? 'open-content' : ''}`">
			<div :class="`kv_wrap ${!kvhover ? 'show' : ''}`">
				<kv @changekvhover="kvMouseEnter" @kvEnd="showScrollIconAndLeftBottomBtn"></kv>
				<div :class="`scroll-icon gray ${bottomItemCanShow ? 'kv show' : 'kv'}`"></div>
			</div>
			<div class="menu_wrap desktop" v-show="!isMobile">
				<pcmenu :menuIndex="mindex" @changeindex="updatemindex" @changekvhover="menuMouseLeave"></pcmenu>
			</div>
			<div class="content_wrap">
				<transition-group name="page" mode="out-in" v-on:after-enter="afterEnter()">
					<page1 v-if="showPage[0]" :key="0" class="page page1"></page1>
					<page2 v-if="showPage[1]" :key="1" class="page page2"></page2>
					<page3 v-if="showPage[2]" :key="2" class="page page3"></page3>
					<page4 v-if="showPage[3]" :key="3" class="page page4"></page4>
					<page5 v-if="showPage[4]" :key="4" class="page page5">
						<div class="popup-btn_wrap">
							<div @click="openPopup(0)" class="btn btn1"><div class="icon icon1"></div>投資小叮嚀</div>
							<div @click="openPopup(1)" class="btn btn2"><div class="icon icon2"></div>多重資產健檢</div>
							<div @click="openPopup(3)" class="btn btn3"><div class="icon icon1"></div>30秒短片</div>
						</div>
					</page5>
				</transition-group>
				<div class="scroll-icon white"></div>
			</div>
		</main>
		<transition name="footer">
			<ipofooter v-if="showPage[5]" :key="5" @footerClose="footerClose()"></ipofooter>
		</transition>
		<div :class="`leftbottomBtn_wrap ${bottomItemCanShow ? 'kv show' : 'kv'}`">
			<p><span class="icon icon1"></span><a href="https://www.aberdeenstandard.com.tw" target="_blank">回官網</a></p>
			<i></i>
			<p @click="openPopup(0)"><span class="icon icon2"></span>投資小叮嚀</p>
			<i></i>
			<p @click="openPopup(1)"><span class="icon icon3"></span>多重資產健檢</p>
			<i></i>
			<p @click="openPopup(3)"><span class="icon icon2"></span>30秒短片</p>
		</div>
		<div class="popup_wrap">
			<popup v-show="isOpenPopup"  @closePopup="closePopup()">
				<transition-group name="opacity">
					<popupVideos v-if="showPopup[0]" :key="0"></popupVideos>
					<popupMultipleAssets v-if="showPopup[1]" :key="1"></popupMultipleAssets>
					<popupSales v-if="showPopup[2]" :key="2"></popupSales>
					<popupShortVideo v-if="showPopup[3]" :key="3" @closePopup="closePopup()"></popupShortVideo>
				</transition-group>
			</popup>
		</div>
	</div>
</template>

<script>
	import ipoheader from './components/header';
	import pcmenu from './components/pcmenu';
	import mobilemenu from './components/mobilemenu';
	import kv from './components/kv';
	import ipofooter from './components/ipofooter';
	import popup from './components/popupFull';

	import page1 from './pages/page1';
	import page2 from './pages/page2';
	import page3 from './pages/page3';
	import page4 from './pages/page4';
	import page5 from './pages/page5';
	import popupMultipleAssets from './pages/popupMultipleAssets';
	import popupSales from './pages/popupSales';
	import popupVideos from './pages/popupVideos';
	import popupShortVideo from './pages/popupShortVideo'

	export default {
		name: 'App',
		data() {
			return {
				bottomItemCanShow: false,
				showPage: [false, false, false, false, false, false],
				isOpenPopup: false,
				showPopup: [false, false, false, false],
				mindex: null,
				indexDelay: true,
				kvhover: false,
				isMobile: false,
				mobileMenu: false,
				pagesOffsetTop: [],
			}
		},
		mounted() {
			this.init();
			window.addEventListener('resize', this.init);
			setTimeout(()=> { this.initPagesOffsetTop() }, 100);

			let self = this;
			function hashCheck() {
				switch(document.location.hash) {
					case '#index':
						self.kvhover = false;
						self.mindex = null;
						break;
					case '#s1':
						self.kvhover = true;
						self.mindex = 0;
						break;
					case '#s2':
						self.kvhover = true;
						self.mindex = 1;
						break;
					case '#s3':
						self.kvhover = true;
						self.mindex = 2;
						break;
					case '#s4':
						self.kvhover = true;
						self.mindex = 3;
						break;
					case '#s5':
						self.kvhover = true;
						self.mindex = 4;
						break;
					default:
						self.kvhover = false;
						self.mindex = null;
						break;
				}
				if(self.isMobile) {
					self.kvhover = false;
					let index = self.mindex;
					index === null ? index = 0 : index = index + 1;
					setTimeout(()=> { window.scrollTo(0, self.pagesOffsetTop[index])}, 150);
				}
			}
			hashCheck();
			window.addEventListener('hashchange', hashCheck);

		},
		beforeDestroy() {
			window.removeEventListener('resize', this.init);
		},
		beforeUpdate() {
			window.addEventListener('resize', this.initPagesOffsetTop);
		},
		watch: {
			mindex: function(val) {
				if(!this.isMobile) {
					this.closeAllMenuContent();
					this.showPage[val] = true;
				}
			},
			indexDelay: function() {
				if(!this.indexDelay) {
					setTimeout(()=> {
						this.indexDelay = true;
					}, 400);
				}
			}
		},
		methods: {
			init: function() {
				if(window.innerWidth <= 1025) {
					this.isMobile = true;
					this.kvhover = false;
					this.showPage.forEach((item, i)=> {
						this.showPage[i] = true;
					});

				} else {
					this.isMobile = false;
					//this.mindex = null;
					this.kvhover = true;
					this.mobileMenu = false;
					this.closeAllMenuContent();
					this.showPage[this.mindex] = true;
				}
			},
			initPagesOffsetTop: function() {
				if(window.innerWidth > 1024) return;
				let kvHeight = this.$el.querySelector('.kv_wrap').offsetHeight,
					headerHeight = this.$el.querySelector('header').offsetHeight / 2;
				this.pagesOffsetTop = [0];
				this.$el.querySelectorAll('.page').forEach((item, index)=> {
					this.pagesOffsetTop.push(kvHeight - headerHeight + item.offsetTop);
				});
			},
			showScrollIconAndLeftBottomBtn: function() {
				this.bottomItemCanShow = true;
			},
			afterEnter: function() {
				//console.log('ok');
			},
			updatemindex: function(val) {
				this.mindex = val;
			},
			kvMouseEnter: function() {
				if(this.isMobile) return;
				if(this.mindex === null) {
					this.kvhover = true;
				}
			},
			menuMouseLeave: function() {
				if(this.isMobile) return;
				if(this.mindex === null) {
					this.kvhover = false;
				}
			},
			close: function() {
				this.mindex = null;
			},
			footerClose: function() {
				this.mindex = 4;
			},
			changeMenu: function(e) {
				if(this.isMobile) return;
				if(window.innerHeight < 1025 && window.innerHeight + window.pageYOffset !== document.body.clientHeight && e.deltaY > 0) return;
				if(window.innerHeight < 1025 && window.pageYOffset !== 0 && e.deltaY < 0) return;



				// 主視覺 未 hover 滾輪往下
				if(this.indexDelay && !this.kvhover && e.deltaY > 0) {
					this.kvhover = true;
					this.indexDelay = false;
				}
				if(!this.indexDelay || !this.kvhover) return;
				if(this.mindex === null) {
					this.mindex = 0;
				} else if(this.indexDelay) {
					if(e.deltaY > 0) {
						this.mindex += 1;
					} else {
						this.mindex -= 1;
					}
					if(this.mindex > 5) {
						this.mindex = 5;
					}
					if(this.mindex < 0) {
						this.mindex = 0;
					}
				}
				this.indexDelay = false;
			},
			closeAllMenuContent: function() {
				this.showPage.forEach((item, i)=> {
					this.showPage[i] = false;
				});
			},
			openPopup: function(index) {
				this.closePopup();
				this.isOpenPopup = true;
				this.showPopup[index] = true;
			},
			closePopup: function() {
				this.showPopup.forEach((item, i)=> {
					this.showPopup[i] = false;
				});
				this.isOpenPopup = false;
			},
			toggleMobileMenu: function() {
				this.mobileMenu = !this.mobileMenu;
			}
		},
		components: {
			ipoheader,
			pcmenu,
			mobilemenu,
			kv,
			page1,
			page2,
			page3,
			page4,
			page5,
			ipofooter,
			popup,
			popupMultipleAssets,
			popupSales,
			popupVideos,
			popupShortVideo,
		},
	};
</script>

<style lang="scss">
	@import "./assets/scss/reset";
	@import "./assets/scss/variable";
	@import "./assets/scss/pages";

	#app {
		position: relative;
		overflow: hidden;
	}
	body {
		min-height: 768px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.main, .menu_wrap {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main {
		&.open-content {
			.menu_wrap {
				width: 40%;
				padding: 0;
			}
			.content_wrap { width: 60%; }
		}
	}
	.kv_wrap {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		min-height: 768px;
		background-color: #f5f5f5;
		visibility: hidden;
		opacity: 0;
		transition: opacity .4s cubic-bezier(0.55, 0.085, 0.68, 0.53), visibility .4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
		overflow: hidden;
		&.show {
			visibility: visible;
			opacity: 1;
		}
	}
	.menu_wrap, .content_wrap {
		transition: width .4s;
	}
	.menu_wrap {
		width: 100%;
		height: 100vh;
		min-height: 768px;
		padding: 200px;
		background-color: #F7F7F7;
	}

	.mobilemenu {
		transform: translate3d(0, -150%, 0);
		transition: transform .6s;
		&.open { transform: translate3d(0, 0, 0); }
	}
	.content_wrap {
		position: relative;
		height: 100vh;
		min-height: 768px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		overflow: hidden;
	}
	.scroll-icon {
		position: absolute;
		left: 0;
		right: 0;
		width: 27px;
		height: 38px;
		margin: auto;
		background-repeat: no-repeat;
		background-size: contain;
		z-index: 3;
		&.gray {
			bottom: 40px;
			background-image: url(./assets/img/icon-scroll-bcg.gif);
		}
		&.white {
			bottom: 40px;
			background-image: url(./assets/img/icon-scroll-bcw.gif);
		}
		&.kv {
			opacity: 0;
			transition: opacity 1.2s;
		}
		&.kv.show { opacity: 1; }
	}
	.close {
		position: absolute;
		cursor: pointer;
	}
	.page {
		&-enter, &-leave-to { opacity: 0; }
		&-leave-to { transform: translate3d(-2vw,0,0); }
		&-enter-active { transition: opacity .4s linear .3s, transform .44s linear .3s; }
		&-leave-active { transition: opacity .4s linear, transform .5s linear; }
	}
	.footer {
		&-enter-to, &-leave {
			opacity: 1;
			transform: translate3d(0,0,0);
		}
		&-enter, &-leave-to {
			opacity: 0;
			transform: translate3d(0,100vh,0);
		}
		&-enter-active, &-leave-active {
			transition: transform .44s, opacity .4s;
		}
	}

	.leftbottomBtn_wrap {
		position: absolute;
		left: 2.5%;
		bottom: 3%;
		font-size: 15px;
		color: #8a8c8e;
		z-index: 3;
		p {
			display: inline-block;
			cursor: pointer;
		}
		i {
			display: inline-block;
			width: 1px;
			height: 13px;
			margin: 0 10px;
			background-color: #c1c1c1;
		}
		.icon {
			display: inline-block;
			margin-right: 4px;
			background-image: url(./assets/img/leftbottom-btn.png);
			background-repeat: no-repeat;
			&.icon1 {
				width: 15px;
				height: 13px;
				background-position: -44px -10px;
			}
			&.icon2 {
				width: 17px;
				height: 13px;
				background-position: -79px -10px;
			}
			&.icon3 {
				width: 14px;
				height: 12px;
				background-position: -10px -10px;
			}
		}
		&.kv {
			opacity: 0;
			transition: opacity 1.2s;
		}
		&.kv.show { opacity: 1; }
	}
	.opacity {
		&-enter-to, &-leave { opacity: 1; }
		&-enter, &-leave-to { opacity: 0; }
		&-enter-active, &-leave-active { transition: opacity .44s; }
	}

	.popup-btn_wrap {
		display: none;
		align-items: center;
		justify-content: space-between;
		margin-top: 60px;
		.btn {
			text-align: center;
			width: 216px;
			line-height: 2.2;
			font-size: 28px;
			font-weight: bold;
			color: #fff;
			border-radius: 10px;
			background-color: #1a9ce3;
			cursor: pointer;
		}
		.icon {
			vertical-align: text-top;
			display: inline-block;
			margin-right: 5px;
			background-image: url(./assets/img/mobile-p-icon.png);
			background-repeat: no-repeat;
			background-size: 106px 48px;
			&1 {
				width: 34px;
				height: 27px;
				background-position: -62px -10px;
			}
			&2 {
				width: 32px;
				height: 28px;
				background-position: -10px -10px;
			}
		}
	}

	@media screen and (max-width: 1180px) {
		.leftbottomBtn_wrap {
			left: 2%;
			font-size: 14px;
			i {margin: 0 4px; }
		}
	}

	@media screen and (max-width: $mobileSize) {
		.kv_wrap {
			position: relative;
			height: 100vh;
		}
		.main { flex-direction: column; }
		.content_wrap {
			width: 100% !important;
			height: auto;
		}
		body, .kv_wrap, .menu_wrap, .content_wrap, { min-height: auto; }
		.scroll-icon, .leftbottomBtn_wrap { display: none; }
		.popup-btn_wrap { display: flex; }
	}
	@media screen and (max-width: $mobileSize) and (max-height: 960px) and (min-width: $mobileSize2) {
		.kv_wrap { height: 110vh; }
	}

	@media screen and (max-width: $mobileSize2) {
		.kv_wrap { height: calc(110vh - #{100/750*100+vw}); }
		.popup-btn_wrap {
			margin-top: 60/750*100+vw;
			.btn {
				width: 220/750*100+vw;
				font-size: 28/750*100+vw;
				border-radius: 10/750*100+vw;
			}
			.icon {
				background-size: 106/750*100+vw 48/750*100+vw;
				margin-right: 5/750*100+vw;
				&1 {
					width: 34/750*100+vw;
					height: 27/750*100+vw;
					background-position: #{-62/750*100+vw} #{-10/750*100+vw};
				}
				&2 {
					width: 32/750*100+vw;
					height: 28/750*100+vw;
					background-position: #{-10/750*100+vw} #{-10/750*100+vw};
				}
			}
		}
	}
	@media screen and (max-width: $mobileSize2) and (min-height: 668px) {
		.kv_wrap { height: 80vh; }
	}
	//手機橫
	@media screen and (max-width: 812px) and (max-height: 400px) {
		.kv_wrap { height: 110vw; }
	}
	@media screen and (max-width: $mobileSize2) and (min-width: 414px) {
		.kv_wrap { height: 120vw; }
	}
</style>
