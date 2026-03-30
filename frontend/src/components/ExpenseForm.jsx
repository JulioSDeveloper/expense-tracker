import { useState } from "react";

export function ExpenseForm({ agregarGasto }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nuevoGasto = {
      title,
      amount:Number(amount),
      category,
    };

  if(title.trim()==="" || title===" ")return
  if(!amount || amount <=0 || isNaN(Number(amount)))return
  if(category==="")return

   fetch('http://localhost:1234/expenses', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoGasto)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al crear gasto');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    agregarGasto(data)
     // limpiar inputs
    setTitle("");
    setAmount("");
    setCategory("");
  })
  .catch(error => {
    console.error(error);
  });
  

   
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
      <button type="submit">Crear</button>
    </form>
  );
}