import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import store from "./stores/counter";
import Antd from "ant-design-vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(store);

// app.mount("#app");

app.use(Antd).mount("#app");
