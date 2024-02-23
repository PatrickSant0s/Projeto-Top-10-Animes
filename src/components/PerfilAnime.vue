<template>
  <div class="personagem" :style="{ backgroundImage: `url(${sortedImages[activeIndex].src})` }">
    <div class="conteudo">
      <i class="logo"></i>
      <h2 class="nome-personagem">{{ sortedImages[activeIndex].alt }}</h2>
      <p class="descricao">{{ sortedImages[activeIndex].descricao }}</p>
    </div>
  </div>
</template>

<script>
import { images } from "@/utils/GaleriaFotos";
export default {
  data() {
    return {
      sortedImages: images.sort((a, b) => a.src.localeCompare(b.src)),
      activeIndex: 0,
    };
  },
};
</script>

<style scoped>
.personagem {
  position: relative; 
  width: 100%; 
  height: 100vh; 
  background-size: cover; 
  background-position: center; 
}

.conteudo {
  position: absolute; /* Definindo a posição como absoluta */
  top: 50%; /* Alinha o conteúdo no meio verticalmente */
  left: 50%; /* Alinha o conteúdo no meio horizontalmente */
  transform: translate(-50%, -50%); /* Move o conteúdo de volta para cima e para a esquerda em 50% da largura e altura do próprio conteúdo */
  text-align: center; /* Centraliza o texto */
  color: white; /* Cor do texto */
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
  padding: 20px; /* Espaçamento interno */
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
    background-image: url("https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e6b2cd29a5ff62f4591d3b299007e24e.jpe");
    background-size: cover;
    height: 100px;
    width: 230px;
    margin-bottom: 35px;
}

</style>
