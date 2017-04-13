<!-- A subreddit shows a list of threads -->

<!-- .subreddit
  thread(v-for="thread in threads" thread="thread") -->

<template lang="jade">
  .subreddit
    .title {{ title }}
    thread-link(v-for="thread in threads", :thread="thread")
</template>

<script>
  import reddit from '@/services/reddit'
  import Thread from '@/components/Thread'
  import ThreadLink from '@/components/ThreadLink'

  export default {
    data () {
      return {
        msg: '',
        threads: []
      }
    },
    components: {
      Thread,
      ThreadLink
    },
    computed: {
      title: function () {
        if (!this.$route.params.subreddit) {
          return 'All Posts'
        } else {
          return this.$route.params.subreddit
        }
      }
    },
    watch: {
      '$route': 'init'
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        reddit.hot(this.$route.params.subreddit)
        .then(data => {
          console.log(data)
          this.threads = data
        })
      }
    }
  }
</script>

<style scoped>
  .subreddit {

  }

  .title {
    margin-left: 20px;
    text-align: left;
    font-size: 2em;
  }
</style>
