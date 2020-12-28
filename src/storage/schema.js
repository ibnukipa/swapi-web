import { schema } from 'normalizr';
import { getIdFromUrls } from '../utils/getIdFromUrl';

const options = { idAttribute: (value) => getIdFromUrls(value.url) };
export const film = new schema.Entity('films', {}, options);
export const species = new schema.Entity('species', options);
export const vehicle = new schema.Entity('stores', options);
export const starship = new schema.Entity('warehouses', options);

export const character = new schema.Entity('characters', {
  films: [film],
  species: [species],
  vehicles: [vehicle],
  starships: starship
}, options);
