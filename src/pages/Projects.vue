<script>
import { store } from '../data/store';
import axios from 'axios';
    export default {
        name: 'Projects',

        data(){
            return{
                projects:[],
            }
        },

        methods:{
            getApi(){
                console.log('get api');
                //axios.get('http://127.0.0.1:8000/api/projects')
                axios.get(store.apiUrl)
                .then(result =>{
                 // console.log(result.data);
                // this.loading = false;
                this.projects = result.data.data
                console.log(this.projects);
                })
                .catch(error => {
                    // this.loading = false;
                    console.log(error);
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
    </div>
    </div>
</template>



<style lang="scss" scoped>

</style>