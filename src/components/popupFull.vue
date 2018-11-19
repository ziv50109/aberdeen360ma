<template>
	<div class="popup_wrap">
		<div class="popup_content">
			<div @click="close()" class="close"></div>
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'popupFull',
		data() {
			return {

			};
		},
		methods: {
			close: function() {
				this.$emit('closePopup');
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
		padding: 0 40px;
		display: flex;
		align-items: center;
		background-color: rgba(#e9e9e9, .9);
		overflow: auto;
		z-index: 5;
	}
	.popup_content {
		position: relative;
		max-width: 1300px;
		width: 100%;
		min-height: 600px;
		margin: 0 auto;
		background-color: #fff;
	}
	.close {
		position: absolute;
		top: 24px;
		right: 24px;
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


	@media screen and (max-width: $mobileSize) {
		.popup_wrap {
			position: fixed;
			display: block;
			z-index: 5;
		}
		.popup_content {
			top: 10%;
			min-height: 640px;
		}
	}
	@media screen and (max-width: $mobileSize) and (max-height: 1024px) {
		.popup_wrap { padding: 10vh 40px; }
	}

	@media screen and (max-width: $mobileSize2) {
		.popup_wrap { padding: 0; }
		.popup_content {
			top: 0;
			min-height: 100vh;
		}
		.close {
			top: 40/750*100+vw;
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
	}
</style>
