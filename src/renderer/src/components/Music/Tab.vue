<template>
	<el-radio-group v-model='tabPosition'>
		<el-radio-button :label="item.name" v-for='item in props.types' @click='getartist(item)'>{{
			item.name
		}}</el-radio-button>
	</el-radio-group>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useArtistapi } from '../../utils/api'
import { loadAdd } from '../../stores/loadingadd';
const props = defineProps(['types'])
const emit = defineEmits(["artists"])
const tabPosition = ref('全部')
const area: any = ref(-1)
const type: any = ref(-1)
const initial: any = ref(-1)
const artists: any = ref()
const getartist = (item: any) => {
	if (Reflect.has(item, "area")) {
		area.value = item.area
		sessionStorage.setItem("area", area.value)
	} else if (Reflect.has(item, "type")) {
		type.value = item.type
		sessionStorage.setItem("type", type.value)
	} else if (Reflect.has(item, "initial")) {
		initial.value = item.initial
		sessionStorage.setItem("initial", initial.value)
	}

}

const loading: any = loadAdd()

onMounted(async () => {
	sessionStorage.setItem("area", area.value)
	sessionStorage.setItem("type", type.value)
	sessionStorage.setItem("initial", initial.value)
	artists.value = await useArtistapi(sessionStorage.getItem("area") as string, sessionStorage.getItem("type") as string, sessionStorage.getItem("initial") as string)
	emit("artists", artists.value)
	// console.log(sessionStorage.getItem("songs") );
	// if (sessionStorage.getItem("songs") == null) {
	// 	artists.value = await useArtistapi(area.value, type.value, initial.value)
	// 	emit("artists", artists.value)
	// 	sessionStorage.setItem("songs", JSON.stringify(artists.value))
	// } else {
	// 	artists.value = JSON.parse(sessionStorage.getItem("songs") as string)
	// 	emit("artists", artists.value)
	// }
	// artists.value = await useArtistapi(area.value, type.value, initial.value)
	// emit("artists", artists.value)
})
watch([area, type, initial], async () => {
	artists.value = await useArtistapi(sessionStorage.getItem("area") as string, sessionStorage.getItem("type") as string, sessionStorage.getItem("initial") as string)
	emit("artists", artists.value)
	loading.limitAdd = 0
	loading.showLode = true
	// sessionStorage.setItem("tab", JSON.stringify({ area: area.value, type: type.value, initial: initial.value }))
})
watch(() => loading.limitAdd, async (newValue) => {
	if (newValue == 0) return
	if (newValue <= 40) {
		// let songs = await useArtistapi(area.value, type.value, initial.value, newValue + 60)
		let songs = await useArtistapi(sessionStorage.getItem("area") as string, sessionStorage.getItem("type") as string, sessionStorage.getItem("initial") as string, newValue + 60)
		// artists.value.push(...JSON.parse(JSON.stringify(songs)).slice(-10))
		artists.value = songs
		emit("artists", artists.value)
	}
	if (newValue >= 40) {
		loading.showLode = false
	} else {
		loading.showLode = true
	}
});
</script>

<style lang='less'>
.el-radio-group {
	font-size: 1rem;
}

.el-radio-button__original-radio:checked+.el-radio-button__inner {
	background-color: #34D399;
	box-shadow: 0 0 0 0;
}

.el-radio-button__inner {
	border: 0;
}

.el-radio-button:first-child .el-radio-button__inner {
	border: 0;
	border-radius: 20px;
}

.el-radio-button:last-child .el-radio-button__inner {
	border: 0;
	border-radius: 20px;
}

.el-radio-button .el-radio-button__inner {
	border-radius: 20px;
}

.el-radio-button__inner:hover {
	color: #34D399;
}
</style>