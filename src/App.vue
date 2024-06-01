<script>
import axios from 'axios';
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
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(result =>{
          // console.log(result.data);
          this.loading = false;
          this.projects = result.data
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
  <Main />
  <Footer />
  
    <div class="main-wrapper">
      <div class="container">
        <div>
          <h1 class="text-center">Vite Boolfolio</h1>
          <div v-if="!loading">
            <h5>My projects</h5>
            <ul>
                <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>  
            </ul>
        </div>
        <!-- <p v-else class="loading"> Loading..... </p> -->
        <div v-else class="loader"></div>
        </div>
      </div>
        
    </div>
</template>



<style lang="scss" scoped>
  // @use './assets/scss/main.scss';
</style>
