<template>
    <div>

    <v-stepper v-model="e1">
    <v-stepper-header color="amber darken-1">
      <v-stepper-step color="amber darken-1"
        :complete="e1 > 1"
        step="1"
      >
        Quiz
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="amber darken-1" v-model="e2"
        :complete="e2 > 2"
        step="2"
      >
        Question 
      </v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step color="amber darken-1" :complete="e1 > 3"
        step="3">
        Submit
      </v-stepper-step>
    </v-stepper-header>
    <!-- here is to start to create the quiz -->
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="white"
          height="230px"
        >
        
    <v-text-field
      v-model="quiz_name"
      :error-messages="quiz_name"
      :counter="10"
      label="Quiz name"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="quiz_points"
      
      label="Points"
      required
      
    ></v-text-field>
    <v-select
      v-model="quiz_genre"
      :items="Object.keys(items2)"
      :error-messages="selectErrors"
      label="Genre"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
        </v-card>

        <v-btn
          color="amber darken-1"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn @click="createquizzes">
          save
        </v-btn>
      </v-stepper-content>
      <!-- here we create the questions -->
      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="white"
          height="360px"
        > 
        <v-text-field
      v-model="question"

      
      label="Question"
      required
    ></v-text-field>
    
    <v-text-field
      
      v-model="answer_content"
      
      label="Answer"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="answer_wrong"
      
      label="Incorrect answers"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="image_url"
      
      label="Image URL"
      required
      
    ></v-text-field>
    <v-text-field
      
      v-model="image_answer_url"
      label="Image Answer URL"
      required
      
    ></v-text-field>

        </v-card>

        <v-btn
          color="amber darken-1"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn @click="createquestions" text>
          save
        </v-btn>
      </v-stepper-content>


      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="white"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn @click="activatequiz" text>
          save
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>


    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"CreateComp",
        data() {
            return {
                quiz_name: null,
                quiz_genre:null,
                quiz_points: null,
                trivia_question:null,
                answer_content: null,
                answer_wrong:null,
                image_url:null,
                image_answer_url:null,
                quiz_id:null,
                select: null,
                items:[
                    {lable:'Geography',id:1},
                    {lable:'Sports',id:2},
                    {lable:'Art',id:3},
                    {lable:'Movies',id:4},
                    {lable:'History',id:5},
                    {lable:'Science',id:6}
                ],
                items2:{
                  "Geography":1,
                  "Sports":2,
                  "Art":3,
                  "Movies":4,
                  "History":5,
                  "Science":6
                }
            }
        },
        methods: {
            createquizzes(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"quizzes",
                    method:"POST",
                    data:{
                        quiz_name: this.quiz_name,
                        quiz_genre:this.items2[this.quiz_genre],
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
            activatequiz(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"quizzes",
                    method:"PATCH",
                    data:{
                        quiz_id:this.quiz_id
                    }

                }).then((response)=>{
                    console.log(response);
                    this.quizzes = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            },

        },
    }
</script>

<style lang="scss" scoped>

</style>