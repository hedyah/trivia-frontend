<template>
  <v-app>
    <v-app-bar
      app
      color="amber darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt=" Logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/en/2/27/Trivia.png"
          transition="scale-transition"
          width="170"
          @click="$router.push('/')"
          
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=""
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>
      <v-divider vertical></v-divider>
      

      <v-btn color="amber darken-1" dark rounded @click="$router.push('/about')" text>
        About

      </v-btn>
      <v-divider vertical></v-divider>

      <v-btn color="amber darken-1" dark rounded @click="$router.push('/sign')" text>
        Sign UP
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn color="amber darken-1" dark rounded  @click="$router.push('/login')" text>
        Log IN

      </v-btn>
      <v-divider vertical></v-divider>

      <!-- <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Log in</span>
        <v-icon></v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
*{
  background-color: #023047;
}
</style>
