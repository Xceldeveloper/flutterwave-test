import Vue from 'vue'

Vue.mixin({
    methods: {
          getReadTime(string) {
            const wpm = 225;
            const words = string.trim().split(/\s+/).length;
            const time = Math.ceil(words / wpm);
            return time
          }
    },
})