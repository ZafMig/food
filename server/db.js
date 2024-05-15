const {MongoClient} = require('mongodb');
const URL = 'mongodb://localhost:27017/delivery'

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient
        .connect(URL)
        .then((client) => {
            console.log('Connected to MongoDB');
            dbConnection = client.db();
            cb(null, dbConnection); // Вызываем обратный вызов с базой данных в качестве аргумента
        })
        .catch((err) => {
            cb(err); // Вызываем обратный вызов с ошибкой, если подключение не удалось
        });
    },
    getDb: () => dbConnection,
};
