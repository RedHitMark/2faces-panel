import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Team from "@/components/Team";
import Devices from "@/components/Devices";
import Payloads from "@/components/payload/Payloads";
import PayloadDetails from "@/components/payload/PayloadDetails";
import NewPayload from "@/components/payload/NewPayload";
import EditPayload from "@/components/payload/EditPayload";
import Attacks from "@/components/attack/Attacks";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home-alt',
            component: Home
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
        {
            path: '/devices',
            name: 'devices',
            component: Devices
        },
        {
            path: '/payloads',
            name: 'payloads',
            component: Payloads
        },
        {
            path: '/payloads/details/:payload_id',
            name: 'details-payload',
            component: PayloadDetails
        },
        {
            path: '/payloads/new',
            name: 'new-payload',
            component: NewPayload
        },
        {
            path: '/payloads/edit/:payload_id',
            name: 'edit-payload',
            component: EditPayload
        },
        {
            path: '/attacks',
            name: 'attacks',
            component: Attacks
        }
    ]
})

