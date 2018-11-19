<template>
	<div class="mobilemenu_wrap">
		<div class="item_wrap">
			<ul>
				<li v-for="(item, index) in items" @click="menuClick(index)">{{ item }}</li>
			</ul>
			<div class="share_wrap">
				<div class="icon fb" @click="fbShare('http://www.aberdeen-asset.com.tw/site/360ma/')"></div>
				<div class="icon line" @click="lineShare('http://www.aberdeen-asset.com.tw/site/360ma/', '全新型態多重資產基金\n安本標準投信採擷另類投資之美，揉合多元收益與多重保護。投資完美蛻變，破繭而出！\n')"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'mobilemenu',
	props: {
		pagesOffsetTop: Array,
	},
	data() {
		return {
			items: ['首頁', '360投資術', '另類投資小學堂', '投資策略', '團隊智慧', '基金小檔案', '回官網'],
		};
	},
	methods: {
		menuClick: function(index) {
			if(index === 6) {
				window.open('https://www.aberdeenstandard.com.tw');
			} else {
				this.scrollToY(this.$props.pagesOffsetTop[index], 1000);
			}
			this.$emit('toggleMenu');
		},
		scrollToY: function(_scrollTargetY, _speed, _easing) {
			// scrollTargetY: the target scrollY property of the window
			// speed: time in pixels per second
			// easing: easing equation to use
			let scrollY = window.scrollY || document.documentElement.scrollTop,
				scrollTargetY = _scrollTargetY || 0,
				speed = _speed || 2000,
				easing = _easing || 'easeOutSine',
				currentTime = 0;

			// min time .1, max time .8 seconds
			let time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
			// easing equations from https://github.com/danro/easing-js/blob/master/easing.js
			let easingEquations = {
					easeOutSine: function(pos) {
						return Math.sin(pos * (Math.PI / 2));
					},
					easeInOutSine: function(pos) {
						return (-0.5 * (Math.cos(Math.PI * pos) - 1));
					},
					easeInOutQuint: function(pos) {
						if ((pos /= 0.5) < 1) {
							return 0.5 * Math.pow(pos, 5);
						}
						return 0.5 * (Math.pow((pos - 2), 5) + 2);
					}
				};
			// add animation loop
			function tick() {
				currentTime += 1 / 60;
				let p = currentTime / time;
				let t = easingEquations[easing](p);
				if (p < 1) {
					requestAnimationFrame(tick);
					window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
				} else {
					window.scrollTo(0, scrollTargetY);
				}
			}
			// call it once to get started
			tick();
		},
		fbShare: function(url) {
			window.open(`http://www.facebook.com/sharer.php?u=${url}`);
			return;
		},
		lineShare: function(url, text) {
			window.open(`http://line.naver.jp/R/msg/text/?${encodeURIComponent(text)+url}`);
			return;
		},
	}
};
</script>

<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.mobilemenu_wrap {
		position: fixed;
		top: 130px;
		width: 100%;
		background-color: #fff;
		z-index: 4;
	}
	.item_wrap {
		position: relative;
		height: calc(100vh - 130px);
		overflow: auto;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			width: 100%;
			height: 8px;
			background: linear-gradient(to right, #1a9ce2 , #002664);
		}
		ul {
			padding: 18px 0 16px 30px;
			border-bottom: 2px solid #dfdfdf;
		}
		li {
			line-height: 2.6;
			font-size: 36px;
			font-weight: bold;
			color: #141e50;
			cursor: pointer;
			&:before {
				content: '';
				position: relative;
				top: -2px;
				display: inline-block;
				width: 0;
				height: 0;
				margin-right: 26px;
				border-style: solid;
				border-width: 9.5px 0 9.5px 16px;
				border-color: transparent transparent transparent #101c50;
			}
		}
		.share_wrap { margin: 30px 0 30px 72px; }
		.icon {
			display: inline-block;
			width: 79px;
			height: 79px;
			margin-right: 42px;
			background-image: url(./../assets/img/share.png);
			background-repeat: no-repeat;
			background-size: 198px 99px;
			&.fb { background-position: -10px -10px; }
			&.line { background-position: -109px -10px; }
		}
	}

	@media screen and(max-width: $mobileSize2) {
		.mobilemenu_wrap { top: 130/750*100+vw; }
		.item_wrap {
			height: calc(100vh - #{130/750*100+vw});
			&:before { height: 8/750*100+vw; }
			ul {
				padding: 18/750*100+vw 0 16/750*100+vw 30/750*100+vw;
				border-bottom: 2/750*100+vw solid #dfdfdf;
			}
			li {
				font-size: 36/750*100+vw;
				&:before {
					top: -2/750*100+vw;
					margin-right: 26/750*100+vw;
					border-width: 9.5/750*100+vw 0 9.5/750*100+vw 16/750*100+vw;
				}
			}
			.share_wrap { margin: 30/750*100+vw 0 30/750*100+vw 72/750*100+vw; }
			.icon {
				width: 79/750*100+vw;
				height: 79/750*100+vw;
				margin-right: 42/750*100+vw;
				background-size: 198/750*100+vw 99/750*100+vw;
				&.fb { background-position: #{-10/750*100+vw} #{-10/750*100+vw}; }
				&.line { background-position: #{-109/750*100+vw} #{-10/750*100+vw}; }
			}
		}
	}
</style>
