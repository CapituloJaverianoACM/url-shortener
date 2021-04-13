<template>
  <v-main>
    <AboutUsInfo class="width" />
    <AboutUsTeam class="team width" />
  </v-main>
</template>

<script>
import AboutUsInfo from "../components/aboutUs/AboutUsInfo";
import AboutUsTeam from "../components/aboutUs/AboutUsTeam";
export default {
  components: {
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
