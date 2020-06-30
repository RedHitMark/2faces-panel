<template>
  <div id="app">
    <Header></Header>
    <div id="wrapper">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

body {
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
}
body, html {
  margin: 0;
  height: 100%;
}
#wrapper {
  min-height: 80vh;
  width: 100%;
  /*margin: 0 30px;*/
}
.vue-codemirror .CodeMirror {
  height: auto;
}
</style>
