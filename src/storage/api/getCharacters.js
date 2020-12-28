import Api$ from './_observeable';

const getCharacters$ = ({ additionalHeaders, additionalParams }) =>
  Api$({
    path: '/people',
    method: 'GET',
    params: additionalParams,
    headers: additionalHeaders
  });

export default getCharacters$;
