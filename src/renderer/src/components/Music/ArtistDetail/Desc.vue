<template>
    <div class="descs">
        <div class="desc" v-for='item in descs'>
            <h3 class="title">{{ item.ti }}</h3>
            <p class="content">{{ item.txt }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useArtistDetaildesc } from '../../../utils/api';
const props = defineProps(['id'])
const descs = ref()
onMounted(async()=>{
    descs.value = await useArtistDetaildesc(props.id)
})
</script>

<style lang='less'>
.title{
    color: #334155;
}
.content{
    // 根据文字中的标识符进行换行
    white-space: pre-wrap;
    line-height: 1.75rem;
    font-size: 0.75rem;
    color: #64748B;
}
</style>