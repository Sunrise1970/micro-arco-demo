<template>
  <div class="app">
    <div class="main-app">main-app</div>
    <router-view></router-view>
    <!-- <wuJie
      class="sub-app"
      url="//localhost:5174/"
      width="100%"
      height="100%"
      name="vue3"
      :plugins="plugins"
    /> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import wuJie from "wujie-vue3";
// const plugins = ref([
// {
//   jsLoader: (code) => {
//     return code.replace(
//       "this.state.position = this._getPosition(this._popper, this._reference);",
//       "this.state.position = 'absolute';"
//     );
//   },
// },
// {
//   jsBeforeLoaders: [
//     {
//       content: `
//           Object.defineProperty(document.body,'clientLeft',{
//             get(){
//                 return 211
//             }
//         })
//     `,
//     },
//   ],
// },
// ]);
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 100vh;
  padding: 4px;
}
.main-app {
  border: 1px solid blue;
  width: 200px;
  height: 100%;
  margin-right: 10px;
  padding: 10px;
}
.sub-app {
  border: 1px solid red;
  height: 100%;
  padding: 10px;
}
</style>
