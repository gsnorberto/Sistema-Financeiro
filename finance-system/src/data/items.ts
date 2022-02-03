import {Item} from '../types/Item'

export const items: Item[] = [
   // Mês 0 = Janeiro
   { date: new Date(2022, 1, 10), category: 'food', title: 'McDonalds', value: 32.12 },
   { date: new Date(2022, 1, 10), category: 'food', title: 'Burger King', value: 28.00 },
   { date: new Date(2022, 9, 12), category: 'rent', title: 'Aluguel Apt', value: 2000 },
   { date: new Date(2022, 1, 15), category: 'rent', title: 'Aluguel', value: 4500 },
   { date: new Date(2022, 10, 15), category: 'salary', title: 'Salário Empresa', value: 4500 }
];