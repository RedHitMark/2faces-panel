<template>
  <div id="home">

    <mdb-container>
      <mdb-row class="text-center justify-content-center align-items-center">
        <h2 class="h2-responsive font-weight-bold text-center mt-5">Features</h2>
      </mdb-row>
      <mdb-row class="text-center justify-content-center align-items-center">
        <mdb-col md="3" sm="6" class="mt-5 android-col">
          <i class="fab fa-android"></i>
          <h4 class="h4-responsive font-weight-bold">Android Malware</h4>
        </mdb-col>
        <mdb-col md="3" sm="6" class="mt-5 dynamic-compiling-col">
          <i class="fas fa-cogs"></i>
          <h4 class="h4-responsive font-weight-bold">Dynamic compiling</h4>
        </mdb-col>
        <mdb-col md="3" sm="6" class="mt-5 dynamic-loading-col">
          <i class="fas fa-arrow-circle-up"></i>
          <h4 class="h4-responsive font-weight-bold">Dynamic loading</h4>
        </mdb-col>
        <mdb-col md="3" sm="6" class="mt-5 stelth-col">
          <i class="fas fa-eye-slash"></i>
          <h4 class="h4-responsive font-weight-bold">Stealth mode</h4>
        </mdb-col>
      </mdb-row>

      <mdb-row class="text-center justify-content-center align-items-center">
        <h2 class="h2-responsive font-weight-bold text-center mt-5">Explore</h2>
      </mdb-row>

      <mdb-row class="justify-content-center">
        <mdb-col xl="4" md="6" class="mb-4" v-for="(menuEntry, index) in menuEntries" :key="index">

          <mdb-card class="rounded-card">
            <mdb-view hover>
              <mdb-card-image class="card-image-fixed" :src="menuEntry.imageSrc" :alt="menuEntry.name"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </mdb-view>
            <mdb-card-body>
              <mdb-card-title>{{menuEntry.name}}</mdb-card-title>
              <mdb-card-text>{{menuEntry.description}}</mdb-card-text>
              <router-link tag="button" class="btn unique-color-dark text-white ripple-parent" :to="menuEntry.href">Go</router-link>
            </mdb-card-body>
          </mdb-card>

        </mdb-col>
      </mdb-row>
    </mdb-container>

  </div>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbView, mdbMask, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText } from 'mdbvue';

  export default {
    name: 'CardPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbView,
      mdbMask,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText
    },
    data() {
      return {
        name : "Menu",
        menuEntries : [
          {
            name: 'Infected devices',
            description: 'Show infected devices',
            href: '/devices',
            imageSrc: 'https://cdn.pixabay.com/photo/2017/04/23/19/30/earth-2254769_960_720.jpg'
          }, {
            name: 'Payloads',
            description: 'Show payloads',
            href: '/payloads',
            imageSrc: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg'
          }, {
            name: 'Attack Result',
            description: 'Show attack result',
            href: '/attacks',
            imageSrc: 'https://cdn.pixabay.com/photo/2017/11/16/09/32/matrix-2953869_960_720.jpg'
          }
        ],
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

  .android-col i{
    color: #79C257;
    font-size: 3em;
  }
  .dynamic-compiling-col i{
    color: #caccce;
    font-size: 3em;
  }
  .dynamic-loading-col i {
    color: #222222;
    font-size: 3em;
  }
  .stelth-col i{
    color: rgba(60, 60, 62, 0.97);
    font-size: 3em;
  }


  .rounded-card {
    border-radius: 30px;
  }

  .card-image-fixed{
    height: 200px;
    margin-top: 30px;
  }
</style>
