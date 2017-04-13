<template lang="jade">
  .thread(v-if="thread")
    span.title {{ thread.title }}
    br
    span.time
      | {{ thread.relativeTime }} in
      span.subreddit-name
        router-link.link(:to="'/' + thread.subreddit_name_prefixed")
          {{ thread.subreddit.display_name }}
      | by
      span.author
        //- router-link.link(:to="{ name: 'user', params: { user: thread.author.name } }")
        | {{ thread.author.name }}

    .comments
      comment(v-for="comment in thread.comments", :comment="comment", :key="comment.id")
</template>

<script>
import Comment from '@/components/Comment'
import reddit from '@/services/reddit'

export default {
  // props: ['thread-id'],
  data () {
    return {
      thread: null,
      comments: []
    }
  },
  components: {
    Comment
  },
  watch: {
    '$route': 'init'
  },
  beforeMount () {
    this.init()
  },
  methods: {
    init () {
      return reddit.thread(this.$route.params.thread)
      .then(thread => {
        console.log(thread)
        this.thread = thread
      })
    }
  }
}
</script>

<style scoped lang="less">
  .thread {
    margin: 10px 100px;

    a {
      color: #555;
      text-decoration: none;
    }
  }

  .comments {
    margin-top: 40px;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
    text-align: left;
  }

  .smallitem {
    margin: 4px 8px;
    font-size: 1em;
    color: #999;
  }

  .score {
    .smallitem();
    font-weight: bold;
  }

  .time {
    .smallitem();
    margin-left: 0;
  }

  .link {
    .smallitem();
    margin: 0 4px;
    font-weight: bold;
    color: #888;
  }

  .author {
    margin-left: 4px;
  }
</style>
