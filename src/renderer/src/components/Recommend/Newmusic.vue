<template>
	<transition>
		<div class='con' v-if="newmusics.length > 0">
			<div class='tit'>
				<div>
					推荐新音乐
				</div>
				<el-icon>
					<ArrowRight />
				</el-icon>
			</div>
			<div class='tent'>
				<div class='item' v-for='item in newmusics' :key='item.id' @click='play(item.id)'>
					<!-- <img :src="item.picUrl" alt=""> -->
					<img v-lazy="item.picUrl" alt="">
					<div class='name'>
						<div>{{ item.name }}</div>
						<div style='color: #94A3BF;'>{{ item.song.artists[0].name }}</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { useNewmusic } from '../../utils/api'
import type { Newmusic } from '../../interfaces/Newmusic'
import { ref, onMounted } from 'vue'
import { useMusic } from '../../stores/counter'

onMounted(async () => {
	await getnewmusic()
})

const a = useMusic()

const play = async (id: number) => {
	a.getmp3(id)
}


const newmusics = ref<Newmusic[]>([])
const getnewmusic = async () => {
	newmusics.value = await useNewmusic()
	// console.log(newmusics)
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
	padding: 1% 2%;
	margin-top: 1%;

	.tit {
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		margin-bottom: 1%;
	}

	.tent {
		display: flex;
		flex-flow: row wrap;

		.item {
			display: flex;
			margin-bottom: 1%;
			margin-right: 2%;
			width: 18%;
			height: 46px;
			border-radius: 4px;

			img {
				// width: 20%;
				height: 100%;
				aspect-ratio: 1/1;
				border-radius: 4px;
			}

			.name {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				font-size: 0.75rem;
				margin-left: 2%;
			}
		}

		.item:hover {
			background-color: #F5F5F4;
		}
	}
}
</style>