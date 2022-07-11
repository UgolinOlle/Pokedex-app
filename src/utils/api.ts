import { AppSettings } from './constants';

interface Pokemon {
  name: string,
  imageUrl: string,
  pokeType: string
}

export function getPokemon(): Promise<Pokemon[]> {
  return fetch(AppSettings.URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(res => {
      return res as Pokemon[];
    })
}
