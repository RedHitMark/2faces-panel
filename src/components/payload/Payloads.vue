<template>
    <div class="payloads">
        <h1 class="h1-responsive font-weight-bold text-center my-5">All payloads:</h1>

        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve the payloads at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">
                <div class="spinner-border spinner-grow-sm text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <mdb-container v-else>
                <router-link tag="button" class="btn btn-primary ripple-parent" to="/payloads/new/">Create new</router-link>

                <mdb-row>
                    <mdb-col sm="12" md="6" lg="4" class="mt-5" v-for="(payload, index) in payloads" v-bind:key="index">
                        <mdb-card>
                            <mdb-card-body>
                                <mdb-card-title>{{ payload.name }}</mdb-card-title>
                                <mdb-card-text>{{ payload.description }}</mdb-card-text>

                                <router-link tag="button" class="btn btn-primary ripple-parent" :to="'/payloads/details/' + payload._id">Show detail</router-link>
                                <router-link tag="button" class="btn btn-primary ripple-parent" :to="'/payloads/edit/' + payload._id"><i class="fas fa-edit"></i></router-link>
                                <mdb-btn color="primary" v-on:click="deletePayload(payload._id)"><i class="fas fa-trash-alt"></i></mdb-btn>
                            </mdb-card-body>
                        </mdb-card>
                    </mdb-col>
                </mdb-row>
            </mdb-container>
        </section>
    </div>
</template>

<script>
    import PayloadsService from "@/services/PayloadsService";
    import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn} from 'mdbvue';
    export default {
        name: "Payloads",
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbCardTitle,
            mdbCardText,
            mdbBtn
        },
        data () {
            return {
                payloads: [],
                loading: true,
                errored: false
            }
        },
        mounted () {
            this.getPayloads()
        },
        methods: {
            async getPayloads () {
                PayloadsService.fetchPayloads()
                    .then(response => {
                        this.payloads = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.errored = true
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            },
            async deletePayload(payload_id) {
                if(confirm("Do you really want to delete?")) {
                    PayloadsService.deletePayload(payload_id)
                        .then( () => {
                            this.getPayloads();
                            this.loading = true;
                            alert("Your payload was deleted successfully!");
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
