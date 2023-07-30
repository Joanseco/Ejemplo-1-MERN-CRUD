const express = require("express")
const app = express()
const PORT = 3001
const mysql = require("mysql2")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeesystem"

})

//Este el el objeto que recibe los valores enviados en el frontend, una vez apretado el boton
app.post("/create", (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage
  

  db.query("INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al insertar los valores en la base de datos.");
      } else {
        res.send("Values Inserted");
      }      
    })

})


app.listen(PORT, () => {
  console.log(`Server open on Port: http://localhost:3001/`)
})