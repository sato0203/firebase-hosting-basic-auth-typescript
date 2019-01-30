import * as functions from 'firebase-functions';
import * as express from "express";
const basicAuth = require("basic-auth-connect");

const app = express();

app.use(basicAuth('username','password'))
app.use(express.static(__dirname + '/public/'))

export const auth = functions.https.onRequest(app);