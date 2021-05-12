<template>
  <section class="acm-info-section">
    <div class="section">
      <div class="info-section">
        <h2>What is ACM?</h2>
        <p>
          The Association for Computing Machinery (ACM) is an international
          knowledge society for computing. It was founded in 1947, and is the
          largest scientific and educational computing society in the world. It
          is a non-profit professional membership group. It has over 100,000
          members as of 2011. Its headquarters are in New York City. His motto
          is "Advance computing as a science and profession."
        </p>
      </div>
      <img src="../../assets/img/aboutUs.svg" height="417" width="500" />
    </div>
    <div class="section reverse">
      <img src="../../assets/img/mision.svg" height="337" width="500" />
      <div class="info-section">
        <h2>What is the chapter?</h2>
        <p>
          We are a student group from the Engineering Faculty of the Pontificia
          Universidad Javeriana, with a history of 10 years. We are formalized
          in the Vice-rectory of the University Environment, from the Center for
          the Promotion of Identity and Construction of the Community,
          particularly in the University Participation Program and directly
          accompanied by the Faculty of Engineering. We carry out activities
          that mainly involve students from the Faculty of Engineering and
          students from schools who are interested in the Systems Engineering
          career, we also participate in the National Programming Marathon that
          takes place every year, however, we open the doors for everyone who is
          interested to support us and contribute to the objective of ACM.
          <span
            ><a class="learn-more" href="http://acm.capitulojaveriano.com/"
              >Learn more...</a
            ></span
          >
        </p>
      </div>
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
  .learn-more {
    color: $acm-color;
    text-decoration: none;
  }
}
.reverse {
  @media screen and (max-width: $breakpoint-tablet) {
    flex-flow: column-reverse;
  }
}
</style>
