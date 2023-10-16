import { createRouter, createWebHistory } from "vue-router";
import HeaderPage from "../components/pages/header.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HeaderPage,
    },
    {
      path: "/",
      name: "home",
      component: HeaderPage,
    },
  ],
});

export default router;
