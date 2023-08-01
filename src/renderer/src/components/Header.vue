<template>
	<div style="-webkit-app-region: drag;width: 100%;height: 20px;"></div>
	<el-affix :offset="0">
		<div class='con'>
			<div class='input'>
				<el-icon class='icon' @click='router.go(-1)'>
					<ArrowLeft />
				</el-icon>
				<el-icon class='icon' @click='router.go(1)'>
					<ArrowRight />
				</el-icon>
				<el-popover placement="bottom" :width="240" trigger='click' ref="popoverRef">
					<template #reference>
						<div class='search'>
							<el-input id='inputbox' @focus='show1 = true' :prefix-icon="Search" v-model="input"
								placeholder="搜索音乐、MV、歌单" @input='getsearch' @blur='blur' />
						</div>
					</template>
					<div class='tent'>
						<el-scrollbar v-show='show1' class='t'>
							<div class='hotser'>热门搜索</div>
							<div v-for="(item, index) in ranking" :key="item.score" class='item'
								@click="getrankingdetails(item.searchWord)">
								<div class='name'>
									<span>{{ index + 1 + '.' }}</span>
									<span>{{ item.searchWord }}</span>
								</div>
								<div class='math'>
									{{ math(item.score) }}
								</div>
							</div>
						</el-scrollbar>
						<el-scrollbar v-show='!show1' class='t1'>
							<div v-for='order in rankingdetails.order'>
								<!-- 单曲 -->
								<div v-if='order == "songs"'>
									<div class='title'>{{ title(order) }}</div>
									<div v-for='song in rankingdetails.songs' @click='play(song.id)'>
										<div class='song'>
											<span style='color:#28D496'>{{ song.name }}</span>
											<span> -</span>
											<span>{{ song.artists[0].name }}</span>
										</div>
									</div>
								</div>
								<!-- 歌手 -->
								<div v-else-if='order == "artists"'>
									<div class='title'>{{ title(order) }}</div>
									<div v-for='artist in rankingdetails.artists' @click='toArtist(artist.id)'>
										<div class='artist'>
											<img :src="artist.img1v1Url">
											<span>{{ artist.name }}</span>
										</div>
									</div>
								</div>
								<!-- 专辑 -->
								<div v-else-if='order == "albums"'>
									<div class='title'>{{ title(order) }}</div>
									<div v-for='album in rankingdetails.albums' @click='toAlbum(album.id)'>
										<div class='song'>
											<span style='color:#28D496'>{{ album.name }}</span>
											<span> -</span>
											<span>{{ album.artist.name }}</span>
										</div>
									</div>
								</div>
								<!-- 歌单 -->
								<div v-else>
									<div class='title'>{{ title(order) }}</div>
									<div v-for='playlist in rankingdetails.playlists' @click='toPlaylist(playlist.id)'>
										<div class='artist'>
											<img :src="playlist.coverImgUrl">
											<span style='color:#28D496'>{{ playlist.name }}</span>
										</div>
									</div>
								</div>
							</div>
						</el-scrollbar>
					</div>
				</el-popover>
			</div>
			<!-- <div class='my'>
				<el-avatar :icon="UserFilled" :size='30' />
				<div class='h'>点击登录</div>
				<el-icon class='h'>
					<ChatDotSquare />
				</el-icon>
				<el-icon class='h'>
					<Star />
				</el-icon>
				<el-icon class='h'>
					<More />
				</el-icon>
			</div> -->
		</div>
	</el-affix>
</template>

<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useranking, userankingdetails } from '../utils/api'
import type { Ranking, Rankingdetails } from '../interfaces/Ranking'
import { math } from '../utils/math'
import { useRouter } from 'vue-router'
import { useMusic } from '../stores/counter'
import { useGetPlayList } from '../stores/playlist'

const router = useRouter()
const show1 = ref(false)
const music = useMusic()
const getplaylist = useGetPlayList()
const popoverRef = ref(null)
onMounted(async () => {
	await getRanking()
})

// 单曲触发播放
const play = (id: number) => {
	music.getmp3(id)
}
// 歌手
const toArtist = (id: number) => {
	router.push({ path: "/artistdetail", query: { id: id } })
}
// 
const toAlbum = (id: number) => {
	router.push({ path: "/albumdetail", query: { id: id } })
}
// 歌单触发
const toPlaylist = (id: number) => {
	router.push({ path: "/playlist", query: { id: id } })
	getplaylist.getPlayList(id)
}

// 失去焦点操作
const blur = () => {
	input.value = ''

}

// 搜索框搜索
const input = ref('')
const getsearch = async () => {
	if (input.value) {
		rankingdetails.value = await userankingdetails(input.value)
		show1.value = false
	} else {
		show1.value = true
	}
}

watch(show1, async () => {
	if (show1.value) {
		rankingdetails.value = []
	}
})


const ranking = ref<Ranking[]>([])
const getRanking = async () => {
	ranking.value = await useranking()
}


const rankingdetails = ref<Rankingdetails[] | any>([])
const getrankingdetails = async (keywords: string) => {
	rankingdetails.value = await userankingdetails(keywords)
	show1.value = false
	console.log(rankingdetails.value.order)
}
const title = (order: string) => {
	if (order == 'songs') {
		return '单曲'
	} else if (order == 'artists') {
		return '歌手'
	} else if (order == 'albums') {
		return '专辑'
	} else {
		return '歌单'
	}
}


</script>

<style scoped lang='less'>
.tent {
	.t1 {
		.title {
			padding: 1% 0 6% 0;
		}

		.song {
			font-size: 0.75rem;
			margin-bottom: 4%;
			padding: 1%;
		}

		.song:hover {
			background-color: #F1F5F9;
		}

		.artist {
			display: flex;
			align-items: center;
			font-size: 0.75rem;
			padding: 1%;

			img {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				margin-right: 4%;
			}
		}

		.artist:hover {
			background-color: #F1F5F9;
		}
	}

	.t {
		height: 300px;
		// position: absolute;
		// position: fixed;
		// left: 17%;
		// top: 7%;
		// z-index: 9999;
		// width: 15%;
		// height: 50%;
		// padding: 0.5rem;
		// border-radius: 4px;
		// box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
		// background: #ffffff;

		.hotser {
			color: #606266;
		}

		.item {
			display: flex;
			justify-content: space-between;
			padding-right: 4%;
			margin-top: 1rem;
			font-size: 0.75rem;
			color: #606266;

			.name:hover {
				color: #28D496;
			}

			.math {
				color: #FCA7A7;
			}
		}
	}
}

.con {
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;

	.input {
		// width: 20%;
		height: 8vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-left: 2%;


		.search {
			position: relative;
			width: 80%;

			:deep(.el-input__wrapper) {
				border-radius: 20px;
				background-color: #F1F5F9;
			}

			:deep(.el-input__wrapper.is-focus) {
				box-shadow: 0 0 0 1px #28D496;
			}
		}

		.icon:hover {
			color: #28D496;
		}
	}

	.my {
		width: 14%;
		font-size: 0.75rem;
		display: flex;
		// justify-content: space-between;
		align-items: center;

		.h:hover {
			color: #28D496;
		}
	}
}
</style>