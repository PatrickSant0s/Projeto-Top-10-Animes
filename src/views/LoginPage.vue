<template>
  <div><UserLogin/></div>
</template>



<script>

import UserLogin from '@/components/UserLogin.vue';



export default {
  components: { UserLogin },
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

