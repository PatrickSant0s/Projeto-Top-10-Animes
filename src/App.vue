<template>
  <div class="Background"><v-app>
    <MenuBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</div>
</template>

<script>


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
    
  },
  methods: {
    alreadyExistsUser() {
      let user = JSON.parse(window.localStorage.getItem("user"))
       if(!user?.Status) this.$router.push('/login')   
      console.log(user)
    }
  }
};
</script>

