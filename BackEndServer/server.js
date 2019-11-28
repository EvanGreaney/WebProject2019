const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-9c16h.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const carSchema = new Schema({
    Model:String,
    year:String,
    ImaGE:String
})

const CarModel = mongoose.model('car', carSchema);

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/Cars', (req, res) => {

    CarModel.find((error, data) =>{
        res.json({Cars:data});
    })
})

    app.delete('/api/Cars/:id', (req, res)=>{
        console.log(req.params.id);
    
        MovieModel.deleteOne({_id: req.params.id},
            (error, data) =>{
                res.json(data);
            })
    })

    app.put('/api/Cars/:id', (req, res)=>{
        console.log("Edit: "+req.params.id);
        console.log(req.body);
        MovieModel.findByIdAndUpdate(req.params.id,
           
            req.body,
            {new:true},
            (error,data)=>{
                res.json(data);
            })
    })
    
    app.get('/api/Cars/:id', (req, res)=>{
        console.log("GET" + req.params.id);
        MovieModel.findById(req.params.id,(error,data)=>{
            res.json(data);
        })
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))