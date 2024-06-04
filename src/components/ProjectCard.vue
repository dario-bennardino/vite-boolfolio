<script>
import { store } from '../data/store';
    export default {
        props:{
            project: Object,
        }
    }
</script>

<template>

    <div class="card me-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">
                {{ project.id }} - 
                <router-link :to="{ name: 'projectDetail', params:{slug: project.slug} }">{{ project.title }}</router-link>
            </h5>
            <!-- <h5 class="card-title">{{ project.id }} - {{ project.title }}</h5> -->
            <p class="card-text">{{ project.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <!-- <li class="list-group-item">{{ project.id }}</li>  -->
            <li class="list-group-item">{{ project.creation_date }}</li>
            <li class="list-group-item">{{ project.technology.name }}</li>        
            <!-- <li v-for="type in project.types" 
                :key="type.id" 
                class="list-group-item">
                
                {{ type.name }}
            </li>         -->
            <li class="list-group-item">
                <span v-for="type in project.types" :key="type.id" class="badge bg-primary me-1">
                    {{ type.name }}
                </span>
            </li>       
        </ul>
    </div>


</template>



<style lang="scss" scoped>
    .card-title{
        font-weight: bold;
        a{
            text-decoration: none;
            color: black;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .card-text{
        font-style: italic;
    }
</style>