export function ExpenseItem({ id, title, amount, created_at, eliminarItem, onEdit }) {

  const expense = { id, title, amount, created_at };

  return (
    <div className="expense-item">
      <div className="expense-header">
        <h3>{title}</h3>
        <strong>${amount}</strong>
      </div>

      <strong>Fecha: {created_at}</strong>

      <button onClick={() => onEdit(expense)}>Editar</button>

      <button onClick={() => eliminarItem(id)}>
        🗑 Eliminar
      </button>
    </div>
  );
}