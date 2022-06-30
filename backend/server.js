const express = require('express');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

connectDB();
const app = express();

app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send(`your port is 5000`);
})

app.use('/api/user', userRoutes);
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is started on ${port}`)
})