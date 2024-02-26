
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import ContactPage from "../views/ContactPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import GaleriaPage from "../views/GaleriaPage.vue";
import PerfilPage from "../views/PerfilPage.vue";
import PerfilAnime from "@/components/PerfilAnime.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "HomePage" },
  { path: "/contact", component: ContactPage, name: "ContactPage" },
  { path: "/login", component: LoginPage, name: "LoginPage" },
  { path: "/register", component: RegisterPage, name: "RegisterPage" },
  { path: "/galeria", component: GaleriaPage, name: "GaleriaPage" },
  { path: "/perfil", component: PerfilPage, name: "PerfilPage" },
  {path: '/perfil-anime/:id', component: PerfilAnime, name: 'PerfilAnime',
    
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
