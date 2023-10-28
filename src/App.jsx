import { useState, useEffect} from 'react'
import './App.css'
import './index.css'
import Employee from './component/Employee';



function App() {
//to set a default value
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      {nom: 'Mathieu', 
      référentiel:'Developpeur', 
      img:'./img/mathieu.jpg'},
      
      {nom: 'Aron', 
      référentiel:'Developpeur', 
      img:'./img/aron.jpg'},

      {nom: 'Mickael-Ange', 
      référentiel:'Developpeur', 
      img:'./img/bushnell.jpg'},

      {nom: 'Cain', 
      référentiel:'Developpeur', 
      img:'./img/calin.jpg'},

      {nom: 'Christiana', 
      référentiel:'Developpeur', 
      img:'./img/chistiana.jpg'},
      
      {nom: 'Ferry', 
      référentiel:'Developpeur', 
      img:'./img/ferry.jpg'},

      {nom: 'Doriana', 
      référentiel:'Developpeur', 
      img:'./img/doriana.jpg'},

      {nom: 'Glenn', 
      référentiel:'Developpeur', 
      img:'./img/glenn.jpg'},

      {nom: 'Sandrine', 
      référentiel:'Developpeur', 
      img:'./img/sandrine.jpg'}

    ]);
   
  const showEmployees = true;
  return(
    <div className = "App">
      {showEmployees ? (
          <>
            <input
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }}
            />
            <div className='flex flex-wrap justify-center'>
                {employees.map((employee) => {
                  console.log(employee);
                 return (
                  <Employee
                    nom={employee.nom}
                    référentiel={employee.référentiel}
                    img={employee.img}
                  />
                 );
                })}
            </div>
          </>
        ): (
          <p>here are some employees</p>
        )
      }
    </div> 
  )
    
    
  
}

export default App