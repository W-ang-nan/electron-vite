<template>
	<div class="mvs">
		<div v-for="item in mvs" class="mv" @click='tomvdetail(item.id)'>
			<!-- <img :src="item.imgurl" @mouseenter='hover(item.id)' @mouseleave='hover(NaN)' />
			 -->
			<img v-lazy="item.imgurl" @mouseenter='hover(item.id)' @mouseleave='hover(NaN)' />

			<div>{{ item.name }}</div>
			<svg @mouseenter='hover(item.id)' @mouseleave='hover(NaN)' v-show='show === item.id' t="1672478312764"
				class="icon icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7406"
				width="36" height="36">
				<path
					d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
					fill="currentColor" p-id="7407"></path>
			</svg>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useArtistDetailMv } from "../../../utils/api";
import { useRouter } from 'vue-router';
const props = defineProps(["id"]);
const mvs = ref();
const show = ref();
const router = useRouter()
onMounted(async () => {
	mvs.value = await useArtistDetailMv(props.id);
});
const hover = (index: number) => {
	show.value = index
}
const tomvdetail = (id: number) => {
	router.push({ path: "mvdetail", query: { id: id } })
}
</script>

<style lang="less">
.mvs {
	display: flex;
	flex-wrap: wrap;

	.mv {
		width: 18%;
		margin-right: 2%;
		font-size: 0.75rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-bottom: 1%;
		position: relative;

		img {
			aspect-ratio: 16 / 9; //用作图片比例
			width: 100%;
			border-radius: 0.5rem;
			object-fit: cover;
		}

		.icon1 {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);

			path {
				fill: #ffffff;
			}

			path:hover {
				fill: #34d399;
			}
		}
	}

	.mv:hover {
		color: #34d399;
	}
}
</style>
