<template>
	<div>
		<p class="title">
			<svg class="icon" viewBox="0 0 175.031 132">
				<g>
					<polygon fill="#ffa300" stroke="#ffa300" stroke-width="5.2969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="87.516,95.331 2.648,48.998 87.516,2.664 172.383,48.998"/>
					<path transform="translate(60,25) scale(2)" fill="none" stroke="#fff" stroke-width="1.657" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M11.231 5.193c3.126-1.852 7.126-.752 8.931 2.454 1.806 3.208.733 7.308-2.393 9.16-3.127 1.852-7.127.754-8.932-2.454-1.805-3.208-.733-7.309 2.394-9.16zM12.362 7.518l2.94 1.741L18.242 11l-2.939 1.742-2.941 1.74V11zM2.351.839H26.65c.842 0 1.532.709 1.532 1.571v17.18c0 .862-.691 1.571-1.532 1.571H2.351c-.841 0-1.533-.707-1.533-1.571V2.411c0-.864.689-1.572 1.533-1.572z"/>
				</g>
				<polyline fill="none" stroke="#ffa300" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="161.168,60.809 172.384,67.108 87.517,113.441 2.648,67.108 13.102,61.236"/>
				<polyline fill="none" stroke="#ffa300" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="160.76,78.471 172.384,85 87.516,131.335 2.648,85 13.102,79.129"/>
			</svg>多重資產魅力
		</p>
		<p class="text">「想真正獲益於多重資產投資，就應打破僅在股債進行多元分散的傳統，踏入非傳統性資產的領域…建構一系列低相關性資產類別的多元分散投資組合，能為市場的不確定性建立天然的下檔風險保護…」</p>
		<div class="video_wrap">
			<div class="video-img" @click="palyVideo()" v-show="videoImgShow"></div>
			<div class="video_box">
				<youtube class="video"
					v-if="!videoImgShow"
					:video-id="videoId"
					player-width="100%"
					player-height="100%"
					:player-vars="{autoplay: 1, rel: 0}">
				</youtube>
			</div>
			<div class="video-info">
				<p>安本標準投資管理</p>
				<p>亞太區多重資產投資主管</p>
				<p>吳麗如 (Irene Goh)</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'page1_popup4',
		data() {
			return {
				videoId: 'R9KUuFAcd3o',
				videoImgShow: true,
			};
		},
		mounted() {

		},
		methods: {
			palyVideo: function() {
				this.videoImgShow = false;
			},
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";
	@import "./../assets/scss/page1_com";

	.video_wrap {
		position: relative;
		width: 423px;
		height: 239px;
		margin: 45px auto 0;
	}
	.video-img {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(./../assets/img/p1-video.jpg);
		background-repeat: no-repeat;
		background-size: contain;
		cursor: pointer;
	}
	.video, .video_box {
		height: 100%;
		background-color: #000;
	}
	.video-info {
		font-size: 16px;
		font-weight: bold;
		p {
			width: auto;
			text-align: right;
			color: #2592d1;
		}
		p:nth-child(1) { color: #1c3976; }
	}

	@media screen and (max-width: $mobileSize) {
		.video_wrap {
			width: 688px;
			height: 388px;
			margin: 40px auto 0;
		}
		.video-info {
			margin-bottom: 60px;
			p {
				max-width: 100%;
				font-size: 26px;
			}
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.video_wrap {
			width: 100%;
			height: 338/750*100+vw;
			margin: 40/750*100+vw auto 0;
		}
		.video-info {
			margin-bottom: 60/750*100+vw;
			p { font-size: 26/750*100+vw; }
		}
	}
</style>
