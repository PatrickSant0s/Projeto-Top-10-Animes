<template>
    <div>
        <MenuBar></MenuBar>
        <UserRegister />
    </div>
</template>



<script>
import UserRegister from '@/components/UserRegister.vue'
import MenuBar from "@/components/MenuBar.vue";

export default {
    components: { UserRegister, MenuBar },
    name: "RegisterPage",
   
}

</script>



<style scoped></style>