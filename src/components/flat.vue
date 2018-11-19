<template>
	<div :class="`flat_wrap ${ hover ? 'rotate' : ''}`"
		@mouseenter="focus()"
		@mouseleave="blur()">
		<div class="flat_box">
			<div class="head_box">
				<slot name="head"></slot>
			</div>
			<div class="tail_box">
				<slot name="tail"></slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'flat',
		data() {
			return {
				hover: false,
				isFocus: false,
			};
		},
		methods: {
			focus: function() {
				this.hover = true;
				this.isFocus = true;
				this.unflip();
			},
			blur: function() {
				this.isFocus = false;
				this.unflip();
			},
			unflip: function() {
				if(this.isFocus) return;
				setTimeout(()=> {
					this.hover = false;
				}, 500);
			},
			close: function() {
				this.$emit('close');
			},
		}
	};
</script>
<style lang="scss" scoped>
	$perspective: 1000px;
	$perspective-ie: 500px;
	.flat_wrap {
		perspective: $perspective;
		cursor: pointer;
	}
	.head_box {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.flat_box {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		.head_box, .tail_box {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			backface-visibility: hidden;
			transition: all .5s;
		}
		//背面
		.tail_box {
			transform: rotateY(180deg);
			transform: perspective($perspective-ie) rotateY(180deg)\0;
		}
	}
	//旋轉動畫
	.rotate {
		.head_box {
			transform: rotateY(-180deg);
			transform: perspective($perspective-ie) rotateY(-180deg)\0;
		}
		.tail_box {
			transform: rotateY(0);
			transform: perspective($perspective-ie) rotateY(0)\0;
		}
	}
</style>
