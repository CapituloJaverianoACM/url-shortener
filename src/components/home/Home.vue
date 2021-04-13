<template>
  <div class="home">
    <div class="text">
      <h1>Welcome to ACM's URL Shortener</h1>
      <p>
        A URL shortener built with powerful tools to help you grow and protect
        your brand.
      </p>
      <v-btn dark class="button">Try it!</v-btn>
    </div>
    <img src="../../assets/imgs/home.svg" />
  </div>
</template>

<script></script>

<style scoped lang="scss">
img {
  float: right;
  margin-right: 90px;
}
.home {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.text {
  display: absolute;
  margin-left: 90px;
}
h1 {
  font-family: $comfortaaBold-font;
  font-size: 45px;
}
p {
  font-family: $montserratMedium-font;
}

.button {
  font-family: $montserratMedium-font;
  background-color: $acm-color !important;
}

</style>
