<template>
	<div :class="`content_box ${bgShow ? 'popup_bg-show' : ''}`">
		<div class="fk" v-show="bgShow"></div>
		<h3>另類投資小學堂</h3>
		<div class="content">
			<svg style="display: none;" viewBox="0 0 20.894 20.894"><g id="arrow"><path fill="#1A9CE3" d="M20.895 10.447c0 5.77-4.679 10.447-10.447 10.447C4.678 20.894 0 16.217 0 10.447S4.677 0 10.447 0c5.769 0 10.448 4.677 10.448 10.447"/><path fill="none" stroke="#fff" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M15.631 10.448c-.781-.325-8.834.109-10.37.071M10.514 15.565l5.118-5.119-5.117-5.118"/></g></svg>
			<dragSlider>
				<ul>
					<li v-for="(item, index) in items" @click="open(index)">
						<div class="wrap" >
							<div class="pic_box">
								<div :class="`pic pic${index + 1}`"></div>
							</div>
							<div class="icon_wrap">
								<div :class="`icon icon${index + 1}`"></div>
							</div>
							<h4>{{ item.title }}</h4>
							<p class="item_p">{{ item.content }}</p>
							<div class="arrow"><svg viewBox="0 0 20.894 20.894"><path fill="#1A9CE3" d="M20.895 10.447c0 5.77-4.679 10.447-10.447 10.447C4.678 20.894 0 16.217 0 10.447S4.677 0 10.447 0c5.769 0 10.448 4.677 10.448 10.447"/><path fill="none" stroke="#fff" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M15.631 10.448c-.781-.325-8.834.109-10.37.071M10.514 15.565l5.118-5.119-5.117-5.118"/></svg></div>
						</div>
					</li>
				</ul>
			</dragSlider>
		</div>
		<div clas="popup_wrap">
			<svg viewBox="0 0 28 28" style="display: none;"><path id="a" fill="#1a9ce3" d="M14,0.001c-7.732,0-13.999,6.266-13.999,14c0,7.73,6.267,14.001,13.999,14.001c7.734,0,14-6.271,14-14.001C28,6.267,21.734,0.001,14,0.001 M22.312,10.555l-8.604,9.709c-0.419,0.476-1.003,0.717-1.59,0.717c-0.485,0-0.972-0.162-1.369-0.501l-4.838-4.073c-0.897-0.758-1.012-2.097-0.255-2.996c0.754-0.895,2.097-1.014,2.996-0.255l3.252,2.739l7.228-8.158c0.779-0.882,2.124-0.959,3.001-0.183C23.009,8.333,23.09,9.677,22.312,10.555"/></svg>
			<transition-group name="opacity">
				<popup v-if="popups[0]"
					:key="0"
					:index="popupsIndex"
					:popupLength="popups.length"
					@ctrClick="ctrClick(arguments)"
					@close="close()"
					class="popup popup1">
					<p class="title"><span class="icon icon1"></span>什麼是另類投資</p>
					<p class="text">凡是「非」股票、債券等傳統領域的投資，都稱為另類投資。另類投資領域非常廣，囊括各式各樣的投資機會，甚至遍布你我的生活中，近十年來掛牌另類投資市場蓬勃發展，讓另類投資成為可以在交易所公開買賣的投資標的，投資人可以透過基金參與另類投資多元化的投資機會。</p>
					<div class="chart_wrap">
						<div class="chart_box">
							<p class="title">傳統投資</p>
							<p class="title">另類投資</p>
							<div class="body">
								<div class="box">
									<ul>
										<li>成熟市場股票</li>
										<li>新興市場股票</li>
										<li>政府公債</li>
									</ul>
								</div>
								<div class="box">
									<ul>
										<li>投資等級債</li>
										<li>高收益債</li>
									</ul>
								</div>
							</div>
							<div class="body">
								<ul>
									<li>不動產<br>(REITs)</li>
									<li>新興市場債</li>
									<li>新興市場當地債</li>
								</ul>
							</div>
							<div class="body">
								<div class="box">
									<ul>
										<li>銀行貸款</li>
										<li>資產抵押證券<br>(ABS)</li>
										<li>保單連結債券</li>
										<li>訴訟融資</li>
										<li>社會基礎建設</li>
									</ul>
								</div>
								<div class="box">
									<ul>
										<li>租賃標的<br>證券化</li>
										<li>私募基金</li>
										<li>避險基金</li>
										<li>再生能源<br>基礎建設</li>
										<li>實體資產*</li>
									</ul>
								</div>
							</div>
						</div>
						<p class="chart-info">資料來源：World Economic Forum – Alternative Investments 2020。*實體資產包括但不限於黃金、林地、紅酒、藝術品等投資機會</p>
					</div>
				</popup>
				<popup v-if="popups[1]"
					:key="1"
					:index="popupsIndex"
					:popupLength="popups.length"
					@ctrClick="ctrClick(arguments)"
					@close="close()"
					class="popup popup2">
					<p class="title"><span class="icon icon2"></span>再生能源基礎建設</p>
					<p class="text">「投資基礎建設股票」是選擇相關題材的類股，而「投資基礎建設」則是直接建造基礎建設或是買下已經在營運中的基礎建設，獲取穩定收益。The Renewables Infrastructure Group旗下擁有位於英國、法國與愛爾蘭之已在營運的27座在岸風田與28座太陽能田。</p>
					<div class="advantage_box">
						<p class="advantage-title">投資優勢</p>
						<ul>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>西歐各國政策支持以及政府保證收購電價的優勢，電費收益穩定</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>僅選擇已成功營運的電廠，避開投資於建造階段電廠可能觸及環評問題的風險</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>只投資再生能源電廠，符合國際綠能潮流，具永續經營本質且沒有限期減碳壓力</span></li>
						</ul>
						<p class="advantage-info">資料來源：The Renewables Infrastructure Group <a href="http://www.trig-ltd.com/" target="_blank">官方網站</a>，截至2017年8月18日。</p>
					</div>
					<div class="chart_wrap">
						<p class="chart-title">股價表現</p>
						<div class="chart-tag"><span>6.03</span></div>
						<div class="chart_box">
							<div class="chart c-axis"></div>
							<div class="chart c-chart"></div>
							<div class="chart c-text"></div>
						</div>
						<p class="chart-info">資料來源：Bloomberg，2018年3月29日</p>
					</div>
				</popup>
				<popup v-if="popups[2]"
					:key="2"
					:index="popupsIndex"
					:popupLength="popups.length"
					@ctrClick="ctrClick(arguments)"
					@close="close()"
					class="popup popup3">
					<p class="title"><span class="icon icon3"></span>飛機租賃</p>
					<p class="text">Amedeo Air 4 Plus為一家飛機租賃公司，旗下擁有8架A380、2架波音777以及4架A350，全數以長期租約承租給阿聯酋航空、阿提哈德航空以及泰國航空，賺取租金。</p>
					<div class="advantage_box">
						<p class="advantage-title">投資優勢</p>
						<ul>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>與大型航空公司簽長期租約，租金收益較穩定，投資於租賃公司之投資人收益也穩定</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>2018年載客量預計成長6%，航運需求強勁，產業前景佳</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>若承租關係生變，租賃公司亦可藉由飛機極佳的二手市場轉租或轉賣</span></li>
						</ul>
						<p class="advantage-info">資料來源：Amedeo Air 4 Plus<a href="http://www.aa4plus.com/" target="_blank">官方網站</a>。截至2018年1月26日。載客量數據來自國際航空運輸協會於2017年12月5日發布之新聞稿。</p>
					</div>
					<div class="chart_wrap">
						<p class="chart-title">股價表現</p>
						<div class="chart-tag"><span>7.71</span></div>
						<div class="chart_box">
							<div class="chart c-axis"></div>
							<div class="chart c-chart"></div>
							<div class="chart c-text"></div>
						</div>
						<p class="chart-info">資料來源：Bloomberg，2018年3月29日</p>
					</div>
				</popup>
				<popup v-if="popups[3]"
					:key="3"
					:index="popupsIndex"
					:popupLength="popups.length"
					@ctrClick="ctrClick(arguments)"
					@close="close()"
					class="popup popup4">
					<p class="title"><span class="icon icon4"></span>巨災債券</p>
					<p class="text">巨災債券是將保險公司的保單證券化，變成可投資的標的，保單穩定的保費收入類似債券的利息支付給投資人。當巨災真的發生，投資人必須替保險公司賠負災害的損失，就像投資的債券違約倒債一般。巨災債券的投資標的不是小型火災等災害，而是龍捲風、颶風等超級大災難。</p>
					<div class="advantage_box">
						<p class="advantage-title">投資優勢</p>
						<ul>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>重大天災發生機率與景氣循環完全無關，可大幅強化投資組合分散度</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>保戶會定期繳交保費，能為投資人帶來穩定的收益</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>相較只投資一檔巨災債券，巨災債券投資組合能讓投資更分散，避免單一巨災造成嚴重損失</span></li>
						</ul>
						<p class="advantage-info">資料來源：CATCO Reinsurance Opp Fund Ltd <a href="http://www.catcoreoppsfund.com/pages/landing/" target="_blank">官方網站</a>。</p>
					</div>
					<div class="chart_wrap">
						<p class="chart-title">Swiss Re巨災債券指數總報酬 (%)</p>
						<div class="chart_box">
							<div class="chart c-axis"></div>
							<div class="chart c-chart"></div>
							<div class="chart c-text"></div>
						</div>
						<p class="chart-info">資料來源：Bloomberg，2018年3月29日</p>
					</div>
				</popup>
				<popup v-if="popups[4]"
					:key="4"
					:index="popupsIndex"
					:popupLength="popups.length"
					@ctrClick="ctrClick(arguments)"
					@close="close()"
					class="popup popup5">
					<p class="title"><span class="icon icon5"></span>社會基礎建設</p>
					<p class="text">HICL Infrastructure Company Limited投資於社會、運輸等基礎建設等116個項目，主要於英國，亦跨足歐洲大陸、美加與澳洲。主要聚焦於住宅、教育、救災、健康設施、道路、汙水處理六大主軸。</p>
					<div class="advantage_box">
						<p class="advantage-title">投資優勢</p>
						<ul>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>像高速公路這類基礎建設具有「獨佔性 」，建設者不會在同一地區重複建造同樣的建設，可提供穩定收益</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>具有隨通膨調升費用的能力，收入可隨通膨緩慢上升，進而帶動股利/股價穩定爬升</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>HICL以改良工程或調整費用結構方式，提升旗下設施獲利能力</span></li>
						</ul>
						<p class="advantage-info">資料來源：HICL Infrastructure Company Limited <a href="https://www.hicl.com/" target="_blank">官方網站</a>，截至2017年12月。</p>
					</div>
					<div class="chart_wrap">
						<p class="chart-title">股價表現</p>
						<div class="chart-tag"><span>5.74</span></div>
						<div class="chart_box">
							<div class="chart c-axis"></div>
							<div class="chart c-chart"></div>
							<div class="chart c-text"></div>
						</div>
						<p class="chart-info">資料來源：Bloomberg，2018年3月29日</p>
					</div>
				</popup>
				<popup v-if="popups[5]"
					:key="5"
					:index="popupsIndex"
					:popupLength="popups.length"
					@ctrClick="ctrClick(arguments)"
					@close="close()"
					class="popup popup6">
					<p class="title"><span class="icon icon6"></span>私營學生宿舍</p>
					<p class="text">GCP Student Living PLC為一間在英國經營私營學生宿舍的公司，旗下共有十間學生宿舍，大部分物件皆在倫敦市區或近郊，透過出租房間給學生賺取租金收益。宿舍內部由室內設計師重新裝潢，且設備完善。共提供3,383個床位，承租人來自77間不同的高等教育機構，目前(2017/18 學年度)全數滿租。</p>
					<div class="advantage_box">
						<p class="advantage-title">投資優勢</p>
						<ul>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>相較於投資辦公室為主的REITs，投資學生宿舍更不易受景氣循環影響，租金收益也較穩定</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>英國提供優質的高等教育，國際學生申請率從2012年至2016年成長超過15%</span></li>
							<li><svg viewBox="0 0 28 28"><use xlink:href="#a"/></svg><span>倫敦具有住宿需求的國際學生約十萬人，而校方供給卻嚴重不足，私營學生宿舍具一定利基</span></li>
						</ul>
						<p class="advantage-info">資料來源：GCP Student Living PLC <a href="https://www.graviscapital.com/" target="_blank">官方網站</a>，資料截至2017/9/30。國際學生申請率數據截至2016年底。住宿需求數據截至2015年底。</p>
					</div>
					<div class="chart_wrap">
						<p class="chart-title">股價表現</p>
						<div class="chart-tag"><span>4.21</span></div>
						<div class="chart_box">
							<div class="chart c-axis"></div>
							<div class="chart c-chart"></div>
							<div class="chart c-text"></div>
						</div>
						<p class="chart-info">資料來源：Bloomberg，2018年3月29日</p>
					</div>
				</popup>
			</transition-group>
		</div>
	</div>
</template>
<script>
	import dragSlider from './../components/dragSlider';
	import popup from './../components/popupInside';

	export default {
		name: 'page2',
		data() {
			return {
				popups: [false, false, false, false, false, false],
				popupsIndex: null,
				bgShow: false,
				items: [
					{
						title: '什麼是另類投資',
						content: '凡是「非」股票、債券等傳統領域的投資，都稱為另類投資',
					},
					{
						title: '再生能源基礎建設',
						content: '投資營運中的綠電發電廠，獲取穩定電費收入',
					},
					{
						title: '飛機租賃',
						content: '投資附長租約的客機，獲取穩定租金收益',
					},
					{
						title: '巨災債券',
						content: '投資產險合約，獲取扣除出險金額後的保費淨收入',
					},
					{
						title: '社會基礎建設',
						content: '投資於社會、運輸等基礎建設等116個項目',
					},
					{
						title: '私營學生宿舍',
						content: '透過出租房間給學生，賺取租金收益',
					},
				]
			};
		},
		watch: {
			popupsIndex: function(val) {
				if(val < 0) this.popupsIndex = 0;
				if(val > this.popups.length - 2) this.popupsIndex = this.popups.length - 1;
				this.changePopup();
			}
		},
		methods: {
			changePopup: function() {
				this.popups.map((item, i)=> {
					this.popups[i] = false;
				});
				this.popups[this.popupsIndex] = true;
				this.$forceUpdate();
			},
			open: function(i) {
				this.popupsIndex = i;
				this.bgShow = true;
			},
			close: function() {
				this.popupsIndex = null;
				this.bgShow = false;
			},
			ctrClick: function(ctr) {
				if(ctr[0] === 0) {
					//prev
					this.popupsIndex -= 1;
				} else {
					//next
					this.popupsIndex += 1;
				}
			},
		},
		components: {
			dragSlider,
			popup,
		}
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.fk {
		display: none;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: #fff;
		z-index: 5;
	}
	.popup_bg-show .content { opacity: 0; }
	.content {
		width: 100%;
		margin-top: 90px;
		user-select: none;
		ul {
			display: inline-block;
			white-space: nowrap;
			margin-bottom: 38px;
		}
		li {
			vertical-align: bottom;
			display: inline-block;
			width: 220px;
			white-space: normal;
			&:hover {
				.pic { transform: scale(1.2); }
				.wrap { box-shadow: 0 2px 10px rgba(#000, .05); }
			}
		}
		.wrap {
			position: relative;
			width: 200px;
			height: 350px;
			margin: 0 auto;
			border-radius: 10px;
			border: 1px solid #eaeaea;
			overflow: hidden;
			transition: box-shadow .5s;
		}
		.pic_box { overflow: hidden; }
		.pic {
			width: 200px;
			height: 125px;
			background-image: url(./../assets/img/p2-pics.png);
			background-size: #{680*.625+px} #{677*.625+px};
			background-repeat: no-repeat;
			transition: transform 1s;
			&.pic1 { background-position: #{-350*.625+px} #{-462*.625+px}; }
			&.pic2 { background-position: #{-350*.625+px} #{-236*.625+px}; }
			&.pic3 { background-position: #{-10*.625+px} #{-10*.625+px}; }
			&.pic4 { background-position: #{-350*.625+px} #{-10*.625+px}; }
			&.pic5 { background-position: #{-10*.625+px} #{-462*.625+px}; }
			&.pic6 { background-position: #{-10*.625+px} #{-236*.625+px}; }
		}
		.icon_wrap {
			position: relative;
			height: 90px;
		}
		.item_p { text-align: left; }
		.icon {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
		h4 {
			text-align: center;
			font-size: 18px;
			font-weight: bold;
			color: #141e50;
		}
		p {
			line-height: 1.4;
			margin-top: 15px;
			padding: 0 15px;
			font-size: 14px;
		}
		.arrow {
			position: absolute;
			right: 12px;
			bottom: 12px;
			svg {
				width: 21px;
				height: 21px;
			}
		}
	}
	.icon {
		vertical-align: middle;
		display: inline-block;
		background-image: url(./../assets/img/p2-icons.png);
		background-size: #{640*.6+px} #{115*.6+px};
		background-repeat: no-repeat;
		&.icon1 {
			width: 58px;
			height: 62px;
			background-position: #{-544*.6+px} #{-10*.6+px};
		}
		&.icon2 {
			width: 58px;
			height: 63px;
			background-position: #{-217*.6+px} #{-10*.6+px};
		}
		&.icon3 {
			width: 63px;
			height: 42px;
			background-position: #{-431*.6+px} #{-10*.6+px};
		}
		&.icon4 {
			width: 53px;
			height: 56px;
			background-position: #{-10*.6+px} #{-10*.6+px};
		}
		&.icon5 {
			width: 58px;
			height: 49px;
			background-position:-#{324*.6+px} #{-10*.6+px};
		}
		&.icon6 {
			width: 58px;
			height: 50px;
			background-position: #{-110*.6+px} #{-10*.6+px};
		}
	}
	.opacity {
		&-enter-to, &-leave { opacity: 1; }
		&-enter, &-leave-to { opacity: 0; }
		&-enter-active, &-leave-active { transition: opacity .44s; }
	}

	.popup_wrap {
		text-align: center;
		padding-top: 150px;
		.title {
			text-align: center;
			margin-bottom: 26px;
			font-size: 24px;
			font-weight: bold;
			color: #141e50;
		}
		p {
			text-align: justify;
			max-width: 654px;
			width: 100%;
			line-height: 1.6;
			margin: 0 auto;
			padding: 0;
			font-size: 16px;
			color: #444;
		}
		.text { margin-bottom: 36px; }
		.advantage_box { margin-bottom: 32px; }
		.advantage-title {
			text-align: center;
			width: 113px;
			line-height: 1.45;
			margin-bottom: 16px;
			font-size: 18px;
			font-weight: bold;
			color: #fff;
			background-color: #1a9ce3;
			border-radius: 20px;
		}
		ul {
			max-width: 654px;
			width: 100%;
			margin: 0 auto;
		}
		li {
			text-align: left;
			position: relative;
			margin-bottom: 8px;
			line-height: 1.4;
			font-size: 15px;
			font-weight: bold;
			color: #1a9ce3;
			svg {
				position: absolute;
				top: 2px;
				width: 14px;
				height: 14px;
			}
			span {
				display: inline-block;
				margin-left: 18px;
			}
		}
		.advantage-info {
			font-size: 13px;
			color: #999;
		}
		a {
			color: #141e50;
			border-bottom: 1px solid;
		}
		.chart_wrap {
			position: relative;
			display: inline-block;
			p { width: auto; }
		}
		.chart_box {
			position: relative;
			margin-bottom: 15px;
		}
		.chart-title {
			margin-bottom: 6px;
			text-align: center;
			font-size: 15px;
			font-weight: bold;
			color: #141e50;
		}
		.chart-tag {
			position: absolute;
			width: 82px;
			height: 90px;
			background-image: url(./../assets/img/p2-chart-tag.png);
			background-repeat: no-repeat;
			background-size: contain;
			z-index: 1;
			span {
				position: absolute;
				left: 14px;
				bottom: 24px;
				font-size: 24px;
				font-weight: bold;
				color: #141e50;
			}
		}
		.chart {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-image: url(./../assets/img/p2-chart.png);
			background-size: #{1668*.6735+px} #{1134*.6735+px};
			image-rendering: optimizequality;
			image-rendering: -webkit-optimize-contrast;
		}
		.chart_box {
			width: 537*.6735+px;
			height: 212*.6735+px;
		}
		.c-chart {
			animation-name: chartShow;
			animation-duration: 1.6s;
		}
		.c-text {
			opacity: 0;
			animation-name: opacity;
			animation-duration: 1.6s;
			animation-delay: 1s;
			animation-fill-mode: forwards;
		}
		.chart-info {
			font-size: 13px;
			color: #999;
		}
		.chart-tag {
			top: 24px;
			right: -88px;
		}
		@keyframes chartShow {
			0% { width: 0; }
			100% { width: 100%; }
		}
		@keyframes opacity {
			0% { opacity: 0; }
			100% { opacity: 1; }
		}
		&.popup1 {
			.chart_box {
				display: flex;
				flex-wrap: wrap;
				width: 580px;
				height: auto;
				margin: 24px auto;
				.title {
					position: relative;
					text-align: center;
					width: 50%;
					line-height: 1.6;
					margin: 0;
					font-size: 16px;
					font-weight: normal;
					color: #fff;
					background-color: #182349;
					&:before {
						content: '';
						position: absolute;
						top: -6px;
						left: -18px;
						width: 0;
						height: 0;
						border-style: solid;
						border-width: 19px 18px 19px 0;
						border-color: transparent #182349 transparent transparent;
					}
					&:last-of-type {
						background-color: #1a9ce3;
						&:before {
							left: auto;
							right: -18px;
							transform: rotateY(180deg);
							border-color: transparent #1a9ce3 transparent transparent;
						}
					}
				}
				.body {
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					width: #{(580 - 110) / 2 + px};
					height: 214px;
					&:first-of-type {
						padding: 24px 16px 0;
						background-color: #e8ecf8;
						li:before { background-color: #182349; }
					}
					&:nth-of-type(2) {
						width: 110px;
						padding: 24px 10px 0;
						background-color: #e8e7e7;
						li:before { background-color: #7c7c7c; }
					}
					&:last-of-type {
						padding: 24px 16px 0;
						background-color: #e5f5ff;
						li:before { background-color: #1a9ce3; }
					}
				}
				li {
					position: relative;
					line-height: 1.4;
					margin: 0 0 6px 10px;
					font-size: 15px;
					color: #4a4a4a;
					&:before {
						content: '';
						position: absolute;
						top: 8px;
						left: -10px;
						width: 6px;
						height: 6px;
						border-radius: 100%;
					}
				}
			}
			.chart-info { max-width: 600px; }
		}
		&.popup2 {
			.c-axis { background-position: #{-566*.6735+px} #{-10*.6735+px}; }
			.c-chart { background-position: #{-10*.6735+px} #{-238*.6735+px}; }
			.c-text { background-position: #{-10*.6735+px} #{-10*.6735+px}; }
		}
		&.popup3 {
			.c-axis { background-position: #{-1122*.6735+px} #{-10*.6735+px}; }
			.c-chart { background-position: #{-566*.6735+px} #{-693*.6735+px}; }
			.c-text { background-position: #{-10*.6735+px} #{-693*.6735+px}; }
		}
		&.popup4 {
			.c-axis { background-position: #{-566*.6735+px} #{-238*.6735+px}; }
			.c-chart { background-position: #{-10*.6735+px} #{-466*.6735+px}; }
			.c-text { background-position: #{-566*.6735+px} #{-466*.6735+px}; }
		}
		&.popup5 {
			.c-axis { background-position: #{-562*.6735+px} #{-919*.6735+px}; }
			.c-chart { background-position: #{-1114*.6735+px} #{-919*.6735+px}; }
			.c-text { background-position: #{-10*.6735+px} #{-919*.6735+px}; }
		}
		&.popup6 {
			.c-axis { background-position: #{-1122*.6735+px} #{-236*.6735+px}; }
			.c-chart { background-position: #{-1122*.6735+px} #{-463*.6735+px}; }
			.c-text { background-position: #{-1122*.6735+px} #{-690*.6735+px}; }
		}
	}



	@media screen and (max-height: 850px) and (min-width: $mobileSize) {
		.popup_wrap {
			padding-top: 100px;
			.text { margin-bottom: 20px; }
			.advantage_box { margin-bottom: 20px; }
		}
	}

	@media screen and (max-width: $mobileSize) {
		.content {
			margin-top: 40px;
			ul { margin-bottom: 30px; }
			li {
				width: 336px;
				&:hover {
					.pic { transform: scale(1.2); }
					.wrap { box-shadow: 0 2px 10px rgba(#000, .05); }
				}
			}
			.wrap {
				width: 320px;
				height: 580px;
				border-radius: 10px;
				border: 1px solid #eaeaea;
			}
			.pic {
				width: 320px;
				height: 206px;
				background-size: 680px 677px;
				&.pic1 { background-position: -350px -462px; }
				&.pic2 { background-position: -350px -236px; }
				&.pic3 { background-position: -10px -10px; }
				&.pic4 { background-position: -350px -10px; }
				&.pic5 { background-position: -10px -462px; }
				&.pic6 { background-position: -10px -236px; }
			}
			.icon_wrap { height: 114px;}
			h4 { font-size: 30px; }
			p {
				margin-top: 16px;
				padding: 0 32px;
				font-size: 28px;
			}
			.arrow {
				right: 20px;
				bottom: 20px;
				svg {
					width: 40px;
					height: 40px;
				}
			}
		}
		.icon {
			background-size: 640px 115px;
			&.icon1 {
				width: 58/.6+px;
				height: 62/.6+px;
				background-position: -544px -10px;
			}
			&.icon2 {
				width: 58/.6+px;
				height: 63/.6+px;
				background-position: -217px -10px;
			}
			&.icon3 {
				width: 63/.6+px;
				height: 42/.6+px;
				background-position: -431px -10px;
			}
			&.icon4 {
				width: 53/.6+px;
				height: 56/.6+px;
				background-position: -10px -10px;
			}
			&.icon5 {
				width: 58/.6+px;
				height: 49/.6+px;
				background-position:-324px -10px;
			}
			&.icon6 {
				width: 58/.6+px;
				height: 50/.6+px;
				background-position: -110px -10px;
			}
		}

		.popup_wrap {
			padding-top: 80px;
			.title {
				margin-bottom: 10px;
				font-size: 36px;
			}
			p {
				max-width: 100%;
				font-size: 30px;
			}
			.text { margin-bottom: 6px; }
			.advantage_box { margin-bottom: 32px; }
			.advantage-title {
				width: 170px;
				margin-bottom: 14px;
				font-size: 27px;
				border-radius: 20px;
			}
			ul { max-width: 100%; }
			li {
				margin-bottom: 8px;
				font-size: 28px;
				svg {
					top: 4px;
					width: 29px;
					height: 29px;
				}
				span { margin-left: 32px; }
			}
			.advantage-info {
				font-size: 24px;
				font-weight: bold;
			}
			a { border-bottom: 1px solid; }
			.chart_box {
				width: 537px;
				height: 212px;
				margin-bottom: 20px;
			}
			.chart-title {
				margin-bottom: 6px;
				font-size: 30px;
			}
			.chart-tag {
				width: 125px;
				height: 137px;
				span {
					left: 24px;
					bottom: 36px;
					font-size: 36px;
				}
			}
			.chart { background-size: 1668px 1134px; }
			.chart-info {
				margin-bottom: 60px;
				font-size: 24px;
			}
			.chart-tag {
				top: -26px;
				right: -75px;
			}
			&.popup1 {
				.chart_box {
					width: 580px;
					margin: 30px auto;
					.title {
						font-size: 22px;
						&:before {
							top: -10px;
							left: -25px;
							border-width: 27.5px 25px 27.5px 0;
						}
						&:last-of-type:before { right: -25px; }
					}
					.body {
						flex-direction: column;
						align-items: end;
						justify-content: flex-start;
						width: #{(580 - 150) / 2 + px};
						height: auto;
						&:first-of-type { padding: 38px 0 0 34px; }
						&:nth-of-type(2) {
							width: 150px;
							padding: 38px 14px 0;
						}
						&:last-of-type { padding: 38px 0 20px 34px; }
					}
					li {
						margin: 0 0 10px 12px;
						font-size: 22px;
						&:before {
							top: 12px;
							left: -12px;
							width: 8px;
							height: 8px;
						}
					}
				}
			}
			&.popup2 {
				.c-axis { background-position: -566px -10px; }
				.c-chart { background-position: -10px -238px; }
				.c-text { background-position: -10px -10px; }
			}
			&.popup3 {
				.c-axis { background-position: -1122px -10px; }
				.c-chart { background-position: -566px -693px; }
				.c-text { background-position: -10px -693px; }
			}
			&.popup4 {
				.c-axis { background-position: -566px -238px; }
				.c-chart { background-position: -10px -466px; }
				.c-text { background-position: -566px -466px; }
			}
			&.popup5 {
				.c-axis { background-position: -562px -919px; }
				.c-chart { background-position: -1114px -919px; }
				.c-text { background-position: -10px -919px; }
			}
			&.popup6 {
				.c-axis { background-position: -1122px -236px; }
				.c-chart { background-position: -1122px -463px; }
				.c-text { background-position: -1122px -690px; }
			}
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.fk { display: block; }
		.content {
			margin-top: 40/750*100+vw;
			ul { margin-bottom: 30/750*100+vw; }
			li {
				width: 336/750*100+vw;
				&:hover {
					.wrap { box-shadow: 0 2/750*100+vw 10/750*100+vw rgba(#000, .05); }
				}
			}
			.wrap {
				width: 320/750*100+vw;
				height: 580/750*100+vw;
				border-radius: 10/750*100+vw;
				border: .5px solid #eaeaea;
			}
			.pic {
				width: 320/750*100+vw;
				height: 206/750*100+vw;
				background-size: 680/750*100+vw 677/750*100+vw;
				&.pic1 { background-position: #{-350/750*100+vw} #{-462/750*100+vw}; }
				&.pic2 { background-position: #{-350/750*100+vw} #{-236/750*100+vw}; }
				&.pic3 { background-position: #{-10/750*100+vw} #{-10/750*100+vw}; }
				&.pic4 { background-position: #{-350/750*100+vw} #{-10/750*100+vw}; }
				&.pic5 { background-position: #{-10/750*100+vw} #{-462/750*100+vw}; }
				&.pic6 { background-position: #{-10/750*100+vw} #{-236/750*100+vw}; }
			}
			.icon_wrap { height: 114/750*100+vw;}
			h4 { font-size: 30/750*100+vw; }
			p {
				margin-top: 16/750*100+vw;
				padding: 0 32/750*100+vw;
				font-size: 28/750*100+vw;
			}
			.arrow {
				right: 20/750*100+vw;
				bottom: 20/750*100+vw;
				svg {
					width: 40/750*100+vw;
					height: 40/750*100+vw;
				}
			}
		}
		.icon {
			background-size: 640/750*100+vw 115/750*100+vw;
			&.icon1 {
				width: 58/.6/750*100+vw;
				height: 62/.6/750*100+vw;
				background-position: #{-544/750*100+vw} #{-8/750*100+vw};
			}
			&.icon2 {
				width: 58/.6/750*100+vw;
				height: 63/.6/750*100+vw;
				background-position: #{-217/750*100+vw} #{-8/750*100+vw};
			}
			&.icon3 {
				width: 63/.6/750*100+vw;
				height: 42/.6/750*100+vw;
				background-position: #{-431/750*100+vw} #{-8/750*100+vw};
			}
			&.icon4 {
				width: 53/.6/750*100+vw;
				height: 56/.6/750*100+vw;
				background-position: #{-8/750*100+vw} #{-8/750*100+vw};
			}
			&.icon5 {
				width: 58/.6/750*100+vw;
				height: 49/.6/750*100+vw;
				background-position:-#{324/750*100+vw} #{-8/750*100+vw};
			}
			&.icon6 {
				width: 58/.6/750*100+vw;
				height: 50/.6/750*100+vw;
				background-position: #{-110/750*100+vw} #{-8/750*100+vw};
			}
		}
		.popup_wrap {
			padding-top: 80/750*100+vw;
			.title {
				margin-bottom: 10/750*100+vw;
				font-size: 36/750*100+vw;
			}
			p {
				max-width: 100%;
				font-size: 30/750*100+vw;
			}
			.text { margin-bottom: 6/750*100+vw; }
			.advantage_box { margin-bottom: 32/750*100+vw; }
			.advantage-title {
				width: 170/750*100+vw;
				margin-bottom: 14/750*100+vw;
				font-size: 27/750*100+vw;
				border-radius: 20/750*100+vw;
			}
			li {
				margin-bottom: 8/750*100+vw;
				font-size: 28/750*100+vw;
				svg {
					top: 4/750*100+vw;
					width: 29/750*100+vw;
					height: 29/750*100+vw;
				}
				span { margin-left: 32/750*100+vw; }
			}
			.advantage-info { font-size: 24/750*100+vw; }
			a { border-bottom: 1/750*100+vw solid; }
			.chart_box {
				width: 537/750*100+vw;
				height: 212/750*100+vw;
				margin-bottom: 20/750*100+vw;
			}
			.chart-title {
				margin-bottom: 6/750*100+vw;
				font-size: 30/750*100+vw;
			}
			.chart-tag {
				width: 125/750*100+vw;
				height: 137/750*100+vw;
				span {
					left: 24/750*100+vw;
					bottom: 36/750*100+vw;
					font-size: 36/750*100+vw;
				}
			}
			.chart { background-size: 1668/750*100+vw 1134/750*100+vw; }
			.chart-info {
				margin-bottom: 60/750*100+vw;
				font-size: 24/750*100+vw;
			}
			.chart-tag {
				top: -26/750*100+vw;
				right: -85/750*100+vw;
			}
			&.popup1 {
				.chart_box {
					width: 100%;
					margin: 30/750*100+vw auto;
					.title {
						font-size: 22/750*100+vw;
						&:before {
							top: -8/750*100+vw;
							left: -25/750*100+vw;
							border-width: 27.5/750*100+vw 25/750*100+vw 27.5/750*100+vw 0;
						}
						&:last-of-type:before { right: -25/750*100+vw; }
					}
					.body {
						width: calc((100% - #{180/750*100+vw}) / 2);
						&:first-of-type { padding: 38/750*100+vw 0 0 34/750*100+vw; }
						&:nth-of-type(2) {
							width: 180/750*100+vw;
							padding: 38/750*100+vw 20/750*100+vw 0;
						}
						&:last-of-type { padding: 38/750*100+vw 0 20/750*100+vw 34/750*100+vw; }
					}
					li {
						margin: 0 0 10/750*100+vw 12/750*100+vw;
						font-size: 22/750*100+vw;
						&:before {
							top: 12/750*100+vw;
							left: -12/750*100+vw;
							width: 8/750*100+vw;
							height: 8/750*100+vw;
						}
					}
				}
			}
			&.popup2 {
				.c-axis { background-position: #{-566/750*100+vw} #{-10/750*100+vw}; }
				.c-chart { background-position: #{-10/750*100+vw} #{-238/750*100+vw}; }
				.c-text { background-position: #{-10/750*100+vw} #{-10/750*100+vw}; }
			}
			&.popup3 {
				.c-axis { background-position: #{-1122/750*100+vw} #{-10/750*100+vw}; }
				.c-chart { background-position: #{-566/750*100+vw} #{-693/750*100+vw}; }
				.c-text { background-position: #{-10/750*100+vw} #{-693/750*100+vw}; }
			}
			&.popup4 {
				.c-axis { background-position: #{-566/750*100+vw} #{-238/750*100+vw}; }
				.c-chart { background-position: #{-10/750*100+vw} #{-466/750*100+vw}; }
				.c-text { background-position: #{-566/750*100+vw} #{-466/750*100+vw}; }
			}
			&.popup5 {
				.c-axis { background-position: #{-562/750*100+vw} #{-919/750*100+vw}; }
				.c-chart { background-position: #{-1114/750*100+vw} #{-919/750*100+vw}; }
				.c-text { background-position: #{-10/750*100+vw} #{-919/750*100+vw}; }
			}
			&.popup6 {
				.c-axis { background-position: #{-1122/750*100+vw} #{-236/750*100+vw}; }
				.c-chart { background-position: #{-1122/750*100+vw} #{-463/750*100+vw}; }
				.c-text { background-position: #{-1122/750*100+vw} #{-690/750*100+vw}; }
			}
		}
	}
</style>
