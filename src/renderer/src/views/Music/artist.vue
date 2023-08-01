<template>
	<div class='artist'>
		<div class='items'>
			<!-- <div class='item'>
				<span>语种：</span>
				<Tab :types='area' @artists='getArtists'></Tab>
			</div>
			<div class='item'>
				<span>分类：</span>
				<Tab :types='type' @artists='getArtists'></Tab>
			</div>
			<div class='item'>
				<span>筛选：</span>
				<Tab :types='initial' @artists='getArtists'></Tab>
			</div> -->
			<div class='item' v-for="item in tabs" :key="item.id">
				<span>{{ item.name }}</span>
				<Tab :types='item.type' @artists='getArtists'></Tab>
			</div>
		</div>
		<transition>
			<div class='datas' v-if="artist">
				<div v-for='item in artist' class='data' @click='Artists(item.id)' :key="item.id">
					<!-- <img :src="item.img1v1Url" alt=""> -->
					<img v-lazy="item.img1v1Url" alt="">
					<div>{{ item.name }}</div>
				</div>
				<div class="loading" @click="load" v-show="loading.showLode">加载更多</div>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { initial, type, area } from '../../utils/tabs'
import Tab from '../../components/Music/Tab.vue';
import { useArtist } from '../../stores/artist'
import { loadAdd } from '../../stores/loadingadd';

const tabs = ref([{ id: '1', name: "语种：", type: area }, { id: '2', name: "分类：", type: type }, { id: '3', name: "筛选：", type: initial }])
const artist = ref()
const a = useArtist()
const router = useRouter()
const getArtists = (artists: any) => {
	artist.value = artists
}
const Artists = (id: number) => {
	a.getArtistTitle(id)
	router.push({ path: "/artistdetail", query: { id: id } })
}

const loading = loadAdd()

const load = () => {
	loading.limitAdd += 10
}
</script>

<style lang='less'>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.artist {
	padding: 1% 2%;
	margin-bottom: 5rem;


	.items {
		.item {
			margin-bottom: 2%;
			align-items: center;
		}
	}

	.datas {
		display: flex;
		flex-wrap: wrap;

		.data {
			width: 9%;
			margin-right: 1%;
			margin-bottom: 1%;
			text-align: center;

			img {
				width: 100%;
				border-radius: 50%;
			}
		}

		.loading {
			display: flex;
			align-items: center;
			// justify-content: center;
			margin: 0 auto;
			color: #34d399;
		}
	}
}
</style>