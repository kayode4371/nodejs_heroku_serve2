
/////////////////////////////////////////////////////////////////////////
const express = require('express')
const app = express()
const port = process.env.PORT || 7000
let PayStack = require('paystack-node')
const axios = require("axios")
const bodyParser = require('body-parser');
const cors = require("cors");
const helmet = require("helmet");
const {mongoClient, MongoClient}=require('mongodb')
var router = express.Router();
const mongoose = require('mongoose');


// Replace the uri string with your MongoDB deployment's connection string.
//const uri =
//mongodb+srv://OlukayodeUser:<password>@cluster0.1ejsr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//const uri = 'mongodb+srv://Olukayodeuser:Kayode4371@cluster0.cm0ub.mongodb.net/CompanyDB?retryWrites=true&w=majority';
//const uri ='mongodb+srv://olukayode4371:%40Akoredekayode1@cluster0.1ejsr.mongodb.net/olukayode_sage?retryWrites=true&w=majority'
const uri ='mongodb+srv://OlukayodeUser:Kayode4371@cluster0.1ejsr.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
const client = new MongoClient(uri);
mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true})
async function run() {
  try {
    await client.connect();
    
   const database = client.db('sample_airbnb');
 
   const kaydata = database.collection('listingsAndReviews');
  

  const search1= await kaydata.findOne();
  console.log(search1)


//Insert a Document
const insertResult = await kaydata.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
console.log('Inserted documents =>', insertResult);
//The insertMany command returns an object with information about the insert operations.

//Find All Documents
//Add a query that returns all the documents.

const findResult = await kaydata.find({}).toArray();
console.log('Found documents =>', findResult);
//This query returns all the documents in the documents collection. If you add this below the insertMany example you'll see the document's you've inserted.

//Find Documents with a Query Filter
//Add a query filter to find only documents which meet the query criteria.

const filteredDocs = await kaydata.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
//Only the documents which match 'a' : 3 should be returned.

//Update a document
//The following operation updates a document in the documents collection.

const updateResult = await kaydata.updateOne({ a: 3 }, { $set: { b: 1 } });
console.log('Updated documents =>', updateResult);
//The method updates the first document where the field a is equal to 3 by adding a new field b to the document set to 1. updateResult contains information about whether there was a matching document to update or not.

//Remove a document
//Remove the document where the field a is equal to 3.

const deleteResult = await kaydata.deleteMany({ a: 3 });
console.log('Deleted documents =>', deleteResult);
//Index a Collection
//Indexes can improve your application's performance. The following function creates an index on the a field in the documents collection.
const indexName = await kaydata.createIndex({ a: 1 });
console.log('index name =', indexName);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  var reference = '' + Math.floor((Math.random() * 1000000000) + 1);
 //res.send('Jesus is lord!')
  res.send(reference)
  console.log(reference)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
///////////////////////////////////////////////////////////////////
