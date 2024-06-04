<script>
import { store } from '../data/store'
import axios from 'axios'
import Paginator from '../components/partials/Paginator.vue'
import Loader from '../components/partials/Loader.vue'
import ProjectCard from '../components/ProjectCard.vue'


    export default {
        name: 'Projects',
        components:{
            Paginator,
            Loader,
            ProjectCard
        },
        data(){
            return{
                projects:[],
                technologies:[],
                types:[],
                paginatorData:{},
                loading: true
            }
        },

        methods:{
            // callApi(link){
            //     console.log(link);
            // },
            getApi(apiUrl, technology = ''){
                // console.log('get api');
                //axios.get('http://127.0.0.1:8000/api/projects')
                this.loading = true;

                // switch (technology) {
                //     case 'technologies':
                //         this.technologies = result.data
                //         break;
                //     case 'types':
                //         this.types = result.data
                //         break;
                //     default:
                //         this.projects = result.data.data
                //         this.paginatorData.current_page = result.data.current_page;
                //         this.paginatorData.links = result.data.links;
                //         this.paginatorData.total = result.data.total;
                //         break;
                // }

                axios.get(apiUrl + technology)
                .then(result =>{
                 // console.log(result.data);
                this.loading = false;

                if(technology === 'projects' || technology == ''){
                    this.projects = result.data.data
                    // console.log(this.projects);
                    this.paginatorData.current_page = result.data.current_page;
                    this.paginatorData.links = result.data.links;
                    this.paginatorData.total = result.data.total;
                    console.log(this.projects);
                    
                }else if(technology === 'technologies'){
                    this.technologies = result.data
                    console.log(this.technologies);
                }else{
                    this.types = result.data
                    console.log(this.types);
                }
               
                console.log(result.data);

                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
                })
            }
        },
        mounted(){
        this.getApi(store.apiUrl, 'projects');
        this.getApi(store.apiUrl, 'technologies');
        this.getApi(store.apiUrl, 'types');
        }

    }
</script>

<template>
    <div v-if="!loading">
        <h4 class="my-4">Progetti</h4>
        
         <div class="container my4">
            <div class="boxes">
                <div class="box">
                    <h5 class="p-2">Technology:</h5>
                    <div class="box-bedges d-flex justify-content-around flex-wrap m-2">
                        <span v-for="technology in technologies" :key="`t-${technology.id}`" class="badge text-bg-secondary my-2">{{ technology.name }}</span>
                  
                      
                    </div>
                    
                </div>
                <div class="box">
                    <h5 class="p-2">Types:</h5>
                    <div class="box-bedges d-flex justify-content-around flex-wrap m-2">
                        <span v-for="type in types" :key="`y-${type.id}`" class="badge text-bg-secondary my-2">{{ type.name }}</span>
                      
                       
                    </div>
                </div>
            </div>
           
            <div class="row row-col-4">
                
                <!-- <div v-for="project in projects" :key="project.id" class="card me-2 my-2" style="width: 18rem;">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ project.id }}</li>    
                        <li class="list-group-item">{{ project.creation_date }}</li>    
                    </ul>
                </div> -->
                <ProjectCard
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"   
                />
            </div>
            <Paginator :data="paginatorData" @callApi="getApi" />
        </div>
    </div>
    <loader v-else />

</template>



<style lang="scss" scoped>
    .boxes{
        // border: 1px solid black;
        display: flex;
        
        .box{
        border: 1px solid black;
        width: 350px;
        height: 200px;
        margin-right: 25px;
    }
    }
    
</style>