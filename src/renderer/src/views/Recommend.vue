<template>
	<div>
		<h1 class='title'>推荐</h1>
		<Title></Title>
		<Songsheet></Songsheet>
		<Newmusic></Newmusic>
		<Mv></Mv>
	</div>
</template>

<script setup lang="ts" name="recommend">
import Title from '../components/Recommend/Title.vue'
import Songsheet from '../components/Recommend/Songsheet.vue'
import Newmusic from '../components/Recommend/Newmusic.vue';
import Mv from '../components/Recommend/Mv.vue';
import { onActivated } from 'vue';
onActivated(()=>{
	window.scrollTo(0, 0);
})
</script>

<style scoped>
.title {
	color: #334155;
	font-size: 1.75rem;
	padding-left: 2%;
}
</style>