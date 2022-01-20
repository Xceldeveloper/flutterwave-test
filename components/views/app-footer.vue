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

<style lang="scss">
.footer {
  min-height: pxToRem(300);
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    .title {
      display: block;
      text-align: center;
      font-size: pxToRem(20);
      font-weight: 600;

      @include media-breakpoint-up(md) {
        font-size: pxToRem(25);
      }
    }

    .text {
      display: block;
      max-width: 90%;
      text-align: center;
      line-height: pxToRem(22);
      font-size: pxToRem(16);
      margin: pxToRem(8) auto;

      @include media-breakpoint-up(md) {
        font-size: pxToRem(18);
        line-height: pxToRem(27);
        max-width: 600px;
        margin: pxToRem(10) auto;
      }
    }

    .button {
      display: block;
      background-color: #000;
      color: #fff;
      margin: auto;
      border-radius: 3px;
      padding: pxToRem(13) pxToRem(30);

      @include media-breakpoint-up(md) {
        padding: pxToRem(14) pxToRem(40);
      }
    }
  }

  @include media-breakpoint-up(lg) {
  }
}
</style>
