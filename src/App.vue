<script>
import axios from 'axios';
import {store} from './data/store'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

  export default {
    components:{
      Header, 
      Main,
      Footer,
      
    },
    data(){
      return {
        projects: [],
        loading: true

      }
    },

    methods:{
      getApi(){
        console.log('get api');
        //axios.get('http://127.0.0.1:8000/api/projects')
        axios.get(store.apiUrl)
        .then(result =>{
          // console.log(result.data);
          this.loading = false;
          this.projects = result.data.data
          console.log(this.projects);
        })
        .catch(error => {
          this.loading = false;
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
  <Header />
  <router-view></router-view>
  <Main :projects="projects" :loading="loading" />

    <!-- <div class="container my4">

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
    </div> -->

  <Footer />
  
 
    <!-- <div class="main-wrapper">
      <div class="container">
        <div>
          <h1 class="text-center">Vite Boolfolio</h1>
          <div v-if="!loading">
            <h5>My projects</h5>
            <ul>
                <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>  
            </ul>
        </div>
        
        <div v-else class="loader"></div>
        </div>
      </div>
        
    </div> -->
</template>



<style lang="scss" scoped>
  // @use './assets/scss/main.scss';
</style>
