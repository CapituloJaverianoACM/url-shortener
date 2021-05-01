<template>

 <header>
    <nav>
        <div>
         <img src="../../assets/imgs/logo.svg" height="40" width="250"/>
        </div>

       <ul>
        <li>
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="link" to="/aboutUs">About us</router-link>
        </li>
        <li>
          <router-link class="link" to="/learnMore">Learn more</router-link>
        </li>
        <li>
          <router-link class="link" to="/support">Support</router-link>
        </li>
      </ul>
    </nav>
 </header>

</template>

<script>
</script>

<style scoped lang = "scss">

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

img{
    margin-top: 15px;
    margin-right: 480px;
    
}

header{
   position: fixed;
   width: 100%;
   background-color: #FFFF;;
}

nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    font-family: $montserratMedium-font;

    ul{
    display:flex;
    justify-content: space-around;
    width: 30%;
    list-style:none;  

    
     .link{
        text-decoration: none;
        font-size: 14px;   
        color: $acm-color;
        }
    
     .link:hover{
        color: $acm-color;
        }

    }

}

</style>
