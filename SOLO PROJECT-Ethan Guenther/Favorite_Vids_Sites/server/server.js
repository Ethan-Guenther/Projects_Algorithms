const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require('./config/mongoose.config');

require('./routes/favorites.routes')(app);

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

const cost = 3.99;
const date = 'today';
const skill = 'hi';
