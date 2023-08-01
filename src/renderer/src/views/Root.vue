<template>
	<div class='con'>
		<Navbar @online='getList'></Navbar>
		<div>
			<Header></Header>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'

const router = useRouter()


const list = ref(0)
const getList = (onlinelist:string) => {
	console.log(onlinelist)
	if(onlinelist == '0'){
		router.push('/recommend')
	}else if(onlinelist == '1'){
		router.push('/music')
	}else if(onlinelist == '2'){
		router.push('/video')
	}else{
		router.push('/station')
	}
}

watch(list,(newlist)=>{
	console.log(newlist)
},{
	immediate:true
})
</script>

<style scoped>

</style>