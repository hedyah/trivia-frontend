<template>
    <div>
        
    <v-footer
    dark
    padless
    
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue-grey darken-4">
        <strong class="subheading hidden-md-and-down">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <v-btn small text @click="$router.push('/about')">
          about us
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>TRIVIA</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  
    </div>
</template>

<script>
    export default {
        name: "FooterComp",

        data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),

    }
</script>

<style lang="scss" scoped>

</style>