import QS from 'query-string';
import CS from 'camelcase-keys';
import { ajax } from 'rxjs/ajax';

import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const Api$ = (options) => {
  const url = `https://swapi.dev/api${options.path}`;
  const query = options.params || {};
  return ajax({
    url: QS.stringifyUrl({ url, query }),
    method: options.method || 'GET',
    headers: {
      ...options.headers
    },
    body: options.body
  }).pipe(
    mergeMap((data) => {
      return of(
        {
          ...CS(data.response, { deep: true })
        }
      );
    })
  );
};

export default Api$;
