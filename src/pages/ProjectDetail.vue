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
    <div>
        <Loader v-if="loading" />
        <div v-else class="container my-5 project">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <img :src="project.image">
        p
    </div>
    </div>
   
</template>



<style lang="scss" scoped>
    .project{
        h1{
            margin-bottom: 20px;
            
        }
        img{
            max-width: 50%;
        }
    }
</style>