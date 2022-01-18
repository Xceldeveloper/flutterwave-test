<template>
  <div class="featured-post">
    <img class="featured-post__image" src="/images/dummy/big.svg" alt="" />
    <div class="featured-post__details">
      <div class="featured-post__details__head">
        <span class="category">Front-end</span>
        <app-dot-divider />
        <span class="time">1 Hour Ago</span>
      </div>
      <div class="featured-post__details__body">
        <div class="title">Optimizing CSS for faster page loads</div>
        <div class="article" v-html="article"></div>
      </div>
      <div class="featured-post__details__footer">
        <span class="read-time"> 3 min Read</span>

        <button class="button">Read Full

          <span class="mdi mdi-arrow-right"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `
     Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well.

To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage...
     `
    };
  },
  computed: {
    article() {
      const formatText = this.text.replace(/\n/g, "<br>");
      // if(formatText > 500) {
      //   return this.text.substring(0, 500) + "...";
      // }

      return formatText;
    }
  }
};
</script>

<style lang="scss">
.featured-post {
  margin: pxToRem(10);
  display: flex;
  flex-direction: column;
  gap: pxToRem(10);

  &__image {
    max-width: 100%;
  }

  &__details {
    flex: 1;
    &__head {
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
    &__body {
      .title {
        font-weight: 900;
        font-size: pxToRem(22);
        color: $black;
      }
      .article {
        color: $black20;
      }
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      font-size: pxToRem(14);
      margin-top: pxToRem(10);

      .read-time {
        color: $black20;
      }
      button {
        color: $primary;
        font-weight: 600;
      }
    }
  }

  @include media-breakpoint-up(lg) {
    flex-direction: row;
    margin: pxToRem(20) 0;
    &__image {
      max-width: 50%;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;

    &__body {
      flex: 1;
    }

    &__footer {
      margin: none;
    }
  }
}
</style>
