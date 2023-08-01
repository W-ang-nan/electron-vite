<template>
	<div class="albums">
		<div v-for="item in data" class="album" @click='toAlbumDetail(item.id)'>
			<!-- <img :src="item.blurPicUrl" /> -->
			<img v-lazy="item.blurPicUrl">
			<div>{{ item.name }}</div>
			<div>{{ dateTime(item.publishTime) }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useAlbum } from "../../../utils/api";
import { dateTime } from "../../../utils/time";
import type { hotAlbums } from "../../../interfaces/Album";
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps(["id"]);
const data = ref<hotAlbums[]>([]);

onMounted(async () => {
	data.value = await useAlbum(props.id);
});
watch(props, async () => {
	data.value = await useAlbum(props.id);
});
const toAlbumDetail = (id: number) => {
	router.push({ path: "albumdetail", query: { id: id } })
}
</script>

<style lang="less">
.albums {
	display: flex;
	flex-wrap: wrap;

	.album {
		width: 11.5%;
		margin-right: 1%;
		margin-bottom: 1%;
		font-size: 0.75rem;

		img {
			width: 100%;
			border-radius: 10px;
		}
	}
}
</style>
