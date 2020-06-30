<template>
    <div class="detail-payload">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve the payload at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">
                <font-awesome-icon icon="spinner" size="3x" spin></font-awesome-icon>
            </div>

            <div v-else>
                <h1>Payloads: {{payload.name}}</h1>
                <h4>{{ payload.description }}</h4>

                <p v-if="payload.vulnerabilities.length === 0">You can use this payload on every device</p>

                <p v-else>You can use this payload on devices that use these permissions:</p>
                <ul>
                    <li v-for="(permission, index) in payload.vulnerabilities" v-bind:key="index">{{ permission }}</li>
                </ul>

                <codemirror v-model="payload.content" :options="cmOptions"></codemirror>

                <router-link :to="'/payloads/edit/' + payload._id">Edit</router-link>
                <button v-on:click="deletePayload()">Delete</button>
            </div>
        </section>

        <router-link to="/payloads">Go back to payloads list</router-link>
    </div>
</template>

<script>
    import PayloadsService from "@/services/PayloadsService";

    export default {
        name: "Payload",
        data () {
            return {
                payload_id: this.$route.params.payload_id,
                payload: null,
                loading: true,
                errored: false,
                cmOptions: {
                    tabSize: 4,
                    mode: 'text/x-java',
                    theme: 'base16-dark',
                    lineNumbers: true,
                    line: true,
                    readOnly: true
                    // more CodeMirror options...
                }
            }
        },
        mounted () {
            this.getPayload()
        },
        methods: {
            async getPayload() {
                PayloadsService.fetchPayload(this.payload_id)
                    .then(response => {
                        this.payload = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.errored = true
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            },
            async deletePayload() {
                if(confirm("Do you really want to delete?")) {
                    PayloadsService.deletePayload(this.payload_id)
                        .then( () => {
                            alert("Your payload was deleted successfully!");
                            this.$route.push('/payloads')
                        })
                        .catch(error => {
                            console.log(error);
                            this.errored = true
                        })
                        .finally(() => {
                            this.loading = false;
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>
