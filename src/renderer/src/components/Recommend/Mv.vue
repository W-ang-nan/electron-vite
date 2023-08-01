<template>
	<transition>
		<div class='con' v-if="Mvs.length > 0">
			<div class='tit'>
				<div>
					推荐MV
				</div>
				<el-icon>
					<ArrowRight />
				</el-icon>
			</div>
			<div class='tent'>
				<div class='mv' v-for='item in Mvs' :key='item.id' @click='toMvDetail(item.id)'>
					<div class='chart' @mouseenter='hover(item.id)' @mouseleave='hover(1)'>
						<!-- <img :src="item.picUrl" alt=""> -->
						<img v-lazy="item.picUrl" alt="">
						<div class='data' v-show='!(show === item.id)'>
							<svg t="1672472120478" class="icon" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="6867" width="12" height="12">
								<path
									d="M533.333333 896C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z m149.333334-320L469.333333 682.666667V384l213.333334 149.333333z m-68.266667 0L512 460.8v145.066667l102.4-72.533334z"
									fill="#ffffff" p-id="6868"></path>
							</svg>
							<div>{{ math(item.playCount) }}</div>
						</div>
						<svg v-show='show === item.id' t="1672478312764" class="icon icon1" viewBox="0 0 1024 1024"
							version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7406" width="50" height="50">
							<path
								d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
								fill="currentColor" p-id="7407"></path>
						</svg>
					</div>
					<div>{{ item.name }}</div>
					<div style='color: #94A3BF;'>{{ item.artistName }}</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMv } from '../../utils/api'
import type { Mv } from '../../interfaces/Mv'
import { math } from '../../utils/math'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(async () => {
	await getmvs()
})

const show = ref()

const hover = (id: number) => {
	// show.value = !show.value
	show.value = id
}

const Mvs = ref<Mv[]>([])
const getmvs = async () => {
	Mvs.value = await useMv()
	// console.log(Mvs)
}

const toMvDetail = (id: number) => {
	router.push({ path: "mvdetail", query: { id: id } })
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
	padding: 0 2%;
	margin-bottom: 1rem;

	.tit {
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		margin-bottom: 1%;
	}

	.tent {
		display: flex;
		// justify-content: space-between;
		justify-content: start;

		.mv {
			width: 25%;
			// flex: 1;
			height: 30%;
			font-size: 0.75rem;
			position: relative;
			box-sizing: border-box;
			margin: 0 1%;

			.chart {
				margin-bottom: 2%;

				.data {
					display: flex;
					align-items: center;
					justify-content: space-around;
					position: absolute;
					color: white;
					background-color: black;
					padding: 0 0.2rem;
					border-radius: 4rem;
					right: 2%;
					bottom: 22%;
				}

				.icon1 {
					position: absolute;
					right: 50%;
					top: 50%;
					transform: translate(50%, -100%);
				}

				svg path {
					fill: #FFFFFF;
				}

				svg:hover path {
					fill: #2DD4BF;
				}

				img {
					width: 100%;
					aspect-ratio: 16 / 9;
					border-radius: 4px;
				}

				img:hover {
					filter: blur(1px);
				}
			}
		}

		.mv:hover {
			transform: translate(0, -2px);
		}
	}
}
</style>