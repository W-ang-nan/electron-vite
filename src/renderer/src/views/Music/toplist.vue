<template>
	<transition>
		<div class='toplist' v-if="toplist.length > 0">
			<div class='official'>
				<h3>官方榜</h3>
				<div class='items'>
					<div class='item' v-for='item in toplist' :key='item.id' @click='push(item.id)'>
						<div class='left'>
							<!-- <img :src="item.coverImgUrl" @mouseenter="Hoverclass(item.id)" @mouseleave='Hoverclass(NaN)'> -->
							<img v-lazy="item.coverImgUrl" @mouseenter="Hoverclass(item.id)" @mouseleave='Hoverclass(NaN)'>
							<svg v-show='hover === item.id' t="1672389561177" class="icon icon1" viewBox="0 0 1024 1024"
								version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2675" width="40" height="40">
								<path
									d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
									fill="currentColor" p-id="2676"></path>
							</svg>
							<div class='play' v-show='hover === item.id'>
							</div>
							<div class='num' v-show='!(hover === item.id)'>
								<svg t="1672392970575" class="icon" viewBox="0 0 1024 1024" version="1.1"
									xmlns="http://www.w3.org/2000/svg" p-id="4200" width="12" height="12">
									<path
										d="M896 554.666667h-85.333333V426.666667a298.666667 298.666667 0 1 0-597.333334 0v128H128A85.426667 85.426667 0 0 0 42.666667 640v170.666667a85.426667 85.426667 0 0 0 85.333333 85.333333h106.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V426.666667c0-141.16 114.84-256 256-256s256 114.84 256 256v448a21.333333 21.333333 0 0 0 21.333333 21.333333h106.666667a85.426667 85.426667 0 0 0 85.333333-85.333333V640a85.426667 85.426667 0 0 0-85.333333-85.333333z"
										fill="#FFFFFF" p-id="4201"></path>
								</svg>
								<span>{{ math(item.playCount) }}</span>
							</div>
						</div>
						<div class='right'>
							<div class="title">{{ item.name }}</div>
							<div class='name' v-for='(i, index) in item.tracks'>{{ index + 1 }} {{ i.first }} - {{
								i.second
							}}
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class='characteristic'>
				<h3>特色榜</h3>
				<div class='summary'>
					<div class='t' v-for='item in toplist2' @click='push(item.id)'>
						<!-- <img :src="item.coverImgUrl" @mouseenter="Hoverclass2(item.id)" @mouseleave='Hoverclass2(NaN)'> -->
						<img v-lazy="item.coverImgUrl" @mouseenter="Hoverclass2(item.id)" @mouseleave='Hoverclass2(NaN)'>
						<svg v-show='hover2 === item.id' t="1672389561177" class="icon icon1" viewBox="0 0 1024 1024"
							version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2675" width="40" height="40">
							<path
								d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
								fill="currentColor" p-id="2676"></path>
						</svg>
						<div class='play' v-show='hover2 === item.id'>
						</div>
						<div class='name'>{{ item.name }}</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToplist } from '../../utils/api'
import { math } from '../../utils/math'
import { useRouter } from 'vue-router'
import { useGetPlayList } from '../../stores/playlist'
// import type { Toplist, Toplist2 } from '../../interfaces/Toplist'
const toplist:any = ref([])
const toplist2:any = ref([])
const hover = ref()
const hover2 = ref()

onMounted(async () => {
	const data = await useToplist()
	toplist.value = data.slice(0, 4)
	toplist2.value = data.slice(4)
})

const Hoverclass = (id: number) => {
	hover.value = id
}
const Hoverclass2 = (id: number) => {
	hover2.value = id
}

const a = useGetPlayList()
const router = useRouter()
const push = (id: number) => {
	router.push({ path: "/playlist", query: { id: id } })
	a.getPlayList(id)
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

.toplist {
	padding: 0 2%;

	.items {
		display: flex;
		align-items: center;

		.item {
			max-width: 25%;
			flex: 1;
			display: flex;
			margin-right: 2%;
			background-color: #F3F4F6;
			border-radius: 4px;
			padding-right: 2%;

			.left {
				position: relative;
				max-width: 110px;
				max-height: 110px;
				flex: 1;

				img {
					width: 100%;
					// max-width: 110px;
					aspect-ratio: 1 / 1;
					border-radius: 4px;
				}

				.num {
					font-size: 0.75rem;
					background-color: black;
					color: #FFFFFF;
					width: 53%;
					border-radius: 20px;
					position: absolute;
					right: 4%;
					bottom: 6%;
					text-align: center;
				}

				.play {
					position: absolute;
					left: 0;
					top: 0;
					height: 100%;
					width: 100%;
					background-color: black;
					opacity: 0.2;
					border-radius: 4px;
				}

				.icon1 {
					z-index: 999;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);

					path {
						fill: #FFFFFF;
					}
				}

				.icon1:hover {
					path {
						fill: #2DD4BF;
					}
				}
			}

			.right {
				margin-left: 4%;
				flex: 1;
				white-space: nowrap;
				min-width: 0;

				.title {
					font-weight: 700;
					margin: 1rem 0;
				}

				.name {
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 0.75rem;
					margin-bottom: 2%;
					line-height: 1rem;
				}
			}
		}
	}

	.summary {
		display: flex;
		flex-wrap: wrap;

		.t {
			width: 9%;
			margin-right: 1%;
			position: relative;

			img {
				width: 100%;
				border-radius: 4px;
			}

			.play {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 75%;
				background-color: black;
				opacity: 0.2;
				border-radius: 4px;
			}

			.icon1 {
				z-index: 999;
				position: absolute;
				left: 50%;
				top: 38%;
				transform: translate(-50%, -50%);

				path {
					fill: #FFFFFF;
				}
			}

			.name {
				font-size: 0.75rem;
			}
		}
	}
}
</style>