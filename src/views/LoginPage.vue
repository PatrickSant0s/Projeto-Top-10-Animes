
   <template>
    <div class="email">
  <v-responsive
    class="mx-auto"
    max-width="344"
  >
    <v-text-field
      hide-details="auto"
      label="Email address"
      placeholder="johndoe@gmail.com"
      type="email"
    ></v-text-field>
  </v-responsive>
  
  <div class="senha">
   
  <v-responsive
    class="mx-auto"
    max-width="344"
  >
    <v-text-field
      label="Password"
      type="input"
      hint="Enter your password to access this website"
    ></v-text-field>
  </v-responsive>

  </div>
  
  </div>
</template>



<script>
export default {
    name:"LoginPage"
}
</script>


<style scoped>
.senha, .email{
    background: rgb(197, 201, 204);
    width: 400px;
}

</style>