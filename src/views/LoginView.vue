<template>
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
            label="Password"
            placeholder="******"
            filled
            solo
          ></v-text-field>
        </v-col>

      </v-row>
      <v-btn  color="amber darken-1"  block>
        Log in
      </v-btn>
    </v-container>
    </div>
</template>

<script>
    export default {
        
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

</style>