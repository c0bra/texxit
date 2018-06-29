<template lang="pug">
  .thread
    a(:href="thread.url", target="_new")
      b {{ thread.title }}
    br
    span.subreddit-name
      router-link.link(:to="'/' + thread.subreddit_name_prefixed")
        | {{ thread.subreddit.display_name }}
    span.domain {{ thread.domain }}
    br
    span.score {{ thread.score }}
    router-link.comments(:to="{ name: 'thread', params: { subreddit: thread.subreddit.display_name, thread: thread.id } }")
      i.fa.fa-comment
      | {{ thread.num_comments }}
    span.time {{ thread.relativeTime }}
</template>

<script>
export default {
	props: ['thread'],
};
</script>

<style scoped lang="less">
.thread {
	border: 1px solid #ccc;
	padding: 20px 80px;
	margin: 20px;
	border-radius: 4px;
	text-align: left;
	text-decoration: none;
	.link {
		color: #555;
	}
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
.comments,
a.comments {
	.smallitem();
	font-weight: bold;
	color: #999;
	.fa {
		margin-right: 4px;
	}
}
.time {
	.smallitem();
}
</style>
