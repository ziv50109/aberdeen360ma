<template>
	<div class="content_box">
		<h3>投資策略</h3>
		<div class="content">
			<svg :view-box.camel="`0, 0, 742, 766`">
				<g v-for="(item, index) in items"
					:class="`item item${index + 1} ${hoverIndex === index ? 'active' : ''}`"
					@mouseenter="hover(index)"
					@touchend="touchend(index)"
					@mouseleave="leave()">
						<image class="s"
							:width="item.imgSize[0]"
							:height="item.imgSize[1]"
							:transform="`translate(${item.imgTranslate[0]}, ${item.imgTranslate[1]})`"
							:xlink:href="item.xlink"/>
						<image class="b"
							:width="item.imgSize[0]"
							:height="item.imgSize[1]"
							:transform="`translate(${item.imgTranslate[0]}, ${item.imgTranslate[1]})`"
							:xlink:href="item.hoverXlink"/>
					<text :transform="`translate(${hoverIndex === index ? item.hoverTextTranslate[0] : item.textTranslate[0]}, ${hoverIndex === index ? item.hoverTextTranslate[1] : item.textTranslate[1]})`">
						<tspan>{{ item.text[0] }}</tspan>
						<tspan x="0" dy="1em">{{ item.text[1] }}</tspan>
					</text>
				</g>
				<g v-for="(item, index) in contents"
					:class="`svgcontent svgcontent${index + 1} ${hoverIndex === index ? 'active' : ''}`"
					transform="translate(201, 213)">
					<rect width="340" height="340" fill="transparent"/>
					<text class="title_wrap" x="50" transform="translate(130, 20)" text-anchor="middle">
						<tspan class="fzBig">{{ item.title[0] }}</tspan>
						<tspan x="1.2em" dy="1.4em">{{ item.title[1] }}</tspan>
					</text>
					<g class="lists" transform="translate(0, 120)">
						<circle cx="-10" cy="-0.4em" r="4"/>
						<text>
							<tspan v-for="(listA, index) in item.lists[0]" x="0" :dy="`${index === 0 ? '0' : '1.4em'}`">{{ listA }}</tspan>
						</text>
						<circle cx="-10" :cy="`${item.lists[0].length+1.6}em`" r="4"/>
						<text :y="`${item.lists[0].length+2}em`">
							<tspan v-for="(listB, index) in item.lists[1]" x="0" :dy="`${index === 0 ? '0' : '1.4em'}`">{{ listB }}</tspan>
						</text>
					</g>
				</g>
			</svg>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'page3',
		data() {
			return {
				hoverIndex: 0,
				items: [
					{
						xlink: require('@/assets/img/p3-r.png'),
						hoverXlink: require('@/assets/img/p3-r-h.png'),
						imgSize: [390, 566],
						imgTranslate: [345, 27],
						text: ['另類', '投資'],
						textTranslate: [590, 260],
						hoverTextTranslate: [604, 260],
					},
					{
						xlink: require('@/assets/img/p3-b.png'),
						hoverXlink: require('@/assets/img/p3-b-h.png'),
						imgSize: [648, 271],
						imgTranslate: [46, 492],
						text: ['股票'],
						textTranslate: [342, 674],
						hoverTextTranslate: [342, 680],
					},
					{
						xlink: require('@/assets/img/p3-l.png'),
						hoverXlink: require('@/assets/img/p3-l-h.png'),
						imgSize: [390, 566],
						imgTranslate: [7, 27],
						text: ['債券'],
						textTranslate: [90, 270],
						hoverTextTranslate: [80, 270],
					},
				],
				contents: [
					{
						title: ['20-50%', '另類投資'],
						lists: [
							['廣泛分散至一般投資人不易投資', '的另類資產投資領域：如基礎建', '設、飛機租賃等等'],
							['追求收益同時達到主要股債市超', '低或零相關性'],
						],
					},
					{
						title: ['20-50%', '股票'],
						lists: [
							['運用集團研究資源，篩選優質股', '票型基金與ETF等標的'],
							['經理人機動調整部位，賺取資本', '利得，強化基金整體報酬'],
						],
					},
					{
						title: ['20-50%', '債券'],
						lists: [
							['投資能提供較高收益，但評價水', '位尚未過熱或與升息關聯度低、', '與其他資產類別連動性低的債券', '資產'],
							['如新興債、亞債、前緣市場債、', '新興市場當地貨幣債等等'],
						],
					},
				],
				autoPlayTimer: undefined,
			};
		},
		mounted: function() {
			this.autoPlay();
		},
		methods: {
			hover: function(index) {
				clearInterval(this.autoPlayTimer);
				this.hoverIndex = index;
			},
			touchend: function(index) {
				this.hover(index);
				setTimeout(()=> {
					this.autoPlay();
				}, 1000);
			},
			leave: function() {
				this.autoPlay();
			},
			autoPlay: function() {
				this.autoPlayTimer = clearInterval(this.autoPlayTimer);
				this.autoPlayTimer = setInterval(()=> {
					this.hoverIndex += 1;
					if(this.hoverIndex > this.items.length-1) {
						this.hoverIndex = 0;
					}
				}, 3000);
			},
		},
	};
</script>
<style lang="scss" scoped>
	@import "./../assets/scss/variable";

	.content { margin-top: 20px; }
	svg {
		width: 742*.68+px;
		height: 766*.68+px;
	}
	.item {
		cursor: pointer;
		text {
			font-size: 28px;
			font-weight: bold;
			fill: #fff;
			transition: transform .3s;
		}
		.s, .b { transition: opacity .4s; }
		.s { opacity: 1; }
		.b { opacity: 0; }
		&.active {
			.s { opacity: 0; }
			.b { opacity: 1; }
			text { font-size: 32px; }
		}
	}

	.svgcontent {
		opacity: 0;
		transition: opacity .4s;
		&.active {
			opacity: 1;
		}
		.title_wrap {
			font-size: 32px;
			font-weight: bold;
			.fzBig {
				font-size: 36px;
			}
		}
		.lists {
			font-size: 26px;
			fill: #444;
		}
		&1 { .title_wrap, circle { fill: #ffa300; }	}
		&2 { .title_wrap, circle { fill: #008495; }	}
		&3 { .title_wrap, circle { fill: #f65275; }	}
	}

	@media screen and (max-width: $mobileSize) {
		svg {
			width: 742px;
			height: 766px;
		}
	}
	@media screen and (max-width: $mobileSize2) {
		svg {
			width: 742/750*100+vw;
			height: 766/750*100+vw;
		}
	}
</style>
