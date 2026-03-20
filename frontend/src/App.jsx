import {ExpenseList} from './components/ExpenseList.jsx'
import { ExpenseForm } from './components/ExpenseForm.jsx'
import { Header } from './components/Header.jsx';
import { useState } from 'react'


function App() {

  const [mostrarForm,setMostrarForm]=useState(false)
  const toggleForm = () => {
  setMostrarForm(prev => !prev)
}

  const [gastos, setGastos] = useState([
    { titulo: "Pelota", monto: 500, fecha: "25/05/2025" },
    { titulo: "Hamburguesa", monto: 100, fecha: "22/08/2025" },
    { titulo: "Zapatos", monto: 1000, fecha: "24/12/2025" }
  ]);
  function agregarGasto(gastoNuevo){
const nuevaLista=[...gastos,gastoNuevo]
setGastos(nuevaLista)

}
return (
  <>
    <div className='container'>
    <Header></Header>
    <button onClick={toggleForm}>
  {mostrarForm ? "Cancelar" : "+ Agregar"}
</button>
   <div className={`form-card ${mostrarForm ? "show" : "hide"}`}>
  <ExpenseForm agregarGasto={agregarGasto} />
</div>
      <ExpenseList items={gastos}></ExpenseList>
      </div>
      </>
  )

}

export default App
