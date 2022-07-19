<template>
  <hello-world />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
    },
  }
</script>

<style lang="scss" scoped>
$grid-breakpoints: ( xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl:
1400px );
</style>