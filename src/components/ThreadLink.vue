<template lang="jade">
  .thread
    router-link.link(to="thread")
      b {{ thread.title }}
    br
    span.subreddit-name
      router-link.link(:to="'/' + thread.subreddit_name_prefixed")
        {{ thread.subreddit.display_name }}
    span.domain {{ thread.domain }}
    br
    span.score {{ thread.score }}
    span.comments
      i.fa.fa-comment
      &nbsp;
      {{ thread.num_comments }}
    span.time {{ thread.relativeTime }}
</template>

<script>
export default {
  props: ['thread']
}
</script>

<style scoped lang="less">
  .thread {
    border: 1px solid #ccc;
    padding: 20px 80px;
    margin: 20px;
    border-radius: 4px;
    text-align: left;

    a {
      color: #555;
      text-decoration: none;
    }
  }

  .subreddit-name {
    color: #999;
  }

  .smallitem {
    margin: 4px 8px;
    font-size: 0.75em;
    color: #999;
  }

  .domain {
    .smallitem();
    // color: #bbb;
    margin-left: 42px !important;
    font-size: 0.8em;
  }

  .score {
    .smallitem();
    font-weight: bold;
    margin-left: 0;
  }

  .comments {
    .smallitem();
    font-weight: bold;
  }

  .time {
    .smallitem();
  }


</style>
