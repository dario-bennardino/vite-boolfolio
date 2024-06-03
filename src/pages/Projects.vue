<script>
import { store } from '../data/store'
import axios from 'axios'
import Paginator from '../components/partials/Paginator.vue'
import Loader from '../components/partials/Loader.vue'


    export default {
        name: 'Projects',
        components:{
            Paginator,
            Loader
        },
        data(){
            return{
                projects:[],
                paginatorData:{},
                loading: true
            }
        },

        methods:{
            // callApi(link){
            //     console.log(link);
            // },
            getApi(apiUrl){
                // console.log('get api');
                //axios.get('http://127.0.0.1:8000/api/projects')
                this.loading = true;
                axios.get(apiUrl)
                .then(result =>{
                 // console.log(result.data);
                this.loading = false;
                this.projects = result.data.data
                // console.log(this.projects);
                this.paginatorData.current_page = result.data.current_page;
                this.paginatorData.links = result.data.links;
                this.paginatorData.total = result.data.total;
                console.log(this.paginatorData);

                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
                })
            }
        },
        mounted(){
        this.getApi(store.apiUrl)
        }

    }
</script>

<template>
    <div v-if="!loading">
        <h1>Progetti</h1>
        
         <div class="container my4">

            <div class="row row-col-4">
                <div v-for="project in projects" :key="project.id" class="card me-2 my-2" style="width: 18rem;">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ project.id }}</li>    
                        <li class="list-group-item">{{ project.creation_date }}</li>    
                    </ul>
                </div>
            </div>
            <Paginator :data="paginatorData" @callApi="getApi" />
        </div>
    </div>
    <loader v-else />

</template>



<style lang="scss" scoped>

</style>