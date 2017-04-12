<template lang="jade">
  .thread
    comment(v-for="comment in comments", :key="comment.id")
</template>

<script>
import Comment from '@/components/Comment'

export default {
  props: ['thread'],
  components: {
    Comment
  }
}
</script>

<style scoped>

</style>
