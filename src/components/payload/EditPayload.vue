<template>
  <mdb-container id="edit-payload">
    <mdb-row class="text-center justify-content-center align-items-center">
      <h1 class="h1-responsive font-weight-bold text-center mt-5">Edit Payload</h1>
    </mdb-row>

    <mdb-row v-if="errored">
      <p>We're sorry, we're not able to retrieve the payload for edit at the moment, please try back later</p>
    </mdb-row>

    <mdb-row v-else-if="loading">
      <div class="spinner-border spinner-grow-sm text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
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
          <mdb-input label="Payload name" v-model="payload.name"/>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col>
          <mdb-input label="Payload description" v-model="payload.description"/>
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

          <codemirror :options="cmOptions" @ready="onCmReady" v-model="payload.content"/>
        </mdb-col>
      </mdb-row>

      <mdb-row class="justify-content-center align-items-center">
        <mdb-col>
          <select class="browser-default custom-select" v-model="payload.resultType">
            <option value="null" selected>Select return type</option>
            <option value="String">String</option>
            <option value="JSON">JSON</option>
            <option value="Image">Image</option>
            <option value="Sound">Sound</option>
          </select>
        </mdb-col>
        <mdb-col>
          <mdb-input label="MethodToInvoke" v-model="payload.methodToInvoke"/>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col>
          <p>Permissions to grant</p>
          <multiselect v-model="payload.vulnerabilities"
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
  name: "EditPayload",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    Multiselect
  },
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
      }
    }
  },
  mounted() {
    this.getPayload()
  },
  methods: {
    onCmReady(cm) {
      cm.on('keypress', () => {
        cm.showHint({completeSingle: false})
      })
    },
    checkForm(e) {
      if (this.payload.name && this.payload.description && this.payload.content) {
        this.editPayload();

        return true;
      }

      this.errors = [];

      if (!this.payload.name) {
        this.errors.push('Name required.');
      }
      if (!this.payload.description) {
        this.errors.push('Description required.');
      }
      if (!this.payload.content) {
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
      if (confirm("Do you really want to edit?")) {
        PayloadsService.editPayload(this.payload_id, this.payload)
            .then(() => {
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.end-buttons {
  display: flex;
}
</style>
