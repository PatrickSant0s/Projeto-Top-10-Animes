import Vue from "vue";
import VueRouter from "vue-router";
const HomePage = () => import("../views/HomePage.vue");

Vue.use(VueRouter);

const routes = [{ path: "/", component: HomePage, name: "HomePage" }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
