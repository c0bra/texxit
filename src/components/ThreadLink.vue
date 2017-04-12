<template lang="jade">
  .thread
    b: {{ thread.title }}
    br
    span.subreddit-name {{ thread.subreddit.display_name }}
    br
    span.score {{ thread.score }}
</template>

<script>
export default {
  props: ['thread']
}
</script>

<style scoped>
  .thread {
    border: 1px solid #ccc;
    padding: 20px 80px;
    margin: 20px;
    border-radius: 4px;
    text-align: left;
  }
  .subreddit-name {
    font-size: 1em;
    color: #999;
  }
  .score {
    font-size: 0.75em;
    font-weight: bold;
    color: #999;
  }
</style>
