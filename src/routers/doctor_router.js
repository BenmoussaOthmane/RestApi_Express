const express = require('express');
const router = express.Router();

const DoctorController = require('../controllers/doctor_controller');

router.get('/',DoctorController.get_all_doctor);

module.exports = router;