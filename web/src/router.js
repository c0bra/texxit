import Vue from 'vue';
import Router from 'vue-router';
import Subreddit from './components/Subreddit';
import Thread from './components/Thread';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/:subreddit?',
			name: 'index',
			component: Subreddit,
			alias: '/r/:subreddit',
		},
		{
			path: '/r/:subreddit/:thread',
			name: 'thread',
			component: Thread,
		},
	],
});
