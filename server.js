const express = require('express');
const cors = require('cors');
const app = express();
const timeStamp = require('./routes/api/timestamp');

//cors
app.use(cors({optionsSuccessStatus: 200}));

//Static Files
app.use(express.static('public'));

//Default Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Routes
app.use('/api/timestamp', timeStamp);

var listener = app.listen(process.env.PORT || 5000, function(){
    console.log('app is listening on port ' + listener.address().port);
});