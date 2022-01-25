<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import {onMounted} from "vue";
import api from './api'
import {bannerRes, dealAmount} from "./types/global/info";
// e.g
onMounted(async () => {
  const data: Array<bannerRes> = await api.spot_info({
    langCode: "zh_CN",
    source: 1
  })
  data.forEach(item => console.log(item.name))

  const test: Array<dealAmount> = await api.test_info({
    langCode: "zh_CN"
  })
  test.forEach(item => console.log(item.ticker))
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
