import { ExpenseItem } from "./ExpenseItem"

export function ExpenseList({items,eliminarItem,onEdit}){

return <> 
    <div className="item-container">
     {items.map((item)=>{
        return <ExpenseItem 
  key={item.id}
  id={item.id}
  title={item.title}
  amount={item.amount}
  created_at={item.created_at}
  eliminarItem={eliminarItem}
  onEdit={onEdit}
/>
     })}
    
    </div>
</> 
}

