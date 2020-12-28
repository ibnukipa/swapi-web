import { catchError, mergeMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';

import { listFetch, listSuccess, listError } from '../slicers/characters';
import { normalizeResponse } from '../slicers/database';
import getCharacters$ from '../api/getCharacters';
import { getIdFromUrls } from '../../utils/getIdFromUrl';

export const fetchCharactersEpic = (action$, state$) =>
  action$.pipe(
    filter(listFetch.match),
    mergeMap(({ payload }) => {
      const page = payload?.page || 1;
      return getCharacters$({
        additionalParams: {
          storeId: payload?.storeId,
          keyword: payload?.keyword,
          page
        }
      }, state$).pipe(
        mergeMap((response) => {
          return of(
            normalizeResponse({ modelName: 'character', data: response.results }),
            listSuccess({
              meta: {
                page,
                hasNext: !!response.next
              },
              data: response?.results?.map(item => ({ id: getIdFromUrls(item.url) }))
            })
          );
        }),
        catchError(error => {
          return of(listError({ ...payload, error: error.message }));
        })
      )
    })
  );
