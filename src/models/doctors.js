var connection = require('../../config/db_config');


var Doctors = (doctores)=>{
    this.last_name  = doctores.last_name;
    this.first_name = doctores.first_name;
}


Doctors.getAllDoctores = (result)=>{
    console.log('B');
    connection.query('SELECT * FROM visitor_visitor',(err, res)=>{
        console.log('C');
        if(err){
            console.log('Errorjnjnjn'+err);
            result(null,err);
        }else{
            console.log('Successf');
            result(null,res);
        }
    })
}

module.exports = Doctors