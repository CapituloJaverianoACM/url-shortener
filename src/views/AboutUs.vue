<template>
  <v-main>
    <Header />
    <AboutUsInfo class="width" />
    <AboutUsTeam class="team width" />
  </v-main>
</template>

<script>
import Header from "../components/general/Header.vue";
import AboutUsInfo from "../components/aboutUs/AboutUsInfo";
import AboutUsTeam from "../components/aboutUs/AboutUsTeam";
export default {
  components: {
    Header,
    AboutUsInfo,
    AboutUsTeam,
  },
};
</script>

<style scoped lang="scss">
.width {
  margin: auto;
  font-family: $montserratRegular-font;
  width: 70vw;

  @media screen and (max-width: $breakpoint-desktop) {
    width: 90vw;
  }
  @media screen and (max-width: $breakpoint-tablet) {
    margin: 0;
    width: 100vw;
  }
}
.team {
  margin-top: 3rem;
}
</style>
