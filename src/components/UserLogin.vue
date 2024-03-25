<template>
  <div class="Menu-Principal">
      <div class="d-flex flex-column fill-height justify-center align-center text-white pt-16" style="padding-right: 200px;">
        <h1 class="text-h4 font-weight-thin mb-4 ">
         Login
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


  </div>
</template>

<script>
export default {
  name: "UserLogin",

  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (!this.isFieldsValidation(this.email, this.password)) {
        alert('Por favor, preencha ambos os campos corretamente.');
        return;
      }

      const users = JSON.parse(window.localStorage.getItem("users")) || [];
      const isValidUser = users.find(user => user.email === this.email && user.password === this.password);

      if (isValidUser) {
        this.loading = true;
        alert('Login feito com sucesso');
        localStorage.setItem('token', 'your_token_here'); // Defina o token após a autenticação
        this.$router.push("/").catch();
      } else {
        alert('Usuário não encontrado. Por favor, verifique seus dados e registre-se.');
        this.$router.push('/register').catch();
      }
    },

    isFieldsValidation(email, password) {
      return email && password;
    }
  }
};
</script>


<style scoped>

.titulo {
  padding: 100px 0 40px 0;
  text-align: center;
  padding: 100px 0 40px 0;
  text-align: center;
  font-size: 48px;
  font-family: "Secular One";
  font-weight: 400;
 

}

  
</style>
