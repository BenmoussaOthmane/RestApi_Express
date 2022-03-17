const express = require('express');

//  Create Express App
const app  = express();

// SetUP The Server Port
const port = process.env.PORT || 5000


// Define Root Router
app.get('/', (req, res) =>{
    res.send('Hello World!');
});

// import doctors router 
const doctorRouter = require('./src/routers/doctor_router')

// create router for doctores
app.use('/api/v1/doctors',doctorRouter);


// listen the port number
app.listen(port,()=>{
    console.log('listening on port '+port);
});



