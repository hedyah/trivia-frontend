<template>
    <div>
        <div>
        <div class="img">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/too-many-questions-royalty-free-image-487063216-1545936032.jpg" alt="">
        <img src="https://hr.mcmaster.ca/app/uploads/2020/09/trivia-image-for-web.jpg" alt="">
        <img src="https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1282124793.jpg?w=730&crop=1" alt="">
        
        </div>
        <v-container>
      <v-row>
        

        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-text-field
          v-model="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            filled
            solo
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="******"
            filled
            solo
          ></v-text-field>
        </v-col>

      </v-row>
      <v-btn  color="amber darken-1" @click="clientlogin" block>
        Log in
      </v-btn>
    </v-container>
    </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'
import router from '@/router'
    export default {
        name: 'LoginComp',
        data() {
            return {
                email: null,
                password: null,
            }
        },
        methods:{
            clientlogin() {
                axios.request({
                    url: process.env.VUE_APP_API_URL+ "client-session",
                    method:"POST",
                    data:{
                        email: this.email,
                        password: this.password
                    }
                }).then((response)=>{
                    console.log(response);
                    cookies.set('clientToken', response.data)
                    router.push('/profile')

                }).catch((error)=>{
                    console.log(error);
                })
            },
            // getclientinfo(){
            //     axios.request({
            //         url: process.env.VUE_APP_API_URL+'client',
            //         method:"GET",
            //         data:
            //     })
            // }
        },
    }
</script>

<style lang="scss" scoped>
.img{
    background-color: #219EBC;
    
    img{
        width: 33.3%;
        height: 300px;
        border: black 2px solid;
    }
    
}
@media only screen and (max-width: 500px){
  .img{
    display: none;
    
}
}
@media only screen and (min-width: 768px) {
  .img{
    width: 100%;
    
    
}
}
@media only screen and (min-width: 1200px) {
  .img{
    
    width: 100%;
    
}
}
</style>