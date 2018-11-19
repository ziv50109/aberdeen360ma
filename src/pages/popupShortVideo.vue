<template>
	<div class="wrap">
		<div class="video_box">
			<youtube class="video"
				:video-id="videoId"
				player-width="100%"
				player-height="100%"
				:player-vars="{autoplay: 1, rel: 0}">
			</youtube>
			<div class="vudeo-close" @click="closeVideo()"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'popupShortVideo',
		data() {
			return {
				videoId: 'k1CxKmwu0Xg',
			};
		},
		methods: {
			closeVideo: function() {
				this.$emit('closePopup');
				setTimeout(()=> {
					this.videoId = '';
				}, 100);
			},
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.video_box {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: #000;
		.video {
			position: relative;
			height: 100%;
			z-index: 1;
		}
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

	@media screen and (max-width: $mobileSize2) {
		.vudeo-close {
			top: 66/750*100+vw;
			right: 40/750*100+vw;
			width: 46*2/750*100+vw;
			height: 46*2/750*100+vw;
			z-index: 7;
			&:before, &:after {
				top: 21*2/750*100+vw;
				right: 9*2/750*100+vw;
				width: 28*2/750*100+vw;
				height: 4*2/750*100+vw;
			}
		}
	}
</style>
