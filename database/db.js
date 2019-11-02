const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'LowesGallerySDC';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  var i = 0
  const db = client.db(dbName);
  const collection = db.collection('reSeed3')
  
  console.time('queryID');
  // collection.find({itemId:1000000}), (function(err, docs) {
  //   assert.equal(null, err);
  //   assert.equal(2, docs.length);
  //   client.close();
  // });
  function bulkQuery(num){
    if(num <= 0){
      console.timeEnd('queryID')
      return
    }
    let rand = Math.floor(Math.random() * 10000000)
    collection.findOne({_id:rand}).then((item) => {console.log(item, num)}).then(() => {bulkQuery(num - 1)})
  };
  bulkQuery(1000)
  // (function massWritePics(num){
  //   const collection = db.collection('reSeed3')
  //   var results = []
  //   for(var i = num; i <= 1000000 + num; i++){
  //     if(i >= 11100000){
  //       return;
  //     }
  //     var newObj = {}
        // newObj._id = i,
  //       newObj.pictures=[`https://loremflickr.com/320/240?lock=${i}`,
  //       `https://loremflickr.com/320/240?lock=${i+15}`,
  //       `https://loremflickr.com/320/240?lock=${i+25}`,
  //       `https://loremflickr.com/320/240?lock=${i+35}`]
      
  //     results.push(newObj);
  //   }
  //   console.time('1,000,000 write');
  // collection.insertMany(results).then(()=>{
  //     console.timeEnd('1,000,000 write');
  //     massWritePics(i);
  // });
  // }(1))
  // console.log('write complete!')
  // client.close();
});


// client.connect((err, client) => {
//   assert.equal(null, err)
//   console.log("Connected successfully to server");
//   const db = client.db('LowesGallerySDC')
  
//   // client.close();

// })

// db.on('error', console.error.bind(console, 'db connection error =('))
// db.once('open', function(){
//   console.log('mongo up and running');
// })

const imageBank = [
  "https://loremflickr.com/320/240?random=1",
  "https://loremflickr.com/320/240?random=2",
  "https://loremflickr.com/320/240?random=3",
  "https://loremflickr.com/320/240?random=4",
  "https://loremflickr.com/320/240?random=5",
  "https://loremflickr.com/320/240?random=6",
  "https://loremflickr.com/320/240?random=7",
  "https://loremflickr.com/320/240?random=8",
  "https://loremflickr.com/320/240?random=9",
  "https://loremflickr.com/320/240?random=10",
  "https://loremflickr.com/320/240?random=11",
  "https://loremflickr.com/320/240?random=12",
  "https://loremflickr.com/320/240?random=13",
  "https://loremflickr.com/320/240?random=14",
  "https://loremflickr.com/320/240?random=15",
  "https://loremflickr.com/320/240?random=16",
  "https://loremflickr.com/320/240?random=17",
  "https://loremflickr.com/320/240?random=18",
  "https://loremflickr.com/320/240?random=19",
  "https://loremflickr.com/320/240?random=20",
  "https://loremflickr.com/320/240?random=21",
  "https://loremflickr.com/320/240?random=22",
  "https://loremflickr.com/320/240?random=23",
  "https://loremflickr.com/320/240?random=24",
  "https://loremflickr.com/320/240?random=25",
  "https://loremflickr.com/320/240?random=26",
  "https://loremflickr.com/320/240?random=27",
  "https://loremflickr.com/320/240?random=28",
  "https://loremflickr.com/320/240?random=29",
  "https://loremflickr.com/320/240?random=30",
]




let fetchReviews = function(id, callback){
  Item.findOne({'id':id}, function(err, item){
    if(err) console.log(err);
    callback(null, item);
  })
}

let writeReview = function(review, id, callback){
  Item.updateOne({id:id}, {$push: {reviews:review} }, function(err, updatedComment){
    if(err) console.log(err);
    callback(null, updatedComment);
  })
}



// addRandomDate = function(){
//   let monthOptions = [
//     'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'
//     ,'Dec'
//   ]
//   let result = '';
//   let dayMaker = Math.floor(Math.random() * (28 - 1) + 1)
//   if(dayMaker < 10){
//       dayMaker = '0'+ dayMaker;
//   } else {
//       dayMaker = dayMaker + '';
//   }
//   result += monthOptions[Math.floor(Math.random() * 12)]
//   +' ' + dayMaker + ', '
//   + Math.floor(Math.random() * (2018 - 2012) + 2012)
//   return result;
// }

// Rating.updateMany({}, {createdAt:addRandomDate()}, function(err, items){
//   if(err) console.log(err);
//   console.log(items);
// })

// Item.updateOne({id:63}, {$set: {reviews.createdAt}})

// Item.find({"reviews.createdAt": {$in:  }}, {"comments.comment": 1})
//   .then(function(results){
//     return results.map(function(userComment){

//        userComment.comments.forEach(function(commentContainer){
//          // Check if this comment contains banned phrases
//          if(bannedPhrases.indexOf(commentContainer.comment) >= 0) {
//            commentContainer.isHidden = true;
//          }
//        });

//        return userComment.save();
//     });
//   }).then(function(promises){
//      // This step may vary depending on which promise library you are using
//      return Promise.all(promises);
//   });

// Functions to seed DB

// const almostComplete = data.addTitleAndNewText(data3, data2.data2)
// const complete = data.pushReviews(almostComplete, data.data);
// Item.insertMany(complete);

module.exports = {fetchReviews, writeReview};