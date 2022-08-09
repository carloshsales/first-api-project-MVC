const mongoose = require('mongoose');

function connect() {
    mongoose
        .connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected');
        })
        .catch((err) => {
            console.log('Error in database', err);
        });
}

module.exports = connect;
