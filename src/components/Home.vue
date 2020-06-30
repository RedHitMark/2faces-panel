<template>
  <div id="home">

    <mdb-container>
      <mdb-row class="text-center justify-content-md-center align-items-center">
        <mdb-col md="3" class="mt-5">
          <i class="fab fa-android"></i><br>Android Malware
        </mdb-col>
        <mdb-col md="3" class="mt-5">
          <i class="fas fa-cogs"></i><br>Dynamic compiling
        </mdb-col>
        <mdb-col md="3" class="mt-5">
          <i class="fas fa-arrow-circle-up"></i><br>Dynamic loading
        </mdb-col>
        <mdb-col md="3" class="mt-5">
          <i class="fas fa-eye-slash"></i><br>Stealth mode
        </mdb-col>
      </mdb-row>

      <mdb-row class="justify-content-md-center align-items-center high-row">
        <mdb-col md="4" class="mt-5" v-for="(menuEntry, index) in menuEntries" :key="index">

          <mdb-card>
            <mdb-view hover>
              <mdb-card-image src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg" :alt="menuEntry.name"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </mdb-view>
            <mdb-card-body>
              <mdb-card-title>{{menuEntry.name}}</mdb-card-title>
              <mdb-card-text>{{menuEntry.description}}</mdb-card-text>
              <router-link tag="button" class="btn btn-primary ripple-parent" :to="menuEntry.href">Go</router-link>
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
            image: ''
          }, {
            name: 'Payloads',
            description: 'Show payloads',
            href: '/payloads',
            image: ''
          }, {
            name: 'Attack Result',
            description: 'Show attack result',
            href: '/attacks',
            image: ''
          }
        ],
      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home {
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(20,20,182,0.8379726890756303) 0%, rgba(0,212,255,1) 100%);
  }

  .high-row {
    min-height: 90vh !important;
  }


  /*.card {
    width: 23rem;
  }*/
</style>
