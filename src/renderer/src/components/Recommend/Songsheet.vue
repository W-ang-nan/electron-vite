<template>
	<transition>
		<div class='con' v-if="Songsheets.length > 0">
			<div class='tit'>
				<div>
					你的专属歌单
				</div>
				<el-icon>
					<ArrowRight />
				</el-icon>
			</div>
			<div class='tent'>
				<div v-for='item in Songsheets' class='top' :key='item.id' @click='push(item.id)'>
					<!-- <img :src="item.picUrl" :alt="item.name" @mouseenter.stop="Hoverclass(item)"
					@mouseleave.stop="Hoverclass"> -->
					<img v-lazy="item.picUrl" :alt="item.name" @mouseenter.stop="Hoverclass(item)"
						@mouseleave.stop="Hoverclass">
					<div class='name'>{{ item.name }}</div>
					<svg v-show='hover === item.id' @mouseenter.stop="Hoverclass(item)" t="1672389561177" class="icon icon1"
						viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2675" width="40"
						height="40">
						<path
							d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
							fill="currentColor" p-id="2676"></path>
					</svg>
					<div class='title' v-show='!(hover === item.id)'>
						<svg t="1672392970575" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="4200" width="12" height="12">
							<path
								d="M896 554.666667h-85.333333V426.666667a298.666667 298.666667 0 1 0-597.333334 0v128H128A85.426667 85.426667 0 0 0 42.666667 640v170.666667a85.426667 85.426667 0 0 0 85.333333 85.333333h106.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V426.666667c0-141.16 114.84-256 256-256s256 114.84 256 256v448a21.333333 21.333333 0 0 0 21.333333 21.333333h106.666667a85.426667 85.426667 0 0 0 85.333333-85.333333V640a85.426667 85.426667 0 0 0-85.333333-85.333333z"
								fill="#515151" p-id="4201"></path>
						</svg>
						<div>{{ math(item.playCount) }}</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSongsheet } from '../../utils/api'
import type { Personalized } from '../../interfaces/Personalized'
import { math } from '../../utils/math'
import { useRouter } from 'vue-router'
import { useGetPlayList } from '../../stores/playlist'

// 钩子
onMounted(async () => {
	Songsheet()
})

const a = useGetPlayList()
const router = useRouter()
const push = (id: number) => {
	router.push({ path: "/playlist", query: { id: id } })
	a.getPlayList(id)
}

const hover = ref()
const show = ref(false)
const Hoverclass = (item: any) => {
	show.value = !show.value
	hover.value = item.id
}

// 数据请求
const Songsheets = ref<Personalized[]>([])
const Songsheet = async () => {
	Songsheets.value = await useSongsheet()
	// console.log(Songsheets)
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

	.tit {
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		margin-bottom: 1%;
	}

	.tent {
		display: flex;
		justify-content: space-between;
		transition: 2s;

		.top {
			position: relative;
			width: 100px;
			height: 100px;

			img {
				width: 100%;
				height: 100%;
				border-radius: 10%;
				// 浮动时间
			}

			img:hover {
				filter: blur(1px);
			}

			.name {
				font-size: 0.75rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.icon1 {
				position: absolute;
				transform: translate(80%, -220%);
			}

			svg path {
				fill: #FFFFFF;
			}

			svg:hover path {
				fill: #2DD4BF;
			}

			.title {
				position: absolute;
				transform: translate(50%, -240%);
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: black;
				border-radius: 20px;
				width: 56%;
				color: white;
				font-size: 0.75rem;
				padding: 0 0.25rem;
			}
		}

		.top:hover {
			transform: translate(0, -2px);
			// 浮动方向距离
		}
	}
}
</style>