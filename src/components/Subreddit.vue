<!-- A subreddit shows a list of threads -->

<!-- .subreddit
  thread(v-for="thread in threads" thread="thread") -->

<template lang="jade">
  .subreddit
    thread-link(v-for="thread in threads", v-bind:thread="thread")
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
    mounted () {
      reddit.hot().then(data => {
        console.log(data)
        this.threads = data
      })
    }
  }
</script>

<style scoped>
  .subreddit {

  }
</style>
