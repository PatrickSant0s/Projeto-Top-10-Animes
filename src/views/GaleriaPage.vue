<template>
  <div class="galeria">
    <MenuBar/>
    <GaleriaAnime  class="menuBar"/>
  </div>
</template>

<script>
import GaleriaAnime from "@/components/GaleriaAnime.vue"
import MenuBar from "@/components/MenuBar.vue";

export default {
  components: { GaleriaAnime, MenuBar },
  name: "HomePage",
};
</script>

<style scoped>
.galeria {
background-color: black;
color: white;
}

</style>
