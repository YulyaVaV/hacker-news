<template>
<div class="page">
  <Header />
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
  <footer class="story__footer">
    <Pagination
      :prevPage="prevPage"
      :nextPage="nextPage"
    />
  </footer>
</div>
</template>

<script>
import axios from 'axios';
import './assets/styles/App.scss';
import Pagination from './components/Pagination.vue';
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { 
    Pagination, Header
  },

  data() {
    return {
      stories: [],
      err: '',
      start: 0,
      end: 20
    }
  },

  methods: {
    getData() {
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then((response) => {
          let result = response.data.slice(this.start, this.end)
          result.forEach(id => {
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then((response) => {
                this.stories.push(response);
              })
              .catch((err) => {
              this.err = err
            })
          })
        })
        .catch((err) => {
        this.err = err
      })  
    },

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
  
    prevPage() {
      if (this.start !== 0) {
        this.stories = [];
        this.start -= 20;
        this.end -= 20;
        this.getData()
      }
    },

    nextPage() {
      this.stories = []
      this.start += 20;
      this.end += 20;
      this.getData()
    },
  },

  created: function () {
    this.getData()
  },
}
</script>
