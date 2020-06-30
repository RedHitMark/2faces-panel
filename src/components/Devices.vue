<template>
    <div class="devices">
        <h1>All infected devices</h1>
        <i class="fas fa-biohazard animated rotateIn infinite"></i>
        <div v-for="(target, index) in targets" v-bind:key="index">
            <h2>{{target.device.model}}</h2>
            <h3>{{target.device.port}} - {{ target.device.ip }}</h3>
            <h4>API: {{target.device.api}}</h4>
            <ul>
                <li v-for="permission in target.device.permissions" v-bind:key="permission">{{ permission }}
                    <i v-if="isInArray(permission, target.device.permissionsGranted)" class="fas fa-check-circle green-icon"></i>
                    <i v-else class="fas fa-times-circle red-icon"></i>
                </li>
            </ul>


            <model-list-select :list="filterPayload(payloads, target.device.permissionsGranted)"
                               v-model="target.payload_id"
                               option-value="_id"
                               option-text="name"
                               placeholder="select payload">
            </model-list-select><br/>
            <button v-on:click="send(target.device, target.payload_id)">Send malware <i class="fas fa-user-secret"></i></button>
        </div>
    </div>
</template>

<script>
    import DevicesService from "@/services/DevicesService";

    import { ModelListSelect } from 'vue-search-select'
    import PayloadsService from "@/services/PayloadsService";

    export default {
        name: "Devices",
        data () {
            return {
                targets: [],
                payloads: [],
                refreshRate: 3000
            }
        },
        mounted () {
            this.getPayloads();

            this.getDevices();
        },
        methods: {
            async getDevices () {
                const response = await DevicesService.fetchDevices();

                let newTargets = []

                response.data.forEach((device) => {
                    newTargets.push({device: device});
                });

                if (newTargets === this.targets) {
                    this.refreshRate += this.refreshRate === 10000? 0 : 1000;
                } else {
                    this.refreshRate -= this.refreshRate === 1000? 0 : 1000;
                    this.targets = newTargets;
                }

                /*setTimeout(() => {
                    this.getDevices()
                }, this.refreshRate)*/

            },
            async getPayloads() {
                const response = await PayloadsService.fetchPayloads();
                this.payloads = response.data;
            },
            async send(device, payload_id) {
                DevicesService.activate(device, payload_id)
                    .then((response) => {
                        alert("Attack's result: " + response.data.result)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            filterPayload(payloads, permissionsGranted) {
                let payloadsVulns = [];
                payloads.forEach((payload) => {
                    let i = 0;
                    while(i < payload.vulnerabilities.length && this.isInArray(payload.vulnerabilities[i], permissionsGranted) ) {
                        i++;
                    }

                    if( i >= payload.vulnerabilities.length ) {
                        payloadsVulns.push(payload)
                    }
                });
                return payloadsVulns;
            },
            isInArray(needle, array) {
                let i = 0;
                while(i < array.length && needle !== array[i]) {
                    i++;
                }

                return i < array.length;
            }
        },
        components: {
            ModelListSelect
        }
    }
</script>

<style scoped>
    .red-icon {
        color: red;
    }
    .green-icon {
        color: green
    }
</style>
