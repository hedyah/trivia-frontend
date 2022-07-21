<template>
    <div>
        <div>
            <v-btn color="light-blue lighten-3" block large @click="$router.push('/game/quiz/scoreboard')">
                see scoreboard
            </v-btn>
        </div>

        <div id="quiz" v-for="quiz in quizzes" :key="quiz.quiz_id">
            
        <v-card
        class="mx-auto"
        max-width="600"
        outlined
    
        >
    <v-list-item three-line>
        <v-list-item-content>
        <div class="text-overline mb-4">
            <h2>Quizzes</h2>
            <h3>Points: {{quiz.points}}</h3>
        </div>
        <v-list-item-title class="text-h5 mb-1">
            <h4>{{quiz.quiz_name}}</h4>
        </v-list-item-title>
        <v-list-item-subtitle>
            <p>Quiz-id: {{quiz.quiz_id}}</p>
            
            
            <p> Genre:{{quiz.genre_id}}</p></v-list-item-subtitle>
        </v-list-item-content>

        <v-img
        width="1px"
        height="200px"
        src="https://i.pinimg.com/474x/b8/6d/9d/b86d9d3dad73930ed6f656bb47ecab1a--question-mark-movies-free.jpg"
        ></v-img>
    </v-list-item>

    <v-card-actions>
        <v-btn color="amber darken-1" @click="$router.push('/game/quiz')">
            Play
            </v-btn> 
    </v-card-actions>
    </v-card>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"QuizComp",
        data() {
            return {
                quiz_id: null,
                quizzes:[],
                questions:[],
                
            }

        },
        methods:{
            getquizzes(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"quizzes",
                    method:"GET",

                }).then((response)=>{
                    console.log(response);
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
                    this.questions = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted () {
            this.getquizzes(this.$route.params.genre_id)
            console.log(this.$route.params.genre_id);
            

        },
    }
</script>

<style lang="scss" scoped>
div{
    
    #quiz{

    color: #8ECAE6;
    
    margin: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    h2{
        background-color: #8ECAE6;
        color: #023047;
        
    }
    h3{
        background-color: #219EBC;
    }
    }
}


</style>