<template>
	<div class="category">
		<transition>
			<div class="tags" v-if="tags">
				<div class="tag" @click="getdata('全部')">全部</div>
				<div class="tag" v-for='item in tags' :key="item.id" @click='getdata(item.name)'>{{ item.name }}</div>
			</div>
		</transition>
		<transition>
			<div class="songs" v-if="data">
				<div class="title">全部歌单</div>
				<div class="song">
					<div v-for='item in data' class="item" :key="item.id" @click='toplaylist(item.id)'>
						<!-- <img :src="item.coverImgUrl"> -->
						<img v-lazy="item.coverImgUrl">
						<div>{{ item.name }}</div>
						<div class="nick">{{ item.creator.nickname }}</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTags, useHigh } from '../../utils/api';
import { useGetPlayList } from '../../stores/playlist';
import { useRouter } from 'vue-router';
const a = useGetPlayList()
const router = useRouter()
const tags = ref()
const active = ref('全部')
const data = ref()
onMounted(async () => {
	tags.value = await useTags()
	data.value = await useHigh(active.value)
})
const getdata = async (cat: string) => {
	data.value = await useHigh(cat)
}
const toplaylist = (id: number) => {
	router.push({ path: "playlist", query: { id: id } })
	a.getPlayList(id)
}
</script>

<style lang="less">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.category {
	padding: 1% 2%;

	.tags {
		display: flex;
		flex-wrap: wrap;

		.tag {
			width: 8%;
			background-color: #E6E6E6;
			text-align: center;
			line-height: 2rem;
			border-radius: 0.25rem;
			margin: 0 0.25rem 1rem 0;
		}

		.tag:hover {
			color: #34D399;
		}
	}

	.title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		margin-bottom: 1rem;
	}

	.song {
		display: flex;
		flex-wrap: wrap;

		.item {
			width: 13%;
			margin-right: 0.75rem;
			font-size: 0.75rem;

			img {
				border-radius: 0.5rem;
				width: 100%;
				aspect-ratio: 1 / 1;
			}

			.nick {
				color: #94A3B8;
			}
		}
	}

}
</style>