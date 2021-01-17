<template>
  <mdb-container id="team">
    <section class="text-center">
      <h1 class="h1-responsive font-weight-bold my-5">Working team</h1>
      <mdb-row class="justify-content-center">
        <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
          <img class="avatar img-fluid z-depth-1" src="./../assets/francesco-mercaldo.jpg" alt="Francesco Mercaldo"/>
          <h5 class="font-weight-bold mt-4 mb-3">Ing. Francesco Mercaldo</h5>
          <p class="text-uppercase blue-text">Thesis supervisor</p>
          <div class="mb-0">
            <a class="p-2 fa-lg" href="https://www.facebook.com/mercaldofrancesco">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
          </div>
        </mdb-col>
        <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
          <img class="avatar img-fluid z-depth-1" src="./../assets/rosangela-casolare.jpg" alt="Rosangela Casolare"/>
          <h5 class="font-weight-bold mt-4 mb-3">Dott.ssa Rosangela Casolare</h5>
          <p class="text-uppercase blue-text">Thesis co-supervisor</p>
          <div class=" mb-0">
            <a class="p-2 fa-lg" href="https://www.facebook.com/rosangela.casolare">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
          </div>
        </mdb-col>
        <mdb-col lg="3" md="6" class="mb-lg-0 mb-5">
          <img class="avatar img-fluid z-depth-1" src="./../assets/marco-russodivito.jpg" alt="Marco Russodivito"/>
          <h5 class="font-weight-bold mt-4 mb-3">Marco Russodivito</h5>
          <p class="text-uppercase blue-text">Developer</p>
          <div class="mb-0">
            <a class="p-2 fa-lg" href="https://www.facebook.com/marco.russodivito/">
              <mdb-icon fab icon="facebook" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg" href="https://www.instagram.com/marco.russodivito">
              <mdb-icon fab icon="instagram" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg" href="https://twitter.com/RedHitMark98">
              <mdb-icon fab icon="twitter" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg" href="https://www.linkedin.com/in/marco-russodivito-918459174">
              <mdb-icon fab icon="linkedin" class="blue-text"/>
            </a>
            <a class="p-2 fa-lg" href="https://github.com/RedHitMark">
              <mdb-icon fab icon="github" class="blue-text"/>
            </a>
          </div>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol, mdbIcon} from 'mdbvue';

export default {
  name: 'Team',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
}
</script>

<style scoped>
.rounded-circle {
  max-width: 150px;
}

.avatar {
  border-radius: 50%;
}
</style>