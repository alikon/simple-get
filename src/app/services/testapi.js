var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'localhost',
  'path': '/joomla-cms/api/index.php/v1/users',
  'headers': {
    'Authorization': 'Bearer c2hhMjU2OjUzNDo2NjcyMjc2NWQ3MzI3MWU0MzY4Y2QwZDU4N2QxNGEzNWFkNGY0MGJkZmJiMDAyYjc3OWU3NTBjZDdkYmJmOGNl'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();