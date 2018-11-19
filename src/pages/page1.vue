<template>
	<div :class="`content_box ${bgShow ? 'popup_bg-show' : ''}`">
		<div class="fk" v-show="bgShow"></div>
		<h3>360投資術</h3>
		<div class="content">
			<p class="text">金融海嘯過後，全球進入低利環境，股債連動性大幅提升。股債平衡型資產配置已經無法充分達到多元分散的效果，投資人應尋求更多元的收益以及風險分散來源。</p>
			<h4>聚焦於真正的多元分散</h4>
			<p class="text">透過投資一系列彼此相關性低的資產，降低整體投資組合風險並獲取更多元的報酬來源。在投資人不斷尋求收益的大環境中，另類資產逐漸受到關注。另類投資泛指非傳統股債的投資標的，擁有提供穩定且較佳的收益、表現與主要股債市表現脫鉤的特性。投資領域非常廣，充滿各式各樣投資機會。</p>
			<div class="btn_wrap">
				<div class="icon icon1" @click="open(0)">
					<div class="animate animate1 b1">
						<div class="text">
							<p>收益<br>升級</p>
						</div>
					</div>
					<div class="animate animate1 b2"></div>
					<div class="animate animate1 b3"></div>
				</div>
				<div class="icon icon2" @click="open(1)">
					<div class="animate animate2 b1">
						<div class="text">
							<p>保護<br>升級</p>
						</div>
					</div>
					<div class="animate animate2 b2"></div>
					<div class="animate animate2 b3"></div>
				</div>
				<div class="icon icon3" @click="open(2)">
					<div class="animate animate3 b1">
						<div class="text">
							<p>跟著法人<br>投資</p>
						</div>
					</div>
					<div class="animate animate3 b2"></div>
					<div class="animate animate3 b3"></div>
				</div>
				<div class="icon icon4" @click="open(3)">
					<div class="animate animate4 b1">
						<div class="text">
							<p>多重資產<br>魅力</p>
						</div>
					</div>
					<div class="animate animate4 b2"></div>
					<div class="animate animate4 b3"></div>
				</div>
			</div>
			<h5 class="color-blue fwb tac animate5">你的多重資產投資組合還停留在股債的組合嗎？</h5>
		</div>
		<div clas="popup_wrap">
			<transition-group name="opacity" mode="out-in">
				<popup v-if="popups[0]"
					:key="0"
					:index="popupsIndex"
					:popupLength="popups.length"
					@close="close()"
					@ctrClick="ctrClick(arguments)"
					class="popup popup1">
					<popup-one></popup-one>
				</popup>
				<popup v-if="popups[1]"
					:key="1"
					:index="popupsIndex"
					:popupLength="popups.length"
					@close="close()"
					@ctrClick="ctrClick(arguments)"
					class="popup popup2">
					<popup-two></popup-two>
				</popup>
				<popup v-if="popups[2]"
					:key="2"
					:index="popupsIndex"
					:popupLength="popups.length"
					@close="close()"
					@ctrClick="ctrClick(arguments)"
					class="popup popup3">
					<popup-three></popup-three>
				</popup>
				<popup v-if="popups[3]"
					:key="3"
					:index="popupsIndex"
					:popupLength="popups.length"
					@close="close()"
					@ctrClick="ctrClick(arguments)"
					class="popup popup4">
					<popup-four></popup-four>
				</popup>
			</transition-group>
		</div>
	</div>
</template>
<script>
	import popup from './../components/popupInside';

	import popupOne from './page1_popup1';
	import popupTwo from './page1_popup2';
	import popupThree from './page1_popup3';
	import popupFour from './page1_popup4';

	export default {
		name: 'page1',
		data() {
			return {
				popups: [false, false, false, false],
				popupsIndex: null,
				bgShow: false,
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
				this.$emit('openPopupInside');
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
			popup,
			popupOne,
			popupTwo,
			popupThree,
			popupFour,
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
		max-width: 660px;
		width: 100%;
		margin-top: 34px;
		padding: 0 10px;
	}
	h4 {
		margin: 15px 0 10px;
		text-align: center;
		font-size: 22px;
		font-weight: bold;
		color: #1b2a5a;
	}
	h5 {
		font-size: 18px;
		color: #1a9ce3;
		opacity: 0;
		animation-name: opacity;
		animation-duration: 1s;
		animation-fill-mode: forwards;
	}

	.btn_wrap {
		display: flex;
		justify-content: space-around;
		margin: 34px auto 54px;
	}
	$animationTime: 2s;
	.icon {
		position: relative;
		width: 228*.65+px;
		height: 189*.65+px;
		cursor: pointer;
		.text { margin-top: 40px; }
		p {
			text-align: center;
			line-height: 1.2;
			font-size: 16px;
			font-weight: bold;
			color: #fff;
		}
		.fz-b { font-size: 20px; }
	}
	.icon1 {
		.b1 { background-position: #{-506*.65+px} #{-10*.65+px}; }
		.b2 { background-position: #{-258*.65+px} #{-219*.65+px}; }
		.b3 { background-position: #{-10*.65+px} #{-219*.65+px}; }
	}
	.icon2 {
		.b1 { background-position: #{-258*.65+px} #{-428*.65+px}; }
		.b2 { background-position: #{-10*.65+px} #{-10*.65+px}; }
		.b3 { background-position: #{-506*.65+px} #{-219*.65+px}; }
	}
	.icon3 {
		.b1 { background-position: #{-754*.65+px} #{-219*.65+px}; }
		.b2 { background-position: #{-754*.65+px} #{-10*.65+px}; }
		.b3 { background-position: #{-506*.65+px} #{-428*.65+px}; }
	}
	.icon4 {
		.b1 { background-position: #{-10*.65+px} #{-428*.65+px}; }
		.b2 { background-position: #{-258*.65+px} #{-10*.65+px}; }
		.b3 { background-position: #{-754*.65+px} #{-428*.65+px}; }
	}
	.animate {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		background-image: url(./../assets/img/p1-icon.png);
		background-repeat: no-repeat;
		background-size: 992*.65+px 627*.65+px;
		animation-duration: $animationTime;
		animation-fill-mode: forwards;
	}
	.animate1 { animation-delay: .2s; }
	.animate2 { animation-delay: .6s; }
	.animate3 { animation-delay: 1s; }
	.animate4 { animation-delay: 1.4s; }
	.animate5 { animation-delay: 2s; }
	.b1 { animation-name: show3; }
	.b2 { animation-name: show2; }
	.b3 { animation-name: show1; }
	@keyframes show1 {
		0% { opacity: 0; }
		70%, 100% { opacity: 1; }
	}
	@keyframes show2 {
		0%, 10% { opacity: 0; }
		80%, 100% { opacity: 1; }
	}
	@keyframes show3 {
		0%, 20% { opacity: 0; }
		90%, 100% { opacity: 1; }
	}
	@keyframes opacity {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	.opacity {
		&-enter-to, &-leave { opacity: 1; }
		&-enter, &-leave-to { opacity: 0; }
		&-enter-active, &-leave-active { transition: opacity .44s; }
	}


	@media screen and (max-width: $mobileSize) {
		h4 {
			margin: 26px 0;
			font-size: 36px;
		}
		h5 {
			font-size: 30px;
			color: #141e50;
		}
		.btn_wrap {
			flex-direction: column;
			align-items: center;
			margin: 34px auto 0;
		}
		.icon {
			width: 228px;
			height: 189px;
			margin-bottom: 20px;
			.text { margin-top: 60px; }
			p { font-size: 28px; }
			.fz-b { font-size: 32px; }
		}
		.icon1 {
			.b1 { background-position: -506px -10px; }
			.b2 { background-position: -258px -219px; }
			.b3 { background-position: -10px -219px; }
		}
		.icon2 {
			.b1 { background-position: -258px -428px; }
			.b2 { background-position: -10px -10px; }
			.b3 { background-position: -506px -219px; }
		}
		.icon3 {
			.b1 { background-position: -754px -219px; }
			.b2 { background-position: -754px -10px; }
			.b3 { background-position: -506px -428px; }
		}
		.icon4 {
			.b1 { background-position: -10px -428px; }
			.b2 { background-position: -258px -10px; }
			.b3 { background-position: -754px -428px; }
		}
		.animate { background-size: 992px 627px; }
	}

	@media screen and (max-width: $mobileSize2) {
		.fk { display: block; }
		.content {
			max-width: 690/750*100+vw;
			margin-top: 34/750*100+vw;
			padding: 0;
		}
		h4 {
			margin: 26/750*100+vw 0;
			font-size: 36/750*100+vw;
		}
		h5 { font-size: 30/750*100+vw; }
		.btn_wrap { margin: 34/750*100+vw auto 0; }
		.icon {
			width: 228/750*100+vw;
			height: 189/750*100+vw;
			margin-bottom: 20/750*100+vw;
			.text { margin-top: 60/750*100+vw; }
			p { font-size: 28/750*100+vw; }
			.fz-b { font-size: 32/750*100+vw; }
		}
		.icon1 {
			.b1 { background-position: #{-506/750*100+vw} #{-10/750*100+vw}; }
			.b2 { background-position: #{-258/750*100+vw} #{-219/750*100+vw}; }
			.b3 { background-position: #{-10/750*100+vw} #{-219/750*100+vw}; }
		}
		.icon2 {
			.b1 { background-position: #{-258/750*100+vw} #{-428/750*100+vw}; }
			.b2 { background-position: #{-10/750*100+vw} #{-10/750*100+vw}; }
			.b3 { background-position: #{-506/750*100+vw} #{-219/750*100+vw}; }
		}
		.icon3 {
			.b1 { background-position: #{-754/750*100+vw} #{-219/750*100+vw}; }
			.b2 { background-position: #{-754/750*100+vw} #{-10/750*100+vw}; }
			.b3 { background-position: #{-506/750*100+vw} #{-428/750*100+vw}; }
		}
		.icon4 {
			.b1 { background-position: #{-10/750*100+vw} #{-428/750*100+vw}; }
			.b2 { background-position: #{-258/750*100+vw} #{-10/750*100+vw}; }
			.b3 { background-position: #{-754/750*100+vw} #{-428/750*100+vw}; }
		}
		.animate { background-size: 992/750*100+vw 627/750*100+vw; }
	}

</style>
