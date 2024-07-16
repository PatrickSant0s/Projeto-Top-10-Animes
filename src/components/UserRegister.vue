<template>
  <div class="pt-16 pl-16 mt-16">
    <div class="registro success-alert" v-if="isSuccess">
      {{ successMessage }}
    </div>
    <v-card class="mx-auto" max-width="344" title="User Registration">
      <v-container id="register-form">
        <v-text-field
          v-model="firstName"
          color="primary"
          label="First name"
          variant="underlined"
          :error-messages="firstNameErrorMessage"
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          color="primary"
          label="Last name"
          variant="underlined"
          :error-messages="lastNameErrorMessage"
        ></v-text-field>

        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
          :error-messages="emailErrorMessage"
        ></v-text-field>

        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
          :error-messages="passwordErrorMessage"
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
      password: "",
      firstNameErrorMessage: "",
      lastNameErrorMessage: "",
      emailErrorMessage: "",
      passwordErrorMessage: "",
      successMessage: "",
      isSuccess: false, // Adiciona uma variável de estado para controlar a exibição do alerta de sucesso
    };
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    registerUser() {
      if (this.firstName.length < 3 || this.lastName.length < 3) {
        this.firstNameErrorMessage =
          "O nome e o sobrenome devem ter pelo menos 3 caracteres.";
        return;
      }

      if (!this.validateEmail(this.email)) {
        this.emailErrorMessage = "Por favor, insira um email válido.";
        return;
      }
      if (
        this.password.length < 3 ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(this.password)
      ) {
        this.passwordErrorMessage =
          "A senha deve ter pelo menos 3 caracteres e conter um caractere especial.";
        return;
      }

      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        status: "Cadastrado",
      };

      const existingUsers =
        JSON.parse(window.localStorage.getItem("users")) || [];
      existingUsers.push(newUser);
      window.localStorage.setItem("users", JSON.stringify(existingUsers));

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.clearErrorMessages();

      // Define a mensagem de sucesso e ativa o alerta de sucesso
      this.successMessage =
        "Registro realizado com sucesso! Você vai ser direcionado para área de login";
      this.isSuccess = true;

      setTimeout(() => {
        // Redireciona para a página de login após um atraso de 3 segundos
        this.$router.push("/login").catch((err) => {
          if (err.name !== "NavigationDuplicated") {
            throw err;
          }
        });
      }, 3200);
    },
    clearErrorMessages() {
      this.firstNameErrorMessage = "";
      this.lastNameErrorMessage = "";
      this.emailErrorMessage = "";
      this.passwordErrorMessage = "";
    },
  },
};
</script>

<style >
.registro {
  /* Define a cor verde para o alerta de sucesso */
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.success-alert {
  /* Estilos para o alerta de sucesso */
  position: absolute;
  top: 7%;
  left: 723px;
  width: 20%;
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.v-application .rounded {
    border-radius: 4px !important;
    background-color: transparent;
}
</style>
