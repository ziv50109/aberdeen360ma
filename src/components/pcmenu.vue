<template>
	<div class="menu" @mouseleave="checkKvHover()">
		<svg style="display: none;">
			<defs>
				<path id="circle-path" d="M 76,352 a 276,276 0 1,1 0,1 z"/>
				<path id="circle-path-bottom" d="M 60,354 a292,292 0 1,0 584,0"/>
				<g id="menu_1-icon" transform="translate(329,0)">
					<rect class="rect" transform="translate(-50,-15)" width="144" height="100" fill="transparent" stroke="transparent"/><path class="icon" d="M37.963 18.501a18.8 18.8 0 0 1 .181 1.854H36.91a42.146 42.146 0 0 1-.964 1.521h2.197a18.176 18.176 0 0 1-4.237 10.964c-1.225-.706-2.617-1.313-4.124-1.816.232-.692.439-1.414.623-2.158-.44.47-.881.94-1.342 1.401-.559.56-1.129 1.1-1.7 1.628.157.039.322.07.478.11-1.664 4.115-4.234 6.894-7.166 7.308v-2.164c-.509.336-1.017.66-1.523.965v1.199a5.75 5.75 0 0 1-1.375-.397c-.93.512-1.851.952-2.762 1.354 1.569.401 3.203.638 4.897.638 5.632 0 10.701-2.362 14.304-6.137.34-.356.68-.716.993-1.097a19.714 19.714 0 0 0 4.494-12.558c0-1.701-.223-3.35-.627-4.925a33.693 33.693 0 0 1-1.113 2.31M25.274 38.58c1.597-1.479 2.964-3.599 3.996-6.156 1.321.431 2.544.939 3.622 1.53a18.284 18.284 0 0 1-7.618 4.626M4.616 33.674c.314.381.652.74.993 1.097a20.082 20.082 0 0 0 3.192 2.696 15.76 15.76 0 0 0 2.093-.498 18.317 18.317 0 0 1-3.96-3.015c1.078-.591 2.299-1.1 3.622-1.53a19.841 19.841 0 0 0 2.088 3.896c.451-.188.904-.381 1.364-.6-.765-1.057-1.45-2.301-2.022-3.715 2.186-.573 4.606-.914 7.166-.974v1.649a46.33 46.33 0 0 0 1.524-1.113v-.536c.213.006.42.024.633.033.572-.453 1.14-.925 1.705-1.414a35.54 35.54 0 0 0-2.338-.14v-7.635h9.113c-.006.266-.032.52-.045.78a48.334 48.334 0 0 0 1.735-2.302h-.17c-.072-3.324-.616-6.438-1.526-9.149 1.507-.502 2.899-1.108 4.124-1.815a18.177 18.177 0 0 1 1.862 2.694c.231-.743.39-1.445.498-2.11a19.961 19.961 0 0 0-1.058-1.416 21.382 21.382 0 0 0-.992-1.097c-3.604-3.774-8.672-6.136-14.304-6.136-5.631 0-10.7 2.362-14.304 6.136-.341.36-.679.72-.993 1.099C1.809 11.976.121 16.35.121 21.116s1.688 9.14 4.495 12.558M32.893 8.279c-1.078.59-2.301 1.1-3.622 1.529-1.032-2.557-2.399-4.676-3.996-6.155a18.313 18.313 0 0 1 7.618 4.626m-12.218-5.36c2.932.414 5.502 3.194 7.166 7.308-2.186.572-4.605.915-7.166.973V2.919zm0 9.801c2.739-.06 5.334-.44 7.682-1.083.847 2.563 1.36 5.535 1.432 8.719h-9.113V12.72zm-1.524 16.792c-2.739.062-5.333.442-7.681 1.085-.848-2.563-1.361-5.534-1.433-8.72h9.113v7.635zm0-9.157h-9.113c.072-3.184.584-6.156 1.433-8.719 2.347.643 4.942 1.023 7.681 1.083v7.636zm0-17.436V11.2c-2.56-.058-4.98-.401-7.166-.973 1.664-4.114 4.235-6.894 7.166-7.308m-4.6.734c-1.597 1.479-2.964 3.598-3.995 6.155-1.322-.43-2.544-.939-3.622-1.529a18.29 18.29 0 0 1 7.617-4.626M5.919 9.392c1.226.707 2.618 1.313 4.125 1.815-.91 2.711-1.455 5.825-1.527 9.149H1.683A18.166 18.166 0 0 1 5.919 9.392m2.598 12.485c.073 3.325.617 6.438 1.527 9.147-1.508.503-2.9 1.11-4.125 1.816a18.175 18.175 0 0 1-4.236-10.964h6.834zM13.34 39.333c4.77-1.867 9.973-5.469 14.647-10.143 4.672-4.674 8.275-9.876 10.144-14.648 1.781-4.556 1.775-8.253.047-10.566l1.57-.417 1.131-.3-2.018-.848-1.689-.707L33.335.092l1.611 3.837.776 1.849.567 1.349.213.509.66-2.485c1.178 1.903 1.032 5.049-.452 8.838-1.791 4.581-5.271 9.597-9.799 14.126-4.529 4.528-9.547 8.01-14.128 9.801-2.113.827-4.022 1.232-5.63 1.23-1.677-.001-3.028-.445-3.926-1.343-1.121-1.12-1.538-2.939-1.265-5.224A21.428 21.428 0 0 1 .807 30.52c-.889 3.643-.451 6.565 1.342 8.358 1.203 1.202 2.904 1.806 4.993 1.806h.004c1.804-.001 3.892-.45 6.194-1.351"/>
				</g>
				<g id="menu_2-icon" transform="translate(640,230) rotate(69,19,21)">
					<rect class="rect" transform="translate(-50,-15)" width="150" height="100" fill="transparent" stroke="transparent"/><path class="icon" fill="none" stroke-width="1.601" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M14.645 30.839c-.423-6.514-5.467-3.217-6.047-12.066-.367-5.585 4.823-10.135 10.776-10.135 5.951 0 11.172 4.552 10.776 10.136-.537 7.549-4.282 6.026-5.653 9.974M14.809 38.605l9.71-2.547M14.809 34.944l9.71-2.55M14.809 31.28l9.71-2.546M22.844 37.423c0 1.666-1.554 3.018-3.467 3.018-1.208 0-2.271-.54-2.893-1.353M19.707 1.559v3.264M31.55 6.072l-2.308 2.309M36.931 18.786h-3.264M31.08 30.971l-2.309-2.309M7.667 6.072l2.308 2.309M1.814 18.12h3.265M7.195 30.971l2.308-2.308M19.374 11.698v2.278M19.374 23.905v2.274M22.672 15.162c-1.052-.348-1.994-.675-2.942-.783-5.113-.574-5.769 4.579-.327 4.561 5.288-.017 4.789 5.14-.333 4.561-.95-.108-1.894-.438-2.936-.782"/>
				</g>
				<g id="menu_3-icon" transform="translate(544,600) rotate(48,21.5,21.5)"><rect class="rect" transform="translate(-50,-18)" width="100" height="120" fill="transparent" stroke="transparent"/><g class="icon" transform="translate(-18,12)"><circle fill="none" stroke-width="2.101" stroke-miterlimit="22.926" cx="21.5" cy="21.501" r="20.45"/><path fill="none" stroke-width="2.101" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22.926" d="M21.5 4.599v3.173M4.598 21.5h3.174M21.5 38.403v-3.174M38.402 21.5h-3.174M19.997 16.144l3.035-2.933 3.034-2.933L29.1 7.347l-.766 4.145-.767 4.145-.765 4.145a13.37 13.37 0 0 1-3.8 7.077L19.97 29.79l-3.036 2.935-3.033 2.931.766-4.145.764-4.144.766-4.146a13.365 13.365 0 0 1 3.8-7.077zM17.497 19.368l8.006 4.266"/></g></g>
				<g id="menu_4-icon" transform="translate(138,594) rotate(-88,22.5,22.5)">
					<rect class="rect" transform="translate(-20,-36) rotate(34,50,60)" width="100" height="120" fill="transparent" stroke="transparent"/><path class="icon" fill="none" stroke-width="1.561" stroke-miterlimit="10" d="M7.064 39.848l-.181 1.456c-.071.565.33 1.075.895 1.144l1.617.2a1.027 1.027 0 0 0 1.147-.892l.182-1.453a6.978 6.978 0 0 0 3.292-1.392l1.179.885c.454.342 1.1.25 1.44-.2l.983-1.295a1.022 1.022 0 0 0-.201-1.435l-1.179-.883a6.922 6.922 0 0 0 .443-3.535l1.354-.569a1.02 1.02 0 0 0 .547-1.341l-.635-1.496a1.033 1.033 0 0 0-1.351-.544l-1.359.574a7.048 7.048 0 0 0-2.854-2.143l.182-1.46a1.027 1.027 0 0 0-.895-1.142l-1.618-.198a1.03 1.03 0 0 0-1.148.891l-.181 1.454a7.015 7.015 0 0 0-3.293 1.392l-1.177-.885a1.036 1.036 0 0 0-1.442.2l-.982 1.295a1.022 1.022 0 0 0 .201 1.435l1.178.885a6.917 6.917 0 0 0-.441 3.534l-1.356.57a1.022 1.022 0 0 0-.547 1.342l.637 1.492c.22.521.824.766 1.349.544l1.359-.572a7.029 7.029 0 0 0 2.855 2.142zM28.786 40.488l-.241 1.938a1.364 1.364 0 0 0 1.191 1.52l2.151.264a1.367 1.367 0 0 0 1.527-1.184l.239-1.934a9.278 9.278 0 0 0 4.382-1.851l1.565 1.176a1.373 1.373 0 0 0 1.919-.266l1.306-1.72a1.36 1.36 0 0 0-.268-1.91l-1.566-1.176a9.196 9.196 0 0 0 .588-4.699l1.803-.76a1.358 1.358 0 0 0 .726-1.784l-.846-1.986a1.37 1.37 0 0 0-1.794-.723l-1.808.762a9.38 9.38 0 0 0-3.796-2.852l.24-1.937a1.36 1.36 0 0 0-1.191-1.519l-2.15-.265a1.363 1.363 0 0 0-1.525 1.183l-.241 1.935a9.287 9.287 0 0 0-4.382 1.85l-1.565-1.176a1.378 1.378 0 0 0-1.92.268l-1.305 1.72a1.358 1.358 0 0 0 .268 1.908l1.566 1.178a9.18 9.18 0 0 0-.588 4.697l-1.802.761a1.36 1.36 0 0 0-.728 1.785l.846 1.985a1.372 1.372 0 0 0 1.794.724l1.809-.763a9.382 9.382 0 0 0 3.796 2.851zM32.258 15.207l1.244.791a1.037 1.037 0 0 0 1.423-.313l.875-1.367a1.02 1.02 0 0 0-.312-1.415l-1.243-.785a6.917 6.917 0 0 0 .159-3.559l1.308-.676c.505-.261.701-.88.439-1.381l-.752-1.44a1.03 1.03 0 0 0-1.386-.438l-1.311.677a6.977 6.977 0 0 0-3.014-1.918l.066-1.464A1.026 1.026 0 0 0 28.77.852L27.142.779a1.029 1.029 0 0 0-1.074.979l-.066 1.465a7.077 7.077 0 0 0-3.173 1.641l-1.244-.791a1.03 1.03 0 0 0-1.422.313l-.876 1.366a1.02 1.02 0 0 0 .314 1.414l1.241.789a6.897 6.897 0 0 0-.158 3.557l-1.308.675a1.023 1.023 0 0 0-.44 1.382l.751 1.438a1.03 1.03 0 0 0 1.388.437l1.31-.674a6.981 6.981 0 0 0 3.014 1.917l-.064 1.463a1.022 1.022 0 0 0 .98 1.068l1.629.073a1.028 1.028 0 0 0 1.075-.978l.065-1.467a7.081 7.081 0 0 0 3.174-1.639zM29.666 11.628a2.634 2.634 0 0 0-.522-3.704 2.666 2.666 0 0 0-3.721.518 2.636 2.636 0 0 0 .521 3.705 2.668 2.668 0 0 0 3.722-.519zM11.846 34.982a2.636 2.636 0 0 0-.521-3.704 2.665 2.665 0 0 0-3.722.518 2.638 2.638 0 0 0 .519 3.706 2.668 2.668 0 0 0 3.724-.52zM34.693 31.567a2.386 2.386 0 0 0-2.699-2.024 2.376 2.376 0 0 0-2.036 2.683 2.387 2.387 0 0 0 2.699 2.027 2.383 2.383 0 0 0 2.036-2.686z"/>
				</g>
				<g id="menu_5-icon" transform="translate(26,228) rotate(-74,18.5,21)">
					<rect class="rect" transform="translate(-20,-42) rotate(20,50,70)" width="100" height="140" fill="transparent" stroke="transparent"/><path class="icon" fill="none" stroke-width="2.323" stroke-linejoin="round" stroke-miterlimit="10" d="M31.219 1.167H5.781c-2.553 0-4.625 2.091-4.625 4.667v30.333c0 2.578 2.072 4.666 4.625 4.666h15.287a2.29 2.29 0 0 0 1.562-.613l12.463-11.526a2.342 2.342 0 0 0 .751-1.719V5.833c0-2.576-2.07-4.666-4.625-4.666zM21.969 40.833v-8.166c0-2.579 2.069-4.667 4.625-4.667h8.672M6.938 9.333h18.5M6.938 33.833h9.25M6.938 25.667h13.875M6.938 17.5h23.125"/>
				</g>
			</defs>
		</svg>
		<svg :view-box.camel="`0, 0, 704, 704`">
			<g>
				<g v-for="(item, index) in items"
					:class="`item item${index + 1} ${hoverIndex === index ? 'active' : ''}`"
					@mouseenter="animationStart(index)"
					@mouseleave="mouseLeave(index)"
					@click="menuClick(index)">
					<use :xlink:href="`#menu_${index + 1}-icon`" class="menu_icon"></use>
					<text>
						<textPath :xlink:href="item.xlink" :start-offset.camel="item.startOffset">{{ item.text }}</textPath>
					</text>
				</g>
			</g>
			<path class="border" transform="translate(71, 82)" stroke-width="1.775" stroke-miterlimit="10" d="M509.524 110.002C472.797 57.607 418.552 18.391 355.292.855M491.787 453.287c42.5-49.038 68.219-113.019 68.219-183.005M173.068 528.475c33.061 13.765 69.332 21.366 107.379 21.366 39.558 0 77.197-8.217 111.304-23.036M1.083 259.749a285.536 285.536 0 0 0-.195 10.533c0 69.965 25.702 133.928 68.18 182.96M204.774 1.086C139.242 19.469 83.448 61.139 46.879 116.604"/>
			<g class="inside" transform="translate(123, 123)">
				<path class="inside" d="M 0,229 a 229,229 0 1,1 0,1 z"/>
				<image v-for="(item, index) in contents"
					:class="`img img${index + 1} ${hoverIndex === index ? 'active' : ''}`"
					:xlink:href="item.xlink"
					:width="item.size[0]"
					:height="item.size[1]"
					:transform="`translate(${item.translate[0]}, ${item.translate[1]})`"/>
				<text x="50" y="50" transform="translate(231, 256)">
					<tspan class="h1" x="0" text-anchor="middle">安本標準 360多重資產收益基金</tspan>
					<tspan class="h2" x="-2" text-anchor="middle" dy="37">(本基金配息政策可能致</tspan>
					<tspan class="h2" x="-2" text-anchor="middle" dy="37">配息來源為本金)</tspan>
				</text>
			</g>
			<g transform="translate(91, 91)">
				<path class="circle-arrow" :transform="`rotate(${hoverRotate}, 261, 261)`" d="M259.527 2.813l-5.488 8.703c-.73 1.16.103 2.673 1.475 2.673h10.973c1.372 0 2.206-1.513 1.476-2.673l-5.488-8.703a1.743 1.743 0 0 0-2.948 0"/>
			</g>
		</svg>
	</div>
</template>

<script>
	export default {
		name: 'ipomenus',
		props: {
			menuIndex: {
				type: Number,
				default: 0,
			},
		},
		data() {
			return {
				items: [
					{
						xlink: '#circle-path',
						startOffset: '22%',
						text: '360投資術',
						arrowDeg: 0,
					},
					{
						xlink: '#circle-path',
						startOffset: '41%',
						text: '另類投資小學堂',
						arrowDeg: 72,
					},
					{
						xlink: '#circle-path-bottom',
						startOffset: '65.6%',
						text: '投資策略',
						arrowDeg: 144,
					},
					{
						xlink: '#circle-path-bottom',
						startOffset: '25.8%',
						text: '團隊智慧',
						arrowDeg: 216,
					},
					{
						xlink: '#circle-path',
						startOffset: '2.2%',
						text: '基金小檔案',
						arrowDeg: 288,
					},
					{
						xlink: '',
						startOffset: 0,
						text: '',
						arrowDeg: 288,
					},
				],
				contents: [
					{
						xlink: require('@/assets/img/menu_1-b.png'),
						size: [201, 203],
						translate: [128, 72],
					},
					{
						xlink: require('@/assets/img/menu_2-b.png'),
						size: [252, 185],
						translate: [103, 70],
					},
					{
						xlink: require('@/assets/img/menu_3-b.png'),
						size: [263, 182],
						translate: [98, 74],
					},
					{
						xlink: require('@/assets/img/menu_4-b.png'),
						size: [232, 184],
						translate: [110, 72],
					},
					{
						xlink: require('@/assets/img/menu_5-b.png'),
						size: [248, 182],
						translate: [105, 74],
					},
					{
						xlink: require('@/assets/img/menu_5-b.png'),
						size: [248, 182],
						translate: [105, 74],
					},
				],
				nowIndex: 0,
				hoverIndex: 0,
				requestId: undefined,
				hoverRotate: 0,
				hoverRotateTemp: 0,
				endRotate: 0,
				speed: 500,
				speedTemp: 0,
				time: 0,
			};
		},
		mounted() {
			this.init();
		},
		watch: {
			menuIndex: function(val) {
				if(val !== null) {
					this.nowIndex = val;
					this.animationStart(this.nowIndex);
				}
			}
		},
		computed: {

		},
		methods: {
			init: function() {
				let index = this.nowIndex
				this.hoverIndex = index;
				this.hoverRotate = this.items[index].arrowDeg;
				this.speedTemp = this.speed;
			},
			roundDecimal: function(val, precision) {
				return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
			},
			easeOutQuad(t, b, c, d) {
				return -c * (t /= d) * (t - 2) + b;
			},
			_animationLoop: function() {
				if(this.time < this.speed) {
					// animation run
					this.hoverRotate = this.roundDecimal(this.easeOutQuad(
											this.time,
											this.hoverRotateTemp,
											(this.endRotate-this.hoverRotateTemp),
											this.speed), 4);
					this.time += 1;
					this.requestId = requestAnimationFrame(this._animationLoop);
				} else {
					//animation stop
					this.animationStop();
				}
			},
			animationStart: function(index) {
				//animation stop
				this.animationStop();
				//animation will start
				let newSpeed = Math.abs(index - this.hoverIndex) || 2;
				if(newSpeed <= 2) {
					this.speed = this.speedTemp * newSpeed / 16.67;
				} else {
					this.speed = this.speedTemp * newSpeed*0.8 / 16.67;
				}
				this.hoverRotateTemp = this.hoverRotate;
				let val = this.items[index].arrowDeg;
				this.hoverIndex = index;
				this.endRotate = val;
				//animation start
				this._animationLoop();

			},
			animationStop: function() {
				cancelAnimationFrame(this.requestId);
				this.requestId = undefined;
				this.time = 0;
			},
			menuClick: function(index) {
				this.nowIndex = index;
				this.$emit('changeindex', this.nowIndex);

				this.animationStart(this.nowIndex);
			},
			mouseLeave: function(index) {
				setTimeout(()=> {
					this.animationStart(this.nowIndex);
				}, 60);
			},
			checkKvHover: function() {
				this.$emit('changekvhover');
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.menu {
		width: 100%;
		max-width: 802px;
		width: 100%;
		padding: 45px;
	}
	svg {
		width: 100%;
		height: 100%;
		height: 712px\0;
	}
	text {
		font-family: Arial, "微軟正黑體", Microsoft JhengHei, sans-serif;
		font-size: 20px;
		font-weight: bold;
	}
	.h1, .h2 {
		line-height: 1.3;
		font-family: Arial, "微軟正黑體", Microsoft JhengHei, sans-serif;
		font-size: 28px;
		font-weight: bold;
		fill: #00a2e4;
	}
	.h2 { fill: #a2a2a2; }
	.item {
		cursor: pointer;
		&:first-of-type .menu_icon {
			fill: #1b2a5a;
			stroke: none;
		}
		.menu_icon {
			stroke: #1b2a5a;
			transition: all .3s;
		}
		text {
			fill: #1b2a5a;
			transition: fill .3s;
		}
	}
	.item.active {
		cursor: pointer;
		&:first-of-type .menu_icon {
			fill: #00a2e4;
			stroke: none;
		}
		.menu_icon { stroke: #00a2e4; }
		text { fill: #00a2e4; }
	}
	.img {
		opacity: 0;
		transition: opacity .4s;
		&.active { opacity: 1; }
	}
	.border {
		fill: none;
		stroke: #d9d9d9;
	}
	.inside { fill: #fff; }
	.circle-arrow { fill: #00a2e4; }


	@media screen and (max-width: 1366px) and (min-width: $mobileSize) {
		.menu { padding: 0; }
	}
</style>
