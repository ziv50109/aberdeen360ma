<template>
	<div class="popup_wrap">
		<div class="popup_content">
			<div @click="close()" class="close"></div>
			<slot></slot>
			<div class="desktop">
				<div class="ctr ctr-l" v-show="index > 0" @click="prev()"><div class="icon"></div></div>
				<div class="ctr ctr-r" v-show="index < popupLength - 1" @click="next()"><div class="icon"></div></div>
			</div>
		</div>
		<div class="mobile">
			<div class="ctr ctr-l" v-show="index > 0" @click="prev()"><div class="icon"></div></div>
			<div class="ctr ctr-r" v-show="index < popupLength - 1" @click="next()"><div class="icon"></div></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'popupInside',
		props: {
			index: Number,
			popupLength: Number,
		},
		data() {
			return {
				cIndex: this.$props.index,
			};
		},
		mounted() {

		},
		methods: {
			close: function() {
				this.$emit('close');
				this.cIndex = null;
			},
			prev: function() {
				this.$emit('ctrClick', 0);
			},
			next: function() {
				this.$emit('ctrClick', 1);
			},
		}
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.popup_wrap {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background-color: #fff;
		z-index: 3;
	}
	.popup_content {
		position: relative;
		max-width: 730px;
		width: 100%;
		margin: 0 auto;
		padding: 0 40px;
	}
	.close {
		position: absolute;
		right: -20px;
		width: 40px;
		height: 40px;
		z-index: 2;
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

	.mobile { display: none; }
	.ctr {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		display: flex;
		align-items: center;
		padding: 15px;
		cursor: pointer;
		z-index: 1;
		&-l { left: -12%; }
		&-r { right: -12%; }
		.icon {
			width: 22px;
			height: 46px;
			background-image: url(./../assets/img/p-ctr.png);
			background-repeat: no-repeat;
			background-size: contain;
		}
		&-r .icon { transform: rotateY(180deg); }
	}

	@media screen and (max-width: 1460px) {
		.desktop { display: none; }
		.mobile { display: block; }
		.ctr {
			&-l { left: 0; }
			&-r { right: 0; }
		}
	}

	@media screen and (max-width: 1280px) and (min-width: $mobileSize) {
		.close { right: 10px; }
		.ctr { padding: 10/1280*100+vw; }
	}

	@media screen and (max-width: $mobileSize) {
		.popup_wrap {
			position: fixed;
			top: 0;
			height: 100vh;
			overflow: auto;
			z-index: 6;
		}
		.close {
			position: absolute;
			top: -46px;
			right: -130px;
			width: 60px;
			height: 60px;
			&:before, &:after {
				top: 16px;
				left: 4px;
				width: 58px;
				height: 13px;
			}
		}
		.ctr { padding: 10/1280*100+vw; }
	}

	@media screen and (max-width: $mobileSize) and (min-width: $mobileSize2) {
		.close {
			top: -56px;
			right: 0;
		}
	}

	@media screen and (max-width: $mobileSize2) {
		.popup_content {
			max-width: 730/750*100+vw;
			padding: 0 66/750*100+vw;
		}
		.close {
			top: -44/750*100+vw;
			right: 28/750*100+vw;
			width: 60/750*100+vw;
			height: 60/750*100+vw;
			&:before, &:after {
				top: 16/750*100+vw;
				left: 4/750*100+vw;
				width: 58/750*100+vw;
				height: 13/750*100+vw;
			}
		}
		.ctr { padding: 5/750*100+vw; }
	}
</style>
