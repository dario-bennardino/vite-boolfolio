<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';

    export default {
        name: 'Contacts',
        components:{
            Loader
        },
        data(){
            return{
                name: 'dario',
                email: 'dario.bennardino@admin.it',
                message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui sint, earum esse necessitatibus itaque distinctio consectetur quae ad ullam commodi architecto fuga doloremque magnam.',
                sending: false,
                sent: false,
                errors:{
                    name: [],
                    email: [],
                    message: []
                }
            }
        },
        methods:{
            sendEmail(){
                this.sending = true;
                
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    
                }

                axios.post(store.apiUrl + 'send-email', data)
                    .then(result => {
                        this.sending = false;
                        console.log(result.data);
                        this.sent = result.data.success;
                        if(!result.data.success){
                            this.errors = result.data.errors;    
                        }else{
                            this.errors = {
                                name: [],
                                email: [],
                                message: []
                            }
                        }

                        
                    })
                    .catch(err =>{
                        this.sending = false;
                        console.log(err.message);
                    })

                console.log(data);
            }
        }
    }
</script>

<template>
    <div class="my-4">
        <h1>Contatti</h1>

        <div v-if="!sending">
            <form v-if="!sent" @submit.prevent="sendEmail">
                <div class="mb-3">
                    <label for="name" class="form-label">Nome</label>
                    <input v-model="name" type="text" id="name" class="form-control"  >
                    <p class="error text-danger">{{ errors.name?.toString() }}</p>
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="email" type="text" class="form-control" name="email" id="email">
                    <p class="error text-danger is-invalid">{{ errors.email?.toString() }}</p>
                    
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>

            

                <div class="mb-3">
                    <label for="message" class="form-label">Messaggio</label>
                    <textarea v-model="message" name="message" id="message" class="form-control"></textarea>
                    <p class="error text-danger">{{ errors.message?.toString() }}</p>
                </div>

                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>
            <h3 v-else>Email inviata correttamente</h3>
        </div>

        
        <Loader v-else />

        <!-- <form>
            <div>
                <div>
                    <label for="name">Nome</label>
                    <input v-model="name" type="text" name="name" >
                    <p class></p>
                </div>
            </div>
        </form> -->
    </div>
</template>



<style lang="scss" scoped>

</style>