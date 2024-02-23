<template>
  <main class="personagens">
    <div class="personagem" v-for="(image, index) in sortedImages" :key="index">
      <img class="imagem" src="" alt="" />
      <div class="conteudo">
        <i class="logo"></i>
        <h2 class="nome-personagem">{{ image.alt }}</h2>
        <p class="descricao">{{ image.descricao }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { images } from "@/utils/GaleriaFotos";
export default {
  data() {
    return {
      sortedImages: images.sort((a, b) => a.src.localeCompare(b.src)),
    };
  },
};
</script>

<style scoped>
body {
  background-color: #000000;
  overflow: hidden;
}

main::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 80vw;
  background: linear-gradient(-233deg, #000 40%, rgba(0, 0, 0, 0) 65%) no-repeat;
}

.personagem {
  position: relative; /* Alterado para position: relative; */
  height: 100vh;
}

.personagem .imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.conteudo {
  position: absolute;
  top: 0;
  left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  max-width: 380px;
  z-index: 1;
}

.conteudo .nome-personagem {
  color: #ffffff;
  font-size: 48px;
  font-family: "Secular One";
  font-weight: 400;
  margin-bottom: 20px;
}

.conteudo .descricao {
  color: #ffffff;
  font-family: "Rubik";
  line-height: 24px;
}

.conteudo .logo {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png);
  background-size: cover;
  height: 100px;
  width: 230px;
  margin-bottom: 35px;
}
</style>
