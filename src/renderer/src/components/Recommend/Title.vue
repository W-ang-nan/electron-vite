<template>
	<transition>
		<div class='con' v-if="banners.length > 0">
			<swiper :slidesPerView="4" :spaceBetween="30" class="mySwiper">
				<swiper-slide v-for='item in banners' :key='item.bannerId'>
					<img :src="item.pic" @click='transmit(item.targetId)'>
					<!-- <img v-lazy="item.pic" @click='transmit(item.targetId)'> -->
				</swiper-slide>
			</swiper>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import { useBanner } from '../../utils/api'
import type { Banner } from '../../interfaces/Banner'
import { useMusic } from '../../stores/counter'

onMounted(async () => {
	await getBanner()
})
const a = useMusic()
const banners = ref<Banner[]>([])
const getBanner = async () => {
	banners.value = await useBanner()
	// console.log(banners)
}
const transmit = (id: number) => {
	a.getmp3(id)
}
</script>

<style scoped lang='less'>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.con {
	display: flex;
	flex-direction: column;
	// background: blue;
	padding: 0 2%;

}

.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;

	/* Center slide text vertically */
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}

.swiper-slide img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
}
</style>