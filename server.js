var app = require('./server-config.js');


// OLD CODE:
// var port = 4568;
// NEW CODE:
var port = process.env.PORT || 8080

app.listen(port);

console.log('Server now listening on port ' + port);
