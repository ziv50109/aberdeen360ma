<template>
	<div class="drag_wrap">
		<div class="cr_box" ref="cr_box">
			<div class="cr_box-context" ref="ul"
				:style="`transform: translate3d(${cr_x}px,0,0);`"
				@mousedown="down($event)"
				@touchstart="down($event)"
				@mouseup="wrapUp()"
				@touchend="wrapUp()"
				@mouseleave="wrapUp()"
				@mousemove="crMove($event)"
				@touchmove="crMove($event)">
				<slot></slot>
			</div>
		</div>
		<div class="scrollbar_wrap" v-if="cr_range[1] < -1"
			@mouseup="wrapUp()"
			@touchend="wrapUp()"
			@mouseleave="wrapUp()"
			@mousemove="scrollBarMove($event)"
			@touchmove="scrollBarMove($event)">
			<div class="scrollBar_bg"
				:style="`width: ${scrollbarWrapSize[0]}px; height: ${scrollbarWrapSize[1]}px`">
				<div class="scrollbar"
					:style="`width: ${scrollBarWidth}px; transform: translate3d(${scrollBar_x}px,0,0)`"
					@mousedown="down($event)"
					@touchstart="down($event)">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'dragSlider',
		data() {
			return {
				all_startX: 0,
				canMove: false,
				crLast_to: 0,
				cr_x: 0,
				cr_range: [0, 0],
				scrollBarLast_to: 0,
				scrollBar_x: 0,
				scrollBar_range: [0, 0],
				scrollbarWrapSize: [102, 16],
			};
		},
		mounted() {
			this.init();
			window.addEventListener('resize', this.init);
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.init);
		},
		watch: {
			scrollBar_x: function(val) {
				if(val < 0) { this.scrollBar_x = 0; }
				if(val > this.scrollBar_range[1]) { this.scrollBar_x = this.scrollBar_range[1]; }
			},
			cr_x: function(val) {
				if(val > 0) { this.cr_x = 0; }
				if(val < this.cr_range[1]) { this.cr_x = this.cr_range[1]; }
			},
			canMove: function(val) {
				if(val === false) {
					this.all_startX = 0;
					this.scrollBarLast_to = this.scrollBar_x;
					this.crLast_to = this.cr_x;
				}
			},
		},
		computed: {
				scrollBarWidth: function() {
					return Math.round(this.$refs.cr_box.clientWidth / this.$refs.ul.offsetWidth * 0.9 * this.scrollbarWrapSize[0]);
				},
			},
		methods: {
			init: function() {
				if(window.innerWidth < 1025) {
					this.scrollbarWrapSize = [180, 16];
				} else {
					this.scrollbarWrapSize = [102, 16];
				}
				this.crLast_to = 0;
				//this.cr_x = 0;
				this.scrollBarLast_to = 0;
				//this.scrollBar_x = 0;
				this.cr_range[1] = this.$refs.cr_box.clientWidth - this.$refs.ul.offsetWidth;
				this.crLast_to = this.cr_x;
				this.scrollBar_range[1] = this.scrollbarWrapSize[0] - this.scrollBarWidth;
				this.scrollBarLast_to = this.scrollBar_x;
				this.$forceUpdate();
			},
			wrapUp: function() {
				this.canMove = false;
			},
			down: function(e) {
				this.canMove = true;
				this.all_startX = e.pageX || e.touches[0].pageX;
			},
			scrollBarMove: function(e) {
				if(!this.canMove) return;
				this.scrollBar_x = this.scrollBarLast_to + ((e.pageX || e.touches[0].pageX) - this.all_startX);
				this.cr_x = this.scale(this.scrollBar_x, this.scrollBar_range, this.cr_range);
			},
			crMove: function(e) {
				if(!this.canMove) return;
				this.cr_x = this.crLast_to + (e.pageX || e.touches[0].pageX) - this.all_startX;
				this.scrollBar_x = this.scale(this.cr_x, this.cr_range, this.scrollBar_range);
			},
			scale: function(num, domain, range) {
				return ((range[0]+range[1])) / ((domain[0]+domain[1])/num);
			},
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.cr_box {
		text-align: center;
		max-width: 100vw;
		margin: 0 auto;
		overflow: hidden;
		cursor: pointer;
		cursor: grab;
	}
	.cr_box-context { display: inline-block; }
	.scrollbar_wrap { padding: 0 0 50px; }
	.scrollBar_bg {
		width: 102px;
		height: 16px;
		margin: 0 auto;
		border-radius: 100px;
		background-color: #E0E0E0;
	}
	.scrollbar {
		height: 100%;
		border-radius: 100px;
		background-color: #141e50;
		cursor: pointer;
		cursor: grab;
	}

	@media screen and (max-width: $mobileSize2) {
		.scrollbar_wrap { padding: 0 0 50/750*100+vw; }
	}
</style>
