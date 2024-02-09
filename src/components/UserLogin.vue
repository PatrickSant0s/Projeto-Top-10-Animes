<template>
  <div class="Menu-Principal"> <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
         TOP 10 Animes
        </h1>
        <v-sheet class="bg-deep-purple pa-12" rounded>
          <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-text-field id="email" v-model="email" :readonly="loading" :rules="[required]" class="mb-2" clearable
                label="Email"> </v-text-field>

              <v-text-field v-model="password" :readonly="loading" :rules="[required]" clearable label="Password"
                placeholder="Enter your password"></v-text-field>

              <br />

              <v-btn @click="onSubmit" @submit="onSubmit" :disabled="!form" :loading="loading" block color="success"
                size="large" type="submit" variant="elevated">
                Sign In
              </v-btn>
            </v-form>
          </v-card>
        </v-sheet>

      </div>
    </v-parallax>


  </div>
</template>

<script>

export default {
  name: "UserLogin",

  data: () => ({
    email: "",
    password: "",
    active: false,
    loading: false,
    menuBar: [
      { menu: "Register", actionItem: () => this.$router.push("/Register") },
    ],


  }),

  computed: {
    user() {

      return [JSON.parse(window.localStorage.getItem("user"))]
    },
  },
  mounted() {


  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (!this.isFieldsValidation(this.email, this.password)) alert('Preencher ambos corretamente')

      
      const users = JSON.parse(window.localStorage.getItem("users")) || [];

      const isValidUser = users.find(user => user.email === this.email && user.password === this.password);


      if (isValidUser) {
        this.loading = true;
        alert('Login feito com sucesso');
        
        this.$router.push("/").catch()


      } else {
        alert('Usuário não encontrado. Verifique seus dados e Registre-se ');
        this.$router.push('/Register').catch()
      }
    },

    isFieldsValidation(email, password) {
      console.log(email, password)

      if (!email || !password) return false
      else return true




    }
  },
};
</script>
