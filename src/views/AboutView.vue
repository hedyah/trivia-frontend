<template>
  <div >
    <div class="img">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/too-many-questions-royalty-free-image-487063216-1545936032.jpg" alt="">
        <img src="https://hr.mcmaster.ca/app/uploads/2020/09/trivia-image-for-web.jpg" alt="">
        <img src="https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1282124793.jpg?w=730&crop=1" alt="">
        <img src="https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2018/02/Trivial20Pursuit.jpg" alt="">
        </div>

        <h1>About us</h1>
        <p>This is a cool Website that allows you to play Free Trivia Games that test your knowledge 
          on variety of genres and you can even contribute to the knowledge
          by creating an account that allows you to create your very own Quizzes!</p>
          
  </div>
</template>


<style lang="scss" scoped>
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
h1{
  color: #023047;
  text-align: center;
  background-color: #219EBC;
  margin: 20px;
}
p{
  border: #219EBC solid 4px;
  color: #023047;
  font-size: 25px;
  margin: 10px;
  text-align: center;
  background-color:#FFB703 ;
}
img{
  width: 30%;
}
@media only screen and (max-width: 500px){
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
