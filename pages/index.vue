<template>
  <div class="_page">
   <featured-post/>
  </div>
</template>

<script>
import featuredPost from '~/components/views/featured-post.vue'
export default {
  components: { featuredPost },

}
</script>

<style lang="scss" scoped>
._page{
  width: 100%;

  @include media-breakpoint-up(sm){
    width: 93%;
    margin: auto;
   
  }
}
</style>