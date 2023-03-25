import express  from "express";
import mongoose from "mongoose";
import Cors from 'cors';
import Videos from './dbModel.js'; 


//app config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =  'mongodb://127.0.0.1:27017/tiktok_mern_db'

//middlewares
app.use(express.json());
app.use(Cors());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//DB config
// mongoose.connect(connection_url, 
//     {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
// })
async function connect() {
    try {
        await mongoose.connect(connection_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('Connect Successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}
connect();

//api endpoints
app.get("/", (req, res) => res.status(200).send("TikTok mern"));

 
app.post('/v2/posts', (req, res, next) => { 
    const video = new Videos(req.body);
    video
        .save()
        .then(() => res.send(req.body))
        .catch(next) 
})


app.get('/v2/posts', (req, res, next) => {
    Videos.find({})
        .then(videos => res.status(200).send(videos))
        .catch(next); 
})


//listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));


