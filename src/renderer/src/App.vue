<template>
	<!-- <div>
		<el-button @click='getBanner'>Default</el-button>
		<div v-for="item in banner" :key="item.pic">
			<img :src="item.pic" alt="">
		</div>
	</div> -->
	<div class='con'>
		<!-- <Navbar @online='getList'></Navbar> -->
		<keep-alive>
			<Navbar></Navbar>
		</keep-alive>
		<div class='right'>
			<keep-alive>
				<Header></Header>
			</keep-alive>
			<router-view v-slot="{ Component }">
				<transition name="el-zoom-in-left">
					<keep-alive :include="keepAliveList">
						<component :is="Component" />
					</keep-alive>
				</transition>
			</router-view>
			<transition>
				<Footer v-if="footer.showFooter"></Footer>
			</transition>
		</div>
	</div>
	<!-- <Root></Root> -->
</template>

<script setup lang="ts">
import { noFooter } from './stores/nofooter';
import { useRouter } from 'vue-router'
import { watch } from 'vue'

import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer/Footer.vue'

const router = useRouter()
const footer = noFooter()
watch(() => router.currentRoute.value.path, (newValue) => {
	if (newValue == '/mvdetail') {
		footer.showFooter = false
	} else {
		footer.showFooter = true
	}
}, { immediate: true })

const keepAliveList: any = []
watch(() => router.currentRoute.value, (val) => {
	if (val.meta.keepAlive && keepAliveList.indexOf(val.name) === -1) {
		keepAliveList.push(val.name)
	}
}, { immediate: true, deep: true })
</script>

<style lang='less'>
body {
	margin: 0;
}

*::-webkit-scrollbar {
	display: none;
}

* {
	scrollbar-width: none;
	-ms-overflow-style: none;
}

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

	.right {
		width: 86%;
	}
}
</style>