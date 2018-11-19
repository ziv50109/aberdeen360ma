<template>
	<div>
		<div class="butterfly-big">
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
		name: 'kvButterfly',
		data() {
			return {

			};
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	$perspective: 1200px;
	$perspective-ie: 1600px;
	$perspective-origin: 100% -300%;
	$left-wing-size: 1;
	$wing-speed: 1.1s;
	$wing-animation-count: 6;
	.butterfly-big {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: rotateY(-180deg);
		z-index: 1;
		.body, .wing {
			background-image: url(./../assets/img/kv-butterfly.png);
			background-repeat: no-repeat;
			background-size: 486px 333px;
		}
		.wrap {
			perspective: $perspective;
			perspective-origin: $perspective-origin;
			transform-style: preserve-3d;
			position: absolute;
			bottom: 0;
			transform: rotate(34deg);
		}
		.body {
			position: relative;
			width: 206px;
			height: 74px;
			background-position: -10px -249px;
			z-index: 1;
		}
		.wing {
			position: absolute;
			top: -252%;
			left: -36%;
			width: 466px;
			height: 219px;
			background-position: -10px -10px;
			transform-origin: center bottom;
			&.right {
				transform: rotate(15deg) rotateX(0);
				transform: perspective($perspective-ie) rotate(15deg) rotateX(0)\0;
				animation: right $wing-speed $wing-animation-count;
				z-index: 2;
			}
			&.left {
				transform: rotate(15deg) rotateX(0deg) scale($left-wing-size);
				transform: perspective($perspective-ie) rotate(15deg) rotateX(0deg)\0;
				animation: left $wing-speed $wing-animation-count;
				z-index: 0;
			}
		}
	}
	@keyframes left {
		0% {
			filter: grayscale(.8);
			transform: rotate(15deg) rotateX(0) scale($left-wing-size);
			transform: perspective($perspective-ie) rotate(15deg) rotateX(0) scale($left-wing-size)\0;
		}
		35% {
			transform: rotate(15deg) rotateX(66deg) scale($left-wing-size);
			transform: perspective($perspective-ie) rotate(15deg) rotateX(66deg) scale($left-wing-size)\0;
		}
		48% {
			filter: grayscale(.2);
		}
		90% {
			filter: grayscale(.8);
		}
		100% {
			transform: rotate(15deg) rotateX(0) scale($left-wing-size);
			transform: perspective($perspective-ie) rotate(15deg) rotateX(0) scale($left-wing-size)\0;
		}
	}
	@keyframes right {
		0% {
			filter: grayscale(0);
			transform: rotate(15deg) rotateX(-10deg);
			transform: perspective($perspective-ie) rotate(15deg) rotateX(-10deg)\0;
		}
		35% {
			filter: grayscale(.7);
			transform: rotate(15deg) rotateX(-76deg);
			transform: perspective($perspective-ie) rotate(15deg) rotateX(-76deg)\0;
		}
		44% {
			filter: grayscale(.5);
		}
		100% {
			filter: grayscale(0);
			transform: rotate(15deg) rotateX(-10deg);
			transform: perspective($perspective-ie) rotate(15deg) rotateX(-10deg)\0;
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.butterfly-big {
			.body, .wing { background-size: 486/750*100+vw 333/750*100+vw; }
			.body {
				width: 206/750*100+vw;
				height: 74/750*100+vw;
				//background-size: 206/750*100+vw 74/750*100+vw;
				background-position: #{-10/750*100+vw} #{-249/750*100+vw};
			}
			.wing {
				width: 466/750*100+vw;
				height: 219/750*100+vw;
				background-position: #{-10/750*100+vw} #{-10/750*100+vw};
				//&.right, &.left { background-size: 466/750*100+vw 219/750*100+vw; }
			}
		}
	}
</style>
