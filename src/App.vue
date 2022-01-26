<template>
<div class="page">
  <Header />
  <Story
    :stories="stories"
    :start="start"
  />
  <footer class="page__footer">
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
import Header from './components/Header.vue';
import Story from './components/Story.vue'

export default {
  name: 'App',
  components: { 
    Pagination, Header, Story
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
