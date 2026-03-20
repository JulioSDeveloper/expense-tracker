import { useState } from "react";

export function ExpenseForm({ agregarGasto }) {

  const [titulo, setTitulo] = useState("");
  const [monto, setMonto] = useState("");
  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nuevoGasto = {
      titulo,
      monto,
      tipo,
      fecha
    };

    agregarGasto(nuevoGasto);

    // limpiar inputs
    setTitulo("");
    setMonto("");
    setTipo("");
    setFecha("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Concepto"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="">--Selecciona--</option>
        <option value="comida">Comida</option>
        <option value="ropa">Ropa</option>
        <option value="otros">Otros</option>
      </select>
       <input
        type="text"
        placeholder="fecha"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />


      <button type="submit">Crear</button>
    </form>
  );
}