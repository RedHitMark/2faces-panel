<template>
    <div id="header">
        <mdb-navbar color="unique-color-dark">
            <mdb-navbar-brand>
                <img width="" id="logo" alt="Vue logo" src="./../assets/logo.png">
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>
                    <mdb-nav-item color="unique-color-dark" v-for="(menuEntry, index) in menuEntries" :key="index"><router-link  class="white-text font-weight-bold" v-bind:to="menuEntry.href">{{menuEntry.name}}</router-link></mdb-nav-item>
                    <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle tag="a" navLink color="unique-color-dark"  class="white-text font-weight-bold" slot="toggle" waves-fixed>Info</mdb-dropdown-toggle>
                        <mdb-dropdown-menu>
                            <mdb-dropdown-item><router-link class="" to="/team">Team</router-link></mdb-dropdown-item>
                            <mdb-dropdown-item><router-link class="" to="/contact">Contact</router-link></mdb-dropdown-item>
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
    </div>
</template>

<script>
    import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem} from 'mdbvue';
    export default {
        name: 'Header',
        components: {
            mdbNavbar,
            mdbNavbarBrand,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            mdbDropdown,
            mdbDropdownMenu,
            mdbDropdownToggle,
            mdbDropdownItem,
        },
        data() {
            return {
                name : "Header",
                menuEntries : [
                    { name : 'Home' , href : '/'},
                    { name : 'Show infected devices' , href : '/devices'},
                    { name : 'Show payloads', href : '/payloads'},
                    { name : 'Show attacks ', href : '/attacks'}
                ],
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    #logo {
        width: 140px;
        height: auto;
        border-radius: 20px;
        background-color: white;
    }
    /*a.nav-link  a {
        padding: 8px;
        background-color:rgb(63, 81, 181);
        color: rgb(255, 255, 255);
    }
    a.nav-link  a:hover {
        background-color:rgb(77, 94, 193);
        color:rgba(255, 255, 255, 0.75)
    }*/
</style>
