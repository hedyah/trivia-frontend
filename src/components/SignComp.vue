<template>
    <div>
        <div>
        <div class="img">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/too-many-questions-royalty-free-image-487063216-1545936032.jpg" alt="">
        <img src="https://hr.mcmaster.ca/app/uploads/2020/09/trivia-image-for-web.jpg" alt="">
        <img src="https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1282124793.jpg?w=730&crop=1" alt="">
        <img src="https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2018/02/Trivial20Pursuit.jpg" alt="">
        </div>
        <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="first_name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[
              () => !!address || 'This field is required',
              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
            label="Email"
            placeholder="john.doe@gmail.com"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :rules="[() => !!city || 'This field is required', addressCheck]"
            label="Password"
            placeholder="*******"
            required
          ></v-text-field>
          <v-text-field
            ref="username"
            v-model="username"
            :rules="[() => !!state || 'This field is required']"
            label="Username"
            required
            placeholder="jondoe123"
          ></v-text-field>
         <v-text-field 
         v-model="image_url"
         label="Image url">
          
         </v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="signPost"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
    export default {
        name: 'SignComp',
        data() {
            return {
                first_name: null,
                username: null,
                email: null,
                password: null,
                image_url:null
                

            }
        },
        methods:{
            signPost(){
                axios.request({
                    url: process.env.VUE_APP_API_URL + 'client',
                    method:"POST",
                    data:{
                        first_name:this.first_name,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        image_url: this.image_url
                    }
                }).then((response)=>{
                    console.log(response);
                    router.push('/login')
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }   
    }
</script>

<style lang="scss" scoped>
.img{
    background-color: #219EBC;
    
    img{
        width: 24.2%;
        height: 220px;
        border: black 2px solid;
        margin: 5px;
    }
    
}
@media only screen and (max-width: 550px){
  .img{
    display: none;
    
}
}
@media only screen and (min-width: 768px) {
  .img{
    img{
      width: 23%;
    }
    
    
    
}
}
@media only screen and (min-width: 1200px) {
  .img{
    
    width: 100%;
    
}
}
</style>