<template>
	<transition>
		<div class='sole' v-if="result.length > 0">
			<div class='tit'>
				<div>
					独家放送
				</div>
				<el-icon>
					<ArrowRight />
				</el-icon>
			</div>
			<div class='cent'>
				<div class='item' v-for='item in result' :key='item.id' @click='toMvDetail(item.id)'>
					<div>
						<!-- <img :src="item.picUrl"> -->
						<img v-lazy="item.picUrl">
					</div>
					<div class='name'>{{ item.name }}</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSole } from '../../utils/api'
import type { Sole } from '../../interfaces/Sole'
import { useRouter } from 'vue-router'
const router = useRouter()

const result = ref<Sole[]>([])

onMounted(async () => {
	result.value = await useSole()
})
const toMvDetail = (id: number) => {
	router.push({ path: "mvdetail", query: { id: id } })
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

.sole {
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
				border-radius: 4px;
			}

			.name {
				font-size: 0.75rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

		.item:last-child {
			padding: 0;
		}
	}
}
</style>