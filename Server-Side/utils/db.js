import mysql from 'mysql'

const con = mysql.createConnection({
    // host: "localhost",
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "employee_management_system",          //db changed
    // database: "employeems",
    port: 3307                                      //port changed          
})

// con.connect(function(err) {
//     if(err) {
//         console.log("connection error")
//     } else {
//         console.log("Connected")
//     }
// })

con.connect((err) => {
    if (err) {
        console.error("MySQL connection error:", err.message)
    } else {
        console.log("MySQL Connected Successfully")
    }
})

export default con;

