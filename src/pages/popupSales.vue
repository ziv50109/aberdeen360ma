<template>
	<div class="wrap">
		<h4>銷售機構</h4>
		<div class="table_wrap">
			<p class="title">保管銀行-<span>台北富邦銀行</span></p>
			<table>
				<tr>
					<th>銀行通路</th>
					<th>券商與基金平台</th>
				</tr>
				<tr>
					<td>上海商銀</td>
					<td>元大證券</td>
				</tr>
				<tr>
					<td>三信商銀</td>
					<td>先鋒投顧</td>
				</tr>
				<tr>
					<td>元大銀行</td>
					<td>國泰證券</td>
				</tr>
				<tr>
					<td>永豐銀行</td>
					<td>基富通證券</td>
				</tr>
				<tr>
					<td>玉山銀行</td>
					<td>統一證券</td>
				</tr>
				<tr>
					<td>合作金庫</td>
					<td>群益金鼎證券</td>
				</tr>
				<tr>
					<td>凱基銀行</td>
					<td>鉅亨網投顧</td>
				</tr>
				<tr>
					<td>華南銀行</td>
					<td></td>
				</tr>
				<tr>
					<td>華泰銀行</td>
					<td></td>
				</tr>
				<tr>
					<td>新光銀行</td>
					<td></td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'popupSales',
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
		padding: 35px 35px 56px;
	}
	h4 {
		margin-bottom: 40px;
		font-size: 36px;
		font-weight: bold;
		color: #00a2e4;
	}
	.title {
		margin-bottom: 20px;
		font-size: 16px;
		font-weight: bold;
		color: #141e50;
		span {
			font-size: 24px;
			color: #2b1c2f;
		}
	}
	table {
		max-width: 580px;
		width: 100%;
		margin: 0 auto;
	}
	th, td { width: 50%; }
	th {
		line-height: 2.45;
		color: #fff;
	}
	td {
		line-height: 2.35;
		color: #141e50;
	}
	tr:nth-child(odd) { background-color: #f1f1f1; }
	tr:nth-child(even) { background-color: #f8f8f8; }
	tr:first-child { background-color: #1a9ce3; }
	td:first-child, th:first-child { border-right: 1px solid #fff; }

	@media screen and (max-width: $mobileSize) {
		.wrap { padding: 120px 30px 56px; }
		h4 {
			margin-bottom: 36px;
			font-size: 54px;
		}
		.title {
			margin-bottom: 20px;
			font-size: 24px;
			span { font-size: 36px; }
		}
		table {
			max-width: 100%;
			font-size: 30px;
		}
		th { line-height: 1.97; }
		td { line-height: 1.88; }
		td:first-child, th:first-child { border-right: 2px solid #fff; }
	}

	@media screen and (max-width: $mobileSize2) {
		.wrap { padding: 120/750*100+vw 30/750*100+vw 56/750*100+vw; }
		h4 {
			margin-bottom: 36/750*100+vw;
			font-size: 54/750*100+vw;
		}
		.title {
			margin-bottom: 20/750*100+vw;
			font-size: 24/750*100+vw;
			span { font-size: 36/750*100+vw; }
		}
		table {font-size: 30/750*100+vw; }
		td:first-child, th:first-child { border-right: 2/750*100+vw solid #fff; }
	}

</style>
