const express = require('express');
const app = express();


app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/"));

app.get('/#login_popup', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000 );
