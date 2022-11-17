import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QueryView from "@/views/QueryView.vue";
import MutationView from "@/views/MutationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/query",
      name: "query",
      component: QueryView,
    },
    {
      path: "/mutation",
      name: "mutation",
      component: MutationView,
    },
  ],
});

export default router;
