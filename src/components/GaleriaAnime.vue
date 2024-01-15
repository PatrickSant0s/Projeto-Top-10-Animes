<template>
    <div class="galeriaFotos">
      <h1 class="titulo-galeria">Galeria de Anime</h1>
      <ul class="navegacao-fotos">
        <!-- Adicione um link ao redor de cada imagem -->
        <li class="fotos" v-for="foto in galeriaImages" :key="foto.src">
          <a :href="foto.link" target="_blank" rel="noopener noreferrer">
            <img :src="foto.src" :alt="foto.alt">
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { images } from '@/utils/GaleriaFotos';
  
  export default {
    name: "GaleriaAnime",
    computed: {
      galeriaImages() {
        return images;
      }
    }
  }
  </script>
<style scoped>
.titulo-galeria {
    padding: 100px 0 40px 0;
    text-align: center;
    font-family: var(red);
    font-size: 55px;
    font-weight: 40;
    text-transform: uppercase;
    color: var(--color-principal);
    font-style: normal;
}

.galeriaFotos img {
    width: 243px;
    height: 242px;
    border-radius: 16px;

}
.galeriaFotos{
  
    height: auto;
    width: 100%;
}

.titulo-galeria {
    padding: 100px 0 40px 0;
    text-align: center;
    font-family: var(--fonte-principal);
    font-size: 55px;
    font-weight: 40;
    text-transform: uppercase;
    color: var(--color-principal);
    font-style: normal;
}

.galeriaFotos img {
    width: 243px;
    height: 242px;
    border-radius: 16px;

}
.navegacao-fotos {
    display: grid;
    grid-template-columns: repeat(7, 250px);
    grid-template-rows: 2;
    
    gap: 20px;
}


</style>