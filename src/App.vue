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


  computed: {
    users() {
      return users;
    },
  },

  created(){
    this.alreadyExistsUser()
  },
  mounted() {
    setUsers(this.users);

  },
  methods: {
    alreadyExistsUser() {
      const user = JSON.parse(window.localStorage.getItem("user"));
      if (!user) this.$router.push("/login");
      this.$router.push("/")
    }
  }
};
</script>
