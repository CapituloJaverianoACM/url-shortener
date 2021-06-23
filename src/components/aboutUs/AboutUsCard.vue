<template>
  <div class="team-card">
    <v-img
      class="profile-img"
      :src="require(`../../assets/img/${name.replace(/\s/g, '')}.png`)"
      alt=""
      width="119"
      height="119"
      :style="`border: 5px solid ${color};`"
    />
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    color: String,
  },
};
</script>

<style scoped lang="scss">
.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profile-img {
  border-radius: 100px;
}
h3 {
  font-family: $montserratSemiBold-font;
  margin: 1rem 0;
}

</style>
