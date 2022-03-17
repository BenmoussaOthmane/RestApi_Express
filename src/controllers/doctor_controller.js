const DoctorModels = require('../models/doctors');

//  get all doctores
exports.get_all_doctor=(req, res) => {
    // console.log("get_all_doctor");
    console.log('A');
    DoctorModels.getAllDoctores((err , doctores) => {
        console.log('we are here');
    })
}