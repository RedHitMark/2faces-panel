<template>
  <mdb-container id="home">
    <mdb-row class="text-center justify-content-center align-items-center py-5">
      <mdb-col md="6" sm="6">
        <img class="main-logo" src="./../assets/logo.png" alt="2Faces logo"/>
      </mdb-col>
      <mdb-col md="6" sm="6">
        <h1 class="h1-responsive font-weight-bold">2Faces</h1>
        <h2 class="h5-responsive font-weight-bold">New Model of Android Malware</h2>
      </mdb-col>
    </mdb-row>

    <div class="separator"></div>

    <mdb-row class="text-center justify-content-center align-items-center mt-5">
      <h2 class="h2-responsive font-weight-bold text-center">Features</h2>
    </mdb-row>

    <mdb-row class="text-center justify-content-center align-items-center  mb-5  mt-1">
      <mdb-col md="3" sm="6" class="android-col">
        <i class="fab fa-android"></i>
        <h4 class="h4-responsive font-weight-bold">Android Malware</h4>
      </mdb-col>
      <mdb-col md="3" sm="6" class="dynamic-compiling-col">
        <i class="fas fa-cogs"></i>
        <h4 class="h4-responsive font-weight-bold">Dynamic compiling</h4>
      </mdb-col>
      <mdb-col md="3" sm="6" class="dynamic-loading-col">
        <i class="fas fa-arrow-circle-up"></i>
        <h4 class="h4-responsive font-weight-bold">Dynamic loading</h4>
      </mdb-col>
      <mdb-col md="3" sm="6" class="stelth-col">
        <i class="fas fa-eye-slash"></i>
        <h4 class="h4-responsive font-weight-bold">Stealth mode</h4>
      </mdb-col>
    </mdb-row>

    <div class="separator"></div>

    <mdb-row class="text-center justify-content-center align-items-center mt-5">
      <h2 class="h2-responsive font-weight-bold text-center">Explore</h2>
    </mdb-row>

    <mdb-row class="justify-content-center">
      <mdb-col xl="4" md="6" class="mb-4" v-for="(menuEntry, index) in menuEntries" :key="index">

        <mdb-card class="rounded-card">
          <mdb-view hover>
            <mdb-card-image class="card-image-fixed" :src="menuEntry.imageSrc" :alt="menuEntry.name"></mdb-card-image>
            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title class="text-center">{{ menuEntry.name }}</mdb-card-title>
            <mdb-card-text class="text-center">{{ menuEntry.description }}</mdb-card-text>
            <router-link tag="button" class="btn unique-color-dark text-white ripple-parent full-button"
                         :to="menuEntry.href">Go
            </router-link>
          </mdb-card-body>
        </mdb-card>

      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
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
} from 'mdbvue';

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
      name: "Menu",
      menuEntries: [
        {
          name: 'Infected devices',
          description: 'Show infected devices',
          href: '/devices',
          imageSrc: require('./../assets/earth.jpg')
        }, {
          name: 'Payloads',
          description: 'Show payloads',
          href: '/payloads',
          imageSrc: require('./../assets/coding.jpg')
        }, {
          name: 'Attack Result',
          description: 'Show attack result',
          href: '/attacks',
          imageSrc: require('./../assets/matrix.jpg')
        }
      ],
    }
  },
  methods: {}
}
</script>

<style scoped>
.main-logo {
  width: 100%;
  max-width: 300px;
}

.separator {
  width: 100%;
  height: 2px;
  background-color:#1c2331;
  box-shadow: 0 5px 20px #1c2331;
}

.android-col i {
  color: #79C257;
  font-size: 3em;
}

.dynamic-compiling-col i {
  color: #caccce;
  font-size: 3em;
}

.dynamic-loading-col i {
  color: #222222;
  font-size: 3em;
}

.stelth-col i {
  color: rgba(60, 60, 62, 0.97);
  font-size: 3em;
}


.rounded-card {
  border-radius: 30px;
}

.card-image-fixed {
  height: 200px;
  margin-top: 30px;
}

.full-button {
  width: calc(100% - 12px);
}

</style>
