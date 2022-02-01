// Tudo relacionado à manipulação de datas

import { Item } from "../types/Item";

//Retorna o Mês Atual
export const getCurrentMonth = () => {
   let now = new Date;
   return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string) => {
   let newList: Item[] = [];
   let [year, month] = date.split('-');

   for(let i in list){
      if(
         list[i].date.getFullYear() === parseInt(year) &&
         (list[i].date.getMonth() + 1) === parseInt(month)
      ){
         
      }
   }

   return newList;
}