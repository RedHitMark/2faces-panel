<template>
  <mdb-container id="attacks">
    <mdb-row class="text-center justify-content-center align-items-center">
      <h1 class="h1-responsive font-weight-bold text-center mt-5">Attacks results</h1>
    </mdb-row>

    <mdb-row v-if="errored" class="text-center justify-content-center align-items-center">
      <p>We're sorry, we're not able to retrieve the attacks at the moment, please try back later</p>
    </mdb-row>

    <mdb-row v-if="loading">
      <div class="spinner-border spinner-grow-sm text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </mdb-row>

    <mdb-row v-else class="justify-content-center">
      <mdb-col md="6" class="mb-5" v-for="(attack, index) in attacks" v-bind:key="index">
        <mdb-card class="justify-content-center">
          <mdb-card-body>
            <mdb-collapse :toggleTag="['h3']" :togglers="2"
                          :toggleClass="['h3-responsive font-weight-bold text-center my-2']"
                          :toggleText="[attack.device.model]">
              <h4 class="h4-responsive text-center">API — {{ attack.device.api }}</h4>
              <h5 class="h5-responsive text-center">{{ attack.device.ip }} — {{ attack.device.port }}</h5>
              <h6 class="h6-responsive text-center">{{ new Date(attack.timestamp * 1000) }}</h6>
              <ul>
                <li><strong>download_time</strong> — {{ attack.timing.download_time }} <small>ms</small></li>
                <li><strong>parse_time</strong> — {{ attack.timing.parse_time }} <small>ms</small></li>
                <li><strong>compile_time</strong> — {{ attack.timing.compile_time }} <small>ms</small></li>
                <li><strong>dynamic_loading_time</strong> — {{ attack.timing.dynamic_loading_time }}
                  <small>ms</small></li>
                <li><strong>execution_time</strong> — {{ attack.timing.execution_time }} <small>ms</small></li>
              </ul>
              <p class="">Attack Result:</p>
              <div v-if="attack.result.toString().startsWith('/9j/')">
                <img style="width: 400px" v-bind:src="'data:image.png;base64,' + attack.result" alt="stolen image"/>
              </div>
              <div v-else-if="attack.result.toString().startsWith('AAAAGGZ0eX')">
                <audio v-bind:src="'data:audio/mp3;base64,' + attack.result" controls="controls"
                       autobuffer="autobuffer">
                </audio>
              </div>
              <div v-else-if="attack.resultType === 'JSON'">
                <tree-view :data="attack.result" :options="{maxDepth: 1}"></tree-view>
              </div>
              <div v-else>
                {{ attack.result }}
              </div>

              <mdb-row class="justify-content-around align-items-around">
                <router-link tag="button" class="btn unique-color-dark text-white ripple-parent"
                             :to="'/payloads/details/' + attack.payload_id">Show payload sent
                </router-link>
                <mdb-btn color="grey-lighten-5" class="btn unique-color-darktext-white ripple-parent"
                         v-on:click="deleteAttack(attack._id)"><i class="fas fa-trash-alt"></i></mdb-btn>
              </mdb-row>
            </mdb-collapse>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import AttacksService from "@/services/AttacksService";

import {mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCollapse, mdbBtn} from 'mdbvue';


export default {
  name: "Attacks",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCollapse,
    mdbBtn
  },
  data() {
    return {
      attacks: [],
      loading: true,
      errored: false
    }
  },
  mounted() {
    this.getAttacks()
  },
  methods: {
    async getAttacks() {
      AttacksService.fetchAttacks()
          .then(response => {
            this.attacks = response.data;
            this.attacks.forEach((attack) => {
              if (attack.result && attack.resultType === "JSON") {
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
      if (confirm("Do you really want to delete?")) {
        AttacksService.deleteAttack(attack_id)
            .then(() => {
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
