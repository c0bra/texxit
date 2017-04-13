import moment from 'moment'
import Snoowrap from 'snoowrap'

import { clientId, clientSecret, username, password } from './config'

const r = new Snoowrap({
  userAgent: 'texxit',
  clientId,
  clientSecret,
  username,
  password
})

r.config({proxies: false})

export default {
  hot (subreddit) {
    return r.getHot(subreddit)
    .filter(t => !t.over_18)
    .then(threads => {
      return threads.map(t => {
        t.relativeTime = moment(t.created_utc * 1000).fromNow()
        return t
      })
    })
  }
}
