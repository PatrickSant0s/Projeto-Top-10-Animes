<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field id="email"
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        > </v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br />

        <v-btn
        @click="onSubmit"
         @submit="onSubmit"
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>

import { users } from "../utils/Users";

export default {
    name:"UserLogin",
    data: () => ({
    email: "",
    password: "",
    loading: false,
  }),

    computed: {
    users() {
      return users;
    },
  },
  mounted() {
    
    
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      
      if (!this.email || !this.password) {
        alert('Preencha ambos os campos de email e senha.');
        return;
      }
      const isValidUser = this.users.find(user => user.email === this.email && user.password === this.password);

      if (isValidUser) {
        this.loading = true;
        alert('Login feito com sucesso');
      } else {
        alert('Usuário inválido. Verifique seu email e senha, Caso não tenha conta Registre-se ');
      }
    },
  },
};
</script>
