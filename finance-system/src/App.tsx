import { useEffect, useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
   const [list, setList] = useState(items); //Lista geral de Itens
   const [filterList, setFilterList] = useState<Item[]>([]); //Lista filtrada
   const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); //2022-2

   useEffect(() => {
      setFilterList(filterListByMonth(list, currentMonth))
   }, [list, currentMonth]);

   return (
    <C.Container>
       <C.Header>
          <C.HeaderText> Sistema Financeiro </C.HeaderText>
       </C.Header>
       <C.Body>
          {/* Área de Informações */}

          {/* Área de Inserção */}

          <TableArea list={filterList}></TableArea>
       </C.Body>
    </C.Container>
  );
}

export default App;