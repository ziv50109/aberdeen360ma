<template>
	<div>
		<p class="title">
			<svg class="icon" viewBox="0 0 175.031 132">
				<g>
					<polygon fill="#f65275" stroke="#f65275" stroke-width="5.2969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="87.516,95.331 2.648,48.998 87.516,2.664 172.383,48.998"/>
					<path transform="translate(54,22) scale(1.9)" fill="none" stroke="#fff" stroke-width="1.699" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M13.351 22.218l-.735 2.785c-.132.503-.977.389-1.356.029l-6.153-5.823c-.381-.36-.54-1.212-.029-1.34l2.729-.898m3.015 2.543l-.059-.058-3.736-3.534c2.796-3.865 5.943-9.046 9.178-12.378 2.834-2.92 7.41-3.435 11.672-1.721l.041.017c1.97 4.208 1.572 8.746-1.227 11.629-3.234 3.332-8.341 6.656-12.133 9.58l-3.736-3.535zm9.379-18.301c2.366-.651 5.08-.434 7.677.61l.041.017c1.195 2.555 1.519 5.232.961 7.586l-8.679-8.213zm1.071 7.475a2.27 2.27 0 0 1 .07 3.236 2.339 2.339 0 0 1-3.278.069c-.924-.875-.955-2.324-.069-3.237s2.352-.942 3.277-.068zM7.058 15.909l5.194-7.471c-1.677-.318-3.43-1.065-5.031-.954-5.051.35-5.917 4.706-6.366 8.841l6.203-.416zm7.513 7.109l7.339-5.441c.393 1.641 1.223 3.339 1.179 4.922-.141 4.999-4.511 6.037-8.676 6.657l.158-6.138z"/>
				</g>
					<polyline fill="none" stroke="#f65275" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="161.168,60.809 172.384,67.108 87.517,113.441 2.648,67.108 13.102,61.236"/>
					<polyline fill="none" stroke="#f65275" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="160.76,78.471 172.384,85 87.516,131.335 2.648,85 13.102,79.129"/>
			</svg>收益升級
		</p>
		<p class="text">股市估值水漲船高，債券利差緊縮，傳統資產的收益水準已經越來越難以滿足投資需求，另類投資相較於傳統資產能提供更具吸引力的6-7%高息(詳下圖)，強化投組的收益水準！</p>
		<p class="chart-title">各類型收益資產目前收益水準比較(%)</p>
		<div class="chart_wrap">
			<div class="chart_box">
				<div class="chart c-axis"></div>
				<div class="c-wrap"><div class="chart c-chart"></div></div>
			</div>
			<p class="chart-info">資料來源：Bloomberg，截至2018/3/29，<span>債券類資產收益率為資料擷取當下之殖利率，其餘股票指數與另類投資實例皆為彭博預估之股息收益率。</span>各指數與標的之定義請詳網頁底部附註。</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'page1_popup1',
		data() {
			return {

			};
		},
		methods: {

		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";
	@import "./../assets/scss/page1_com";

	.chart-title { white-space: nowrap; }
	.chart_box {
		position: relative;
		max-width: 633px;
		width: 100%;
		height: 245px;
		margin: 0 auto 25px;
	}
	.chart {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-image: url(./../assets/img/p1-1-chart.png);
		background-size: 653px 530px;
		image-rendering: optimizequality;
		image-rendering: -webkit-optimize-contrast;
	}
	.c-axis {
		background-position: -10px -275px;
	}
	.c-wrap {
		position: relative;
		height: 92.5%;
		overflow: hidden;
	}
	.c-chart {
		animation-name: chartShow;
		animation-duration: 1.2s;
		background-position: -10px -10px;
	}
	.chart-info span {
		font-weight: bold;
		color: #f02e58;
	}
	@keyframes chartShow {
		0% { transform: translateY(80%); }
		100% { transform: translateY(0); }
	}
	@keyframes opacity {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	@media screen and (max-width: 1120px) and (min-width: $mobileSize) {
		.chart { background-size: 653*.94/1120*100+vw 530*.94/1120*100+vw; }
		.c-axis { background-position: #{-10*.94/1120*100+vw} #{-275*.94/1120*100+vw}; }
		.c-wrap { height: 226*.94/1120*100+vw; }
		.c-chart { background-position: #{-10*.94/1120*100+vw} #{-10*.94/1120*100+vw}; }
	}

	@media screen and (max-width: $mobileSize) {
		.chart_box {
			max-width: 100%;
			margin: 0 auto 24px;
		}
		.chart { background-size: 653px 530px; }
		.c-axis { background-position: -10px -275px; }
		.c-wrap { height: 226px; }
		.c-chart { background-position: -10px -10px; }
		p.chart-info {
			margin-bottom: 60px;
			font-size: 24px;
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.chart_box {
			max-width: 634/750*100+vw;
			height: 245/750*100+vw;
			margin: 0 auto 24/750*100+vw;
		}
		.chart { background-size: 653/750*100+vw 530/750*100+vw; }
		.c-axis { background-position: #{-10/750*100+vw} #{-275/750*100+vw}; }
		.c-wrap { height: 226/750*100+vw; }
		.c-chart { background-position: #{-10/750*100+vw} #{-10/750*100+vw}; }
		p.chart-info {
			margin-bottom: 60/750*100+vw;
			font-size: 24/750*100+vw;
		}
	}

	@media screen and (max-width: 375px) {
		.chart_box {
			margin: 40/750*100+vw auto 30/750*100+vw;
			transform: scale(1.08);
		}
	}
</style>
