import { Item } from '../../types/Item';
import * as C from './style'

type Props = {
   onAdd: (item: Item) => void
}

export const InputArea = ( {onAdd}: Props ) => {
   const handleAddEvent = () => {
      let newItem: Item = {
         date: new Date(2022, 1, 27),
         category: 'food',
         title: 'Item Teste',
         value: 250.25
      }
      onAdd(newItem)
   }
   return(
      <C.Container>
         <button onClick={handleAddEvent}>Adicionar</button>
      </C.Container>
   );
}