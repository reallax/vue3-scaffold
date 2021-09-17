# 1. reference
https://router.vuejs.org/zh/installation.html

# 2. install vue router
yarn add vue-router@next vuex@next

# 3. create src/store/index.ts 
store/index.ts

# 4. create src/router/index.ts
router/index.ts  

# 5. add routers to main.ts
`import router from "./router";  
..  
app.use(router)  `

# 6. add code to src/App.vue
`<p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/">Go to Foo</router-link><br/>
    <router-link to="/About">Go to Bar</router-link>
  </p>
  <router-view></router-view>`