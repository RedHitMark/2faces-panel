<template>
    <mdb-container>
        <section class="text-center">
            <h2 class="h1-responsive font-weight-bold my-5">Working team</h2>
            <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
            <mdb-row class="justify-content-center">
                <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
                    <img src="https://scontent-fco1-1.cdninstagram.com/v/t51.2885-19/s150x150/20214617_477761492571608_5062194707291963392_a.jpg?_nc_ht=scontent-fco1-1.cdninstagram.com&_nc_ohc=w1P-11p8zAcAX-AuQAD&oh=ae427be8d814e27cb41308a019cedaae&oe=5F1D8C42" class="avatar z-depth-1" alt="Sample avatar"/>
                    <h5 class="font-weight-bold mt-4 mb-3">Ing. Francesco Mercaldo</h5>
                    <p class="text-uppercase blue-text">Thesis supervisor</p>
                    <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci  sed quia non numquam modi tempora eius.</p>
                    <ul class="list-unstyled mb-0">
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="facebook" class="blue-text"/>
                        </a>
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="twitter" class="blue-text"/>
                        </a>
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="instagram" class="blue-text"/>
                        </a>
                    </ul>
                </mdb-col>
                <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
                    <img src="https://scontent-fco1-1.cdninstagram.com/v/t51.2885-19/s150x150/20214617_477761492571608_5062194707291963392_a.jpg?_nc_ht=scontent-fco1-1.cdninstagram.com&_nc_ohc=w1P-11p8zAcAX-AuQAD&oh=ae427be8d814e27cb41308a019cedaae&oe=5F1D8C42" class="avatar z-depth-1" alt="Sample avatar"/>
                    <h5 class="font-weight-bold mt-4 mb-3">Dott.ssa Rosangela Casolare</h5>
                    <p class="text-uppercase blue-text">Thesis co-supervisor</p>
                    <p class="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium doloremque rem laudantium totam aperiam.</p>
                    <ul class="list-unstyled mb-0">
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="facebook" class="blue-text"/>
                        </a>
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="instagram" class="blue-text"/>
                        </a>
                    </ul>
                </mdb-col>
                <mdb-col lg="3" md="6"  class="mb-lg-0 mb-5">
                    <img src="https://scontent-fco1-1.cdninstagram.com/v/t51.2885-19/s150x150/20214617_477761492571608_5062194707291963392_a.jpg?_nc_ht=scontent-fco1-1.cdninstagram.com&_nc_ohc=w1P-11p8zAcAX-AuQAD&oh=ae427be8d814e27cb41308a019cedaae&oe=5F1D8C42" class="avatar z-depth-1" alt="Sample avatar"/>
                    <h5 class="font-weight-bold mt-4 mb-3">Marco Russodivito</h5>
                    <p class="text-uppercase blue-text">Developer</p>
                    <p class="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est fugiat nulla id eu laborum.</p>
                    <ul class="list-unstyled mb-0">
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="facebook" class="blue-text"/>
                        </a>
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="instagram" class="blue-text"/>
                        </a>
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="dribbble" class="blue-text"/>
                        </a>
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="facebook" class="blue-text"/>
                        </a>
                        <a class="p-2 fa-lg">
                            <mdb-icon fab icon="github" class="blue-text"/>
                        </a>
                    </ul>
                </mdb-col>
            </mdb-row>
        </section>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

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