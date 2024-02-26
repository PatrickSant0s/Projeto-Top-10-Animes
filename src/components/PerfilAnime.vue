<template>
  <main>
    <div v-if="personagens.length > 0">
      <img class="imagem" :src="personagens[0].imagem" :alt="personagens[0].nome" />
      <div class="conteudo">
        <i class="logo"><img :src="personagens[0].logo" alt="" /></i>
        <h2 class="nome-anime">{{ personagens[0].nome }}</h2>
        <p class="descricao">{{ personagens[0].descricao }}</p>
      </div>
    </div>
    <div v-else>
      <p>Nenhum personagem encontrado.</p>
    </div>
  </main>
</template>
<script>
import { personagens } from "@/utils/GaleriaPerfil"; 

export default {
  name: 'PerfilAnime',
  data() {
    return {
      personagens: personagens 
    };
  }
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
  display: flex; /* Adiciona um display flex para alinhar os itens dentro do container */
  justify-content: flex-end; /* Alinha os itens para o final do container, no lado direito */
}

.imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: black;
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

.logo img {
  background-image: url();
  background-size: cover;
  height: 150px;
  width: 300px;
  margin-bottom: 35px;
}
</style>
