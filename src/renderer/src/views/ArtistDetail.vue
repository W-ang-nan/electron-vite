<template>
	<div class="artistdetail">
		<transition>
			<div class="title" v-if="a.artist.cover">
				<div class="left">
					<!-- <img :src="a.artist.cover" /> -->
					<img v-lazy="a.artist.cover" />
				</div>
				<div class="right">
					<h3>{{ a.artist.name }}</h3>
					<div class="j">{{ a.artist.briefDesc }}</div>
					<div class="z">
						<span>单曲数：{{ a.artist.musicSize }}</span>
						<span>专辑数：{{ a.artist.albumSize }}</span>
						<span>MV数： {{ a.artistTitle.videoCount }}</span>
					</div>
				</div>
			</div>
		</transition>

		<transition>
			<div class="data" v-if="a.artistData">
				<el-button v-show='activeName == "first"' :icon="VideoPlay" round color='#059669'
					@click='playAll(a.artistData)'>播放全部</el-button>
				<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
					<el-tab-pane :label="`歌曲${a.artist.musicSize}`" name="first">
						<div class="tit">
							<span class="name">歌曲</span>
							<span class="album">专辑</span>
							<span class="time">时长</span>
						</div>
						<div v-for="(item, index) in a.artistData" :key="index" class="song" @mouseenter="showhover(index)"
							@mouseleave="showhover(NaN)">
							<div class="name">
								<div class="n">{{ item.name }}</div>
								<div class="icon" v-show="index == showindex">
									<svg @click="play(item.id, index)" t="1673072060709" class="icon"
										viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6819"
										width="14" height="14">
										<path
											d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z"
											fill="currentColor" p-id="6820"></path>
									</svg>
									<svg t="1673072219191" class="icon" viewBox="0 0 1024 1024" version="1.1"
										xmlns="http://www.w3.org/2000/svg" p-id="7967" width="14" height="14">
										<path
											d="M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z"
											p-id="7968" fill="currentColor"></path>
									</svg>
									<svg t="1673072297019" class="icon" viewBox="0 0 1024 1024" version="1.1"
										xmlns="http://www.w3.org/2000/svg" p-id="9888" width="14" height="14">
										<path
											d="M952.668146 646.354496l0-63.12786L638.032698 583.226636 638.032698 16.445242 382.906411 16.445242l0 566.980754L71.530208 583.425996l0 62.925479 440.567962 377.647518L952.668146 646.354496zM859.133756 646.354496 512.09817 939.920139l-346.021665-293.567657 283.07907 0L449.155575 79.915438l126.030181 0 0 566.43805L859.133756 646.353489z"
											p-id="9889" fill="currentColor"></path>
									</svg>
									<svg t="1673072353715" class="icon" viewBox="0 0 1024 1024" version="1.1"
										xmlns="http://www.w3.org/2000/svg" p-id="11973" width="14" height="14">
										<path d="M558.1 537.1" fill="#9CA3AF" p-id="11974"></path>
										<path d="M256.3 512.2m-63.8 0a63.8 63.8 0 1 0 127.6 0 63.8 63.8 0 1 0-127.6 0Z"
											fill="#9CA3AF" p-id="11975"></path>
										<path d="M512.3 512.2m-63.8 0a63.8 63.8 0 1 0 127.6 0 63.8 63.8 0 1 0-127.6 0Z"
											fill="#9CA3AF" p-id="11976"></path>
										<path d="M767.7 512.2m-63.8 0a63.8 63.8 0 1 0 127.6 0 63.8 63.8 0 1 0-127.6 0Z"
											fill="#9CA3AF" p-id="11977"></path>
										<path
											d="M512.1 114.7c53.7 0 105.7 10.5 154.7 31.2 47.3 20 89.8 48.7 126.4 85.2 36.5 36.5 65.2 79 85.2 126.4 20.7 49 31.2 101 31.2 154.7S899.1 618 878.4 666.9c-20 47.3-48.7 89.8-85.2 126.4-36.5 36.5-79 65.2-126.4 85.2-49 20.7-101 31.2-154.7 31.2s-105.7-10.5-154.7-31.2c-47.3-20-89.8-48.7-126.4-85.2-36.5-36.5-65.2-79-85.2-126.4-20.7-49-31.2-101-31.2-154.7s10.5-105.7 31.2-154.7c20-47.3 48.7-89.8 85.2-126.4 36.5-36.5 79-65.2 126.4-85.2 49-20.7 101-31.2 154.7-31.2m0-50C265 64.7 64.6 265.1 64.6 512.2S265 959.7 512.1 959.7s447.5-200.4 447.5-447.5S759.2 64.7 512.1 64.7z"
											fill="currentColor" p-id="11978"></path>
									</svg>
								</div>
							</div>
							<div class="album">{{ item.al.name }}</div>
							<div class="time">{{ time(item.dt / 1000) }}</div>
						</div>
					</el-tab-pane>
					<el-tab-pane :lazy='true' :label="`专辑${a.artist.albumSize}`" name="second">
						<keep-alive>
							<Album v-if="activeName == 'second'" :id="id"></Album>
						</keep-alive>
					</el-tab-pane>
					<el-tab-pane :lazy='true' :label="`视频${a.artistTitle.videoCount}`" name="three">
						<keep-alive>
							<Video v-if="activeName == 'three'" :id="id"></Video>
						</keep-alive>
					</el-tab-pane>
					<el-tab-pane :lazy='true' label="详情" name="four">
						<keep-alive>
							<Desc v-if="activeName == 'four'" :id='id'></Desc>
						</keep-alive>
					</el-tab-pane>
				</el-tabs>
			</div>
		</transition>

	</div>
</template>

<script setup lang="ts">
// 注入
import { VideoPlay } from '@element-plus/icons-vue'
import { ref, onMounted } from "vue";
import { useArtist } from "../stores/artist";
import { useRoute } from "vue-router";
import type { TabsPaneContext } from "element-plus";
import { time } from "../utils/time";
import { useMusic } from "../stores/counter";
import Album from "../components/Music/ArtistDetail/Album.vue";
import Video from "../components/Music/ArtistDetail/Video.vue";
import Desc from "../components/Music/ArtistDetail/Desc.vue";

const id = ref();
const route = useRoute();
id.value = route.query.id;
const a = useArtist();
const showindex = ref();
const music = useMusic();
// 选项卡
const activeName = ref("first");
onMounted(async () => {
	await a.getArtistTitle(id.value);
});
const handleClick = (tab: TabsPaneContext, event: Event) => {
	console.log(tab, event)
};
const play = (id: number, i: number) => {
	music.getmp3(id);
	music.index = i
};
const showhover = (index: number) => {
	showindex.value = index;
};
// 全部播放
const playAll = (songs: any) => {
	music.playAll(songs)
}
</script>

<style lang="less">
.artistdetail {
	padding: 1% 2%;

	.el-tabs__item.is-active {
		color: #34d399;
	}

	.el-tabs__nav {
		.el-tabs__active-bar {
			background-color: #34d399;
		}
	}

	.el-tabs__item:hover {
		color: #34d399;
	}

	.el-tabs__nav-wrap::after {
		height: 0;
	}

	.title {
		display: flex;
		align-items: center;

		.left {
			img {
				width: 11rem;
				height: 11rem;
				border-radius: 50%;
				object-fit: cover;
			}
		}

		.right {
			margin-left: 2%;
			color: #334155;

			.j {
				font-size: 0.75rem;
				// white-space: nowrap; //让文本不换行，在同一行里面
				overflow: hidden; //让超出的范围进行隐藏
				text-overflow: ellipsis;
			}

			.z {
				font-size: 0.75rem;

				span {
					margin-right: 4%;
				}
			}
		}
	}

	.data {
		.tit {
			display: flex;
			justify-content: space-between;
			font-size: 0.75rem;
			color: #94a3b8;

			.name {
				flex: 4;
			}

			.album {
				flex: 2;
			}

			.time {
				flex: 1;
			}
		}

		.song {
			display: flex;
			font-size: 0.75rem;
			padding: 1% 0;

			.name {
				flex: 4;
				display: flex;

				.n {
					flex: 5;
				}

				.icon {
					flex: 1;
					margin-right: 5%;

					svg path {
						fill: #94a3b8;
					}

					svg:hover path {
						fill: #2dd4bf;
					}
				}
			}

			.singer {
				flex: 2;
			}

			.album {
				flex: 2;
			}

			.time {
				flex: 1;
			}
		}

		.song:hover {
			background-color: #e5e7eb;
			border-radius: 0.5rem;
		}
	}
}
</style>
