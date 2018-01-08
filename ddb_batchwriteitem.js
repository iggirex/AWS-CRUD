// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  RequestItems: {
    "CUSTOMER_LIST": [
       {
         "PutRequest": {
           "Item": {
             "CUSTOMER_ID": { "N": "3" },
	     "CUSTOMER_NAME": { "S": "Sir Meowsalot" },
               "CAT": { "S": "TRUE" },
               "DOG": { "S": "FALSE" }}
           },
         },
         {"PutRequest": {
           "Item": {
             "CUSTOMER_ID": { "N": "4" },
	     "CUSTOMER_NAME": { "S": "Mrs. Fluffington" },
               "CAT": { "S": "FALSE" },
               "DOG": { "S": "TRUE" }}
           },
	 },
	 {"PutRequest": {
	   "Item": {
	     "CUSTOMER_ID": { "N": "5" },
	     "CUSTOMER_NAME": { "S": "Sass McNass" },
	       "CAT": { "S": "FALSE" },
	       "DOG": { "S": "FALSE" }
	   }
         }
       }
    ]
  }
};

ddb.batchWriteItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
