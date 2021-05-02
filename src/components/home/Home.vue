<template>
<div class="body">

    <div class="home">
        <div class="text">
            <h1>Welcome to ACM's URL Shortener</h1>
            <p>
                A URL shortener built with powerful tools to help you grow and protect
                your brand.
            </p>
            <v-btn dark class="button" @click.prevent="scrollTo('#shortIt')">Try it!</v-btn>
        </div>
        <img class="imghome" src="../../assets/imgs/home.svg" />
    </div>

    <div id="shortIt">
        <h2>Let's short it</h2>

        <div class=field>
            <input type="text" placeholder="Insert link here">
            <button class="shorten">Shorten</button>
        </div>
        <v-data-table :headers="headers" :items="desserts" class="history">
        </v-data-table>

        <router-link id="linkid" class="link" to="/learnMore">Learn how we did it!</router-link>
    </div>

</div>
</template>

<script>
export default {
    data: () => ({
        headers: [{
                text: 'URL History',
                align: 'start',
                value: 'name',
            },
            {
                text: 'Due Date',
                value: 'date'
            },
        ],
        desserts: [{
                name: 'https://acm.puj/3qJZtCP',
                date: '20/04/2021'
            },
            
           
        ],
    }),

    methods: {
      scrollTo(selector){
        document.querySelector(selector).scrollIntoView({ behavior: 'smooth'});
      }
    }
}
</script>

<style lang="scss" scoped>

.body {
    background-image: url("../../assets/imgs/gradient.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin-top: 20px;
    background-position: bottom;

}

.imghome {
    float: right;
    margin-right: 75px;
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

.shorten {
    background-color: #263238;
    color: #FFFFFF;
    float: right;
    border-radius: 0 6px 6px 0px;
    height: 40px;
    width: 200px;
    font-family: $montserratMedium-font;
}

h2 {
    font-family: $comfortaaBold-font;
    font-size: 35px;
}

#shortIt {
    margin: 90px 90px 0 90px;
}

.field {
  background-color: #FFFF;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    border: 1px solid #C7C7C7;
    border-radius: 6px;
    height: 40px;
}

input {
    height: 40px;
    width: 100%;
    border-radius: 6px;
}

input:placeholder-shown {
    padding-left: 10px;
    font-family: $montserratMedium-font;
}

.history {

    margin-top: 50px;
    background-color: #F6F6F6 !important;
}

#linkid {
    margin-top: 50px;
    color: #797878;
    font-family: $montserratMedium-font;
    display: flex;
    justify-content: center;
}
</style>
