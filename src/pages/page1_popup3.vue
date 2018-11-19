<template>
	<div>
		<p class="title">
			<svg class="icon" viewBox="0 0 175.031 132">
				<g>
					<polygon fill="#008495" stroke="#008495" stroke-width="5.2969" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="87.516,95.331 2.648,48.998 87.516,2.664 172.383,48.998"/>
					<path transform="translate(60,17) scale(2.2)" fill="none" stroke="#fff" stroke-width="1.452" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M17.112 9.672c-.655 2.268-2.436 3.918-4.129 4-1.697-.082-3.483-1.743-4.133-4.021l-.32.05a.668.668 0 0 1-.76-.555L7.457 7.13a.664.664 0 0 1 .554-.758l.229-.036a3.25 3.25 0 0 1-.157-1v-.743a3.312 3.312 0 0 1 3.305-3.299h.394a.416.416 0 0 1 .024-.177c.203-.535 1.558-.518 3.026.038.313.118.605.25.87.392a3.315 3.315 0 0 1 2.04 3.047v.743c0 .348-.055.684-.157 1l.228.035a.667.667 0 0 1 .556.759l-.313 2.015a.669.669 0 0 1-.761.556l-.183-.03zM20.769 23.278h-3.572M1.32 25.257L.727 19.87v-.565c0-1.259 1.275-1.984 2.34-2.2.972-.197 4.61-.984 5.788-1.799l.072-.011 2.129 9.979 1.279-6.583-1.083-2.789h3.497l-1.082 2.789 1.242 6.583 2.164-9.979.073.011c1.178.814 4.814 1.602 5.787 1.799 1.064.216 2.34.943 2.34 2.2v.565l-.592 5.388"/>
				</g>
					<polyline fill="none" stroke="#008495" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="161.168,60.809 172.384,67.108 87.517,113.441 2.648,67.108 13.102,61.236"/>
					<polyline fill="none" stroke="#008495" stroke-width="1.3242" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="160.76,78.471 172.384,85 87.516,131.335 2.648,85 13.102,79.129"/>
			</svg>跟著法人投資
		</p>
		<p class="text">機構法人對另類投資早已開始布局，掌握更有潛力又能分散風險的投資機會。根據麥肯錫於2017年2月發表之調查，多數機構法人表示未來可能加碼四大類另類投資。透過本基金，一般投資人也能參與法人級的另類投資機會！</p>
		<p class="chart-title">機構法人投資於各種另類資產的布局目標與現況之差異(佔整體投組%)*</p>
		<div class="chart_wrap">
			<div class="chart_box">
				<div class="row head">
					<div>
						<span class="icon bgc-blue"></span>
						<p>未來將加碼</p>
					</div>
					<div>
						<span class="icon bgc-red"></span>
						<p>未來將減碼</p>
					</div>
				</div>
				<div class="row content">
					<div class="th_box">
						<p><span>大學校務基金與基金會</span></p>
						<p><span>家族財富管理帳房</span></p>
						<p>保險公司</p>
						<p><span>私有企業退休基金</span></p>
						<p>公共退休基金</p>
						<p>主權基金</p>
						<p>超國家組織</p>
					</div>
					<div class="tbody">
						<div class="chart"></div>
					</div>
				</div>
			</div>
			<p class="chart-info">*根據有公開實際與目標配置比重之機構法人資料統整，其中現況布局資料以中位數計算之。<br>資料來源：Preqin; McKinsey analysis, McKinsey Global Private Markets Review 2017/2。</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'page1_popup3',
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

	.chart_box {
		width: 550px;
		margin: 0 auto 20px;
	}

	.row {
		display: flex;
		&.head {
			justify-content: flex-end;
			margin-bottom: 16px;
			div { margin-left: 12px; }
			.icon {
				vertical-align: middle;
				display: inline-block;
				width: 12px;
				height: 12px;
			}
			.bgc-blue { background-color: #2391d1; }
			.bgc-red { background-color: #c92b21; }
			p {
				display: inline-block;
				width: auto;
				line-height: 1;
				font-size: 13px;
				color: #141e50;
			}
		}
		&.content { justify-content: space-between; }
	}

	.th_box {
		text-align: right;
		width: 100px;
		padding: 16px 10px 0 0;
		span { text-align: right; }
		p {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			align-items: center;
			height: 40px;
			line-height: 1.2;
			font-size: 14px;
			color: #141e50;
		}
	}
	.tbody {
		width: calc(100% - 100px);
		overflow: auto;
	}
	.chart {
		width: 448px;
		height: 287px;
		background-repeat: no-repeat;
		background-image: url(./../assets/img/p1-3-chart.png);
		background-size: contain;
		image-rendering: pixelated;
		//image-rendering: -webkit-optimize-contrast;
	}

	@media screen and (max-height: 860px) and (min-width: $mobileSize) {
		.chart_wrap { transform: scale(.89) translateY(-36px); }
		.chart_box { margin: 0 auto; }
		.row.head { margin-bottom: 6px;	}
	}

	@media screen and (max-width: 580px) {
		.chart_box {
			width: 100%;
			margin: 0 auto 20/580*100+vw;
		}
	}
</style>
