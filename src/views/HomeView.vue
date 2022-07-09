<template>
  <div class="home">
    <div class="logo">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf8dd150833377.58dad0c4806e9.png" alt="">
    </div>
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="genre">
      <h3>Geography</h3>
      <img src="https://img.freepik.com/free-vector/map-books-pen-globe-magnifying-glass-geography-lesson-concept_620585-222.jpg?w=2000" alt="">
      <h3>Art</h3>
      <img src="https://img.freepik.com/free-vector/cartoon-cute-color-palette-paint-brush-characters_8071-6100.jpg" alt="">
      <h3>Sports</h3>
      <img src="https://www.nicepng.com/png/detail/816-8167151_vector-illustration-of-sports-balls-with-football-all.png" alt="">
      <h3>Science</h3>
      <img src="https://cdn.dribbble.com/users/2183879/screenshots/4492544/media/eac5a1308dbdd0d9d9e58a45a152e853.png?compress=1&resize=400x300" alt="">
      <h3>History</h3>
      <img src="https://i.pinimg.com/474x/d7/f2/4a/d7f24aca9d3116853460583028095087.jpg" alt="">
      <h3>Movies</h3>
      <img src="https://cdn.dribbble.com/users/1787323/screenshots/10742780/media/662eea472953bf93aa1cc6fbc6712bd0.png?compress=1&resize=400x300&vertical=top" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

.genre{
  color: #219EBC;
  
  img{
    width: 20%;
  }
}
.logo{
  img{
  background-color: #FFB703;
  width: 13%;
  border: solid 2px black;
}
}
</style>
