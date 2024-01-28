<template>
  <v-carousel cycle height="500" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(image, index) in sortedImages" :key="index">
      <v-sheet height="100%">
        <a :href="image.link" target="_blank" rel="noopener noreferrer" class="carousel-link">
          <div class="d-flex fill-height justify-center align-center position-relative">
            <div class="top-rank-container">
              
            </div>
            <img :src="image.src" :alt="image.alt" class="carousel-image" />
          </div>
        </a>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { images } from '@/utils/GaleriaFotos';

export default {
  data() {
    return {
      sortedImages: images.sort((a, b) => a.src.localeCompare(b.src)),
    };
  },
};
</script>

<style scoped>
.carousel-image {
  width: 300px;
  height: 300px;
  border-radius: 16px;
}

.carousel-link {
  text-decoration: none;
  color: inherit;
}

.top-rank-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.top-rank {
  font-size: 24px;
  font-weight: bold;
  color: white;
}


.top-rank-container {
  position: absolute;
  top: 10px;
  /* Ajuste a posição conforme necessário */
  left: 10px;
  /* Ajuste a posição conforme necessário */
  z-index: 1;
}

.top-rank {
  font-size: 24px;
  font-weight: bold;
  color: white;
}
</style>
