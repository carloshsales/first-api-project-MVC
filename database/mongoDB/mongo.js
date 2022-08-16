const { connect } = require('mongoose');

function mongoConnect() {
    connect('mongodb://localhost:27017/games', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('DataBase Mongo Connected');
        })
        .catch((err) => {
            console.log('Error in database', err);
        });
}

module.exports = mongoConnect;
