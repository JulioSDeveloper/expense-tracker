import {ExpenseList} from './components/ExpenseList.jsx'
import { ExpenseForm } from './components/ExpenseForm.jsx'
import { Header } from './components/Header.jsx';
import { Login } from './components/LogIn.jsx';
import { useState,useEffect } from 'react'


const apiURL = 'http://localhost:1234/expenses'; // Replace with your API endpoint

function App() {
  
  function eliminarItem(id){
  fetch(`http://localhost:1234/expenses/${id}`, {
  method: 'DELETE',
  headers: {
        'Authorization': `Bearer ${token}`, // The key part for authorization
        'Content-Type': 'application/json' // Other headers as needed
    }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
    console.log('Resource deleted successfully');
    const nuevaLista=gastos.filter(item=>item.id!==id)
    setGastos(nuevaLista)
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
  }

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [mostrarForm,setMostrarForm]=useState(false)
  const logOut=()=>{
    localStorage.removeItem("token")
    setToken(null)
  }
  const toggleForm = () => {
  setMostrarForm(prev => !prev)
}

  const [gastos, setGastos] = useState([])
 useEffect(()=>{
if (!token) return;
  fetch(apiURL,{
     method: 'GET', // Or 'POST', 'PUT', 'DELETE', etc.
    headers: {
        'Authorization': `Bearer ${token}`, // The key part for authorization
        'Content-Type': 'application/json' // Other headers as needed
    }
  }).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    setGastos(data)
})
.catch(error => {
    console.error('Error:', error);
});
 },[token])
 
  function agregarGasto(gastoNuevo){
const nuevaLista=[...gastos,gastoNuevo]
setGastos(nuevaLista)
}
if (!token) {
    return <Login setToken={setToken} />
  }
return (
  <>
    <div className='container'>
    <button onClick={logOut}>Salir</button>
    <Header></Header>
    <button onClick={toggleForm}>
  {mostrarForm ? "Cancelar" : "+ Agregar"}
</button>
   <div className={`form-card ${mostrarForm ? "show" : "hide"}`}>
  <ExpenseForm agregarGasto={agregarGasto} />
</div>
      <ExpenseList items={gastos} eliminarItem={eliminarItem}></ExpenseList>
      </div>
      </>
  )

}

export default App
