import { useState, useEffect } from "react";

export function ExpenseForm({ agregarGasto, editingExpense, onClose }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // 🔥 CARGAR DATOS SI ESTÁS EDITANDO
  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category || "");
    }
  }, [editingExpense]);

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") return
    if (!amount || amount <= 0 || isNaN(Number(amount))) return
    if (category === "") return

    const gasto = {
      title,
      amount: Number(amount),
      category,
    };

    // 🔥 EDITAR
    if (editingExpense) {
      fetch(`http://localhost:1234/expenses/${editingExpense.id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(gasto)
      })
        .then(res => res.json())
        .then(data => {
          agregarGasto(data)
          onClose()
        })
        .catch(console.error)

    } else {
      // 🔥 CREAR
      fetch('http://localhost:1234/expenses', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(gasto)
      })
        .then(res => res.json())
        .then(data => {
          agregarGasto(data)
          onClose()
        })
        .catch(console.error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Concepto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled hidden>Selecciona una opción</option>
        <option value="comida">Comida</option>
        <option value="ropa">Ropa</option>
        <option value="hogar">Hogar</option>
        <option value="bienestar">Bienestar</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="otros">Otros</option>
      </select>

      <button type="submit">
        {editingExpense ? "Actualizar" : "Crear"}
      </button>

    </form>
  );
}