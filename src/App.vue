<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Hello {{ name }}</p>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/">Go to Foo</router-link><br/>
    <router-link to="/About">Go to Bar</router-link>
  </p>
  <router-view></router-view>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'index',
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: 'reallx'
    }
  },
})
console.log('sdfsdf')
</script>

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
