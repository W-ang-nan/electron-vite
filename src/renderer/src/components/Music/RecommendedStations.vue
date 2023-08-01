<template>
	<transition>
		<div class='recstations' v-if="result.length > 0">
			<div class='tit'>
				<div>
					推荐电台
				</div>
				<el-icon>
					<ArrowRight />
				</el-icon>
			</div>
			<div class='cent'>
				<div class='item' v-for='item in result' :key='item.id'>
					<div>
						<!-- <img :src="item.picUrl" alt=""> -->
						<img v-lazy="item.picUrl" alt="">
					</div>
					<div class='name'>{{ item.name }}</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { useStations } from '../../utils/api'
import type { Stations } from '../../interfaces/Stations'
const result = ref<Stations[]>([])


onMounted(async () => {
	result.value = await useStations()
})


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

.recstations {
	padding: 1% 2%;

	.tit {
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		margin-bottom: 1%;
	}

	.cent {
		width: 100%;
		display: flex;

		.item {
			flex: 1;
			padding-right: 1%;

			img {
				width: 100%;
				// max-width: 175px;
				// height: 180px;
				object-fit: cover;
				border-radius: 4px;
				aspect-ratio: 1/1;
			}

			.name {
				font-size: 0.75rem;
				overflow: hidden;
				text-overflow: ellipsis;
				// white-space: nowrap;
			}
		}

		.item:last-child {
			padding: 0;
		}
	}
}
</style>