import { ExpenseItem } from "./ExpenseItem"

export function ExpenseList({items}){

return <> 
    <div className="item-container">
     {items.map((item,index)=>{
        return <ExpenseItem 
  key={index}
  titulo={item.titulo}
  monto={item.monto}
  fecha={item.fecha}
/>
     })}
    
    </div>
</> 
}

