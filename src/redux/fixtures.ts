import { Category, Item, Ville } from './types'
export const mockedItems: Item[] = [
  {
    id: 1,
    title: 'Fuji Sushi',
    category: { id: 1, name: 'Restaurant' },
    adress: 'Avenu le caire',
    ville: { id: 1, name: 'Tetouan' },
  },
  {
    id: 2,
    title: 'Ryad alkhair',
    category: { id: 2, name: 'Hotel' },
    adress: 'Ibn Batouta',
    ville: { id: 1, name: 'Tetouan' },
  },
  {
    id: 3,
    title: 'Assur',
    category: { id: 3, name: 'Assurance' },
    adress: 'TAvenue Challa',
    ville: { id: 1, name: 'Tetouan' },
  },
  {
    id: 4,
    title: 'Hotel Mogador',
    category: { id: 3, name: 'Hotel' },
    adress: 'TAvenue Challa',
    ville: { id: 1, name: 'Tetouan' },
  },
]

export const mockedVilles: Ville[] = [
  {
    id: 1,
    name: 'Tetouan',
  },
  {
    id: 2,
    name: 'Casablanca',
  },
  {
    id: 3,
    name: 'Rabat',
  },
  {
    id: 4,
    name: 'Fnideq',
  },
]

export const mockedCategories: Category[] = [
  { id: 1, name: 'Restaurant' },
  { id: 2, name: 'Hotel' },
  { id: 3, name: 'Assurance' },
]
