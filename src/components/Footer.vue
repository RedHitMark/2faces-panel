<template>
    <!-- Footer -->
    <mdb-footer color="unique-color-dark" class="page-footer font-small mt-0 pt-0">
        <mdb-container class="py-5 text-center text-md-left">
            <mdb-row class="mt-3">
                <mdb-col md="3" lg="3" xl="3" class="mb-4">
                    <h6 class="text-uppercase font-weight-bold"><strong>2Faces malware</strong></h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
                    <p>This is a university thesis about a new model of Android malware based on reflection, dynamic compiling and dynamic loading</p>
                </mdb-col>
                <mdb-col md="3" lg="3" xl="3" class="mb-4">
                    <h6 class="text-uppercase font-weight-bold"><strong>Publications</strong></h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
                    <p><a href="#!">Publication1</a></p>
                    <p><a href="#!">Publication2</a></p>
                    <p><a href="#!">Publication3</a></p>
                    <p><a href="#!">Publication4</a></p>
                </mdb-col>
                <mdb-col md="3" lg="3" xl="3" class="mb-4">
                    <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
                    <p><a href="#https://github.com/RedHitMark/LetsCompileServer">Repo Server</a></p>
                    <p><a href="#https://github.com/RedHitMark/LetsCompilePanel">Repo Client</a></p>
                    <p><a href="#https://github.com/RedHitMark/LetsCompileAndroid">Repo Android</a></p>
                </mdb-col>
                <mdb-col md="3" lg="3" xl="3" class="mb-4">
                    <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
                    <p>
                        <i class="fas fa-chalkboard-teacher mr-3"></i>
                        <a href="https://scholar.google.com/citations?user=PHZc7DsAAAAJ&hl=it&oi=ao">Prof. Francesco Mercaldo</a>
                    </p>
                    <p>
                        <i class="fas fa-chalkboard-teacher mr-3"></i>
                        <a href="https://scholar.google.com/citations?hl=it&user=wEFxXI0AAAAJ">Dott.ssa Rosangela Casolare</a>
                    </p>
                    <p>
                        <i class="fas fa-envelope mr-3"></i>
                        <a href="mailto:m.russodivito@studenti.unimol.it">m.russodivito@studenti.unimol.it</a>
                    </p>
                    <p>
                        <i class="fab fa-github white-text mr-3"></i>
                        <a href="https://github.com/RedHitMark">RedHitMark</a>
                    </p>
                    <p>
                        <i class="fab fa-facebook white-text mr-3"></i> <a href="https://www.facebook.com/marco.russodivito/">Marco Russodivito</a>
                    </p>
                    <p>
                        <i class="fab fa-instagram white-text mr-3"></i>
                        <a href="https://www.instagram.com/marco.russodivito">@marco.russodivito</a>
                    </p>
                    <p>
                        <i class="fab fa-twitter white-text mr-3"></i>
                        <a href="https://twitter.com/RedHitMark98">@RedHitMark98</a>
                    </p>
                    <p>
                        <i class="fab fa-linkedin-in white-text mr-3"></i>
                        <a href="https://www.linkedin.com/in/marco-russodivito-918459174">Marco Russodivito</a>
                    </p>
                </mdb-col>
            </mdb-row>
        </mdb-container>
        <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
                &copy; 2020 Copyright: <a href="http://redhitmark.ddns.net"> RedHitMark </a>
            </mdb-container>
        </div>
    </mdb-footer>
    <!-- Footer -->
</template>

<script>
    import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
    export default {
        name: 'Footer',
        components: {
            mdbFooter,
            mdbContainer,
            mdbRow,
            mdbCol
        }
    }
</script>

<style scoped>

</style>
