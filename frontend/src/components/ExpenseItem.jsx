export function ExpenseItem({titulo,monto,fecha}){
    
return (
   <div className="expense-item">
      <div className="expense-header">
          <h3>{titulo}</h3>
          <strong>${monto}</strong>
      </div>
    <strong>Fecha: {fecha}</strong>
   </div>)
}