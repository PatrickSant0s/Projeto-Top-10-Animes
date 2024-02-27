<template>
  <div class="galeriaFotos">
    <h1 class="titulo-galeria">Galeria de Anime</h1>
    <ul class="navegacao-fotos">
      <li class="fotos" v-for="(foto, index) in galeriaImages" :key="index">
        <div 
          @mouseenter="showGif(index)" 
          @mouseleave="hideGif()"
          class="foto-container"
        >
          <img 
            v-if="!isActive(index)"
            :src="foto.src" 
            :alt="foto.alt" 
            class="img" 
          >
          <img 
            v-if="isActive(index)"
            :src="foto.gif" 
            :alt="foto.alt" 
            class="img" 
          >
          <div v-if="isActive(index)" class="card">
            <a :href="foto.link" target="_blank">Assistir</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { images } from '@/utils/GaleriaGif';

export default {
  name: "GaleriaAnime",
  data() {
    return {
      galeriaImages: images,
      activeIndex: null
    };
  },
  methods: {
    showGif(index) {
      this.activeIndex = index;
    },
    hideGif() {
      this.activeIndex = null;
    },
    isActive(index) {
      return this.activeIndex === index;
    }
  }
}
</script>

<style scoped>

.galeriaFotos img {
  width: 243px;
  height: 242px;
  border-radius: 16px;
}

.galeriaFotos {
  height: auto;
  width: 100%;
}

.titulo-galeria {
  padding: 100px 0 40px 0;
  text-align: center;
  padding: 100px 0 40px 0;
  text-align: center;
  font-size: 48px;
  font-family: "Secular One";
  font-weight: 400;
  margin-bottom: 20px;
  
  
  
}

.galeriaFotos img {}

.navegacao-fotos {
  display: grid;
  grid-template-columns: repeat(5, 250px);
  justify-content: center;
  grid-template-rows: 2;
  gap: 20px;
}

.img {
  width: 243px;
  height: 242px;
  border-radius: 16px;
}

.foto-container {
  position: relative;
}

.card {
  position: absolute;
  top: 75%;
  left: 5%;

  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: none;
}

.foto-container:hover .card {
  display: block;
}
</style>
