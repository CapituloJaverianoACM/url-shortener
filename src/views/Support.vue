<template>
  <v-main class="support">
     <Header/>
     <Support/>
  </v-main> 
</template>

<script>
import Header from "../components/general/Header.vue";
import Support from "../components/support/Support.vue";
//import Footer from "../components/general/Footer";

export default {
  components: {
    Header,
    Support,
   // Footer,
  },
};
</script>