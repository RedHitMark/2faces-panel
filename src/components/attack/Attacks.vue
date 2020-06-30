<template>
    <div class="attacks">
        <h1>All attacks:</h1>

        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve the attacks at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">
                <div v-if="loading">
                    <div class="spinner-border spinner-grow-sm text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>

            <BulmaAccordion v-else :dropdown="true" :icon="'plus-minus'" :initialOpenItems="null" :caretAnimation="{duration: '.4s', timerFunc: 'ease-in-out'}" :slide="{duration: '.9s',timerFunc: 'ease'}">
                <!-- The wrapper component for all the items -->
                <BulmaAccordionItem v-for="(attack, index) in attacks" v-bind:key="index">
                    <h4 slot="title"><strong>{{ attack.device.ip }}</strong> - {{ attack.device.port }}</h4>
                    <div slot="content">
                        <strong>{{ attack.device.ip }}</strong> - {{ attack.device.port }}<br/>
                        <span>Model: {{ attack.device.model }}</span><br/>
                        <span>API: {{ attack.device.api }}</span><br/>
                        <span>Attack Result: </span><br/>
                        <div v-if="attack.result.toString().startsWith('/9j/')">
                            <img style="width: 400px" v-bind:src="'data:image.png;base64,' + attack.result" />
                        </div>
                        <div v-else-if="attack.result.toString().startsWith('AAAAGGZ0eX')">
                            <audio v-bind:src="'data:audio/mp3;base64,' + attack.result"  controls="controls" autobuffer="autobuffer">
                            </audio>
                        </div>
                        <div v-else-if="attack.resultType === 'JSON'">
                            <tree-view :data="attack.result" :options="{maxDepth: 1}"></tree-view>
                        </div>
                        <div v-else>
                            {{ attack.result}}
                        </div>
                        <div>
                            Timing:<br>
                            download_time = {{attack.timing.download_time}}<br>
                            parse_time = {{attack.timing.parse_time}}<br>
                            compile_time = {{attack.timing.compile_time}}<br>
                            dynamic_loading_time = {{attack.timing.dynamic_loading_time}}<br>
                            execution_time = {{attack.timing.execution_time}}<br>
                        </div>
                        <router-link :to="'/payloads/details/' + attack.payload_id">Show payload sent</router-link><br>
                        <router-link :to="'/attacks/details/' + attack._id">Show attack details</router-link>
                        <button v-on:click="deleteAttack(attack._id)"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </BulmaAccordionItem>
            </BulmaAccordion>
        </section>
    </div>
</template>

<script>
    import AttacksService from "@/services/AttacksService";
    import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion';


    export default {
        name: "Attacks",
        components: {
            BulmaAccordion,
            BulmaAccordionItem
        },
        data () {
            return {
                attacks: [],
                loading: true,
                errored: false
            }
        },
        mounted () {
            this.getAttacks()
        },
        methods: {
            async getAttacks () {
                AttacksService.fetchAttacks()
                    .then(response => {
                        this.attacks = response.data;
                        this.attacks.forEach((attack) => {
                            if(attack.result && attack.resultType === "JSON") {
                                attack.result = attack.result.replace(/(\n)/g, "\\n");
                                attack.result = attack.result.replace(/(\r)/g, "\\r");
                                attack.result = attack.result.replace(/(\t)/g, "\\t");
                                attack.result = JSON.parse(attack.result)
                            }
                        })
                    })
                    .catch(error => {
                        console.log(error);
                        this.errored = true
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            },
            async deleteAttack(attack_id) {
                if(confirm("Do you really want to delete?")) {
                    AttacksService.deleteAttack(attack_id)
                        .then( () => {
                            this.getAttacks();
                            this.loading = true;
                            alert("Your attack was deleted successfully!");
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
