<template>
  <div class="login">
    <MenuBar />
    <UserLogin />
  </div>
</template>

<script>
import UserLogin from "@/components/UserLogin.vue";

import MenuBar from "@/components/MenuBar.vue";

export default {
  components: { UserLogin, MenuBar },
  name: "LoginPage",
  methods: {
    alreadyExistsUser() {
      const user = JSON.parse(window.localStorage.getItem("user"));
      if (!user) this.$router.push("/login");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login {
  background-image: url(https://img.freepik.com/fotos-premium/garota-de-anime-assistindo-a-ilustracao-3d-do-por-do-sol_717906-1415.jpg?w=2000);
  height: 100vh;
  color: white;
  font-family: "Secular One";

}
</style>
