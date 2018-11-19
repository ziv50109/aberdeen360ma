<template>
	<div>
		<div :class="`butterfly ${bclass[bstyle]}`">
			<div class="wrap">
				<div class="wing right"></div>
				<div class="wing left"></div>
				<div class="body"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'kvButterflySmall',
		props: {
			bstyle: {
				type: Number,
				default: 0,
			}
		},
		data() {
			return {
				bclass: ['kv-1_b', 'kv-1_r', 'kv-2_o', 'kv-2_r', 'kv-2_y', 'kv-3_b', 'kv-3_y'],
			};
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	$perspective: 1200px;
	$perspective-ie: 1600px;
	$perspective-origin: 100% -300%;

	.butterfly {
		position: absolute;
		left: 0;
		bottom: 0;
		opacity: 0;
		display: inline-block;
		animation-fill-mode: forwards;
		.wrap {
			perspective: $perspective;
			perspective-origin: $perspective-origin;
			transform-style: preserve-3d;
			position: relative;
		}
		.body {
			position: relative;
			margin: 0 auto;
			background-repeat: no-repeat;
			background-size: 100%;
		}
		.wing {
			position: absolute;
			background-repeat: no-repeat;
			transform-origin: center left;
			background-size: 100%;
			&.right {
				transform: rotateY(-30deg);
				transform: perspective($perspective-ie) rotateY(-30deg)\0;
				animation: left-wing 1.34s infinite;
			}
			&.left {
				transform: rotateY(-150deg);
				transform: perspective($perspective-ie) rotateY(-150deg)\0;
				animation: right-wing 1.34s infinite;
			}
		}
	}
	@keyframes left-wing {
		0% {
			transform: rotateY(-150deg);
			transform: perspective($perspective-ie) rotateY(-150deg)\0;
		}
		56% {
			transform: rotateY(-246deg);
			transform: perspective($perspective-ie) rotateY(-246deg)\0;
		}
		100% {
			transform: rotateY(-150deg);
			transform: perspective($perspective-ie) rotateY(-150deg)\0;
		}
	}
	@keyframes right-wing {
		0% {
			transform: rotateY(-30deg);
			transform: perspective($perspective-ie) rotateY(-30deg)\0;
		}
		56% {
			transform: rotateY(70deg);
			transform: perspective($perspective-ie) rotateY(70deg)\0;
		}
		100% {
			transform: rotateY(-30deg);
			transform: perspective($perspective-ie) rotateY(-30deg)\0;
		}
	}

	.butterfly .body, .butterfly .wing {
		background-image: url(./../assets/img/kv_butterfly.png);
		background-size: 251px 194px;
	}
	@keyframes sb-s9 {
		0% {
			opacity: 0;
			transform: scale(1);
		}
		50% {
			transform: scale(1);
		}
		60% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			transform: scale(.86);
		}
	}
	@keyframes sb-s52 {
		0% {
			opacity: 0;
			transform: scale(1);
		}
		50% {
			transform: scale(1);
		}
		60% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			transform: scale(.45);
		}
	}
	@keyframes sb-s5 {
		0% {
			opacity: 0;
			transform: scale(1);
		}
		50% {
			transform: scale(1);
		}
		70% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			transform: scale(.435);
		}
	}
	@keyframes sb-s39 {
		0% {
			opacity: 0;
			transform: scale(1);
		}
		50% {
			transform: scale(1);
		}
		70% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			transform: scale(.34);
		}
	}

	$kv-1_b-wrap-time: 1.17s;
	$kv-1_r-wrap-time: 1s;
	$kv-2_o-wrap-time: .9s;
	$kv-2_r-wrap-time: 1.1s;
	$kv-2_y-wrap-time: .8s;
	$kv-3_b-wrap-time: .9s;
	$kv-3_y-wrap-time: 1.1s;

	$wrap1-delay: 50ms;
	$wrap2-delay: 500ms;
	$wrap3-delay: 950ms;
	.butterfly.kv-1_b {
		animation-delay: $wrap1-delay;
		animation-name: sb-s5;
		animation-duration: 3s;
		.wrap {
			left: 0;
			top: 0;
			width: 104px;
			height: 88px;
		}
		.body {
			width: 30px;
			height: 54px;
			background-position: -211px -10px;
		}
		.wing {
			width: 46px;
			height: 99px;
			background-position: -10px -10px;
			animation-delay: $wrap1-delay;
			animation-iteration-count: 3;
			animation-duration: $kv-1_b-wrap-time;
			&.left {
				top: -12px;
				right: 10px;
				animation-name: left-wing;
			}
			&.right {
				top: -10px;
				right: 4px;
				animation-name: right-wing;
			}
		}
	}
	.butterfly.kv-1_r {
		animation-delay: $wrap1-delay;
		animation-name: sb-s39;
		animation-duration: 2.5s;
		.wrap {
			left: 0;
			top: 0;
			width: 110px;
			height: 74px;
		}
		.body {
			width: 36px;
			height: 55px;
			background-position: -10px -129px;
		}
		.wing {
			width: 47px;
			height: 74px;
			background-position: -76px -10px;
			animation-delay: $wrap1-delay;
			animation-iteration-count: 3;
			animation-duration: $kv-1_r-wrap-time;
			&.left {
				top: -2px;
				right: 10px;
				animation-name: left-wing;
			}
			&.right {
				top: -2px;
				right: 6px;
				animation-name: right-wing;
			}
		}
	}
	.butterfly.kv-2_o {
		animation-delay: $wrap2-delay;
		animation-name: sb-s5;
		animation-duration: 2.2s;
		.wrap {
			left: 0;
			top: 0;
			width: 80px;
			height: 40px;
		}
		.body {
			width: 11px;
			height: 31px;
			background-position: -170px -129px;
		}
		.wing {
			width: 32px;
			height: 47px;
			background-position: -118px -129px;
			animation-delay: $wrap2-delay;
			animation-iteration-count: 3;
			animation-duration: $kv-2_o-wrap-time;
			&.left {
				top: -10px;
				right: 8px;
				animation-name: left-wing;
			}
			&.right {
				top: -10px;
				right: 7px;
				animation-name: right-wing;
			}
		}
	}
	.butterfly.kv-2_r {
		animation-delay: $wrap2-delay;
		animation-name: sb-s52;
		animation-duration: 1.8s;
		.wrap {
			left: 0;
			top: 0;
			width: 110px;
			height: 60px;
		}
		.body {
			width: 21px;
			height: 47px;
			background-position: -211px -84px;
		}
		.wing {
			width: 48px;
			height: 66px;
			background-position: -143px -10px;
			animation-delay: $wrap2-delay;
			animation-iteration-count: 2;
			animation-duration: $kv-2_r-wrap-time;
			&.left {
				top: -10px;
				right: 8px;
				animation-name: left-wing;
			}
			&.right {
				top: -10px;
				right: 6px;
				animation-name: right-wing;
			}
		}
	}
	.butterfly.kv-2_y {
		animation-delay: $wrap2-delay;
		animation-name: sb-s52;
		animation-duration: 3s;
		.wrap {
			left: 0;
			top: 0;
			width: 78px;
			height: 46px;
		}
		.body {
			width: 18px;
			height: 33px;
			background-position: -211px -151px;
		}
		.wing {
			width: 32px;
			height: 53px;
			background-position: -66px -129px;
			animation-delay: $wrap2-delay;
			animation-iteration-count: 4;
			animation-duration: $kv-2_y-wrap-time;
			&.left {
				top: -10px;
				right: 7px;
				animation-name: left-wing;
			}
			&.right {
				top: -10px;
				right: 7px;
				animation-name: right-wing;
			}
		}
	}
	.butterfly.kv-3_b {
		animation-delay: $wrap3-delay;
		animation-name: sb-s52;
		animation-duration: 2.2s;
		.wrap {
			left: 0;
			top: 0;
			width: 104px;
			height: 88px;
		}
		.body {
			width: 30px;
			height: 54px;
			background-position: -211px -10px;
		}
		.wing {
			width: 46px;
			height: 99px;
			background-position: -10px -10px;
			animation-delay: $wrap3-delay;
			animation-iteration-count: 3;
			animation-duration: $kv-3_b-wrap-time;
			&.left {
				top: -12px;
				right: 10px;
				animation-name: left-wing;
			}
			&.right {
				top: -10px;
				right: 4px;
				animation-name: right-wing;
			}
		}
	}
	.butterfly.kv-3_y {
		animation-delay: $wrap3-delay;
		animation-name: sb-s9;
		animation-duration: 1.6s;
		.wrap {
			left: 0;
			top: 0;
			width: 78px;
			height: 46px;
		}
		.body {
			width: 18px;
			height: 33px;
			background-position: -211px -151px;
		}
		.wing {
			width: 32px;
			height: 53px;
			background-position: -66px -129px;
			animation-delay: $wrap3-delay;
			animation-iteration-count: 3;
			animation-duration: $kv-3_y-wrap-time;
			&.left {
				top: -10px;
				right: 7px;
				animation-name: left-wing;
			}
			&.right {
				top: -10px;
				right: 7px;
				animation-name: right-wing;
			}
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.butterfly .body, .butterfly .wing {
			background-size: 251/750*100+vw 194/750*100+vw;
		}
		.butterfly.kv-1_b {
			.wrap {
				width: 104/750*100+vw;
				height: 88/750*100+vw;
			}
			.body {
				width: 30/750*100+vw;
				height: 54/750*100+vw;
				background-position: #{-211/750*100+vw} #{-10/750*100+vw};
			}
			.wing {
				width: 46/750*100+vw;
				height: 99/750*100+vw;
				background-position: #{-10/750*100+vw} #{-10/750*100+vw};
				&.left {
					top: -12/750*100+vw;
					right: 10/750*100+vw;
				}
				&.right {
					top: -10/750*100+vw;
					right: 4/750*100+vw;
				}
			}
		}
		.butterfly.kv-1_r {
			.wrap {
				width: 110/750*100+vw;
				height: 74/750*100+vw;
			}
			.body {
				width: 36/750*100+vw;
				height: 55/750*100+vw;
				background-position: #{-10/750*100+vw} #{-129/750*100+vw};
			}
			.wing {
				width: 47/750*100+vw;
				height: 74/750*100+vw;
				background-position: #{-76/750*100+vw} #{-10/750*100+vw};
				&.left {
					top: -2/750*100+vw;
					right: 10/750*100+vw;
				}
				&.right {
					top: -2/750*100+vw;
					right: 6/750*100+vw;
				}
			}
		}
		.butterfly.kv-2_o {
			.wrap {
				width: 80/750*100+vw;
				height: 40/750*100+vw;
			}
			.body {
				width: 11/750*100+vw;
				height: 31/750*100+vw;
				background-position: #{-170/750*100+vw} #{-129/750*100+vw};
			}
			.wing {
				width: 32/750*100+vw;
				height: 47/750*100+vw;
				background-position: #{-118/750*100+vw} #{-129/750*100+vw};
				&.left {
					top: -10/750*100+vw;
					right: 8/750*100+vw;
				}
				&.right {
					top: -10/750*100+vw;
					right: 7/750*100+vw;
				}
			}
		}
		.butterfly.kv-2_r {
			.wrap {
				width: 110/750*100+vw;
				height: 60/750*100+vw;
			}
			.body {
				width: 21/750*100+vw;
				height: 47/750*100+vw;
				background-position: #{-211/750*100+vw} #{-84/750*100+vw};
			}
			.wing {
				width: 48/750*100+vw;
				height: 66/750*100+vw;
				background-position: #{-143/750*100+vw} #{-10/750*100+vw};
				&.left {
					top: -10/750*100+vw;
					right: 8/750*100+vw;
				}
				&.right {
					top: -10/750*100+vw;
					right: 6/750*100+vw;
				}
			}
		}
		.butterfly.kv-2_y {
			.wrap {
				width: 78/750*100+vw;
				height: 46/750*100+vw;
			}
			.body {
				width: 18/750*100+vw;
				height: 33/750*100+vw;
				background-position: #{-211/750*100+vw} #{-151/750*100+vw};
			}
			.wing {
				width: 32/750*100+vw;
				height: 53/750*100+vw;
				background-position: #{-66/750*100+vw} #{-129/750*100+vw};
				&.left {
					top: -10/750*100+vw;
					right: 7/750*100+vw;
				}
				&.right {
					top: -10/750*100+vw;
					right: 7/750*100+vw;
				}
			}
		}
		.butterfly.kv-3_b {
			.wrap {
				width: 104/750*100+vw;
				height: 88/750*100+vw;
			}
			.body {
				width: 30/750*100+vw;
				height: 54/750*100+vw;
				background-position: #{-211/750*100+vw} #{-10/750*100+vw};
			}
			.wing {
				width: 46/750*100+vw;
				height: 99/750*100+vw;
				background-position: #{-10/750*100+vw} #{-10/750*100+vw};
				&.left {
					top: -12/750*100+vw;
					right: 10/750*100+vw;
				}
				&.right {
					top: -10/750*100+vw;
					right: 4/750*100+vw;
				}
			}
		}
		.butterfly.kv-3_y {
			.wrap {
				width: 78/750*100+vw;
				height: 46/750*100+vw;
			}
			.body {
				width: 18/750*100+vw;
				height: 33/750*100+vw;
				background-position: #{-211/750*100+vw} #{-151/750*100+vw};
			}
			.wing {
				width: 32/750*100+vw;
				height: 53/750*100+vw;
				background-position: #{-66/750*100+vw} #{-129/750*100+vw};
				&.left {
					top: -10/750*100+vw;
					right: 7/750*100+vw;
				}
				&.right {
					top: -10/750*100+vw;
					right: 7/750*100+vw;
				}
			}
		}
	}
</style>
