<template>
  <mdb-navbar color="default unique-color-dark" id="header">
    <mdb-navbar-brand class="text-white">
      <img width="" id="logo" alt="Vue logo" src="./../assets/logo.png">
    </mdb-navbar-brand>
    <mdb-navbar-toggler color="white">
      <mdb-navbar-nav right>
        <mdb-nav-item color="unique-color-dark" v-for="(menuEntry, index) in menuEntries" :key="index">
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
  width: 140px;
  height: auto;
  border-radius: 20px;
  background-color: white;
}
</style>
