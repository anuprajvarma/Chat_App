const mongoose = require('mongoose');

const DB = 'mongodb+srv://anuprajvarma:anupraj4546@cluster0.jzjti.mongodb.net/mernstack?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        const conn = mongoose.connect(DB);
        console.log('connection is succesfull')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;

