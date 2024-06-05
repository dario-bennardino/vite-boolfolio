<script>
    export default {
        name: 'Contacts',
        data(){
            return{
                name: 'dario',
                email: 'dario@.it',
                message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui sint, earum esse necessitatibus itaque distinctio consectetur quae ad ullam commodi architecto fuga doloremque magnam.',
            }
        },
        methods:{
            sendEmail(){
                
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                console.log(data);
            }
        }
    }
</script>

<template>
    <div class="my-4">
        <h1>Contatti</h1>
        <form @submit.prevent="sendEmail">
            <div class="mb-3 w-50">
                <label for="name" class="form-label">Nome</label>
                <input v-model="name" type="text" id="name" class="form-control"  >
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>

            <div class="mb-3 w-50">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="text" class="form-control" name="email" id="email">
                <p class="error"></p>
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>

            <!-- <div class="mb-3">
                <label for="message" class="form-label">Messaggio</label>
                <textarea v-model="message" name="message" id="message"></textarea>
            </div> -->

            <div class="mb-3 w-50">
                <label for="message" class="form-label">Messaggio</label>
                <textarea v-model="message" name="message" id="message" class="form-control"></textarea>
            </div>

            <!-- <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->
            <button type="submit" class="btn btn-primary">Invia</button>
        </form>

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