/*const express = require('express')*/
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

/*import TuiterController from "./tuiter/tuiter-controller.js";
import MathController from "./math/math-controller.js";*/

/*mongoose.connect('mongodb://127.0.0.1:27017/tuiter');*/
/*mongoose.connect('mongodb+srv://artemishh:superpwd@cluster0.junhwyu.mongodb.net/tuiter?retryWrites=true&w=majority');*/
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
/*app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})*/

/*
MathController(app);
TuiterController(app);
*/

HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT|| 4000);
