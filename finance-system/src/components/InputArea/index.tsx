import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './style'
import DatePicker from 'react-date-picker'

type Props = {
   onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
   const [date, setDate] = useState(new Date());
   const [category, setCategory] = useState('');
   const [title, setTitle] = useState('');
   const [value, setValue] = useState(0);

   const handleAddEvent = () => {

      if(category === ''){
         alert("Digite a categoria");
         return
      }
      if(title === ''){
         alert("Digite um titulo");
         return
      }
      if(value === 0){
         alert("Digite um valor");
         return
      }
      
      let newItem: Item = {
         date,
         category,
         title,
         value
      }
      onAdd(newItem)
   }

   return (
      <C.Container>
         {/* {console.log(categories)} */}
         <form action="">
            <label>
               Data:
               <DatePicker format='dd-MM-y' value={date} onChange={setDate} />
            </label>
            <label>
               Categoria:
               <select onChange={e => setCategory(e.target.value)} required>
                  <option></option>
                  <option value="food">Food</option>
                  <option value="rent">Rent</option>
                  <option value="salary">Salary</option>
               </select>
            </label>
            <label>
               Título:
               <input
                  type="text"
                  placeholder='Digite o Título...'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
               />
            </label>
            <label>
               Valor:
               {console.log(value)}
               <input
                  type="number" min="1"
                  step="any"
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value))}
                  required
               />    
            </label>
         </form>
         <button onClick={handleAddEvent}>Adicionar</button>
      </C.Container>
   );
}