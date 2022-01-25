<template>
  <div v-for="(story, index) in stories" :key="story" class="story">
    <p class="story__index">{{index + this.start + 1}}.</p>
    <div class="story__content">
      <div class="story__header">
        <a :href="story.data.title" class="story__title">{{capitalizeFirstLetter(story.data.title)}} </a>
        <a :href="story.data.url" class="story__url">{{isEmpty(story.data.url)}} </a>
      </div>
      <div class="story__wrapp">
        <p class="story__points">{{story.data.score}} points by</p>
        <a href="/" class="story__by">{{story.data.by}}</a>
        <a href="/" class="story__hours">{{renderTime(story.data.time)}} hours ago</a>
        <a href="/" class="story__comments">{{story.data.descendants}} comments</a>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/styles/Story.scss';
export default {
  name: "Story",
  props: ["stories", "start"],
  methods: {
    renderTime(time) {
      const date = new Date(time * 1000);
      return date.getHours();
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    isEmpty(str) {
      if (!str || 0 === str.length) {
        return '';
      } else {
        return `(${str})`;
      }
    },
  }
}
</script>
