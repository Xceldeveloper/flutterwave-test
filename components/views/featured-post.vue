<template>
  <nuxt-link :to="`/${post.id}/${post.slug}`"  v-if="post !== false">
    <div class="featured-post">
      <img class="featured-post__image" :src="post.image" alt="" />
      <div class="featured-post__details">
        <div class="featured-post__details__head">
          <span class="category">{{ category }}</span>
          <app-dot-divider />
          <span class="time">{{ fomatTime }}</span>
        </div>
        <div class="featured-post__details__body">
          <div class="title">{{ post.title }}</div>
          <div class="article" v-html="desc"></div>
        </div>
        <div class="featured-post__details__footer">
          <span class="read-time">
            {{ getReadTime(post.content) }} min Read</span
          >

          <button class="read-full button">
            Read Full

            <span class="mdi mdi-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from "vuex";
import { formatDistance } from "date-fns";
export default {
  data() {
    return {
      category: ""
    };
  },
  methods: {
    async fetchCategory() {
      const data = await this.$store.dispatch(
        "posts/getCategories",
        this.post.id
      );

      // console.log(JSON.stringify(data, null, 2));
      this.category = data.map(cat => {
        return cat.name;
      })[0];
    }
  },
  computed: {
    ...mapGetters("posts", ["posts"]),
    post() {
      if (this.posts.length == 0) {
        return false;
      }
      return this.posts[0];
    },
    desc() {
      if (!this.post) {
        return "";
      } else {
        if (this.post.description.length > 400) {
          return this.post.description.substring(0, 400) + "...";
        }

        return this.post.description;
      }
    },

    fomatTime() {
      if (!this.post) {
        return "";
      }
      return formatDistance(new Date(this.post.date), new Date(), {
        addSuffix: true
      });
    }
  },
  watch: {
    post: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val !== null) {
          this.fetchCategory();
        }
      }
    }
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.featured-post {
  margin: pxToRem(20) auto;
  width: 90%;
  max-width: pxToRem(500);
  display: flex;
  flex-direction: column;
  gap: pxToRem(10);

  &__image {
    max-width: 100%;
    border-radius: 10px;
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
        text-transform: capitalize;
      }
    }
    &__body {
      .title {
        margin-top: 10px;
        font-weight: 800;
        font-size: pxToRem(22);
        color: $black;
      }
      .article {
        display: none;
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
      .read-full {
        display: none;
      }
    }
  }
  @include media-breakpoint-up(sm) {
    margin: pxToRem(40) auto;
    width: 100%;
    max-width: none;
    &__details {
      &__body {
        flex: 1;
        .title {
          font-weight: 900;
          font-size: pxToRem(22);
          color: $black;
        }

        .article {
          color: $black20;
          display: block;
        }
      }

      &__footer {
        margin: none;
        .read-full {
          display: none;
        }
      }
    }
  }

  @include media-breakpoint-up(lg) {
    padding: pxToRem(10);
    box-shadow: 0px 1px 2px #e5e5e5;
    border-radius: pxToRem(5);
    max-width: none;
    flex-direction: row;

    ::selection {
      background: $primary; /* WebKit/Blink Browsers */
      color: #fff;
    }
    ::-moz-selection {
      background: $primary; /* Gecko Browsers */
      color: #fff;
    }

    &__image {
      max-width: 50%;
      border-radius: pxToRem(5);
    }

    &__details {
      display: flex;
      flex-direction: column;

      &__body {
        flex: 1;
        .title {
          font-weight: 900;
          font-size: pxToRem(22);
          color: $black;
        }

        .article {
          color: $black20;
          display: block;
        }
      }
      &__footer {
        margin: none;
        .read-full {
          display: block;
          color: $primary;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
