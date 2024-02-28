<template>
  <main>
    <div>
      <img class="imagem" :src="anime.imagem" :alt="anime.nome" />
      <div class="conteudo">
        <i class="logo"><img :src="anime.logo" alt="" /></i>
        <div class="Avaliacao">
          <v-rating
            v-model="rating"
            item-aria-label="custom icon label text {0} of {1}"
          ></v-rating>
        </div>
        <h2 class="personagem">{{ anime.nome }}</h2>
        <p class="descricao">{{ anime.descricao }}</p>
        <div class="button">
          <v-btn color="white" @click="assistirAnime">Assitir</v-btn>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { animes } from "@/utils/GaleriaPerfil";

export default {
  name: "PerfilAnime",
  data() {
    return {};
  },
  computed: {
    paramsId() {
      return this.$route.params.id;
    },
    anime() {
      return animes.find((item) => item.id == this.paramsId);
    },
  },
  methods: {
    assistirAnime() {
      // Abre o link do anime em uma nova aba
      window.open(this.anime.link, '_blank');
    }
  },
  mounted() {
    console.log(animes);
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
  display: flex; /* Adiciona um display flex para alinhar os itens dentro do container */
  justify-content: flex-start; /* Alinha os itens para o final do container, no lado direito */
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

.conteudo .personagem {
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

.Avaliacao {
  justify-content: start;
}
.button {
  padding-top: 50px;
}
</style>
