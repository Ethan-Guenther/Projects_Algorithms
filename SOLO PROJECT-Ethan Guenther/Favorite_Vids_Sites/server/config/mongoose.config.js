const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/favorites", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Established a connection to the database"))
    .catch(() => console.log("There was a problem connecting to the database"))