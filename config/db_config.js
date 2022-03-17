var Pool = require('pg').Pool;

const pool =new Pool(
  {
    user: 'postgres',
    host: 'localhost',
    database: 'MediKa',
    password: 'password',
    port: 5432,
  }
); 


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: '',
//   password: '',
//   port: 5432,
//   database: 'MediKa'
// });
// console.log('connection');
// connection.connect(function (err) {
//   console.log('connect Test')
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected');
// });

module.exports = pool;