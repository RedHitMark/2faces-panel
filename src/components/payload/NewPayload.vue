<template>
  <mdb-container id="new-payload">
    <mdb-row class="text-center justify-content-center align-items-center">
      <h1 class="h1-responsive font-weight-bold text-center mt-5">New Payload</h1>
    </mdb-row>

    <mdb-row v-if="creationErrored">
      <p>We're sorry, we're not able to retrieve the payload for edit at the moment, please try back later</p>
    </mdb-row>

    <form v-else @submit.prevent="checkForm">
      <mdb-row v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </mdb-row>

      <mdb-row>
        <mdb-col>
          <mdb-input label="Payload name" v-model="payloadName"/>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col>
          <mdb-input label="Payload description" v-model="payloadDescription"/>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col>
          <strong>Write your Java code</strong><br>
          Be careful:
          <ul>
            <li>Please use only <code>/* Block comment */</code></li>
            <li>Please don't use nested class</li>
            <li>You can call another class in this code only using dynamic loading and reflection</li>
          </ul>

          <codemirror :options="cmOptions" @ready="onCmReady" v-model="payloadContent"/>
        </mdb-col>
      </mdb-row>

      <mdb-row class="justify-content-center align-items-center">
        <mdb-col>
          <select class="browser-default custom-select" v-model="payloadResultType">
            <option value="null" selected>Select return type</option>
            <option value="String">String</option>
            <option value="JSON">JSON</option>
            <option value="Image">Image</option>
            <option value="Sound">Sound</option>
          </select>
        </mdb-col>
        <mdb-col>
          <mdb-input label="MethodToInvoke" v-model="payloadMethodToInvoke"/>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col>
          <p>Permissions to grant</p>
          <multiselect v-model="payloadVulnerabilities"
                       :options="permissions.map(a => a.name)"
                       :searcable="true"
                       :multiple="true"
                       :allow-empty="false">
          </multiselect>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col class="justify-content-center end-buttons">
          <input class="btn unique-color-dark text-white ripple-parent" type="submit" value="Update payload">
        </mdb-col>
        <mdb-col class="justify-content-center end-buttons">
          <router-link tag="button" class="btn unique-color-dark text-white ripple-parent" to="/payloads">Go back
          </router-link>
        </mdb-col>
      </mdb-row>
    </form>
  </mdb-container>
</template>

<script>
import PayloadsService from "@/services/PayloadsService";

// import language js
import 'codemirror/mode/clike/clike'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint';

//import multiselect
import Multiselect from 'vue-multiselect'

// bootstrap import
import {mdbContainer, mdbRow, mdbCol, mdbInput} from 'mdbvue';

const permissions_json = require('../../utils/permissions.json');

export default {
  name: "NewPayload",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    Multiselect
  },
  data() {
    return {
      errors: [],
      loading: false,
      creationErrored: false,
      permissions: permissions_json,
      payloadName: null,
      payloadDescription: null,
      payloadVulnerabilities: [],
      payloadMethodToInvoke: [],
      payloadContent:
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
  methods: {
    onCmReady(cm) {
      cm.on('keypress', () => {
        cm.showHint({completeSingle: false})
      })
    },
    checkForm(e) {
      if (this.payloadName && this.payloadDescription && this.payloadContent) {
        this.addNewPayload({
          name: this.payloadName,
          description: this.payloadDescription,
          content: this.payloadContent,
          vulnerabilities: this.checkedPermissions,
          resultType: this.payloadResultType
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
.end-buttons {
  display: flex;
}
</style>
