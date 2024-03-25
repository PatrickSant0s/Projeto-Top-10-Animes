<template>
  <div class="Background">
    <v-app>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { users } from "./utils/Users";

export default {
  name: "App",
  components: {},

  computed: {
    users() {
      return users;
    },
  },

  created() {},

  mounted() {},
  methods: {
    alreadyExistsUser() {
      let user = JSON.parse(window.localStorage.getItem("user"));
      if (!user?.Status) this.$router.push("/login");
      console.log(user);
    },
  },
};
</script>
