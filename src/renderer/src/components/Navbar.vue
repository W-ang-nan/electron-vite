<template>
	<el-affix :off="60" class="affix">
		<div class='concent'>
			<!-- <el-affix :offset="60"> -->
			<!-- <el-scrollbar height="400px"> -->
				<div class='top'>
					<div class='text'>在线音乐</div>
					<div v-for='(item, index) in online' :key='index' :class="i == index ? 'list y' : 'list'"
						@click='cong(index)'>
						<span>{{ item }}</span>
					</div>
				</div>
				<!-- </el-affix> -->
				<!-- <el-affix :offset="300"> -->
				<div class='bottom'>
					<div class='text'>我的音乐</div>
					<div v-for='list in myMusic' :key='list' class='list'>
						<span>{{ list }}</span>
					</div>
				</div>
			<!-- </el-scrollbar> -->
			<!-- </el-affix> -->
		</div>

	</el-affix>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// const emit = defineEmits(['online'])

const online = ['推荐', '音乐馆', '视频', '电台']
const myMusic = ['我喜欢你', '本地歌曲', '下载歌曲', '最近播放']
const i: any = ref(0)
const cong = (index: any) => {
	if (index == null) {
		router.push('/recommend')
		i.value = 0
	} else {
		i.value = index
		sessionStorage.setItem('index', index) //存储当前路由
		if (index == 0) {
			router.push('/recommend')
		} else if (index == 1) {
			router.push('/music')
		} else if (index == 2) {
			router.push('/video')
		} else if (index == 3) {
			// router.push('/station')
			router.push('/video')

		} else {
			router.push('/video')
		}
	}
}
onMounted(() => {
	const index = sessionStorage.getItem("index")
	if(index == null) {
		cong(index)
	}else{
		i.value = index
	}
	// cong(index)
})

</script>

<style lang='less'>
.affix{
	width: 14%;
	// padding: 8vh 1.5%;
	box-sizing: border-box;
	background-color: #F9FAFB;
}
.concent {
	width: 100%;
	// height: 100vh;
	margin: 8vh 1.5%;
	// box-sizing: border-box;
	.top{
		padding: 1rem;
	}
	.bottom{
		padding: 1rem;
	}

	.text {
		// font-size: 0.75rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.list {
		padding: 0.25rem;
		border-radius: 0.2rem;
		margin-bottom: 0.5rem;
		margin: 0.2rem;
	}

	.list:hover {
		background: #E5E7EB;
	}

	.y {
		background: linear-gradient(to right, #24D4BE, #28D496) !important;
		color: white;
	}
}
</style>