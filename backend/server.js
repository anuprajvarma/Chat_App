const express = require('express');
const chats = require('./data/data');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("hiii chat app");
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
    console.log("server is started on 4000")
})