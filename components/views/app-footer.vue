<template>
  <div class="footer">
    <div class="footer__content">
      <span class="title">Join our Team of Writers</span>
      <span class="text"
        >On dasdas, writers earn a living doing what they love. Getting started
        is easy. Just pay a one time $25 fee and everything is ready to
        go.</span
      >
      <button class="button">JOIN US</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.footer {
  min-height: pxToRem(300);
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    .title {
      display: block;
      text-align: center;
      font-size: pxToRem(25);
    }
    .text {
      display: block;
      max-width: 600px;
      text-align: center;
      line-height: pxToRem(27);
      font-size: pxToRem(18);
      margin: pxToRem(10);
    }
    .button {
      display: block;
      background-color: #000;
      color: #fff;
      margin:  auto;
      padding: pxToRem(14) pxToRem(40);
      border-radius: 3px;
    }
  }
}
</style>
