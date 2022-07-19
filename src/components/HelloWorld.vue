<template>
  
  <div>
    <div class="img">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/too-many-questions-royalty-free-image-487063216-1545936032.jpg" alt="">
        <img src="https://hr.mcmaster.ca/app/uploads/2020/09/trivia-image-for-web.jpg" alt="">
        <img src="https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1282124793.jpg?w=730&crop=1" alt="">
        <img src="https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2018/02/Trivial20Pursuit.jpg" alt="">
        </div>
    <h1>Quiz Categories</h1>

    <div class="genre">
      
      <div>
      <img src="https://img.freepik.com/free-vector/map-books-pen-globe-magnifying-glass-geography-lesson-concept_620585-222.jpg?w=2000" alt="">
      <h3>Geography</h3>
      <v-btn color="amber darken-1" @click="$router.push('/quiz/1')" block>
        click
      </v-btn>
      </div>

      <div>
      <img src="https://www.nicepng.com/png/detail/816-8167151_vector-illustration-of-sports-balls-with-football-all.png" alt="">
      <h3>Sports</h3>
     <v-btn color="amber darken-1" block @click="$router.push('/quiz/2')">
        click
      </v-btn>
      </div>
      
      <div>
      <img src="https://cdn.dribbble.com/users/1787323/screenshots/10742780/media/662eea472953bf93aa1cc6fbc6712bd0.png?compress=1&resize=400x300&vertical=top" alt="">
      <h3>Movies</h3>
      <v-btn color="amber darken-1" block @click="$router.push('/quiz/3')">
        click
      </v-btn>
      </div>

      <div>
      <img src="https://img.freepik.com/free-vector/cartoon-cute-color-palette-paint-brush-characters_8071-6100.jpg" alt="">
      <h3>Art</h3>
      <v-btn  color="amber darken-1" @click="$router.push('/quiz/4')" block>
        click
      </v-btn>
      </div>
      
      <div>
      <img src="https://i.pinimg.com/474x/d7/f2/4a/d7f24aca9d3116853460583028095087.jpg" alt="">
      <h3>History</h3>
      <v-btn color="amber darken-1" block @click="$router.push('/quiz/5')">
        click
      </v-btn>
      </div>
      
      <div>
      <img src="https://cdn.dribbble.com/users/2183879/screenshots/4492544/media/eac5a1308dbdd0d9d9e58a45a152e853.png?compress=1&resize=400x300" alt="">
      <h3>Science</h3>
      <v-btn color="amber darken-1" block @click="$router.push('/quiz/6')">
        click
      </v-btn>
      </div>
      

      
  </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data() {
            return {
                quiz_id: null,
                quizzes:[]
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
            }
        },
        mounted () {
          this.getquizzes();
          console.log(this.$route.params.genre_id)
        },
    
    
  }
</script>

<style lang="scss" scoped>
.genre{
  color: #219EBC;
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  img{
    width: 100%;
    height: 72%;
    
  }
  div{
    margin: 10px;
    border: #219EBC solid 2px;
    
  }
  h3{
    text-align: center;
    font-size: 22px;
    background-color: #8ECAE6;
    padding: 4px;
    margin: 8px;
  }
  
}
h1{
  color: #023047;
  text-align: center;
  background-color: #219EBC;
  margin: 15px;
}
.img{
    background-color: #8ECAE6;
    border: #219EBC 2px solid;
    img{
        width: 24.2%;
        height: 230px;
        border: rgb(7, 57, 71) 2px solid;
        margin: 5px;
    }
    
}
@media only screen and (max-width: 550px){
  .img{
    display: none;
  }
  .genre{
    grid-template-columns: 1fr 1fr;
    
  }
  
}
@media only screen and (min-width: 768px) {
  .img{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    img{
      width: 100%;
    }
    
    
}
}
@media only screen and (min-width: 1200px) {
  .gridcontainer{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    
}
}

</style>