<template>
  <div class="Menu-Principal">
    <ul class="d-flex pl-0 justify-center">
      <li
        v-for="item in filteredMenuBar"
        :key="item.menu"
        class="menu-principal pa-3"
        @click="item.actionItem()"
      >
        {{ item.menu }}
      </li>
      <div class="botao">
        <button class="logout" v-if="isAuthenticated" @click="logout">Logout</button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      menuBar: [
        { menu: "Home", actionItem: () => this.$router.push("/") },
        { menu: "Contatos", actionItem: () => this.$router.push("/contact") },
        { menu: "Galeria", actionItem: () => this.$router.push("/galeria") },
        { menu: "Login", actionItem: () => this.$router.push("/login"), requiresAuth: false },
        { menu: "Register", actionItem: () => this.$router.push("/register"), requiresAuth: false },
      ],
      isAuthenticated: localStorage.getItem('token') !== null
    };
  },
  computed: {
    filteredMenuBar() {
      if (this.isAuthenticated) {
        // Se o usuário estiver autenticado, retorna todos os itens de menu exceto "Login" e "Register"
        return this.menuBar.filter(item => item.menu !== "Login" && item.menu !== "Register");
      } else {
        // Se o usuário não estiver autenticado, retorna todos os itens de menu
        return this.menuBar;
      }
    }
  },
  methods: {
    logout() {
      // Limpa os dados do Local Storage e redireciona para a página de login
      localStorage.clear();
      this.isAuthenticated = false;
      this.$router.push("/login");
    }
  }
};
</script>
<style>
.menu-principal {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 10px;
  justify-items: center;
  cursor: pointer;
  font-family: "Secular One";
}
.logout {
  padding: 15px 20px 30px 700px;
  border-radius: 16px;
  color: #292d32;
  cursor: pointer;

  grid-column: 6; /* Ajusta para a última coluna */
  justify-self: end; /* Alinha o botão à direita */
}
</style>
