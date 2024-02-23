<template>
  <div>
    <MenuBar/>
    <UserLogin/></div>
</template>



<script>

import UserLogin from '@/components/UserLogin.vue';

import MenuBar from "@/components/MenuBar.vue";

export default {
  components: { UserLogin, MenuBar },
    name:"LoginPage",
    methods: {
        alreadyExistsUser() {
            const user = JSON.parse(window.localStorage.getItem("user"));
            if (!user) this.$router.push("/login");
            this.$router.push("/")
        }
    }
   
}

</script>

