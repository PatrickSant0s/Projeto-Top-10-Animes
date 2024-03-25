
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
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');

  // Verifica se o usuário está tentando acessar a rota de login ou registro
  if (to.name === 'LoginPage' || to.name === 'RegisterPage') {
    // Permite o acesso às rotas de login e registro
    next();
  } else {
    // Bloqueia o acesso às outras rotas se o usuário não estiver autenticado
    if (!isAuthenticated) {
      next({ name: 'LoginPage' }); // Redireciona para a página de login
    } else {
      next(); // Permite a navegação para outras rotas se estiver autenticado
    }
  }
});
export default router;
