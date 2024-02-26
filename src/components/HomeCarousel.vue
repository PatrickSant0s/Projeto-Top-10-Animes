<template>
  <v-carousel cycle height="700" hide-delimiter-background show-arrows="hover">
    <h1>Top 10 animes</h1>
    <v-carousel-item v-for="(image, index) in sortedImages" :key="index">
      <v-sheet height="100%">
        <div
          class="d-flex justify-center align-center"
          @mouseenter="showVideoCard(index)"
          @mouseleave="hideVideoCard(index)"
        >
          <img :src="image.rank" class="image" height="450" max-width="100" />

          <img
            :src="image.src"
            :alt="image.alt"
            class="carousel-image"
            height="400"
            max-width="00"
          />

          <v-card v-if="activeIndex === index" class="video-card">
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
                <v-btn color="white" @click="irParaPerfil(image.id)"
                  >Perfil</v-btn
                >
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
    irParaPerfil(id) {
      const routeName = this.$route.name;
      if (routeName !== "PerfilAnime" || this.$route.params.id !== id) {
        this.$router.push({ name: "PerfilAnime", params: { id: id } });
      }
    },
  },
};
</script>

<style scoped>
.carousel-image {
  margin-top: 50px;
  width: 450px;
  height: 500px;
  border-radius: 16px;
}

.video-card {
  position: absolute;
  top: 50%;
  left: 61%;
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
