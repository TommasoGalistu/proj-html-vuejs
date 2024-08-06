import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./page/HomePage.vue";
import ServicesPage from "./page/ServicesPage.vue";
import ShopPage from "./page/ShopPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/services",
      name: "Services",
      component: ServicesPage,
    },
    {
      path: "/shop",
      name: "Shop",
      component: ShopPage,
    },
  ],
});
export { router };
