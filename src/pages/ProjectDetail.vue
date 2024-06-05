<script>
    import axios from'axios'
    import { store } from '../data/store'
    import Loader from '../components/partials/Loader.vue'
    export default {
        name: 'ProjectDetail',
        components:{
            Loader
        },
        data(){
            return{
                project: {},
                loading: true
            }
        },
        methods:{
            getApi(){
                console.log(this.$route.params.slug);
                 const slug = this.$route.params.slug;
                axios.get(store.apiUrl + 'project-by-slug/' + slug)
                .then(result =>{
                    this.loading = false;
                    console.log(result.data);
                    this.project = result.data.project;
                })
                .catch(error =>{
                    this.loading = false;
                    console.log(error.message);
                })
            }
        },
        mounted(){
            this.getApi()
        }
    }
</script>

<template>
    <div class="fix-detail">
        <div class="box-deteil">
            <Loader v-if="loading" />
            <div v-else class="container my-5 project">
                <h1>{{ project.title }}</h1>
                <p>{{ project.description }}</p>
                <img :src="project.image">
                <div class="box-button">
                    <router-link :to="{ name: 'projects' }">
                        <button class="btn btn-success btn-sm">Projects</button>
                    </router-link>
                </div> 
            </div>  
        </div>
    </div>    
   
</template>



<style lang="scss" scoped>
    .fix-detail{
        display: flex;
        justify-content: center;
    }
    .box-deteil{
        border: 1px solid black;
        border-radius: 15px;
        margin-top: 100px;
        width: 750px;
        padding: 15px;
        background-color: rgb(206, 195, 180);

        .project{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        h1{
            margin-bottom: 20px;
            
        }
        img{
            max-width: 50%;
        }
        .box-button{
            margin-top: 25px;
            display: flex;
            justify-content: end;
        }
    }
    }
    
</style>