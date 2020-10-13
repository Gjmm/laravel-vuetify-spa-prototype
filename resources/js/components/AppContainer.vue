<template>
    <v-app class="vapp">
      <navbar />

      <v-main class="mx-8 my-8">
        <router-view></router-view>
      </v-main>
      <!-- <v-main>
        <slot></slot>
      </v-main> -->
    </v-app>
  
</template>


<script>
  import Navbar from './Navbar'
  export default {
    name: 'App',
    components: { Navbar },
    data: () => ({
    })
  }
</script>