var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

var talkSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  twitterHandle: String,
  talkTitle: String,
  meetupDate: String,
  // meetupDate is the month the speaker would prefer to give the talk
  comments: String
})

var Talk = mongoose.model('Talk', talkSchema)

module.exports = Talk
