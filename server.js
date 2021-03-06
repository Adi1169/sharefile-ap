const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const path = require('path');

const cors = require('cors');

app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');

connectDB();

const corsOptions = {
   origin: '*',
    optionsSuccessStatus: 200
}

console.log(corsOptions);

app.use(cors(corsOptions));
//Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files', require('./routes/show.js'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `);

})