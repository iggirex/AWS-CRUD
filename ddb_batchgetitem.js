// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  RequestItems: {
    'CUSTOMER_LIST': {
      Keys: [
        {'CUSTOMER_ID': {N: '5'}, 'CUSTOMER_NAME': {S: 'Sass McNass'}},
        {'CUSTOMER_ID': {N: '4'}, 'CUSTOMER_NAME': {S: 'Mrs. Fluffington'}},
        {'CUSTOMER_ID': {N: '3'}, 'CUSTOMER_NAME': {S: 'Sir Meowsalot'}}
      ]
    }
  }
};

ddb.batchGetItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    data.Responses.CUSTOMER_LIST.forEach(function(element, index, array) {
      console.log(element);
    });
  }
});
