<template>
  <div class="galeria">
    <MenuBar />
    <GaleriaAnime class="menuBar" />
  </div>
</template>

<script>
import GaleriaAnime from "@/components/GaleriaAnime.vue";
import MenuBar from "@/components/MenuBar.vue";

export default {
  components: { GaleriaAnime, MenuBar },
  name: "HomePage",
};
</script>

<style scoped>
.galeria {
  background-image: url(https://www.pixground.com/wp-content/uploads/2023/09/Sunset-Anime-Comet-Stars-AI-Generated-4K-Wallpaper-1.jpg);
  background-size: 100% 100%;
  color: white;
}
</style>
