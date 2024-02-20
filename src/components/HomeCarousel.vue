<template>
  <v-carousel cycle height="700" hide-delimiter-background show-arrows="hover">
    <h1>Top 10 animes</h1>
    <v-carousel-item v-for="(image, index) in sortedImages" :key="index">
      <v-sheet height="100%">
        <div
          class="d-flex fill-height justify-center align-center"
          @mouseenter="showVideoCard(index)"
          @mouseleave="hideVideoCard(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="carousel-image mx-auto"
            height="250"
            max-width="400"
          />

          <v-card v-if="activeIndex === index" class="video-card">
            <!-- Aqui você pode adicionar o código para exibir o vídeo -->
            <img
              :src="image.gif"
              :alt="image.alt"
              class="gifCard"
              height="200"
              max-width="1000"
            />
            <v-card-subtitle class="pt-4">
              <h1>{{ image.alt }}</h1>
            </v-card-subtitle>

            <v-card-text>
              <h2>{{ image.temporada }}</h2>

              <p>{{ image.descricao }}</p>
            </v-card-text>
            <v-card-actions class="d-flex flex-column align-center">
              <div class="text-center mb-2">
                <v-btn color="white">Assistir</v-btn>
              </div>

              <div class="text-center">
                <v-rating
                  v-model="rating"
                  item-aria-label="custom icon label text {0} of {1}"
                ></v-rating>
              </div>
            </v-card-actions>
          </v-card>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { images } from "@/utils/GaleriaFotos";

export default {
  data() {
    return {
      sortedImages: images.sort((a, b) => a.src.localeCompare(b.src)),
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
  margin-top: 100px;
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
  border-radius: 16px;
}
h2 {
  margin-bottom: 10px;
}
h1 {
  text-align: center;
  border: 1px 1px solid white;
}

.gifCard {
  width: 100%;
  height: 250px;
}
</style>
