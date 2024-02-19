<template>
  
  <v-carousel cycle height="700"  hide-delimiter-background show-arrows="hover">
    <h1>Top 10 animes</h1>
    <v-carousel-item v-for="(image, index) in sortedImages" :key="index">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center "
             @mouseenter="showVideoCard(index)"
             @mouseleave="hideVideoCard(index)">
          <img :src="image.src" :alt="image.alt" class="carousel-image mx-auto"   height="250"  max-width="400"  />
          
          <v-card v-if="activeIndex === index" class="video-card" >
            <!-- Aqui você pode adicionar o código para exibir o vídeo -->
            <iframe :src="sortedVideos[index].src + '&autoplay=1'" frameborder="0" allowfullscreen height="300" width="100%"></iframe>
             <v-card-subtitle class="pt-4">
              <h1>{{image.alt}}</h1>
      </v-card-subtitle>
  
      <v-card-text>
        <h2>{{ image.temporada }}</h2>
  
        <p>{{image.descricao}}</p>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="white">
        Assistir
        </v-btn>
  
        <v-btn color="white">
          Avaliação
        </v-btn>
      </v-card-actions>
          </v-card>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { images } from '@/utils/GaleriaFotos';
import { videos } from '@/utils/GaleriaVideos';

export default {
  data() {
    return {
      sortedImages: images.sort((a, b) => a.src.localeCompare(b.src)),
      sortedVideos: videos.sort((a, b) => a.src.localeCompare(b.src)),
      activeIndex: null,
    };
  },
  methods: {
    showVideoCard(index) {
      this.activeIndex = index;
    },
    hideVideoCard() {
      this.activeIndex = null;
    },
  },
};
</script>

<style scoped>
.carousel-image {
  width: 500px;
  height: 500px;
  border-radius: 16px;
}

.video-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: white;
}
h2 {
 margin-bottom: 10px;
}
h1{
  text-align: center;
  border: 1px 1px solid white
}
</style>
