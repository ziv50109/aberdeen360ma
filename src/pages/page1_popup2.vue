<template>
	<div>
		<p class="title">
			<svg class="icon" viewBox="0 0 175.031 132">
				<g>
					<polygon fill="#58a618" stroke="#58a618" stroke-width="5.2969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="87.516,95.331 2.648,48.998 87.516,2.664 172.383,48.998"/>
					<g transform="translate(60,22) scale(2.3)"><path fill="none" stroke="#fff" stroke-width="1.511" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M12 25.254C5.294 22.43.766 17.071.766 10.922c0-3.15.038-6.307.038-9.46C1.81 2.614 3.834 3.4 6.168 3.4 8.96 3.4 11.309 2.275 12 .745c.692 1.53 3.04 2.655 5.833 2.655 2.333 0 4.357-.786 5.363-1.938 0 3.154.038 6.311.038 9.46 0 6.149-4.528 11.508-11.234 14.332z"/><path fill="none" stroke="#fff" stroke-width="1.511" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M7.278 12.328l4.35 4.904 6.15-9.149"/></g>
				</g>
				<polyline fill="none" stroke="#58a618" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="161.168,60.809 172.384,67.108 87.517,113.441 2.648,67.108 13.102,61.236"/>
				<polyline fill="none" stroke="#58a618" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="160.76,78.471 172.384,85 87.516,131.335 2.648,85 13.102,79.129"/>
			</svg>保護升級
		</p>
		<p class="text">一般多重資產基金投資範圍以傳統股債市為主，股債的「相關性」較高，當股市下跌，往往債市也隨之修正，只靠股債能達到的風險分散效果相當有限。另類投資與股債市相關性低，當市場修正，另類投資受到的影響極小，能提供投資組合更全方位的保護！</p>
		<p class="chart-title">十年期相關係數矩陣分析</p>
		<div class="chart_wrap">
			<div class="chart_box">
				<div class="table_warp">
					<table>
						<tr>
							<th></th>
							<th>全球股票</th>
							<th>全球高收益債</th>
							<th>全球投資級債</th>
							<th class="color-blue">另類投資平均</th>
						</tr>
						<tr>
							<th>全球股票</th>
							<td class="bgc-red">1</td>
							<td class="bgc-pink">0.60</td>
							<td class="bgc-yellow">0.47</td>
							<td class="bgc-blue">0.16</td>
						</tr>
						<tr>
							<th>全球高收益債</th>
							<td class="bgc-pink">0.60</td>
							<td class="bgc-red">1</td>
							<td class="bgc-yellow">0.28</td>
							<td class="bgc-blue">0.11</td>
						</tr>
						<tr>
							<th>全球投資級債</th>
							<td class="bgc-yellow">0.47</td>
							<td class="bgc-yellow">0.28</td>
							<td class="bgc-red">1</td>
							<td class="bgc-blue">0.10</td>
						</tr>
						<tr>
							<th class="color-blue">另類投資平均</th>
							<td class="bgc-blue">0.16</td>
							<td class="bgc-blue">0.11</td>
							<td class="bgc-blue">0.10</td>
							<td class="bgc-red">1</td>
						</tr>
					</table>
					<div class="table-info">
						<div class="bgc-red">
							<p>完全相關<br>相關係數=1</p>
						</div>
						<div class="bgc-pink">
							<p>高度相關<br>相關係數=0.6~1</p>
						</div>
						<div class="bgc-yellow">
							<p>中度相關<br>相關係數=0.2~0.6</p>
						</div>
						<div class="bgc-blue">
							<p>超低度或負相關<br>相關係數=-1~0.2</p>
						</div>
					</div>
				</div>
			</div>
			<p class="chart-info">資料來源：安本標準投資管理整理，截至2017年第三季。<br>另類投資相關係數平均為：保險連結證券、絕對報酬策略、商品期貨投資、英國商用不動產、社會基礎建設、再生能源基礎建設、優先順位ABS、夾層ABS相關係數之算術平均。</p>
		</div>
	</div>
</template>
<script>

	export default {
		name: 'page1_popup2',
		data() {
			return {

			};
		},
		methods: {

		},
		components: {

		}
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";
	@import "./../assets/scss/page1_com";

	.bgc-red { background-color: #c72162; }
	.bgc-pink {background-color: #f16b81; }
	.bgc-yellow { background-color: #faa41a; }
	.bgc-blue { background-color: #0065a4; }

	.chart_wrap {
		max-width: 640px;
		margin: 0 auto;
	}

	.table_warp {
		display: flex;
		justify-content: space-between;
		margin: 40px auto 20px;
	}
	th { background-color: #f1f1f1; }
	.color-blue { color: #0065a4; }
	table {
		border-collapse: separate;
		border-spacing: 1px;
		table-layout: fixed;
		text-align: center;
		width: 504px;
		font-weight: bold;
	}
	th {
		vertical-align: middle;
		line-height: 3.25;
		font-size: 14px;
		color: #666;
	}
	td {
		vertical-align: middle;
		font-size: 16px;
		color: #fff;
	}

	.table-info {
		width: 118px;
		div {
			line-height: 2;
			margin-bottom: 4px;
			padding: 4px 7px;
		}
		p {
			font-size: 12px;
			color: #fff;
		}
	}

	@media screen and (max-width: 1120px) and (min-width: $mobileSize) {
		table { width: 504/1120*100+vw; }
		.table-info { width: 110px; }
	}

	@media screen and (max-width: $mobileSize) {
		.chart_wrap {
			max-width: 106%;
			width: 106%;
			margin-left: -3%;
		}
		.table_warp { flex-direction: column; }

		table { width: 100%; }
		th {
			line-height: 3.8;
			font-size: 24px;
		}
		td { font-size: 30px; }

		.table-info {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin: 10px 0;
			div {
				margin-bottom: 0;
				padding: 4px 6px;
			}
			p { font-size: 24px; }
		}
	}
	@media screen and (max-width: $mobileSize) and (min-width: 769px) and (max-height: 768px) {
		.chart_wrap {
			max-width: 130%;
			width: 130%;
			margin-left: -15%;
		}
		.table-info div { padding: 4px 20px; }
		.popup .chart-info { max-width: 100%; }
	}

	@media screen and (max-width: $mobileSize2) {
		.table_warp { margin: 40/750*100+vw auto 20/750*100+vw; }

		th { font-size: 24/750*100+vw; }
		td { font-size: 30/750*100+vw; }

		.table-info {
			margin: 10/750*100+vw 0;
			div { padding: 4/750*100+vw 6/750*100+vw; }
			p { font-size: 24/750*100+vw; }
		}
		.chart_wrap {
			transform: scale(.78) translateY(-20%);
			max-width: 130%;
			width: 130%;
			margin-left: -15%;
		}
	}

	@media screen and (max-width: 370px) {
		.table-info div { padding: 4/370*100+vw 10/370*100+vw; }
	}
</style>
