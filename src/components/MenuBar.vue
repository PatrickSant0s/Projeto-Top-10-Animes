<template>
  <div>
    <ul>
      <li v-for="item in menuBar" :key="item.menu">
        <a :href="item.href"></a>{{ item.menu }}
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
        { menu: "Home", href: "#" },
        { menu: "Contatos", href: "#" },
        { menu: "Galeria", href: "#" },
      ],
    };
  },
};
</script>

<style scoped></style>
