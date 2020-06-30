<template>
    <mdb-container>
        <section class="contact-section my-5">
            <mdb-card>
                <mdb-row>
                    <mdb-col lg="8">
                        <mdb-card-body class="form">
                            <h3 class="mt-4">
                                <mdb-icon icon="envelope" class="pr-2"/>Write to us:
                            </h3>
                            <mdb-row>
                                <mdb-col md="6">
                                    <div class="md-form mb-0">
                                        <mdb-input type="text" id="form-contact-name" label="Your name"/>
                                    </div>
                                </mdb-col>
                                <mdb-col md="6">
                                    <div class="md-form mb-0">
                                        <mdb-input type="text" id="form-contact-email" label="Your email"/>
                                    </div>
                                </mdb-col>
                            </mdb-row>
                            <mdb-row>
                                <mdb-col md="6">
                                    <div class="md-form mb-0">
                                        <mdb-input type="text" id="form-contact-phone" label="Your phone"/>
                                    </div>
                                </mdb-col>
                                <mdb-col md="6">
                                    <div class="md-form mb-0">
                                        <mdb-input type="text" id="form-contact-company" label="Your company"/>
                                    </div>
                                </mdb-col>
                            </mdb-row>
                            <mdb-row>
                                <mdb-col md="12">
                                    <div class="md-form mb-0">
                                        <mdb-textarea id="form-contact-message" label="Your message"/>
                                        <mdb-btn tag="a" floating color="blue" size="lg">
                                            <mdb-icon far icon="paper-plane"/>
                                        </mdb-btn>
                                    </div>
                                </mdb-col>
                            </mdb-row>
                        </mdb-card-body>
                    </mdb-col>
                    <mdb-col lg="4">
                        <mdb-card-body class="contact text-center h-100 white-text">
                            <h3 class="my-4 pb-2">Contact information</h3>
                            <ul class="text-lg-left list-unstyled ml-4">
                                <li>
                                    <p><mdb-icon icon="map-marker" class="pr-2"/>New York, 94126 USA</p>
                                </li>
                                <li>
                                    <p><mdb-icon icon="phone" class="pr-2"/>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <p><mdb-icon icon="envelope" class="pr-2"/>contact@example.com</p>
                                </li>
                            </ul>
                            <hr class="hr-light my-4"/>
                            <ul class="list-inline text-center list-unstyled">
                                <li class="list-inline-item">
                                    <a class="p-2 fa-lg w-ic">
                                        <mdb-icon fab icon="twitter"/>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="p-2 fa-lg w-ic">
                                        <mdb-icon fab icon="linkedin"/>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="p-2 fa-lg w-ic">
                                        <mdb-icon fab icon="instagram"/>
                                    </a>
                                </li>
                            </ul>
                        </mdb-card-body>
                    </mdb-col>
                </mdb-row>
            </mdb-card>
        </section>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from 'mdbvue';
    export default {
        name: 'Contact',
        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbBtn,
            mdbIcon,
            mdbInput,
            mdbTextarea,
            mdbCard,
            mdbCardBody
        }

    }
</script>

<style scoped>

</style>