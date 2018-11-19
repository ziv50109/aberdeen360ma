<template>
	<div class="content_box">
		<h3>基金小檔案</h3>
		<div class="content">
			<h4 class="color-blue">安本標準 360多重資產收益基金</h4>
			<h4>(本基金配息政策可能致配息來源為本金)</h4>
			<svg style="display: none;"><path id="p5-file" fill="#1A9CE3" d="M14.296 18.143H4.263a.718.718 0 0 1-.725-.708c0-.386.325-.701.725-.701h10.033c.398 0 .723.315.723.701a.716.716 0 0 1-.723.708M17.003 14.511H4.263a.715.715 0 0 1-.725-.703c0-.389.325-.707.725-.707h12.74c.4 0 .726.318.726.707a.716.716 0 0 1-.726.703M16.043 11.093H4.263a.717.717 0 0 1-.725-.707c0-.387.325-.702.725-.702h11.78c.399 0 .724.315.724.702 0 .39-.325.707-.724.707M16.458 18.924c-.555 0-1.059.223-1.424.579l-.019.018a1.935 1.935 0 0 0-.575 1.372c0 .544.229 1.039.594 1.396s.869.574 1.424.574c.562 0 1.063-.218 1.43-.569v-.005a1.945 1.945 0 0 0 0-2.786 2.043 2.043 0 0 0-1.43-.579M21.768 7.166L14.689.252A.747.747 0 0 0 14.104 0H2.409C1.771 0 1.166.245.707.69A2.303 2.303 0 0 0 0 2.352v23.297l.002.377h.031c.079.485.312.932.674 1.285A2.437 2.437 0 0 0 2.409 28h17.175c.641 0 1.244-.244 1.698-.688a2.294 2.294 0 0 0 .708-1.662L22 7.681a.657.657 0 0 0-.232-.515m-1.222 18.483a.927.927 0 0 1-.282.663.975.975 0 0 1-.68.273H2.409a.97.97 0 0 1-.677-.272.926.926 0 0 1-.282-.601V2.348a.958.958 0 0 1 .959-.938h11.002v4.627c0 .625.251 1.214.706 1.657l.115.11h.007c.439.377.996.583 1.582.583h4.731l-.006 17.262zM15.1 6.655a.909.909 0 0 1-.241-.618V2.412l4.674 4.563h-3.711a.951.951 0 0 1-.676-.275l-.046-.045z"/></svg>
			<table>
				<tr>
					<th>基金經理人</th>
					<td>劉向晴</td>
				</tr>
				<tr>
					<th>管理費</th>
					<td>每年1.7%</td>
				</tr>
				<tr>
					<th>保管費</th>
					<td>每年0.26%</td>
				</tr>
				<tr>
					<th>保管銀行</th>
					<td>台北富邦銀行</td>
				</tr>
				<tr>
					<th>牌告申購手續費</th>
					<td>3%</td>
				</tr>
				<tr>
					<th rowspan="2" style="vertical-align: middle;">基金類股</th>
					<td>新臺幣類股：A 累積 新臺幣、A 月配息 新臺幣</td>
				</tr>
				<tr>
					<td>美元類股：A 累積 美元、A 月配息 美元</td>
				</tr>
				<tr>
					<th>配息頻率</th>
					<td>每月</td>
				</tr>
				<tr>
					<th>閉鎖期</th>
					<td>基金成立後90天</td>
				</tr>
				<tr>
					<th>檔案下載</th>
					<td>
						<a href="" target="_blank" v-if="false"><svg class="p5-icon" viewBox="0 0 22 28"><use xlink:href="#p5-file"/></svg>基金簡介</a>
						<a href="" target="_blank"><svg class="p5-icon" viewBox="0 0 22 28"><use xlink:href="#p5-file"/></svg>公開說明書</a>
						<a href="" target="_blank"><svg class="p5-icon" viewBox="0 0 22 28"><use xlink:href="#p5-file"/></svg>簡式公開說明書</a>
					</td>
				</tr>
			</table>
			<slot></slot>
		</div>
		<div class="scroll-icon"></div>
	</div>
</template>
<script>
	export default {
		name: 'page5',
		data() {
			return {

			};
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.content {
		margin-top: 25px;
	}
	h4 {
		line-height: 1.2;
		text-align: center;
		font-size: 26px;
		font-weight: bold;
		color: #8a8c8e;
		&.color-blue {
			color: #141e50;
		}
	}
	table {
		width: 600px;
		margin: 25px auto 0;
	}
	th {
		text-align: left;
		width: 170px;
		line-height: 2.45;
		padding-left: 20px;
		color: #fff;
		background-color: #1A9CE3;
		border: 1px solid #E5E5E5;
	}
	tr:nth-child(even) td {
		background-color: #F1F1F1;
		border-bottom: 1px solid #F1F1F1;
	}
	td {
		line-height: 2.2;
		padding: 0 10px 0 20px;
		color: #141e50;
		background-color: #F8F8F8;
		border-bottom: 1px solid #F8F8F8;
	}
	a {
		display: inline-block;
		font-size: 16px;
		font-weight: bold;
		color: #1a9ce3;
		&:nth-child(2) { margin: 0 26px; }
	}
	.p5-icon {
		vertical-align: text-bottom;
		width: 14px;
		height: 18px;
		margin-right: 7px;
	}

	@media screen and (max-width: $mobileSize) {
		.content { margin-top: 32px; }
		h4 {
			font-size: 38px;
		}
		table {
			width: 690px;
			margin-top: 25px;
		}
		th, td {
			padding-left: 16px;
			font-size: 30px;
		}
		th {
			width: 254px;
			line-height: 1.65;
			font-weight: normal;
			border: 1px solid #E5E5E5;
		}
		tr:nth-child(even) td { border-bottom: 1px solid #F1F1F1; }
		td {
			padding: 0 16px;
			border-bottom: 1px solid #F8F8F8;
		}
		a {
			display: block;
			margin-bottom: 20px;
			font-size: 28px;
			&:nth-child(2) { margin: 0 0 20px; }
		}
		.p5-icon {
			width: 22px;
			height: 28px;
			margin-right: 8px;
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.content { margin-top: 32/750*100+vw; }
		h4 {
			font-size: 38/750*100+vw;
		}
		table {
			width: 690/750*100+vw;
			margin: 25/750*100+vw auto 0;
		}
		th, td {
			padding-left: 16/750*100+vw;
			font-size: 30/750*100+vw;
		}
		th {
			width: 254/750*100+vw;
			border: 1/750*100+vw solid #E5E5E5;
		}
		tr:nth-child(even) td { border-bottom: 1/750*100+vw solid #F1F1F1; }
		td {
			padding: 0 16/750*100+vw;
			border-bottom: 1/750*100+vw solid #F8F8F8;
		}
		a {
			line-height: 1;
			margin-bottom: 20/750*100+vw;
			font-size: 28/750*100+vw;
			&:nth-child(2) { margin: 0 0 20/750*100+vw; }
		}
		.p5-icon {
			width: 22/750*100+vw;
			height: 28/750*100+vw;
			margin-right: 8/750*100+vw;
		}
	}
</style>
