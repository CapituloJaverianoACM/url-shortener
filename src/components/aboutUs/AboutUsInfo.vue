<template>
  <section class="phoenix-info-section">
    <div class="section">
      <div class="info-section">
        <h2>What is ACM?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <img src="../../assets/img/aboutUs.svg" height="417" width="500" />
    </div>
    <div class="section reverse">
      <img src="../../assets/img/mision.svg" height="367" width="500" />
      <div class="info-section">
        <h2>Mision</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
    </div>
    <div class="section">
      <div class="info-section">
        <h2>Vision</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
      <img src="../../assets/img/vision.svg" height="337" width="500" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.section {
  display: flex;
  align-items: center;
  margin: 3rem 0;
  flex-flow: row;
  @media screen and (max-width: $breakpoint-tablet) {
    flex-flow: column;
    margin: 3rem 1rem;
  }
  .info-section {
    width: 50%;
    margin: 0.6rem;
    @media screen and (max-width: $breakpoint-tablet) {
      width: 100%;
      margin: 0;
      text-align: center;
    }
  }
  img {
    width: 50%;
    @media screen and (max-width: $breakpoint-tablet) {
      width: 300px;
      height: 200px;
      margin-top: 1rem;
    }
  }
  h2 {
    text-align: center;
    font-family: $montserratBold-font;
    margin: 1rem 0;
  }
  p {
    margin-bottom: 0;
  }
}
.reverse {
  @media screen and (max-width: $breakpoint-tablet) {
    flex-flow: column-reverse;
  }
}
</style>
