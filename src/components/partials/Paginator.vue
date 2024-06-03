<script>
    export default {
        name: 'Paginator',
        props: {
            data: Object
        },
        methods:{
            callApi(link){
                // console.log(link);
                this.$emit('callApi', link)
            }
        }
    }
</script>

<template>
    <div class="paginator">
        
        <button 
        v-for="link in data.links" 
        :key="link.label" 
        v-html="link.label" 
        :disabled="link.active || (!link.url && link.label !== '...' )" 
        @click="callApi(link.url)"
        class="btn btn-light"></button>
       
    </div>
</template>


<style lang="scss" scoped>
    .paginator{
        button{
            margin: 5px;

        }
    }
</style>