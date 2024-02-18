<template>
  <div>
    
    <HomeCarousel />
    <CardAnime/>
  </div>
</template>

<script>

import HomeCarousel from "@/components/HomeCarousel.vue";
import CardAnime from "@/components/CardAnime.vue";
export default {
  components: { HomeCarousel, CardAnime },

  name: "HomePage",
};
</script>

<style scoped></style>
