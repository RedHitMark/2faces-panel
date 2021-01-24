<template>
  <mdb-navbar id="header" dark color="amber unique-color-dark" hamburger togglerIcon="chevron-down">
    <mdb-navbar-brand>
      <img id="logo" alt="2Faces logo" src="./../assets/favicon.png">
    </mdb-navbar-brand>

    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item waves-fixed color="unique-color-dark" v-for="(menuEntry, index) in menuEntries" :key="index">
          <router-link class="white-text font-weight-bold" v-bind:to="menuEntry.href">{{ menuEntry.name }}</router-link>
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem} from 'mdbvue';

export default {
  name: 'Header',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  },
  data() {
    return {
      name: "Header",
      menuEntries: [
        {name: 'Home', href: '/'},
        {name: 'Show infected devices', href: '/devices'},
        {name: 'Show payloads', href: '/payloads'},
        {name: 'Show attacks', href: '/attacks'},
        {name: 'Team', href: '/team'}
      ],
    }
  },
  methods: {}
}
</script>

<style scoped>
#logo {
  max-width: 50px;
  height: auto;
}
a {
  font-size: 0.9em;
}

.navbar-toggler-icon {
  background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');
}
</style>
