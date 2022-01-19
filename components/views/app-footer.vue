<template>
  <div class="footer">
    <div class="footer__content">
      <span class="title">Join our Team of Writers</span>
      <span class="text">On dasdas, writers earn a living doing what they love. 
          Getting started is easy. Just pay a one time $25 fee and everything is ready to go.</span>
          <button class="button">JOIN US</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>


  .footer {
     background-color: #fff;
    min-height: pxToRem(300);
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      .title {
       display: block;
       text-align: center;
      }
      .text {
        display: block;
        text-align: center;
      }
      .button {
        &:hover {}
        &:active {}
        &:focus {}
      }
    }
  }



</style>
