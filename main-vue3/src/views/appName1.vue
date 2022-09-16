<!-- appName1.vue -->
<template>
  <div>
    <h1>子应用</h1>
    <!-- 
        name(必传)：应用名称
        url(必传)：应用地址，会被自动补全为http://localhost:5174/index.html
        baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/appName1`
       -->
    <micro-app
      name="appName1"
      url="http://localhost:5174/appName1/"
      inline
      disableSandbox
    ></micro-app>
  </div>
</template>
<script lang="ts">
import microApp, {
  EventCenterForMicroApp,
  getActiveApps,
} from "@micro-zoe/micro-app";

// 因为vite子应用关闭了沙箱，我们需要为子应用appName1 创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForChildApp_1 = new EventCenterForMicroApp("appName1");

/**
 * 当子应用还未渲染，通过基座控制路由跳转，子应用在初始化时会自己根据url渲染对应页面
 * 当子应用已经渲染，则直接控制子应用进行内部跳转
 *
 * getActiveApps: 用于获取正在运行的子应用
 */
const menuItemClick = (item) => {
  console.log(96, "获取已经渲染的子应用", getActiveApps());
  // eslint-disable-next-line prefer-const
  let { appFrom: appName, path } = item; // item为菜单点击的对象
  console.log(114, "应用名和地址", appName, path);
  // 子应用未加载
  if (!getActiveApps().includes(appName)) {
    // 这里默认是hash, 初始化path 这里拼接一下hash值
    const pushPath = `/${appName}/#${path}`;
    console.log("主应用控制跳转--------->");
    // 主应用跳转
    router.push(pushPath);
  }
  // 子应用已加载
  else {
    // 传递事件给子应用， 然后让子应用跳转
    console.log("子应用控制跳转--------->");
    // 向子应用传递路由 让子路由进行跳转
    microApp.setData(appName, { path: item.path });
  }
};
</script>
