import express from 'express'
import mysql from 'mysql2'
import { route } from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());


const db = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "Odkanhe@2003",
    database : "kavaavi"
})


db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });


console.log(db);

app.use("/", route);

app.get("/", (req, res) => {
    return res.json("From server side");
})

app.listen(3000, () => {
    console.log("Listening");
})

export {db}