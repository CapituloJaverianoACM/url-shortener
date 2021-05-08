<template>
<div>
    <header>
        <div class="head">

        </div>
    </header>
    <div class="loc">
        <h1 id="title">FREQUENT QUESTIONS</h1>
    </div>
        <ul class="menu">
              <li class="Question">
                  <div class="dropdown">
                 <button v-on:click="myFunction1()" class="dropbtn">How to shorten an URL?</button>
                 <div id="myDropdown1" class="dropdown-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque laborum repellat dolorem facilis eaque maxime sint? Impedit laborum praesentium in magni dolorum, vel eveniet sed placeat iste saepe autem.</p>
                 </div>
               </div>
                </li>          
                <li class="Question">
                    <div class="dropdown">
                        <button v-on:click="myFunction2()" class="dropbtn">Where can i find the history of the links?</button>
                        <div id="myDropdown2" class="dropdown-content">
                            <p>Hola mundo2</p>
                        </div>
                    </div>
                </li> 
                <li class="Question">
                      <div class="dropdown">
                        <button v-on:click="myFunction3()" class="dropbtn">How much does the histoy lasts?</button>
                        <div id="myDropdown3" class="dropdown-content">
                        <p>Hola mundo3</p>
                       </div>
                     </div>
                </li>
                <li class="Question">
                     <div class="dropdown">
                            <button v-on:click="myFunction4()" class="dropbtn">How reliable is this shortner?</button>
                            <div id="myDropdown4" class="dropdown-content">
                             <p>Hola mundo4</p>
                             </div>
                    </div>
                </li>
                <li class="Question">
                        <div class="dropdown">
                             <button v-on:click="myFunction5()" class="dropbtn">Are links reused?</button>
                             <div id="myDropdown5" class="dropdown-content">
                            <p>Hola mundo5</p>
                             </div>
                             </div>
                </li>
                <li class="Question">
                    <div class="dropdown">
                        <button v-on:click="myFunction6()" class="dropbtn">What should i do in case a link goes to spam?</button>
                        <div id="myDropdown6" class="dropdown-content">
                            <p>Hola mundo6</p>
                        </div>
                    </div>
                </li>
            </ul>
        <h1 class="titulo-FAQ">TELL US ABOUT YOUR EXPERIENCE</h1>
        <div class="FAQ">
            <h2 style="text-align: center; color: #0D91CF; margin-top:20px;">FAQs BOX</h2>
            <form>
                <input type="text" placeholder="Name" id="min-box">
                <input type="text" placeholder="Email Address" id="min-box">
                <input type="text" placeholder="Comment" id="big-box">
                <input type="button" value="send" id="send">
            </form>
        </div>
</div>
</template>

<script>
export default {
 
  
  methods: {
     myFunction1() {
        document.getElementById("myDropdown1").classList.toggle("show");
    },
    myFunction2() {
        document.getElementById("myDropdown2").classList.toggle("show");
    },
     myFunction3() {
        document.getElementById("myDropdown3").classList.toggle("show");
    },
     myFunction4() {
        document.getElementById("myDropdown4").classList.toggle("show");
    },
     myFunction5() {
        document.getElementById("myDropdown5").classList.toggle("show");
    },
    myFunction6() {
        document.getElementById("myDropdown6").classList.toggle("show");
    },
    // Close the dropdown menu if the user clicks outside of it
    onClick : function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
  }
  };
</script>
<style scoped lang="scss">

    .head
    {
        width:auto;
        height: 130px;
        background-color: #0D91CF;
        margin-bottom: 100px;
    }

    .loc
    {
        margin-right: 390px;
    }

    #title {
        font-size: 40px;
        text-align: center;
    }

    .Question
    {
        margin-bottom: 40px;
    }

    .menu {
        list-style: none;
        border-radius: 20px;
        width: 900px;
        margin-top: 25px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin: auto;
    }

    .titulo-FAQ {
        margin-top: 250px;
        margin-right: 290px;
        FONT-SIZE: 35px;
        font-family: 'Montserrat, sans, seriff';
        text-align: center;
    }

    .FAQ {
        margin: auto;
        margin-top: 40px;
        margin-bottom: 150px;
        width: 900px;
        height: 663px;
        border: 1px solid gray;
    }


    #min-box {
        width: 800px;
        margin-left: 40px;
        margin-top: 30px;
        height: 30px;
        font-size: 20px;
        font-family: 'Montserrat';
        font-weight: bold;
        border: 1px solid gray;
        border-radius: 7px;
    }

    #big-box {
        margin-top: 30px;
        margin-left: 40px;
        width: 800px;
        padding-bottom: 320px;
        text-align: justify;
        font-size: 20px;
        font-family: 'Montserrat';
        font-weight: bold;
        border: 1px solid gray;
        border-radius: 7px;
    }

    #send {
        margin-top: 23px;
        padding-top: 7px;
        padding-bottom: 7px;
        margin-left: 400px;
        width: 100px;
        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 25px;
        color: white;
        background-color: #0D91CF;
        border-radius: 25px;
        border: none;
    }

    #send:hover {
        background-color: hsl(199, 86%, 39%);
        cursor: pointer;

    }

.img
{
    position:relative;
    bottom: 50em;
    left: 10em;
    background-attachment:scroll;
}


    /* Dropdown Button */
    .dropbtn {
        width: 840px;
        color: black;
        padding: 14px;
        border: 1px solid black;
        cursor: pointer;
        border-radius: 15px;
        text-align: justify;
        font-family:'Montserrat, sans, seriff' ;
        font-size: 20px;
        background-color: white;
        font-weight: bold;
    }

    /* Dropdown button on hover & focus */
 

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
        width: fit-content;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: whitesmoke;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        border-radius: 15px;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
        background-color: #ddd
    }

    /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
    .show {
        display: block;
    }
</style>