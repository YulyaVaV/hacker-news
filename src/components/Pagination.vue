<template>
  <div id="arrayPagination">
    <p class="story__buttons">
      <button class="story__btn" @click="prevPage($event.target)">prev</button>
      <button class="story__btn" @click="nextPage($event.target)">more...</button>
    </p>
  </div>
</template>

<script>
import { useArrayPagination } from 'vue-composable';

export default {
  props: [ "prevPage", "nextPage" ],

  setup() {
    const array = new Array(1000).fill(0).map((_, i) => i);
    const { next, prev } = useArrayPagination(array, {})
    return {
      next, prev
    }
  }
}
</script>
