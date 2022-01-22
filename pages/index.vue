<template>
  <div class="page">
   <featured-post/>
   <post-lists/>
  </div>
</template>

<script>
import PostLists from '~/components/custom/post-lists.vue'
import featuredPost from '~/components/views/featured-post.vue'
export default {
  components: { featuredPost, PostLists },
  created(){
    // fetch posts here even before the component is counted 
      this.$store.dispatch("posts/getAllPosts")
   },

}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;

  @include media-breakpoint-up(sm){
    width: 90%;
    margin: auto;
   
  }
}
</style>