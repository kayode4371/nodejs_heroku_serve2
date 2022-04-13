const express = require('express')
const app = express()
const port = process.env.PORT || 7000
let PayStack = require('paystack-node')
const axios = require("axios")
const bodyParser = require('body-parser');
const cors = require("cors");
const helmet = require("helmet");

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})
// const allowedOrigins = [
  
//   'ionic://localhost',
//   'http://localhost',
//   'http://localhost:7000',
//   'http://localhost:8100',
// ];


app.use(cors());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));




// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

//   var corsOptions = {
//       origin: '*',
//       optionsSuccessStatus: 200,
//     }
//   app.use(cors(corsOptions));
//   app.use(express.json())



 
app.get('/', (req, res) => {
  var reference = '' + Math.floor((Math.random() * 1000000000) + 1);
 //res.send('Jesus is lord!')
  res.send(reference)
  console.log(reference)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


