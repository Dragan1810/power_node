import express, { Application } from "express";
import mongoose from 'mongoose'
import { Routes } from "./routes";
import { Socket } from 'socket.io'

const app: Application = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*
mongoose.connect("mongodb://mongo:27017/power_node");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
*/


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket:Socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.use("/", Routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Runing !!!! on port:${PORT}`));
