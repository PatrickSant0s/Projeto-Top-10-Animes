<template>
    <div class="registro">
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



<style scoped>
.registro {
  /* Define a imagem de fundo */
  background-image: url(https://img.freepik.com/fotos-gratis/casal-de-silhueta-em-pe-paisagem-urbana-por-do-sol-arranha-ceu-linha-do-horizonte-generativa-ai_188544-12597.jpg);
  background-size: cover; 
  background-position: center; 
  height: 100vh;
  color: white;
  font-family: "Secular One";
}
</style>