<template>
    <div class="edit-payload">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve the payload for edit at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">
                <div v-if="loading">
                    <div class="spinner-border spinner-grow-sm text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>

            <form v-else @submit.prevent="checkForm">

                <div v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                    </ul>
                </div>

                <div class="payload-name">
                    <label for="payload-name">Payload name: </label><input type="text" id="payload-name" placeholder="Enter the name of payload"  v-model="payload.name">
                </div>

                <div class="payload-description">
                    <label for="payload-description">Payload description: </label><input type="text" id="payload-description" placeholder="Enter the description of payload"  v-model="payload.description">
                </div>

                <div class="payload-content">
                    <p>Write your Java class, please use the method run() to inject code</p>
                    <codemirror :options="cmOptions" @ready="onCmReady" v-model="payload.content"/>
                </div>
                <div class="permissions-checkboxes">
                    <div class="permissions-checkbox" v-for="(permission, index) in permissions" v-bind:key="index">
                        <input type="checkbox" :id="permission.name.toString().toLowerCase()" :value="permission.name" v-model="payload.vulnerabilities">
                        <label :for="permission.name.toString().toLowerCase()">{{permission.name}}</label>
                    </div>
                </div>


                <input type="submit" value="Submit">
            </form>
        </section>

        <router-link to="/payloads">Go back to payloads list</router-link>
    </div>
</template>

<script>
    // import language js
    import 'codemirror/mode/clike/clike'
    import 'codemirror/theme/base16-dark.css'
    import 'codemirror/addon/hint/show-hint.css';
    import 'codemirror/lib/codemirror';
    import 'codemirror/addon/hint/anyword-hint';
    import 'codemirror/addon/hint/show-hint';
    import PayloadsService from "@/services/PayloadsService";

    const permissions_json = require('../../utils/permissions.json');

    // import language js
    import 'codemirror/mode/clike/clike'
    import 'codemirror/theme/base16-dark.css'
    import 'codemirror/addon/hint/show-hint.css';
    import 'codemirror/lib/codemirror';
    import 'codemirror/addon/hint/anyword-hint';
    import 'codemirror/addon/hint/show-hint';

    export default {
        name: "EditPayload",
        data() {
            return {
                payload_id: this.$route.params.payload_id,
                payload: null,
                loading: true,
                errored: false,
                errors: [],
                permissions: permissions_json,
                cmOptions: {
                    tabSize: 4,
                    mode: 'text/x-java',
                    theme: 'base16-dark',
                    lineNumbers: true,
                    line: true
                    // more CodeMirror options...
                }
            }
        },
        mounted () {
            this.getPayload()
        },
        methods: {
            onCmReady(cm) {
                cm.on('keypress', () => {
                    cm.showHint({completeSingle:false})
                })
            },
            checkForm(e) {
                if(this.payload.name && this.payload.description && this.payload.content) {
                    this.editPayload();

                    return true;
                }

                this.errors = [];

                if (!this.payloadName) {
                    this.errors.push('Name required.');
                }
                if (!this.payloadDescription) {
                    this.errors.push('Description required.');
                }
                if (!this.payloadContent) {
                    this.errors.push('Content required.');
                }

                e.preventDefault();
            },
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
            async editPayload() {
                if(confirm("Do you really want to edit?")) {
                    PayloadsService.editPayload(this.payload_id, this.payload)
                        .then( () => {
                            alert("Your payload was edited successfully!");
                            this.$router.push('/payloads')
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
