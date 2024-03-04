<template>
  <main>
    <div>
      <img class="imagem" :src="anime.imagem" :alt="anime.nome" />
      <div class="conteudo">
        <div class="botaoVoltar">
          <v-btn color="white" icon @click="voltarPagina">
            <v-icon style="font-size: 40px;">mdi-arrow-left</v-icon>
          </v-btn>
        </div>
        <i class="logo"><img :src="anime.logo" alt="" /></i>
        <div class="Avaliacao">
          <v-rating
            color="red"
            v-model="anime.rating"
            item-aria-label="custom icon label text {0} of {1}"
          ></v-rating>
          <span v-if="anime.avaliacoes.length > 0">
            ({{ anime.rating }} Média)
          </span>
        </div>
        <h2 class="personagem">{{ anime.nome }}</h2>
        <p class="descricao">{{ anime.descricao }}</p>
        <div class="button">
          <v-btn color="white" @click="assistirAnime">Assistir</v-btn>
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
    },
    voltarPagina() {
      window.history.back();
    },

    // Calcula a média das avaliações
    calcularMedia(avaliacoes) {
      if (avaliacoes.length === 0) return 0;
      const total = avaliacoes.reduce((acc, cur) => acc + cur, 0);
      return total / avaliacoes.length;
    },
      // Adiciona uma nova avaliação e recalcula a média
    adicionarAvaliacao(avaliacao) {
      this.anime.avaliacoes.push(avaliacao);
      this.anime.rating = this.calcularMedia(this.anime.avaliacoes);
    },
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
.botaoVoltar {
  padding-bottom: 150px;

  height: 10px;
}

</style>
