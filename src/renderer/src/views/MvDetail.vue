<template>
	<div class='mvdetail'>
		<video ref='video' autoplay controls class="video"></video>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useMvDetail } from '../utils/api'
import type { MvDetail } from '../interfaces/MvDetail'

const route = useRoute()
const id = ref()
const data = ref<MvDetail>()
const video = ref()
id.value = route.query.id

onMounted(async () => {
	data.value = await useMvDetail(id.value)
	video.value.src = data.value.url
})
</script>

<style>
.video{
	width: 100%;
}
</style>