<template>
    <div>
        <div id="quiz" v-for="quiz in quizzes" :key="quiz.quiz_id">
        <h3>{{quiz.name}}</h3>
        </div>
        
    <div >
         <v-card id="questions" v-for="question in questions" :key="question.id"
    class="mx-auto"
    max-width="800"
  >
    <v-img
      class="white--text align-end"
      height="500px"
      :src= "question.image_url" alt="images for questions">

    >
      <v-card-title></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <h3>{{question.question}}</h3>
      

    </v-card-text>

    <v-card-actions>

        <div v-for="answer in question.answers" :key="answer.answer_id">
            
            <v-btn elevation="2" color="amber darken-1 " @click="checkanswer(answer.answer_id)"  >
                {{answer.answer}}
                
                {{answer.answer_id}}
                
                </v-btn>

        </div>

    
    </v-card-actions>
  </v-card>


        </div>
        
    </div>
    
</template>

<script>
// import cookies from 'vue-cookies'
import axios from 'axios'
    export default {
        name: "GameView",
        data() {
            return {
                quiz_id: null,
                quizzes:[''],
                questions:[''],
                answers:[],
                answer_id:null,
            }

        },
        
        methods:{
            getquizzes(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"quizzes",
                    method:"GET",

                }).then((response)=>{
                    console.log(response);
                    console.log(response.data);
                    this.quizzes = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },
            getquestions(){
                axios.request({
                    url:process.env.VUE_APP_API_URL+"questions",
                    method:"GET",

                }).then((response)=>{
                    console.log(response);
                    console.log(response.data);
                    this.questions = response.data;
                    

                    
                    // cookies.set('answers', response.data.answers)
                }).catch((error)=>{
                    console.log(error);
                })
            },
            
            checkanswer(){
                axios.request({
                    url:process.env.VUE_APP_API_URL+"game",
                    method:"POST",
                    data:{
                        
                        answer_id:this.answers

                    }
                }).then((response)=>{
                    console.log(response);
                    this.answers = response.data;
                    
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted () {
            this.getquestions()
            this.getquizzes()
            this.checkanswer()
        },
    }
    
</script>

<style lang="scss" scoped>
.buttons{
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
    
}

#questions{
margin: 20px;
    h3{
    color: #000000;
    font-size: 20px;
    text-align: center;
    margin: 10px;
    }
    img{
    margin-left: 25%;
    align-items: center;
    align-content: center;
    width: 50%;
    }
    
    
}
</style>