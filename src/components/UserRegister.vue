<template>
  <div class="Menu-Principal">
    <v-card class="mx-auto" max-width="344" title="User Registration">
      <v-container id="register-form">
        <v-text-field
          v-model="firstName"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          color="primary"
          label="Last name"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success" @click="registerUser">
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "UserRegister",
  data() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    };
  },
  methods: {
    registerUser() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        status: "Cadastrado"
      };

      // Obter usuários existentes do localStorage
      const existingUsers = JSON.parse(window.localStorage.getItem("users")) || [];
      existingUsers.push(newUser);

      // Atualizar a lista de usuários no localStorage
      window.localStorage.setItem("users", JSON.stringify(existingUsers));
      
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";

      setTimeout(() => {
        alert("Registro realizado com sucesso!");
        
        // Redirecionar para a página de login
        this.$router.push("/login").catch(err => {
          if (err.name !== "NavigationDuplicated") {
            throw err;
          }
        });
      }, 100); 
    }
  }
};
</script>

<style scoped>
/* Estilos opcionais */
</style>


<style scoped>
</style>
