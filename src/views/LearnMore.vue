<template>
  <div class="Learn">
     <Header/>
     <LearnMore/>
     <Footer/>
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
import LearnMore from "../components/learnMore/LearnMore.vue";
import Footer from "../components/general/Footer";

export default {
  components: {
    Header,
    LearnMore,
    Footer,
  },
};
</script>