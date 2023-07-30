import './App.css';
import { useState } from 'react'
import Axios from 'axios'

function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("")
  const [position, setPosition] = useState("")
  const [wage, setWage] = useState(0)

  //Esta es la info que se le envia al backend una vez apretado el boton
  const addEmployee = () =>{
    Axios.post("http://localhost:3001/create", {
      name: name, 
      age: age, 
      country: country,
      position: position,
      wage: wage
    }).then(() => {
      console.log("sucess")
    })
  }

  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleAge = (e)=>{
    setAge(e.target.value)
  }

  const handleCountry = (e) =>{
    setCountry(e.target.value)
  }

  const handlePosition = (e)=>{
    setPosition(e.target.value)
  }

  const handleWage = (e)=>{
    setWage(e.target.value)
  }


  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={handleName} />
        <label>Age:</label>
        <input type="number" onChange={handleAge} />
        <label>Country:</label>
        <input type="text" onChange={handleCountry} />
        <label>Position:</label>
        <input type="text" onChange={handlePosition} />
        <label>Wage (year):</label>
        <input type="number" onChange={handleWage} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;

/*
OTRA FORMA DE HACER ESTE CODIGO MAS EFICIENTE CON EL USESTATE SERIA

function App() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    age: 0,
    country: '',
    position: '',
    wage: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} />
        <label>Age:</label>
        <input type="number" name="age" onChange={handleInputChange} />
        <label>Country:</label>
        <input type="text" name="country" onChange={handleInputChange} />
        <label>Position:</label>
        <input type="text" name="position" onChange={handleInputChange} />
        <label>Wage (year):</label>
        <input type="number" name="wage" onChange={handleInputChange} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

*/