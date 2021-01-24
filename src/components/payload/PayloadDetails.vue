<template>
  <mdb-container class="detail-payload">
    <mdb-row v-if="errored">
      <p>We're sorry, we're not able to retrieve the payload at the moment, please try back later</p>
    </mdb-row>

    <mdb-row v-else-if="loading">
      <div class="spinner-border spinner-grow-sm text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </mdb-row>

    <section v-else>
      <mdb-row class="justify-content-center align-items-center mt-5">
        <h1 class="h1-responsive font-weight-bold">{{ payload.name }}</h1>
      </mdb-row>

      <mdb-row class="justify-content-center align-items-center">
        <h3 class="h3-responsive font-weight-bold">{{ payload.description }}</h3>
      </mdb-row>

      <mdb-row>
        <span class="font-weight-bold">Java Payload</span>
      </mdb-row>

      <mdb-row>
        <codemirror class="w-100" v-model="payload.content" :options="cmOptions"></codemirror>
      </mdb-row>

      <mdb-row>
        <mdb-col class="text-center">
          <span class="font-weight-bold">This payload execution will return</span>
          <br>
          {{ payload.resultType }}
        </mdb-col>

        <mdb-col class="text-center">
          <span class="font-weight-bold">The first method that will be executed</span>
          <br>
          {{ payload.methodToInvoke }}()
        </mdb-col>
      </mdb-row>

      <mdb-row class="justify-content-center align-items-center">
        <span v-if="payload.vulnerabilities.length === 0" class="font-weight-bold">You can use this payload on every device</span>

        <span v-else class="font-weight-bold">Permissions required to execute this payload</span>
      </mdb-row>

      <mdb-row class="justify-content-center align-items-center">
        <mdb-list-group>
          <mdb-list-group-item v-for="(permission, index) in payload.vulnerabilities" v-bind:key="index">{{
              permission
            }}
          </mdb-list-group-item>
        </mdb-list-group>
      </mdb-row>

      <mdb-row>
        <mdb-col class="justify-content-center end-buttons">
          <router-link tag="button" class="btn unique-color-dark text-white ripple-parent"
                       v-bind:to="'/payloads/edit/'+payload_id">Edit
          </router-link>
        </mdb-col>

        <mdb-col class="justify-content-center end-buttons">
          <button class="btn unique-color-dark text-white ripple-parent" v-on:click="deletePayload()">Delete</button>
        </mdb-col>

        <mdb-col class="justify-content-center end-buttons">
          <router-link tag="button" class="btn unique-color-dark text-white ripple-parent" to="/payloads">Go back
          </router-link>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
import PayloadsService from "@/services/PayloadsService";

// bootstrap import
import {mdbContainer, mdbRow, mdbCol, mdbListGroup, mdbListGroupItem} from 'mdbvue';

export default {
  name: "Payload",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbListGroup,
    mdbListGroupItem
  },
  data() {
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
      }
    }
  },
  mounted() {
    this.getPayload()
  },
  methods: {
    async getPayload() {
      PayloadsService.fetchPayload(this.payload_id)
          .then(response => {
            console.log(response.data);
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
      if (confirm("Do you really want to delete?")) {
        PayloadsService.deletePayload(this.payload_id)
            .then(() => {
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
.end-buttons {
  display: flex;
}
</style>
