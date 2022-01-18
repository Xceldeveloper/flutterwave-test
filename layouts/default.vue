<template>
  <div class="app font-sf-pro">
    <app-nav-bar />
    <div class="app app__content">
      <Nuxt />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;

  &__content {
    margin-top: pxToRem(70);
    overflow: auto;
  }

  @include media-breakpoint-up(sm) {
    &__content {
      margin-top: pxToRem(90);
    }
  }
}

.footer {
  background-color: green;
  height: 300px;
}
</style>
