<template>
  <v-app-bar
      class="navbar"
      app
      flat>

      <div class="d-flex align-center">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            class="shrink mr-2 logo"
            contain
            transition="scale-transition"
            width="40"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>

          <label
              class="app-name">
              SPMS
          </label>
      </div>

      <v-spacer></v-spacer>
      
      
      <v-btn text>
          Nuno Mendonça
      </v-btn>

      <v-divider vertical></v-divider>
      

      <v-btn
          class="mx-3"
          icon>
          <v-icon size="24px">fas fa-search</v-icon>
      </v-btn>

      <v-btn
          class="mx-3"
          icon>
          <v-icon size="24px">fas fa-lock</v-icon>
      </v-btn>
  </v-app-bar>
</template>



<script>
  export default {
    //
  }
</script>