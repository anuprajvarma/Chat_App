const express = require('express');
const dotenv = require('dotenv')
const chats = require('./data/data');
const connectDB = require('./config/db')

dotenv.config();
const app = express();

connectDB();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`your port is 5000`);
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:uid', (req, res) => {
    const id = req.params.uid;
    const singleChat = chats.find((c) => c._id === id);
    res.send(singleChat);
})
app.listen(port, () => {
    console.log(`server is started on ${port}`)
})