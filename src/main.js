import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import routerConfig from "./router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: routerConfig.routes,
});

app.use(router);

app.mount("#app");

