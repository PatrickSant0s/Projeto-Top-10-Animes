<template>
  <v-app>
    <MenuBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { setUsers } from "./utils/Users";
import { users } from "./utils/Users";
import MenuBar from "@/components/MenuBar.vue";
export default {
  name: "App",
  components: { MenuBar },
  data: () => ({}),

  computed: {
    users() {
      return users;
    },
  },
  mounted() {
    setUsers(this.users);
  },
};
</script>
