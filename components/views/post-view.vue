<template>
  <div class="post-view">
    <img class="post-view__image" src="/images/dummy/big.svg" alt="" />
    <div class="post-view-cover">
      <div class="post-view__cat">
        <span class="category">Front-end</span>
        <app-dot-divider />
        <span class="time">1 Hour Ago</span>
      </div>
      <div class="post-view__title">Css Grid</div>
      <div class="post-view__article">
        The CSS Grid Layout Module offers a grid-based layout system, with rows
        and columns, making it easier to design web pages without having to use
        floats and positioning.
      </div>
      <div class="post-view__action">
        <span class="read-time"> 3 min Read</span>

        <button class="read-full button">
          Read Full

          <span class="mdi mdi-arrow-right"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.post-view {
  background-color: #fff;
  padding: pxToRem(10);
  border-radius: pxToRem(5);
  gap: 10px;
  cursor: pointer;
  display: flex;

  .post-view-cover {
    flex: 1;
  }
  &__image {
    max-width: 100%;
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: inherit;
  }

  &__cat {
    margin-top: pxToRem(5);

    .category {
      color: $black30;
      font-weight: 700;
      font-size: pxToRem(14);
    }

    .time {
      color: $black20;
      font-size: pxToRem(14);
    }
  }

  &__title {
    font-weight: 600;
    font-size: pxToRem(18);
    color: $black;
  }

  &__article {
    display: none;
  }

  &__action {
    display: none;
  }

  @include media-breakpoint-up(sm) {
    gap: 0px;
    margin: pxToRem(10) 0;
    display: block;
    box-shadow: 0px 1px 3px #e5e5e5;

    &__image {
      max-width: 100%;
      width: unset;
      height: unset;
    }

    &__cat {
      .category {
        color: $black30;
        font-weight: 700;
        font-size: pxToRem(14);
      }

      .time {
        color: $black20;
        font-size: pxToRem(14);
      }
    }

    &__cat {
      margin-top: pxToRem(10);
    }

    &__title {
      margin-top: 10px;
    }

    &__article {
      color: $black20;
      margin: pxToRem(5) auto pxToRem(20) auto;
      line-height: 21px;
    }

    &__action {
      margin-top: pxToRem(10);
      display: flex;
      justify-content: space-between;
      font-size: pxToRem(14);
      margin-top: pxToRem(10);

      .read-time {
        color: $black20;
      }

      .read-full {
        display: block;
        color: $primary;
        font-weight: 600;
      }
    }
  }
}
</style>
