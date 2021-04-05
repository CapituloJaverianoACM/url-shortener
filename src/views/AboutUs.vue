<template>
  <div>
    <AboutUsInfo class="width" />
    <AboutUsTeam class="team width" />
  </div>
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
  width: 70vw;
  margin: auto;
  font-family: $montserratRegular-font;
  @media screen and (max-width: $breakpoint-desktop) {
    width: 90vw;
  }
  @media screen and (max-width: $breakpoint-tablet) {
    width: 100vw;
    margin: 0;
  }
}
.team {
  margin-top: 3rem;
}
</style>
