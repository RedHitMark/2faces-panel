<template>
  <mdb-container id="payloads">
    <mdb-row class="text-center justify-content-center align-items-center">
      <h1 class="h1-responsive font-weight-bold text-center mt-5">Payloads</h1>
    </mdb-row>

    <mdb-row v-if="errored">
      <p>We're sorry, we're not able to retrieve the payloads at the moment, please try back
        later</p>
    </mdb-row>

    <mdb-row v-if="loading">
      <div class="spinner-border spinner-grow-sm text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </mdb-row>

    <section v-else>
      <mdb-row class="justify-content-center">
        <mdb-col sm="12" md="6" lg="6" class="justify-content-center align-items-center">
          <router-link tag="button" class="btn unique-color-dark text-white ripple-parent" to="/payloads/new/">Create
            new
          </router-link>
        </mdb-col>
        <mdb-col sm="12" md="6" lg="6">
          <mdb-input label="Search" type="text" class="mt-0" v-model="searchTerm" v-on:input="searchPayload"/>
        </mdb-col>
      </mdb-row>

      <mdb-row class="justify-content-center">
        <mdb-col sm="12" md="6" lg="4" class="mt-5" v-for="(payload, index) in payloadsFiltered" v-bind:key="index">
          <mdb-card class="h-100">
            <mdb-card-body>
              <mdb-card-title>{{ payload.name }}</mdb-card-title>
              <mdb-card-text>{{ payload.description }}</mdb-card-text>

              <mdb-row class="justify-content-center align-items-center">
                <router-link tag="button" class="btn unique-color-dark text-white ripple-parent"
                             :to="'/payloads/details/' + payload._id">Show detail
                </router-link>
              </mdb-row>
              <mdb-row class="justify-content-around align-items-around">
                <router-link tag="button" class="btn rey-lighten-5 text-unique-color-dark ripple-parent"
                             :to="'/payloads/edit/' + payload._id"><i class="fas fa-edit"></i></router-link>
                <mdb-btn color="grey-lighten-5" class="btn grey-lighten-5 text-unique-color-dark ripple-parent"
                         v-on:click="deletePayload(payload._id)"><i class="fas fa-trash-alt"></i></mdb-btn>
              </mdb-row>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
import PayloadsService from "@/services/PayloadsService";
import {mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput} from 'mdbvue';

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
    mdbBtn,
    mdbInput
  },
  data() {
    return {
      searchTerm: "",
      payloads: [],
      payloadsFiltered: [],
      loading: true,
      errored: false
    }
  },
  mounted() {
    this.getPayloads()
  },
  methods: {
    async getPayloads() {
      PayloadsService.fetchPayloads()
          .then(response => {
            this.payloads = response.data;
            this.searchPayload()
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
      if (confirm("Do you really want to delete?")) {
        PayloadsService.deletePayload(payload_id)
            .then(() => {
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
    },
    async searchPayload() {
      console.log(this.searchTerm);
      this.payloadsFiltered = this.payloads.filter((payload) => {
        return payload.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ||
            payload.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1;
      })
    }
  }
}
</script>

<style scoped>
</style>
