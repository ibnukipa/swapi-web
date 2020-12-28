import { schema } from 'normalizr';
import { getIdFromUrls } from '../utils/getIdFromUrl';
import { isObject } from 'lodash-es';

const options = {
  idAttribute: (value) => {
    if (isObject(value)) return getIdFromUrls(value.url);
    else return getIdFromUrls(value);
  }
};
export const film = new schema.Entity('films');
export const species = new schema.Entity('species');
export const vehicle = new schema.Entity('stores');
export const starship = new schema.Entity('starships');

export const character = new schema.Entity('characters', {
  films: [film],
  species: [species],
  vehicles: [vehicle],
  starships: [starship]
}, options);
