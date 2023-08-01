<template>
    <div>
        <h1 class="title">开发中,理解万岁!!!</h1>
    </div>
</template>

<script setup lang="ts">
import { noFooter } from '../stores/nofooter';
const footer = noFooter()
footer.showFooter = false
</script>

<style lang="less" scoped>
.title {
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
	text-align: center;
}
</style>