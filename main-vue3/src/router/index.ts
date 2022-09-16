import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyPage from "../views/appName1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      // 👇 非严格匹配，/appName1/* 都指向 MyPage 页面
      path: "/appName1/:page*", // vue-router@4.x path的写法为：'/appName1/:page*'
      name: "appName1",
      component: MyPage,
    },
  ],
});

export default router;
