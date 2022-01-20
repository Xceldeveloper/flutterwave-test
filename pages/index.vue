<template>
  <div class="_page">
   <featured-post/>

   <post-lists/>

  </div>
</template>

<script>
import PostLists from '~/components/custom/post-lists.vue'
import featuredPost from '~/components/views/featured-post.vue'
export default {
  components: { featuredPost, PostLists },

}
</script>

<style lang="scss" scoped>
._page{
  width: 100%;

  @include media-breakpoint-up(sm){
    width: 90%;
    margin: auto;
   
  }
}
</style>