<script>
import { store } from '../data/store';
import ProjectCard from './ProjectCard.vue';
    export default {
        components:{
            ProjectCard
        },
       props: {
        projects:Array,
        loading: Boolean

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

                <ProjectCard
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"
                    
                    
                />

            </div>
           
        </div>
        
        <div v-else class="loader"></div>
        </div>
      </div>
        
    </div>
    
</template>



<style lang="scss" scoped>

</style>