<template>
  <div>
    
    <MenuBar/>
    <HomeCarousel />
  
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import HomeCarousel from "@/components/HomeCarousel.vue";

export default {
  components: { HomeCarousel, MenuBar },

  name: "HomePage",
};
</script>

<style scoped></style>
