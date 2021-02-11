// https://github.com/sidorares/node-mysql2

const mysql = require('mysql2')

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'pass',
   database: 'db'
});

connection.query(
   'select * from sites',
   (err,rows,fields) => {



      console.log(rows.length)

      console.log('end')
      connection.end()
   }
)
