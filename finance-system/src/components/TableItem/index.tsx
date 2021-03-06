import * as C from './styled'

import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
   item: Item;
}

export const TableItem = ( {item}: Props ) => {
   const formattedValue = item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
   return(
      <C.TableLine>
         {/* Date */}
         <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
         {/* Category */}
         <C.TableColumn>
            <C.Category color={categories[item.category].color}>
               {categories[item.category].title}
            </C.Category>
         </C.TableColumn>
         {/* Title */}
         <C.TableColumn>{item.title}</C.TableColumn>
         {/* Value */}
         <C.TableColumn>
            <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
               {formattedValue}
            </C.Value>
         </C.TableColumn>
      </C.TableLine>
   )
}