<script>
import ProjectCard from './ProjectCard.vue';
    export default {
        components:{
            ProjectCard
        }
    }
</script>

<template>
    <div class="main-wrapper">
      <div class="container">
        <div>
          <h1 class="text-center">Vite Boolfolio</h1>
          <div v-if="!loading">
            <h5>My projects</h5>
            <div class="row row-col-4">

                <ProjectCard />
                
            </div>
            <!-- <ul>
                <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>  
            </ul> -->
        </div>
        
        <div v-else class="loader"></div>
        </div>
      </div>
        
    </div>
    
</template>



<style lang="scss" scoped>

</style>