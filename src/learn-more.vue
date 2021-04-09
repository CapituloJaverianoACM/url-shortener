<template>
  <div id="app">
    <h1> Learn more </h1>

    <img id="img" src="./assets/Captura.jpg">
    <div id=caja> 
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper nibh vel placerat iaculis. Fusce ac finibus neque. Curabitur interdum eleifend felis vitae auctor. Donec eu mauris porta, ultricies lacus ac, blandit massa. Sed a diam id velit consequat iaculis ut in arcu. Quisque sagittis non leo nec congue. Nulla nec congue sem. Vivamus gravida leo a ultricies vulputate. In hac habitasse platea dictumst. Cras eget tincidunt enim, quis dictum nisi. Maecenas et tortor quis augue facilisis gravida quis eget turpis.</p>
      <p> Vivamus nec nibh lectus. Mauris consequat sem odio, quis posuere ipsum maximus sed. Vivamus urna tellus, venenatis eu egestas vitae, fringilla et velit. Morbi in metus in ipsum tincidunt congue. Donec eget maximus nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi rhoncus augue nisi, a aliquam arcu commodo ut.</p>
      <p> Sed auctor vestibulum pharetra. Cras non magna nisl. Curabitur rhoncus quam eu magna dignissim bibendum. Integer sagittis dui neque, suscipit consectetur metus vehicula quis. Maecenas ac varius odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus laoreet mattis nulla quis gravida. Nunc ipsum sem, pellentesque vitae arcu tincidunt, pharetra laoreet enim.</p>
    <br>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black; 
  font-size: 20px;
}
#img{
  width: 500px;
  height: 500px;
  float: right;
  margin-top: 60px;
}
#img2{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#caja{
 margin-right: 55%;
}

#contenido{  
 font-family: Montserrat;;
 margin-top: 10%;
 margin-left: 10%;
 margin-right: 10%;
}

</style>
