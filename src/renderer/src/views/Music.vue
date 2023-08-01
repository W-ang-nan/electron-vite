<template>
	<div class='music'>
		<h1 class='musictit'>音乐馆</h1>
		<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
			<el-tab-pane label="精选" name="Picked">
				<KeepAlive>
					<Picked v-if="activeName == 'Picked'"></Picked>
				</KeepAlive>
			</el-tab-pane>
			<el-tab-pane label="排行" name="Toplist" :lazy='true'>
				<KeepAlive>
					<Toplist v-if="activeName == 'Toplist'"></Toplist>
				</KeepAlive>
			</el-tab-pane>
			<el-tab-pane label="歌手" name="Artist" :lazy='true'>
				<keep-alive>
					<Artist v-if="activeName == 'Artist'"></Artist>
				</keep-alive>
			</el-tab-pane>
			<el-tab-pane label="分类歌单" name="Category" :lazy='true'>
				<keep-alive>
					<Category v-if="activeName == 'Category'"></Category>
				</keep-alive>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts" name="music">
import Artist from './Music/artist.vue';
import Category from './Music/category.vue';
import Picked from './Music/picked.vue';
import Toplist from './Music/toplist.vue';
import { onActivated, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('Picked')

const handleClick = (tab: TabsPaneContext, event: Event) => {
	console.log(tab, event)
	console.log(activeName.value);
}
onActivated(()=>{
	window.scrollTo(0, 0);
})
</script>

<style lang='less'>
.music {
	.musictit {
		color: #334155;
		font-size: 1.75rem;
		padding-left: 2%;
	}

	.el-tabs__nav-scroll {
		padding-left: 2%;
	}

	.el-tabs__item.is-active {
		color: #34D399;
	}

	.el-tabs__nav {
		.el-tabs__active-bar {
			background-color: #34D399;
		}
	}

	.el-tabs__item:hover {
		color: #34D399;
	}

	.el-tabs__nav-wrap::after {
		height: 0;
	}
}
</style>