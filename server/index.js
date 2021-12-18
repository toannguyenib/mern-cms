import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb://127.0.0.1:27017/merncms';
mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err)=>{
        console.log('err', err);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());
app.use('/posts', posts);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });