<template>
	<div class="wrap">
		<h4>投資小叮嚀</h4>
		<div class="video_wrap">
			<div class="item_wrap">
				<ul class="slider" :style="`transform: translate3d(${nowIndex*-itemWidth}px,0,0);`">
					<li v-for="(item, index) in videos.length"
						:class="`item item${index}`"
						:key="index"
						@click="playVideo(index)">
						<div class="icon">
							<p>{{ videosText[index] }}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="dot_wrap">
				<div v-for="(dot, index) in videos.length"
					:class="`dot dot${index} ${nowIndex === index ? 'on' : ''}`"
					:key="index"
					@click="nowIndex = index">
				</div>
			</div>
			<div class="ctr ctr-l" v-show="nowIndex > 0" @click="nowIndex -= 1"><div class="ctr_icon"></div></div>
			<div class="ctr ctr-r" v-show="nowIndex < maxIndex" @click="nowIndex += 1"><div class="ctr_icon"></div></div>
			<transition name="opacity">
				<div class="video_box" v-show="isPlayVideo">
					<youtube class="video"
						:video-id="chooseVideoId"
						player-width="100%"
						player-height="100%"
						:player-vars="{autoplay: 1, rel: 0}">
					</youtube>
					<div class="vudeo-close" @click="closeVideo()"></div>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>


	export default {
		name: 'popupVideos',
		data() {
			return {
				nowIndex: 0,
				maxIndex: 3,
				videos: ['ZEn2cy0aPNg', '9YBr7Ctu-6c', '6msDgFqw3HM', '7yuJ1DsQ4F4', 'a2pFvICm9OU', '45ORQ1JCWgY', 'dbMj_whzPYo'],
				videosText: [
					'不受市場誘惑，能安穩度過市場波動的策略，才是長遠之計',
					'有紀律且縝密的過濾市場雜音，才是下投資決定的關鍵',
					'當大家一窩蜂的投資同一資產時，先停下來想想',
					'勤奮研究了解投資標的是投資的不二法門',
					'在投資組合中納入不同資產，有助於度過市場恐慌時期',
					'直接複製基準指標通常是出於害怕，應投資具潛力的明日之星',
					'過度的自信、忽略警訊，都可能帶來致命的傷害',
				],
				chooseVideoId: undefined,
				popupPlayer: undefined,
				isPlayVideo: false,
				itemWidth: 0,
				player: {},
			};
		},
		mounted() {
			this.init();
			window.addEventListener('resize', this.init);
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.init);
		},
		methods: {
			init: function() {
				this.itemWidth = document.querySelector('.item0').clientWidth;
				if(window.innerWidth > 1024) {
					this.maxIndex = 3;
				} else {
					this.maxIndex = this.videos.length - 1;
				}

			},
			playVideo: function(index) {
				this.chooseVideoId = this.videos[index];
				this.isPlayVideo = true;
			},
			closeVideo: function() {
				this.isPlayVideo = false;
				setTimeout(()=> {
					this.chooseVideoId = '';
				}, 100);
			},
		},
		components: {
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.wrap {
		text-align: center;
		padding: 35px 35px 56px;
	}
	h4 {
		margin-bottom: 40px;
		font-size: 36px;
		font-weight: bold;
		color: #00a2e4;
	}
	.video_wrap {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.item_wrap {
		width: 1124px;
		margin: 0 auto;
		overflow: hidden;
	}
	.slider {
		display: flex;
		transition: transform .4s;
	}
	.item {
		padding: 0 10px;
		.icon {
			display: flex;
			align-items: flex-end;
			text-align: left;
			width: 261px;
			height: 266px;
			border: 1px solid #E9E9E9;
			background-image: url(./../assets/img/p-videos.png);
			background-repeat: no-repeat;
			background-size: 715%;
			cursor: pointer;
		}
		p {
			display: flex;
			align-items: center;
			height: 70px;
			line-height: 1.6;
			padding: 0 16px;
			font-size: 16px;
			color: #fff;
		}
	}
	.item0 .icon { background-position-x: -3px; }
	.item1 .icon { background-position-x: -267px; }
	.item2 .icon { background-position-x: -532px; }
	.item3 .icon { background-position-x: -796px; }
	.item4 .icon { background-position-x: -1060px; }
	.item5 .icon { background-position-x: -1325px; }
	.item6 .icon { background-position-x: -1589px; }

	.dot_wrap {
		display: none;
		justify-content: center;
		.dot {
			width: 30px;
			height: 30px;
			margin: 0 6px;
			background-color: #E4E4E4;
			border-radius: 100%;
			cursor: pointer;
			&.on { background-color: #2592D1; }
		}
	}
	.ctr {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 0 20px;
		cursor: pointer;
		.ctr_icon {
			width: 23px;
			height: 37px;
			background-image: url(./../assets/img/p-videos-ctr.png);
			background-size: cover;
		}
		&.ctr-l {
			left: 0;
		}
		&.ctr-r {
			right: 0;
			.ctr_icon { transform: rotate(180deg); }
		}
	}
	.video_box {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		.video {
			position: relative;
			height: 100%;
			z-index: 1;
		}
	}
	.opacity {
		&-enter-to, &-leave { opacity: 1; }
		&-enter, &-leave-to { opacity: 0; }
		&-enter-active, &-leave-active { transition: opacity .3s; }
	}
	.vudeo-close {
		position: absolute;
		top: -22px;
		right: -20px;
		width: 46px;
		height: 46px;
		border-radius: 100%;
		background-color: #39a4cd;
		cursor: pointer;
		z-index: 3;
		&:before, &:after {
			content: '';
			position: absolute;
			top: 21px;
			right: 9px;
			width: 28px;
			height: 4px;
			background-color: #fff;
			transform: rotate(-45deg);
		}
		&:after {
			transform: rotate(45deg);
		}
	}

	@media screen and (max-width: 1330px) and (min-width: $mobileSize) {
		.item_wrap { width: 1144/1330*100+vw; }
		.item .icon {
			width: 261/1330*100+vw;
			height: 266/1330*100+vw;
		}
		.item0 .icon { background-position-x: #{-3/1330*100+vw;} }
		.item1 .icon { background-position-x: #{-267/1330*100+vw;} }
		.item2 .icon { background-position-x: #{-532/1330*100+vw;} }
		.item3 .icon { background-position-x: #{-796/1330*100+vw;} }
		.item4 .icon { background-position-x: #{-1060/1330*100+vw;} }
		.item5 .icon { background-position-x: #{-1325/1330*100+vw;} }
		.item6 .icon { background-position-x: #{-1589/1330*100+vw;} }
		.ctr {
			padding: 0 10px;
		}
	}

	@media screen and (max-width: $mobileSize) {
		h4 {
			font-size: 54px;
		}
		.item_wrap {
			width: 488px;
			height: 478px;
			margin: 74px auto 22px;
		}
		.item {
			.icon {
				width: 469px;
				height: 478px;
				background-size: 3353px 488px;
				background-position-y: -5px;
			}
			p {
				height: 126px;
				padding: 0 28px;
				font-size: 28px;
			}
		}
		.item0 .icon { background-position-x: -5px; }
		.item1 .icon { background-position-x: -484px; }
		.item2 .icon { background-position-x: -963px; }
		.item3 .icon { background-position-x: -1442px; }
		.item4 .icon { background-position-x: -1921px; }
		.item5 .icon { background-position-x: -2400px; }
		.item6 .icon { background-position-x: -2879px; }
		.ctr {
			padding: 0 20px;
			.ctr_icon {
				width: 23px;
				height: 65px;
				margin-top: -40px;
				background-position-y: -40px;
			}
		}
		.dot_wrap {
			display: flex;
			.dot {
				width: 30px;
				height: 30px;
				margin: 0 6px;
			}
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.wrap {
			padding: 120/750*100+vw 0;
		}
		h4 {
			margin-bottom: 40/750*100+vw;
			font-size: 54/750*100+vw;
		}
		.item_wrap {
			width: 498/750*100+vw;
			height: 478/750*100+vw;
			margin: 74/750*100+vw auto;
		}
		.item {
			.icon {
				width: 469/750*100+vw;
				height: 478/750*100+vw;
				background-size: 3353/750*100+vw 488/750*100+vw;
				background-position-y: -5/750*100+vw;
			}
			p {
				height: 126/750*100+vw;
				padding: 0 28/750*100+vw;
				font-size: 28/750*100+vw;
			}
		}
		.item0 .icon { background-position-x: -5/750*100+vw; }
		.item1 .icon { background-position-x: -484/750*100+vw; }
		.item2 .icon { background-position-x: -963/750*100+vw; }
		.item3 .icon { background-position-x: -1442/750*100+vw; }
		.item4 .icon { background-position-x: -1921/750*100+vw; }
		.item5 .icon { background-position-x: -2400/750*100+vw; }
		.item6 .icon { background-position-x: -2879/750*100+vw; }
		.ctr {
			padding: 0 20/750*100+vw;
			.ctr_icon {
				width: 23/750*100+vw;
				height: 64/750*100+vw;
				margin-top: -40/750*100+vw;
				background-position-y: -40/750*100+vw;
			}
		}
		.dot_wrap .dot {
			width: 30/750*100+vw;
			height: 30/750*100+vw;
			margin: 0 6/750*100+vw;
		}
		.vudeo-close {
			top: 120/750*100+vw;
			right: 40/750*100+vw;
			width: 46*1.4/750*100+vw;
			height: 46*1.4/750*100+vw;
			z-index: 7;
			&:before, &:after {
				top: 21*1.4/750*100+vw;
				right: 9*1.4/750*100+vw;
				width: 28*1.4/750*100+vw;
				height: 4*1.4/750*100+vw;
			}
		}
	}
</style>
