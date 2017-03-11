var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://bobinsky:FBChatBot123@ds129010.mlab.com:29010/savers', (err, database) => {
  if (err) return console.log(err)
})