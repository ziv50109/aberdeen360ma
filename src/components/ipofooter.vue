<template>
	<footer>
		<div @click="close()" class="close"></div>
		<div class="waring">
			<div class="href_box">
				<a href="https://www.aberdeenstandard.com/zh-tw/taiwan/privacy" target="_blank">隱私權保護</a><i></i><a href="https://www.aberdeenstandard.com.tw" target="_blank">回官網</a>
			</div>
			<p class="copyright_box">Copyright 2018 安本標準證券投資信託股份有限公司版權所有。</p>
			<p>附註：<span class="color-red fwb">債券類資產收益率為資料擷取當下之殖利率，股票指數與另類投資實例收益皆為彭博預估之股息收益率。</span>全球股票參考MSCI世界指數，全球投資級債參考彭博巴克萊全球複合債指數，全球高收債參考美銀美林全球高收益債指數，另類投資平均為學生宿舍實例GCP Student Living PLC、資產擔保債券實例Twentyfour Income Fund、英國社會基礎建設實例HICL Infrastructure Company Limited、再生能源基礎建設實例The Renewables Infrastructure Group、巨災債券指數Swiss Re CAT Bond Index、飛機租賃案例Amedeo Air 4 Plus、P2P貸款實例Funding Circle SME Income Fund、全球私募股權基金ETF PowerShares Global Listed PE ETF之平均。本文提及之個股僅作說明之用，非為個股之推薦。</p>
			<p class="fwb">【安本標準投信獨立經營管理】本文之意見或資訊經由安本標準證券投資信託股份有限公司（下稱「安本標準投信」）提供，僅供參考之用。所有資訊於發佈時確信為真，資訊可能隨時變更，安本標準投信將不會另行通知。安本標準投信茲此聲明投資人參閱本文提供之意見或資訊，應自行了解判斷。</p>
			<p class="fwb">本基金經金融監督管理委員會核准，惟不表示絕無風險。基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。基金配息率不代表基金報酬率，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。此外，匯率走勢亦可能影響所投資之海外資產而使資產價值變動。另，基金投資涉及投資於新興市場部分，因其波動性與風險程度可能較高，且其政治與經濟情勢穩定度可能低於已開發國家，也可能使資產價值受不同程度之影響，投資人申購前應詳閱基金公開說明書。有關基金應負擔之費用（含分銷費用）已揭露於基金之公開說明書中，投資人可至公開資訊觀測站中查詢。本文提及之經濟走勢預測不必然代表基金之績效，基金投資風險請詳閱基金公開說明書。投資人因不同時間進場，將有不同之投資績效，過去之績效亦不代表未來績效之保證。基金的配息可能由基金的收益或本金中支付或配息前未先扣除應負擔之相關費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。本公司於網站備有近12個月內由本金支付配息之相關資料供投資人查詢。</p>
			<p>資料來源：摩根士丹利資本國際（MSCI）。相關之MSCI資料僅供客戶內部使用，不可以任何其他形式進行複製或轉發，也不可作為任何金融工具或產品或指數的基準或成分。MSCI資訊並無意作為任何投資建議或推薦，亦不得據其內容以作成（或不作成）任何投資決定或給予投資建議。過往資料及分析不得被視為任何未來表現分析之預測或預估之保證。MSCI係以「假設不變」之前提提供資料，故資料使用者須承擔因使用本資料作成之任何其他用途所導致之所有責任。MSCI、其聯屬公司及參與編製、計算或製作任何MSCI資料或與之有關的任何其他人士（統稱「MSCI」人士），已明確表示不就此資料作出任何保證（包括但不限於來源、準確性、完整性、及時性、合法性、商用性及特定用途之適合性等各方面之保證）。除前述之外，MSCI人士在任何情況下亦均不會就任何直接、間接、特別、連帶、懲罰性、接續性（包括且不限於損失獲利）或任何其他損失承擔任何責任（<a href="https://www.msci.com/" target="_blank">www.msci.com</a>）。</p>
			<p class="ver">ASITW2018-0038</p>
			<div class="info_box">
				<a href="" target="_blank">安本標準證券投資信託股份有限公司</a>
				<i></i>
				<a href="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E6%9D%BE%E4%BB%81%E8%B7%AF101%E8%99%9F8%E6%A8%93" target="_blank">地址: 台北市信義區松仁路101號8樓</a>
				<i></i>
				<a href="tel:0287224500" target="_blank">電話: (02) 8722-4500</a>
				<i></i>
				<a href="fax:0287224501" target="_blank">傳真: (02) 8722-4501</a>
			</div>
		</div>
		<div class="scroll-icon white"></div>
	</footer>
</template>
<script>

	export default {
		name: 'ipofooter',
		data() {
			return {
				toggleArr: [false, false, false],
			};
		},
		methods: {
			toggle: function(i) {
				this.toggleArr[i] = !this.toggleArr[i];
				this.$forceUpdate();
			},
			close: function() {
				this.$emit('footerClose');
			},
		},

	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";
	@import "./../assets/scss/pages";

	footer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: auto;
		display: flex;
		align-items: center;
		height: 100%;
		min-height: 768px;
		background-color: #fff;
		z-index: 3;
	}
	.close {
		position: absolute;
		top: 122px;
		right: 86px;
		width: 40px;
		height: 40px;
		z-index: 1;
		&:before, &:after {
			content: '';
			position: absolute;
			top: 16px;
			left: 4px;
			width: 32px;
			height: 7px;
			background-color: #c4c4c4;
			transform: rotate(45deg);
		}
		&:after { transform: rotate(-45deg); }
	}
	.waring {
		position: relative;
		text-align: justify;
		max-width: 1430px;
		width: 100%;
		line-height: 1.7;
		margin: 3% auto 0;
		padding: 0 24px;
		font-size: 16px;
	}
	.href_box {
		a {
			color: #1a9ce3;
			border-bottom: 1px solid;
		}
	}
	.color-red { color: #f02e58; }
	i {
		vertical-align: text-top;
		display: inline-block;
		width: 1px;
		height: 14px;
		margin: 0 4px;
		background-color: #8a8c8e;
	}
	.info_box {
		font-size: 15px;
		color: #4d4d4d;
	}
	.ver {
		position: absolute;
		right: 24px;
		bottom: 0;
		font-size: 15px;
		color: #141e50;
	}

	@media screen and (max-width: 1100px) and (min-width: $mobileSize) {
		.waring { line-height: 1.5; }
	}

	@media screen and (max-width: $mobileSize) {
		footer { position: relative; }
		.close { display: none; }
		.waring {
			width: 100%;
			line-height: 1.7;
			margin: 5% auto 0;
			padding: 0 30px 40px;
			font-size: 26px;
		}
		.href_box {
			a {
				font-weight: bold;
				border-bottom: 1px solid;
			}
			i { opacity: 0; }
		}
		i {
			width: 2px;
			height: 24px;
			margin: 0 10px;
		}
		.info_box { font-size: 24px; }
		.ver {
			right: 24px;
			font-size: 24px;
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.waring {
			padding: 0 30/750*100+vw 40/750*100+vw;
			font-size: 26/750*100+vw;
		}
		.href_box {
			a { border-bottom: 1/750*100+vw solid; }
		}
		i {
			width: 2/750*100+vw;
			height: 24/750*100+vw;
			margin: 0 10/750*100+vw;
		}
		.info_box { font-size: 24/750*100+vw; }
		.ver {
			right: 24/750*100+vw;
			font-size: 24/750*100+vw;
		}
	}
</style>
