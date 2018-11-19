<template>
	<header>
		<a href="https://www.aberdeenstandard.com.tw" target="_blank"><div class="logo"></div></a>
		<div class="wrap">
			<div v-if="false" class="right-text" @click="popupOpen()">
				<p><svg viewBox="0 0 17 17"><path fill="none" stroke="#334D5E" stroke-width="1.433" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M16.284 14.779l-1.504 1.504-3.861-3.862 1.528-1.48z"/><circle fill="none" stroke="#334D5E" stroke-width="1.433" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" cx="7.114" cy="7.116" r="6.4"/></svg>銷售機構</p>
			</div>
			<div class="right-text">
				<p class="desktop">保管銀行-<span>台北富邦銀行</span></p>
				<p class="mobile">保管銀行<br><span>台北富邦銀行</span></p>
			</div>
			<div class="hamburger" @click="toggleMenu()">
				<span></span><span></span><span></span>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'ipoHeader',
		data() {
			return {
				open: false,
			};
		},
		methods: {
			toggleMenu: function() {
				this.$emit('mobileMenu');
			},
			popupOpen: function() {
				this.$emit('popupSalesOpen');
			},
		}
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	header {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		line-height: 5.25;
		padding: 18px 64px 0 40px;
		z-index: 5;
	}
	.logo {
		width: 180px;
		height: 63px;
		background-image: url(./../assets/img/logo.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.wrap {
		display: flex;
		align-items: center;
	}
	.right-text {
		// p {
		// 	line-height: 1;
		// 	font-size: 18px;
		// 	font-weight: bold;
		// 	color: #1b2a5a;
		// 	cursor: pointer;
		// }
		svg {
			vertical-align: text-top;
			width: 17px;
			height: 17px;
			margin-right: 5px;
		}
		//第一階段
		.mobile { display: none; }
		p {
			font-size: 16px;
			font-weight: bold;
			color: #8a8c8e;
		}
		span {
			font-size: 18px;
			color: #000;
		}
	}

	@media screen and(max-width: $mobileSize) {
		header {
			position: fixed;
			padding: 10px 42px 22px 30px;
			background-color: #fff;
		}
		.logo {
			width: 284px;
			height: 98px;
		}
		.header {
			.hamburger {
				display: inline-block;
				cursor: pointer;
				span {
					display: block;
					width: 62px;
					height: 10px;
					border-radius: 10px;
					background-color: #1D9BE1;
					transform-origin: 50% 50%;
					transition: all .3s;
					&:nth-child(2) { margin: 12px 0; }
				}
			}
		}
		.header.open {
			.hamburger {
				span {
					transform-origin: 50% 50%;
					&:nth-of-type(1) {
						transform: translateY(22px) rotate(135deg);
						transition: all .3s;
					}
					&:nth-of-type(2) {
						opacity: 0;
						transition: all .2s;
					}
					&:nth-of-type(3) {
						transform: translateY(-22px) rotate(-135deg);
						transition: all .3s;
					}
				}
			}
		}
		.right-text {
			// p {
			// 	margin-right: 45px;
			// 	font-size: 30px;
			// }
			svg {
				width: 30px;
				height: 30px;
				margin-right: 5px;
			}
			//第一階段
			.desktop { display: none; }
			.mobile { display: block; }
			p {
				line-height: 1.2;
				text-align: right;
				margin-right: 45px;
				font-size: 24px;
			}
			span { font-size: 30px; }
		}
	}

	@media screen and(max-width: $mobileSize2) {
		header { padding: 10/750*100+vw 42/750*100+vw 22/750*100+vw 30/750*100+vw; }
		.logo {
			width: 284/750*100+vw;
			height: 98/750*100+vw;
		}
		.header {
			.hamburger span {
				width: 62/750*100+vw;
				height: 10/750*100+vw;
				border-radius: 10/750*100+vw;
				&:nth-child(2) { margin: 12/750*100+vw 0; }
			}
		}
		.header.open {
			.hamburger span {
				&:nth-of-type(1) { transform: translateY(22/750*100+vw) rotate(135deg); }
				&:nth-of-type(3) { transform: translateY(-22/750*100+vw) rotate(-135deg); }
			}
		}
		.right-text {
			// p {
			// 	margin-right: 45/750*100+vw;
			// 	font-size: 30/750*100+vw;
			// }
			svg {
				width: 30/750*100+vw;
				height: 30/750*100+vw;
				margin-right: 5/750*100+vw;
			}
			//第一階段
			p {
				margin-right: 45/750*100+vw;
				font-size: 24/750*100+vw;
			}
			span { font-size: 30/750*100+vw; }
		}
	}
</style>
