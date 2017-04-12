import Snoowrap from 'snoowrap'

import { clientId, clientSecret, username, password } from './config'

const r = new Snoowrap({
  userAgent: 'texxit',
  clientId,
  clientSecret,
  username,
  password
})

export default {
  hot () {
    return r.getHot()
  }
}
