<template>
    <div class="new-payload">
        <router-link to="/payloads">Go back to payloads list</router-link>

        <h1>New payload</h1>

        <section v-if="creationErrored">
            <p>We're sorry, we're not able to create a new payloads at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">Creating...</div>

            <form v-else @submit.prevent="checkForm">

                <div v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                    </ul>
                </div>

                <div class="payload-name">
                    <label for="payload-name">Payload name: </label><input type="text" id="payload-name" placeholder="Enter the name of payload"  v-model="payloadName">
                </div>

                <div class="payload-description">
                    <label for="payload-description">Payload description: </label><input type="text" id="payload-description" placeholder="Enter the description of payload"  v-model="payloadDescription">
                </div>

                <div class="payload-description">
                    <label for="payload-return-type">Return type: </label>
                    <select name="payload-return-type" id="payload-return-type" v-model="payloadResultType">
                        <option value="String">String</option>
                        <option value="JSON">JSON</option>
                        <option value="Image">Image</option>
                        <option value="Sound">Sound</option>
                    </select>
                </div>

                <div class="payload-content">
                    <p>Write your Java class, please use the method run() to inject code</p>
                    <codemirror :options="cmOptions" @ready="onCmReady" v-model="payloadContent"/>
                </div>
                <div class="permissions-checkboxes">
                    <div class="permissions-checkbox" v-for="(permission, index) in permissions" v-bind:key="index">
                        <input type="checkbox" :id="permission.name.toString().toLowerCase()" :value="permission.name" v-model="checkedPermissions">
                        <label :for="permission.name.toString().toLowerCase()">{{permission.name}}</label>
                    </div>
                </div>

                <input type="submit" value="Submit">
            </form>
        </section>

    </div>
</template>

<script>
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
        name: "NewPayload",
        data() {
            return {
                errors : [],
                loading: false,
                creationErrored: false,
                permissions: permissions_json,
                payloadName : null,
                payloadDescription : null,
                payloadContent :
                    "import android.content.Context;\n" +
                    "\n" +
                    "class RuntimeClass {\n" +
                    "  \tpublic RuntimeClass() {}\n" +
                    "  \n" +
                    " \tpublic String run(Context context) {\n" +
                    "    \t/*TODO write your code here*/\n" +
                    "    }\n" +
                    "}",
                payloadResultType: 'String',
                checkedPermissions: [],
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
        methods : {
            onCmReady(cm) {
                cm.on('keypress', () => {
                    cm.showHint({completeSingle:false})
                })
            },
            checkForm(e) {
                if(this.payloadName && this.payloadDescription && this.payloadContent) {
                    this.addNewPayload({
                        name: this.payloadName,
                        description: this.payloadDescription,
                        content: this.payloadContent,
                        vulnerabilities : this.checkedPermissions,
                        resultType : this.payloadResultType
                    });

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
            async addNewPayload(newPayload) {
                PayloadsService.createPayload(newPayload)
                    .then(() => {
                        alert("Your payload was created successfully!");
                        this.$router.push('/payloads')
                    })
                    .catch((error) => {
                        console.log(error);
                        this.creationErrored = true
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        }
    }
</script>

<style scoped>
</style>
