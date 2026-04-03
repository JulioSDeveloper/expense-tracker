import { ExpenseList } from './components/ExpenseList.jsx'
import { ExpenseForm } from './components/ExpenseForm.jsx'
import { Header } from './components/Header.jsx';
import { useState, useEffect } from 'react'
import { AuthPage } from './components/AuthPage.jsx';

const apiURL = 'http://localhost:1234/expenses';

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [username, setUsername] = useState(localStorage.getItem("username"))

  const [gastos, setGastos] = useState([])
  const [mostrarForm, setMostrarForm] = useState(false)
  const [editingExpense, setEditingExpense] = useState(null)

  // LOGOUT
  const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    setToken(null)
    setUsername(null)
  }

  // ELIMINAR
  function eliminarItem(id) {
    fetch(`${apiURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        setGastos(gastos.filter(item => item.id !== id))
      })
      .catch(console.error)
  }

  // EDITAR
  const handleEdit = (expense) => {
    setEditingExpense(expense)
    setMostrarForm(true)
  }

  // AGREGAR O ACTUALIZAR EN FRONT
function actualizarLista(gastoActualizado) {
  console.log("EDITING:", editingExpense?.id);
  console.log("UPDATED:", gastoActualizado);

  if (editingExpense) {
    const nuevaLista = gastos.map(item =>
      Number(item.id) === Number(editingExpense.id)
        ? { ...item, ...gastoActualizado } // 🔥 merge seguro
        : item
    );

    setGastos(nuevaLista);
  } else {
    setGastos([...gastos, gastoActualizado]);
  }
}

  // FETCH
  useEffect(() => {
    if (!token) return;

    fetch(apiURL, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setGastos(data))
      .catch(console.error)

  }, [token])

  if (!token) {
    return <AuthPage setToken={setToken} setUsername={setUsername} />
  }

  return (
    <div className='container'>

      <button onClick={logOut}>Salir</button>

      <Header username={username} />

      <button onClick={() => {
        setMostrarForm(!mostrarForm)
        setEditingExpense(null)
      }}>
        {mostrarForm ? "Cancelar" : "+ Agregar"}
      </button>

      {mostrarForm && (
        <div className="form-card">
          <ExpenseForm
            agregarGasto={actualizarLista}
            editingExpense={editingExpense}
            onClose={() => {
              setMostrarForm(false)
              setEditingExpense(null)
            }}
          />
        </div>
      )}

      <ExpenseList
        items={gastos}
        eliminarItem={eliminarItem}
        onEdit={handleEdit}
      />

    </div>
  )
}

export default App