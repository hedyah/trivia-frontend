<template>
    <div>
        <div class="score">
        <h2>Scoreboard</h2>

        <div class="board" v-for="score in scoreboard" :key="score.id">
        <v-card
    class="mx-auto"
    max-width="700"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
        Quiz name
        </div>
        <v-list-item-title class="text-h5 mb-1">
          <h3>Username</h3>
        <h4>{{score.username}}</h4>
        </v-list-item-title>
        <v-list-item-subtitle>
            <h3>Points</h3>
        <h4>{{score.points}}</h4>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-img
      height="300px"
      width="10px"
        src="https://static.vecteezy.com/system/resources/previews/006/425/320/original/flat-design-trophy-trophy-isolated-on-white-background-free-vector.jpg"
        
      ></v-img>
    </v-list-item>

    <v-card-actions>
      <!-- <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn> -->
    </v-card-actions>
  </v-card>
        
        </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"ScoreView",
        data() {
            return {
                scoreboard:[]
            }
        },
        methods: {
            getscores() {
                axios.request({
                    url:process.env.VUE_APP_API_URL + "game",
                    method:"GET",
                }).then((response)=>{
                    console.log(response);
                    this.scoreboard = response.data;
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted () {
            this.getscores();
        },
    }
</script>

<style lang="scss" scoped>
h2{

  color: #023047;
  text-align: center;
  border: #8ECAE6 2px solid;
  background-color: #219EBC;
  margin: 50px;
  font-size: 30px;
}
.board{
    display: grid;
    grid-template: 1fr 1fr 1fr;
    margin: 10px;
    h3{
    font-size: 22px;
    color: #023047;
    text-align: center;
    background-color: #8ECAE6;
    margin: 40px;
    }
    h4{
        text-align: center;

    }
}


</style>