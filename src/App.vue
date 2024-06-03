 <script>
import Header from './components/Header.vue';

  export default {
    components:{
      Header 
      
      
    },
    data(){
      return {

      }
    },

    methods:{
      
    },
    mounted(){
      
    }
  }
</script>

<template>
  <Header />
  <div class="container">
    <!-- in router vengono innestate tutte le pagine -->
    <router-view></router-view>
  </div>



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
  
</style>
