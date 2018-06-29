import moment from 'moment';
import Snoowrap from 'snoowrap';

const r = new Snoowrap({
	userAgent: 'texxit',
	clientId: 'uJok-wap-ASXSg',
	accessToken: '',
});

r.config({ proxies: false });

export default {
	hot(subreddit) {
		return r
			.getHot(subreddit)
			.filter(t => !t.over_18)
			.then(threads => {
				return threads.map(t => {
					t.relativeTime = moment(t.created_utc * 1000).fromNow();
					return t;
				});
			});
	},

	thread(thread) {
		return r
			.getSubmission(thread)
			.fetch()
			.then(t => {
				t.relativeTime = moment(t.created_utc * 1000).fromNow();
				return t;
			});
	},
};
