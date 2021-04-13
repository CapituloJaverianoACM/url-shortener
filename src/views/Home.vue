<template>
  <v-main>
    <Header/>
    <Home/>
     <!-- <Footer/> -->
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import Home from "../components/home/Home.vue";
//import Footer from "../components/general/Footer";

export default {
  components: {
    Header,
    Home,
   // Footer,
  },
};
</script>

<style scoped lang = "scss" >
</style>