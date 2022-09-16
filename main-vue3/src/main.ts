import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

import microApp from "@micro-zoe/micro-app";

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      appName1: [
        {
          loader(code) {
            // console.log("process.env.NODE_ENV", process.env.NODE_ENV);
            if (process.env.NODE_ENV === "development") {
              // 这里 appName1 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(
                /(from|import)(\s*['"])(\/appName1\/)/g,
                (all) => {
                  return all.replace(
                    "/appName1/",
                    "http://localhost:5174/appName1/"
                  );
                }
              );
            }

            return code;
          },
        },
      ],
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ArcoVue);

app.mount("#app");
