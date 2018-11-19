<template>
	<div class="kv_box">
		<div :class="`text_wrap ${textShow ? 'show' : ''}`">
			<h1>安本標準<br class="mobile">360多重資產收益基金</h1>
			<h2>(本基金配息政策可能致<br class="mobile">配息來源為本金)</h2>
			<p>6月11日 精彩募集</p>
		</div>
		<div class="bg_wrap">
			<div class="bg" @mouseenter="checkKvHover()"></div>
			<div class="shadow"></div>
			<kv-butterfly :class="`kvButterfly ${bigButterflyTramslate[4] ? 'show' : ''}`"
				:style="`transform: translate3d(${bigButterflyTramslate[0]}%,${bigButterflyTramslate[1]}%,0) rotateY(${bigButterflyTramslate[2]}deg) scale(${bigButterflyTramslate[3]})`">
			</kv-butterfly>

			<butterfly-small :bstyle="0"
				:class="`sb_bottom sb sb1 sb1-b ${sb1b[3] ? 'sb-shadow' : ''}`"
				:style="`transform: translate3d(${sb1b[0]}%,${sb1b[1]}%,0) rotate(${sb1b[2]}deg)`">
			</butterfly-small>
			<butterfly-small :bstyle="1"
				:class="`sb_top sb sb1 sb1-r ${sb1r[3] ? 'sb-shadow' : ''}`"
				:style="`transform: translate3d(${sb1r[0]}%,${sb1r[1]}%,0) rotate(${sb1r[2]}deg)`">
			</butterfly-small>
			<butterfly-small :bstyle="2"
				:class="`sb_top sb sb2 sb2-o ${sb2o[3] ? 'sb-shadow' : ''}`"
				:style="`transform: translate3d(${sb2o[0]}%,${sb2o[1]}%,0) rotate(${sb2o[2]}deg)`">
			</butterfly-small>
			<butterfly-small :bstyle="3"
				:class="`sb_bottom sb sb2 sb2-r ${sb2r[3] ? 'sb-shadow' : ''}`"
				:style="`transform: translate3d(${sb2r[0]}%,${sb2r[1]}%,0) rotate(${sb2r[2]}deg)`">
			</butterfly-small>
			<butterfly-small :bstyle="4"
				:class="`sb_top sb sb2 sb2-y ${sb2y[3] ? 'sb-shadow' : ''}`"
				:style="`transform: translate3d(${sb2y[0]}%,${sb2y[1]}%,0) rotate(${sb2y[2]}deg)`">
				</butterfly-small>

			<butterfly-small :bstyle="5"
				:class="`sb_top sb sb3 sb3-b ${sb3b[3] ? 'sb-shadow' : ''}`"
				:style="`transform: translate3d(${sb3b[0]}%,${sb3b[1]}%,0) rotate(${sb3b[2]}deg)`">
				</butterfly-small>
			<butterfly-small :bstyle="6"
				:class="`sb_bottom sb sb3 sb3-y ${sb3y[3] ? 'sb-shadow' : ''}`"
				:style="`transform: translate3d(${sb3y[0]}%,${sb3y[1]}%,0) rotate(${sb3y[2]}deg)`">
				</butterfly-small>
		</div>
	</div>
</template>

<script>
	import kvButterfly from './kvButterfly';
	import butterflySmall from './kvButterflySmall';

	export default {
		name: 'kv',
		data() {
			return {
				textShow: false,
				bigButterflyTramslate: [0, 0, 0, 1, false],
				sb1b: [-280, 50, 41, false],
				sb1r: [-187, 0, 90, false],
				sb2o: [260, -266, 108, false],
				sb2r: [444, 310, -15, false],
				sb2y: [288, -500, 142, false],
				sb3b: [656, -360, 180, false],
				sb3y: [1080, 283, -16, false],
			};
		},
		mounted() {

			function PathAnimator(b,c){b&&(this.len=this.updatePath(b),this.timer=null,this.settings={duration:c.duration,step:c.step,reverse:!!c.reverse,startPercent:c.startPercent||0,onDone:c.onDone||function(){},easing:c.easing,fps:1E3/60})}PathAnimator.prototype={start:function(b,c){this.stop();this.percent=b=b||this.settings.startPercent||0;if(0==this.settings.duration)return!1;var a=this,g=new Date;c=c||100;(function h(){var d=[],e=(new Date-g)/1E3/a.settings.duration;"function"==typeof a.settings.easing&&(e=a.settings.easing(e));var f=b+e*(c-b);a.settings.reverse&&(f=b-e*(c-b),0>f&&(f=c+f));a.running=!0;a.percent=f;if(.999<e)return a.stop(),a.percent=c,a.settings.onDone();d[0]=a.pointAt(a.percent-1);d[1]=a.pointAt(a.percent+1);d=180*Math.atan2(d[1].y-d[0].y,d[1].x-d[0].x)/Math.PI;a.timer=setTimeout(h,a.settings.fps);a.settings.step(a.pointAt(a.percent),d)})()},stop:function(){clearTimeout(this.timer);this.timer=null;this.running=!1},stopAt:function(b){},pointAt:function(b){return this.path.getPointAtLength(this.len*b/100)},updatePath:function(b){!this.path&&b&&(this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttribute("d",b));return this.path.getTotalLength()}};


			let pathAnimator,
				option = {
					duration: 3,
					fps: 60,
					step: (point, angle)=> {
						this.bigButterflyTramslate = [point.x/4, point.y/4, 0, 1, false];
					},
					onDone: ()=> {
						pathAnimator = new PathAnimator('M290 -88 L219 -64', option2);
						setTimeout(()=> {
							this.textShow = true;
							pathAnimator.start();
							setTimeout(()=> { this.$emit('kvEnd'); }, 500);
						}, 100);
					}
				},
				option2 = {
					duration: 1.5,
					fps: 60,
					step: (point, angle)=> {
						this.bigButterflyTramslate = [point.x, point.y, 180, 0.4, true];
					},
					onDone: ()=> {

					}
				};
			pathAnimator = new PathAnimator('M0 -200 Q150 150, 1100 -150', option);

			let sbPA1b,
				sbPA1bOption = {
					duration: 3,
					fps: 60,
					step: (point, angle)=> {
						this.sb1b = [point.x, point.y, angle+91.5, false];
					},
					onDone: ()=> {
						this.sb1b[3] = true;
					}
				};
			sbPA1b = new PathAnimator('M-280 50 Q0 0, 136 -218', sbPA1bOption);

			let sbPA1r,
				sbPA1rOption = {
					duration: 2.5,
					fps: 60,
					step: (point, angle)=> {
						this.sb1r = [point.x, point.y, 90, false];
					},
					onDone: ()=> {
						this.sb1r[3] = true;
					}
				};
			sbPA1r = new PathAnimator('M-187 0 71 17', sbPA1rOption);


			let sbPA2o,
				sbPA2oOption = {
					duration: 2.2,
					fps: 60,
					step: (point, angle)=> {
						this.sb2o = [point.x, point.y, angle+81.3, false];
					},
					onDone: ()=> {
						this.sb2o[3] = true;
					}
				};
			sbPA2o = new PathAnimator('M260 -266 Q300 400, 559 618', sbPA2oOption);

			let sbPA2r,
				sbPA2rOption = {
					duration: 1.8,
					fps: 60,
					step: (point, angle)=> {
						this.sb2r = [point.x, point.y, angle+62, false];
					},
					onDone: ()=> {
						this.sb2r[3] = true;
					}
				};
			sbPA2r = new PathAnimator('M444 310 Q400 200, 330 -17', sbPA2rOption);

			let sbPA2y,
				sbPA2yOption = {
					duration: 3,
					fps: 60,
					step: (point, angle)=> {
						this.sb2y = [point.x, point.y, angle+100, false];
					},
					onDone: ()=> {
						this.sb2y[3] = true;
					}
				};
			sbPA2y = new PathAnimator('M288 -500 Q500 -320, 280 -200 T398 115', sbPA2yOption);


			let sbPA3b,
				sbPA3bOption = {
					duration: 2.2,
					fps: 60,
					step: (point, angle)=> {
						this.sb3b = [point.x, point.y, angle+69.3, false];
					},
					onDone: ()=> {
						this.sb3b[3] = true;
					}
				};
			sbPA3b = new PathAnimator('M656 -360 Q666 -220, 479 84', sbPA3bOption);

			let sbPA3y,
				sbPA3yOption = {
					duration: 1.6,
					fps: 60,
					step: (point, angle)=> {
						this.sb3y = [point.x, point.y, angle+105.4, false];
					},
					onDone: ()=> {
						this.sb3y[3] = true;
					}
				};
			sbPA3y = new PathAnimator('M1080 283 Q1200 0, 919 -285', sbPA3yOption);


			setTimeout(()=> {
				pathAnimator.start();
			}, 50);
			setTimeout(()=> {
				sbPA1b.start();
				sbPA1r.start();
			}, 100);
			setTimeout(()=> {
				sbPA2o.start();
				sbPA2r.start();
				sbPA2y.start();
			}, 550);
			setTimeout(()=> {
				sbPA3b.start();
				sbPA3y.start();
			}, 1000);
		},
		methods: {
			checkKvHover: function() {
				this.$emit('changekvhover');
			}
		},
		components: {
			kvButterfly,
			butterflySmall,
		},
	};
</script>

<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.sb {
		position: absolute;
		z-index: 1;
		&:after {
			content: '';
			opacity: 0;
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-image: url(./../assets/img/sb-shadow.png);
			background-size: contain;
			background-repeat: no-repeat;
			transition: opacity .8s;
			z-index: -1;
		}
		&.sb-shadow:after { opacity: 1; }
	}
	.sb_top {
		top: 0;
		left: 0;
	}
	.sb_bottom {
		bottom: 0;
		left: 0;
	}
	.sb1-b {
		width: 104px;
		height: 88px;
		&:after { transform: translate(10%, 0) scale(0.7); }
	}
	.sb1-r {
		width: 110px;
		height: 74px;
		&:after { transform: translate(14%, 0) scale(0.53); }
	}
	.sb2-o {
		width: 80px;
		height: 40px;
		&:after { transform: translate(22%, -10%) scale(0.75); }
	}
	.sb2-r {
		width: 110px;
		height: 60px;
		&:after { transform: translate(21%, 3%) scale(0.8); }
	}
	.sb2-y {
		width: 78px;
		height: 46px;
		&:after { transform: translate(21%, 3%) scale(0.8); }
	}
	.sb3-b {
		width: 104px;
		height: 88px;
		&:after { transform: translate(6%, -4%) scale(0.7); }
	}
	.sb3-y {
		width: 78px;
		height: 46px;
		&:after { transform: translate(28%, 10%) scale(1.2); }
	}

	@font-face {
		font-family: 'Noto Sans TC';
		font-style: normal;
		font-weight: 700;
		src: url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format('woff2'),
			url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff) format('woff'),
			url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf) format('opentype');
	}
	.text_wrap {
		position: absolute;
		top: 10%;
		left: 0;
		right: 0;
		margin: auto;
		h1, h2 {
			opacity: 0;
			line-height: 1.2;
			text-align: center;
			font-family: Noto Sans TC;
			font-size: 46px;
			font-weight: 700;
		}
		br.mobile { display: none; }
		h1 { color: #00a2e4; }
		h2 { color: #a2a2a2; }
		p {
			opacity: 0;
			line-height: 2.7;
			text-align: center;
			font-size: 30px;
			font-weight: bold;
			color: #141e50;
		}
		&.show {
			h1, h2, p {
				animation-name: title-show;
				animation-fill-mode: forwards;
				animation-duration: 1s;
			}
			h1 { animation-delay: .5s; }
			h2 { animation-delay: .7s; }
			p { animation-delay: .8s; }
		}
	}
	@keyframes title-show {
		0% {
			opacity: 0;
			transform: translate(0, 40%);
		}
		100% {
			opacity: 1;
			transform: translate(0, 0);
		}
	}
	.bg_wrap {
		position: absolute;
		bottom: 24%;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 800px;
		height: 363px;
	}
	.bg {
		width: 100%;
		height: 100%;
		background-image: url(./../assets/img/kv_bg.png);
		background-repeat: no-repeat;
	}
	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 100%;
		background: linear-gradient(to right, rgba(#f5f5f5, 0) , #f5f5f5 50%);
		transform: translate3d(-50%, 0, 0);
		animation-name: show;
		// 3 * 2.6
		animation-duration: 7.8s;
		animation-delay: .3s;
		animation-fill-mode: forwards;
	}
	.kvButterfly {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -50%;
		margin: auto;
		width: 432px;
		height: 322px;
		opacity: 0;
		animation-name: fadeOut;
		animation-duration: 3s;
		animation-delay: 0s;
		animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
		&.show {
			animation-name: fadeIn;
			animation-duration: 2s;
			animation-fill-mode: forwards;
		}
	}


	@keyframes show {
		0% { transform: translate3d(-50%, 0, 0); }
		100% { transform: translate3d(60%, 0, 0); }
	}
	@keyframes fadeOut {
		0% { opacity: 0; }
		20%, 74% { opacity: 1; }
		86%, 100% { opacity: 0; }
	}
	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	@media screen and (max-height: 880px) and (min-width: $mobileSize) {
		.bg_wrap { bottom: 12%; }
	}

	@media screen and (max-width: $mobileSize) {
		.kv_box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100%;
			height: 100%;
		}
		.text_wrap, .bg_wrap {
			position: relative;
			top: auto;
			bottom: auto;
			margin: 0 auto;
		}
		.text_wrap {
			br.mobile { display: block; }
			h1, h2 {
				font-size: 60px;
			}
			p {
				line-height: 2.7;
				font-size: 48px;
				font-weight: bold;
			}
		}
		.main { flex-direction: column; }
		.content_wrap { height: auto; }
	}
	@media screen and (max-width: $mobileSize) and (min-width: 769px) and (max-height: 960px) {
		.text_wrap, .bg_wrap { top: 2%; }
		.text_wrap {
			br.mobile { display: none; }
			h1, h2 { font-size: 42px; }
			p {
				line-height: 2.6;
				font-size: 34px;
			}
		}
	}

	//包含ipad直式(768px)
	@media screen and (max-width: 800px) {
		.text_wrap {
			padding-top: 170/750*100+vw;
			h1, h2 { font-size: 60/750*100+vw; }
			p { font-size: 48/750*100+vw; }
		}
		.bg_wrap {
			bottom: 4%;
			width: 800/750*100+vw;
			height: 363/750*100+vw;
			transform: scale(.87) translate(-6%, 0);
		}
		.sb1-b {
			width: 104/750*100+vw;
			height: 88/750*100+vw;
		}
		.sb1-r {
			width: 110/750*100+vw;
			height: 74/750*100+vw;
		}
		.sb2-o {
			width: 80/750*100+vw;
			height: 40/750*100+vw;
		}
		.sb2-r {
			width: 110/750*100+vw;
			height: 60/750*100+vw;
		}
		.sb2-y {
			width: 78/750*100+vw;
			height: 46/750*100+vw;
		}
		.sb3-b {
			width: 104/750*100+vw;
			height: 88/750*100+vw;
		}
		.sb3-y {
			width: 78/750*100+vw;
			height: 46/750*100+vw;
		}
		.bg { background-size: 800/750*100+vw 363/750*100+vw; }
		.kvButterfly {
			left: -50%;
			width: 432/750*100+vw;
			height: 322/750*100+vw;
		}
	}

</style>
