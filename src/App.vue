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


/** Default font **/
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body, input, select, textarea {
  font-family: "Roboto Light", "Segoe UI", Arial, Helvetica, sans-serif;
  color: #555555;
  font-size: calc(15px + 0.35vw) !important;
  line-height: calc(15px + 1.05vw) !important;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
a {
  text-decoration: none;
  color: #111111;
}

/** **/
body, html {
  margin: 0;
  height: 100%;
}
#wrapper {
  min-height: 80vh;
  width: 100%;
}
.vue-codemirror .CodeMirror {
  height: auto;
}

.container {
  width: 75em !important;
  max-width: 100% !important;
}
</style>
