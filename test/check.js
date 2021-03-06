var Twit = require('twit');
const dotenv = require('dotenv');

dotenv.config();
 
var T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET
})

T.get('direct_messages/events/list', {}, (err, {events}, response) => {
    if (err) {
      console.log(err)
    } else {
      console.log(events[0])
      console.log(events[0].message_create.message_data.attachment.media)
    }
})