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
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ project.id }}</li> 
            <li class="list-group-item">{{ project.creation_date }}</li>       
        </ul>
    </div>


</template>



<style lang="scss" scoped>

</style>