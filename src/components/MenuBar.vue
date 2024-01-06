<template>
  <div>
    <ul class="d-flex">
      <li v-for="item in menuBar" :key="item.menu" class="menu-principal pa-3"  @click="item.actionItem()">
        
        {{ item.menu }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
    data() {
    return {
      menuBar: [
        { menu: "Home", actionItem:() => this.$router.push("/") },
        { menu: "Contatos", actionItem:() => this.$router.push("/contact")},
        { menu: "Galeria", href: "#" },
        { menu: "Login", actionItem:() => this.$router.push("/login") },
        { menu: "Register", actionItem:() => this.$router.push("/Register") },
      ],
    };
  },
};
</script>

<style scoped>
.menu-principal {
  list-style: none;
}
</style>
