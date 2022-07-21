<template>
    <div>
        <div id="header">
            <img src="https://hr.mcmaster.ca/app/uploads/2020/09/trivia-image-for-web.jpg" alt="">
            <img src="https://static.vecteezy.com/system/resources/previews/003/216/574/original/learn-geography-concept-with-men-explorer-suit-explain-free-vector.jpg" alt="">
            <img src="https://www.experienceshediac.ca/wp-content/uploads/2020/06/Untitled-design-54.png" alt="">
        </div>
        <div id="user"  v-for="user in content" :key="user.id">
        
        <v-card
    class="mx-auto"
    max-width="700"
    color="white"
  >
    <v-img
      class="white--text align-end"
      height="450px"
      :src="user.image_url"
    >
      <v-card-title><h2>Welcome, {{user.username}}</h2></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><h3> Name: {{user.firstName}}</h3> </div>

      <div><h3> Email: {{user.email}}</h3></div>
    </v-card-text>

    
    <v-card-actions>
    <v-btn @click="clientlogout"  color="amber darken-1">
        Log out
    </v-btn>
    <v-btn @click="$router.push('/quiz/:genre_id')"  color="amber darken-1">
        play
    </v-btn>
    </v-card-actions>
  </v-card>
        </div>

    <h3>Click here too create your own quiz!</h3>
    <div v-if="ishown">
    <CreateComp/>
    </div>
    <v-btn color="amber darken-1" block @click="toggle" >create a quiz</v-btn>


    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
// import CreateComp from '@/components/CreateComp.vue'
import router from '@/router'
import CreateComp from '@/components/CreateComp.vue'

    export default {
    components: {CreateComp },
        name: "ClientView",
        data() {
            return {
                user_id: null,
                quiz_id:null,
                content:[],
                ishown:false
            }
        },
        methods: {
            clientloggin(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client-session",
                    method:"DELETE",
                    data:{
                        user_id:this.user_id
                    }

                }).then((response)=>{
                    console.log(response);
                    cookies.get('clientToken')
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getclientinfo(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client",
                    method:"GET",
                    headers:{
                        token:cookies.get('clientToken')
                        
                    }

                }).then((response)=>{
                    console.log(response);
                    this.content = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            clientlogout(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client-session",
                    method:"DELETE",
                    headers:{
                        token:cookies.get('clientToken')
                    }

                }).then((response)=>{
                    console.log(response);
                    router.push('/')
                }).catch((error)=>{
                    console.log(error);
                })
            },
            createquizzes(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"quizzes",
                    method:"POST",
                    data:{
                        quiz_name: this.quiz_name,
                        quiz_genre:this.quiz_genre,
                        quiz_points: this.quiz_points
                    }

                }).then((response)=>{
                    console.log(response);
                    this.quizzes = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            createquestions(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"questions",
                    method:"POST",
                    data:{
                        trivia_question: this.trivia_question,
                        image_url: this.image_url,
                        answer_content:this.answer_content,
                        answer_wrong: this.answer_wrong,
                        image_answer_url: this.image_answer_url,
                        quiz_id:this.quiz_id
                    }

                }).then((response)=>{
                    console.log(response);
                    this.quizzes = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            activatequizzes(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"quizzes",
                    method:"PATCH",
                    data:{
                        quiz_id: this.quiz_id
                    }

                }).then((response)=>{
                    console.log(response);
                    this.quizzes = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            toggle(){
                this.ishown = ! this.ishown
            }            
        },
        mounted () {
            this.getclientinfo();
        },
        
    }
</script>

<style lang="scss" scoped>
h2{
  color: #023047;
  text-align: center;
  background-color: #219EBC;
  margin: 15px;
  border: #8ECAE6 solid 3px;
}
h3{
    color: #023047;
  text-align: center;
  background-color: #8ECAE6;
  margin: 15px;
}
#header{
    img{
    width: 33.3%;
    height: 250px;
    
    }
}
#user{
    img{
        width: 20%;
        margin-left: 40%;
    }
    
}
@media only screen and (max-width: 500px){
  #header{
    display: none;
    
}
}
@media only screen and (min-width: 768px) {
  #header{
    img{
        width: 33%;
    }
    
    
    
}
}
@media only screen and (min-width: 1200px) {
  #header{
    img{
        width: 33.3%;
    }
    
    
}
}

</style>