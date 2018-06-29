<!-- A subreddit shows a list of threads -->

<template lang="pug">
.comment(:class="'level-' + comment.depth")
  .cbox
    .header
      span.author {{ comment.author.name }}
      span.score {{ comment.score }}
      span.date {{ comment.created_utc | date }}
    .body(v-html="comment.body_html")

    .comments(v-if="comment.replies.length")
      comment(v-for="c in comment.replies", :comment="c", :key="c.id")
</template>

<script>
import moment from 'moment';
export default {
	name: 'comment',
	props: ['comment'],
	filters: {
		date(value) {
			return moment(value * 1000).fromNow();
		},
	},
};
</script>

<style scoped lang="less">
@colors: #7eb57d, #f90, #569ec9, #e5414d, #774f73, #958364, #7eb57d, #f90, #569ec9, #e5414d, #774f73,
	#958364, #7eb57d, #f90, #569ec9, #e5414d, #774f73, #958364, #7eb57d, #f90, #569ec9, #e5414d,
	#774f73, #958364, #7eb57d;
.comment {
	// padding: 12px 0;
	// margin: 40px 0;
	// &:first-of-type {
	// 	// margin-top: 50px;
	// }
	.generate-levels(length(@colors));
	.generate-levels(@n, @i: 0) when (@i < @n) {
		@color: extract(@colors, (@i + 1));
		&.level-@{i} {
			padding-left: 20px;
			.cbox {
				border-left: 2px solid @color;
			}
			.body,
			.header {
				border-left: 6px solid @color;
			}
			.comments {
				// border-left: 2px solid @color;
				// padding: 12px 0;
			}
			.header {
				background-color: fade(@color, 5%);
				padding: 2px 8px;
				span {
					color: #555;
					font-size: 0.8em;
					&:not(:first-child) {
						padding-left: 8px;
					}
					&.date {
						color: #999;
					}
				}
			}
		}
		.generate-levels(@n, (@i + 1));
	}
	.author {
		font-weight: bold;
	}
	.body {
		padding: 4px 12px;
		// border-left: 8px solid green;
		margin-bottom: 20px;
	}
}
</style>
