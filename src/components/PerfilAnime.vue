<template>
  <main class="personagens">
    <div
      v-for="(personagem, index) in personagens"
      :key="index"
      :id="'personagem-' + index"
      class="personagem"
    >
      <img class="imagem" :src="personagem.imagem" :alt="personagem.alt" />
      <div class="conteudo">
        <i class="logo"> <img :src="personagem.logo" alt="" /></i>
        <h2 class="nome-personagem">{{ personagem.nome }}</h2>
        <p class="descricao">{{ personagem.descricao }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      personagens: [
        // {
        //   id: 1,
        //   imagem: "https://i.pinimg.com/originals/83/a9/f6/83a9f6bbc742a977b87c4fe14fa1fef2.jpg",
        //   nome: "Naruto Uzumaki",
        //   descricao: "Naruto Uzumaki é um ninja hiperativo da Vila Oculta da Folha e membro da equipe 7, filho do Quarto Hokage e Kushina Uzumaki. Logo após seu nascimento, a Raposa de Nove Caudas foi selada dentro dele, mas isso foi mantido em segredo por anos.",
        //   logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png"
        // },
        // Adicione os outros personagens aqui...
        // {
        //   id: 2,
        //   imagem: "https://i.pinimg.com/originals/4f/a6/69/4fa669d7eb63553a58a45f9a58dfc02b.jpg",
        //   nome: "Dragon Ball",
        //   descricao:
        //     "Criada por Akira Toryiama, a franquia conta a história de Son Goku, guerreiro que descobre ser parte de um legado de poderosos conquistadores alienígenas - e passa a defender seu planeta adotivo, a Terra, de outros seres igualmente superfortes e capazes de feitos descomunais.,",
        //   logo: "https://img.asmedia.epimg.net/resizer/P1CLFc7X1QLdkD1BhWpp9kwT3xo=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/XV7QUOH5WFC53I4HMXUXKEKHNA.jpg",
        // },
        // {
        //   id: 3,
        //   imagem:
        //     "https://a-static.besthdwallpaper.com/demon-slayer-kimetsu-no-yaiba-posters-wallpaper-3000x2000-91299_42.jpg",
        //   nome: "Kimetsu no yaba",
        //   descricao:
        //     "Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio.",
        //   logo: "https://fontswan.com/wp-content/uploads/Demon-Slayer-Font.webp",
        // },
        // {
        //   id: 4,
        //   imagem:
        //     "https://w.forfun.com/fetch/ab/ab59e381aae1a325b7c796f9b3c966e5.jpeg",
        //   nome: "Inu yasha",
        //   descricao:
        //     "InuYasha (犬夜叉), também conhecido como Inuyasha: Um Conto de Fadas Feudal (戦国御伽草子 犬夜叉 Sengoku Otogizōshi InuYasha), é uma série de mangá shōnen escrita e ilustrada por Rumiko Takahashi. Foi publicada na revista Weekly Shōnen Sunday entre 13 de novembro de 1996 e 18 de junho de 2008, totalizando 56 volumes tankōbon.",
        //   logo: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdsrzPrNTNDCRY2AyvvUGLszD3THGX1xKLvXWW9fCCIq1rEbVTmEBh3G-ZGgaZlPFtfqqDmxADp4vWOVc0QYK4febTGX2skPYYUD4KPJiLnB.png?r=a54",
        // },
        // {
        //   id: 5,
        //   imagem:
        //     "https://w.forfun.com/fetch/ab/ab59e381aae1a325b7c796f9b3c966e5.jpeg",
        //   nome: "Inu yasha",
        //   descricao:
        //     "InuYasha (犬夜叉), também conhecido como Inuyasha: Um Conto de Fadas Feudal (戦国御伽草子 犬夜叉 Sengoku Otogizōshi InuYasha), é uma série de mangá shōnen escrita e ilustrada por Rumiko Takahashi. Foi publicada na revista Weekly Shōnen Sunday entre 13 de novembro de 1996 e 18 de junho de 2008, totalizando 56 volumes tankōbon.",
        //   logo: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdsrzPrNTNDCRY2AyvvUGLszD3THGX1xKLvXWW9fCCIq1rEbVTmEBh3G-ZGgaZlPFtfqqDmxADp4vWOVc0QYK4febTGX2skPYYUD4KPJiLnB.png?r=a54",
        // },
        // {
        //   id: 6,
        //   imagem:
        //     "https://i.redd.it/kbeakyl76a191.png",
        //   nome: "Yu Yu Hakusho",
        //   descricao:
        //     "A trama de Yu Yu Hakusho gira em torno de Yusuke Urameshi, um jovem delinquente sem rumo na vida, acostumado a causar confusão na sua escola e vizinhança. Um dia, ele vê um garotinho prestes a ser atropelado e, agindo por instinto, se joga na frente do carro.",
        //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Y%C5%AB_Y%C5%AB_Hakusho_logo.svg/800px-Y%C5%AB_Y%C5%AB_Hakusho_logo.svg.png",
        // },
        // {
        //   id: 7,
        //   imagem:
        //     "https://cdn.wallpapersafari.com/59/50/zyvOoh.png",
        //   nome: "Pokemon",
        //   descricao:
        //     "Pokémon é um grande anime, com centenas de episódios, além de alguns filmes e especiais, e continua tendo sucesso no Japão e no mundo. O protagonista do desenho, Ash, viaja ao redor do mundo Pokémon para ganhar insígnias ao derrotar os líderes de ginásio de várias cidades, na intenção de participar das Ligas Pokémon.",
        //   logo: "https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png",
        // },
        // {
        //   id: 8,
        //   imagem:
        //     "https://img.olhardigital.com.br/wp-content/uploads/2022/07/one-piece.jpg",
        //   nome: "One Piece",
        //   descricao:
        //     "A trama segue Luffy, um jovem com o corpo elástico que sonha em criar sua própria tripulação e partir em uma aventura para se tornar o próximo Rei dos Piratas. Ao todo, a produção tem oito episódios de cerca de uma hora de duração cada, já disponíveis no catálogo da Netflix.",
        //   logo: "https://logosmarcas.net/wp-content/uploads/2021/10/One-Piece-Logo.png",
        // },
        // {
        //   id: 9,
        //   imagem:
        //     "https://miro.medium.com/v2/resize:fit:2868/1*rViKNVn1JlZ6BJeSTLI0Hw.jpeg",
        //   nome: "Cavaleiros dos zodíacos",
        //   descricao:
        //     "Os Cavaleiros do Zodíaco são guerreiros que juram proteger a deusa Atena das forças do mal - para isso, canalizam em golpes os poderes do cosmo. Ao todo são 88 cavaleiros, representantes de cada uma das 88 constelações oficiais.",
        //   logo: "https://seeklogo.com/images/C/cavaleiros-do-zodiaco-logo-7BEBD54081-seeklogo.com.png",
        // },
        {
          id: 10,
          imagem:
            "https://e0.pxfuel.com/wallpapers/243/32/desktop-wallpaper-death-note-cool-death.jpg",
          nome: "Death Note",
          descricao:
            "Na história, o Death Note é um caderno, normalmente de capa preta, e que tem seu nome escrito na parte frontal dele. Esse caderno tem a capacidade de matar qualquer pessoa apenas se os nomes destas pessoas forem escritos nele, enquanto o portador visualizar mentalmente o rosto de quem quer assassinar.",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Death_Note_logo_%28black_background%29.png/1200px-Death_Note_logo_%28black_background%29.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Seus estilos CSS aqui */
</style>

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

.personagem .imagem {
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
