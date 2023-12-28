import Vue from "vue";
import VueRouter from "vue-router";
const HomePage = () => import("../views/HomePage.vue");
const Contactpage = () => import("../views/ContactPage.vue");
const LoginPage = () => import("../views/LoginPage.vue");


Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "HomePage" },
  { path: "/contact", component: Contactpage, name: "ContactPage" },
  { path: "/login", component: LoginPage, name: "LoginPage" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
