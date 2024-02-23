<template>
  <div>
    <MenuBar/>
    <GaleriaAnime />
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

<style scoped></style>
