<template>
<div class="more">
   <span class="more__title">More Articles</span>
    <div class="more__post-list">
    <more-post-view v-for="(post, index) in 8" :key="index" />
  </div>
</div>
</template>

<script>
import morePostView from "../views/more-post-view.vue";
export default {
  components: { morePostView }
};
</script>

<style lang="scss" scoped>
.more{
  margin: pxToRem(25) 0;

  &__title{
    font-weight: 700;
    font-size: pxToRem(22);
  }

  &__post-list {
  display: block;
  white-space: nowrap;
  overflow: auto;



  ::selection {
    background: $primary; /* WebKit/Blink Browsers */
    color: #fff;
  }
  ::-moz-selection {
    background: $primary; /* Gecko Browsers */
    color: #fff;
  }
}
}
</style>
