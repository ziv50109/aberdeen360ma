<template>
	<div class="wrap">
		<h4>多重資產健檢</h4>
		<div class="chart_Wrap">
			<div class="block_wrap">
				<div class="block_box block_box1">
					<div class="blocks">
						<div class="block color3"><p>REITs</p></div>
						<div class="block color4"><p>債券</p></div>
						<div class="block color5"><p>股票</p></div>
					</div>
					<p class="text t1">傳統多重資產</p>
				</div>
				<div class="block_box block_box2">
					<div class="blocks">
						<div class="block color2"><p>匯率/選擇權操作</p></div>
						<div class="block color3"><p>REITs</p></div>
						<div class="block color4"><p>債券</p></div>
						<div class="block color5"><p>股票</p></div>
					</div>
					<p class="text t2">改良多重資產</p>
				</div>
				<div class="block_box block_box3">
					<div class="blocks">
						<div class="block color1"><p class="nRow">另類投資<br>(Alternatives)</p></div>
						<div class="block color2"><p>匯率/選擇權操作</p></div>
						<div class="block color3"><p>REITs</p></div>
						<div class="block color4"><p>債券</p></div>
						<div class="block color5"><p>股票</p></div>
					</div>
					<p class="text t3">360多重資產</p>
				</div>
			</div>
			<div class="axis_wrap">
				<div class="x-axis"></div>
				<div class="y-axis"></div>
			</div>
			<div class="text_wrap">
				<span>多</span>
				<span class="center">涵蓋<br class="desktop">資產類別</span>
				<span>少</span>
			</div>
		</div>
		<div class="info_wrap">
			<p>傳統型多重資產只專注股債等資產類別，且高度仰賴經理人的選時決策來提升表現。安本標準投信的360多重資產收益策略納入了其他常見策略並未涵蓋的另類投資，透過其收益穩定的特性，使投組產出較佳的報酬與較強的抵禦力。</p>
			<p>另類投資範疇十分廣，需投入大量研究資源才能徹底了解每個另類投資標的。安本標準投資管理具備這樣的利基型投資能力，為你提供一個相對簡單的投資管道!</p>
		</div>
		<p class="info-title">面對經濟情勢的不確定性，你的多重資產夠健康嗎?</p>
	</div>
</template>
<script>
	export default {
		name: 'popupMultipleAssets',
		data() {
			return {

			};
		},
		methods: {

		}
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.wrap {
		text-align: center;
		padding: 40px;
	}
	h4 {
		margin-bottom: 40px;
		font-size: 36px;
		font-weight: bold;
		color: #00a2e4;
	}
	.chart_Wrap {
		position: relative;
		display: inline-block;
		padding-top: 50px;
	}
	.block_wrap { margin-left: 102px; }
	.block_box {
		position: relative;
		display: inline-block;
		&1 { z-index: 3; }
		&2 { z-index: 2; }
		&3 { z-index: 1; }
	}
	.blocks { margin-bottom: 9px; }
	.text {
		position: relative;
		text-align: center;
		display: inline-block;
		width: 220px;
		line-height: 25px;
		font-size: 15px;
		color: #fff;
		background-color: #141E50;
		&:before, &:after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 12.5px 0 12.5px 7px;
		}
		&:before {
			left: 0;
			border-color: transparent transparent transparent #ffffff;
		}
		&:after {
			right: -7px;
			border-color: transparent transparent transparent #141E50;
		}
	}
	.block {
		position: relative;
		text-align: center;
		width: 190px;
		margin: 0 auto;
		font-size: 15px;
		color: #fff;
		&.color1 { background-color: #ffa300; }
		&.color2 { background-color: #008495; }
		&.color3 { background-color: #1a9ce3; }
		&.color4 { background-color: #8a8c8e; }
		&.color5 { background-color: #0065a4; }
		p {
			line-height: 1.8;
			&.nRow {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 106px;
				line-height: 1.2;
			}
		}
	}
	.axis_wrap {
		margin-left: 46px;
		.x-axis {
			position: absolute;
			bottom: 32px;
			width: 730px;
			height: 2px;
			background-color: #999;
		}
		.y-axis {
			position: absolute;
			bottom: 35px;
			left: 76px;
			width: 11px;
			height: 202px;
			background-color: #ddd;
			&:before {
				content: '';
				position: absolute;
				top: -10px;
				left: -5px;
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 0 11.5px 11px 11.5px;
				border-color: transparent transparent #dddddd transparent;
			}
		}
	}
	.text_wrap {
		position: absolute;
		bottom: 40px;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-between;
		height: 208px;
		span {
			text-align: center;
			font-size: 16px;
			color: #444;
		}
		.center {
			display: block;
			font-weight: bold;
			color: #141e50;
		}
	}
	.info_wrap {
		text-align: left;
		max-width: 844px;
		width: 100%;
		line-height: 1.4;
		margin: 32px auto 0;
		font-size: 16px;
		color: #444;
		p {
			margin-bottom: 10px;
		}
	}
	.info-title {
		margin-top: 34px;
		font-size: 18px;
		font-weight: bold;
		color: #1a9ce3;
	}
	.block_box {
		opacity: 0;
		animation-name: opacity;
		animation-duration: 2.4s;
		animation-fill-mode: forwards;
	}
	.block_box1 { animation-delay: 0s; }
	.block_box2 { animation-delay: .2s; }
	.block_box3 { animation-delay: .3s; }

	@keyframes opacity {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	@media screen and (max-width: $mobileSize) {
		.wrap { padding: 40px; }
		h4 {
			margin-bottom: 40px;
			font-size: 36px;
		}
		.chart_Wrap { padding-top: 50px; }
		.block_wrap { margin-left: 102px; }
		.blocks { margin-bottom: 9px; }
		.text {
			width: 220px;
			line-height: 25px;
			font-size: 15px;
			&:before, &:after { border-width: 12.5px 0 12.5px 7px; }
			&:after { right: -7px; }
		}
		.block {
			width: 190px;
			font-size: 15px;
			p.nRow { height: 106px; }
		}
		.axis_wrap {
			margin-left: 46px;
			.x-axis {
				bottom: 32px;
				width: 730px;
				height: 2px;
			}
			.y-axis {
				bottom: 35px;
				left: 76px;
				width: 11px;
				height: 202px;
				&:before {
					top: -10px;
					left: -5px;
					border-width: 0 11.5px 11px 11.5px;
				}
			}
		}
		.text_wrap {
			bottom: 40px;
			height: 208px;
			span { font-size: 16px; }
		}
		.info_wrap {
			max-width: 844px;
			margin: 32px auto 0;
			font-size: 16px;
			p { margin-bottom: 10px; }
		}
		.info-title {
			margin-top: 34px;
			font-size: 18px;
		}
	}

	@media screen and (max-width: 768px) {
		.chart_Wrap {
			width: 130%;
			margin-left: -16%;
			transform: scale(.8);
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.wrap { padding: 120/750*100+vw 0; }
		h4 {
			margin-bottom: 40/750*100+vw;
			font-size: 54/750*100+vw;
		}
		br.desktop { display: none; }
		.chart_Wrap {
			width: 100%;
			margin-left: 0;
			padding-top: 0;
			transform: scale(1);
		}
		.block_wrap { margin-left: 74/750*100+vw; }
		.blocks { margin-bottom: 13/750*100+vw; }
		.text {
			width: 206/750*100+vw;
			line-height: 37/750*100+vw;
			font-size: 22/750*100+vw;
			&:before, &:after { border-width: 19/750*100+vw 0 19/750*100+vw 11/750*100+vw; }
			&:after { right: -11/750*100+vw; }
		}
		.block {
			width: 195/750*100+vw;
			font-size: 22/750*100+vw;
			p.nRow { height: 158/750*100+vw; }
		}
		.axis_wrap {
			margin-left: 30/750*100+vw;
			.x-axis {
				bottom: 47/750*100+vw;
				width: 710/750*100+vw;
				height: 3/750*100+vw;
			}
			.y-axis {
				bottom: 50/750*100+vw;
				left: 76/750*100+vw;
				width: 17/750*100+vw;
				height: 304/750*100+vw;
				&:before {
					top: -16/750*100+vw;
					left: -9/750*100+vw;
					border-width: 0 17.5/750*100+vw 16/750*100+vw 17.5/750*100+vw;
				}
			}
		}
		.text_wrap {
			bottom: 56/750*100+vw;
			height: 310/750*100+vw;
			margin-left: 38/750*100+vw;
			span { font-size: 24/750*100+vw; }
			.center { writing-mode: vertical-lr; }
		}
		.info_wrap {
			margin: 32/750*100+vw auto 0;
			padding: 0 30/750*100+vw;
			font-size: 30/750*100+vw;
			p { margin-bottom: 10/750*100+vw; }
		}
		.info-title {
			margin-top: 20/750*100+vw;
			font-size: 30/750*100+vw;
		}
	}
</style>
