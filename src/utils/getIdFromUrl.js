import { split } from 'lodash-es';

export const getIdFromUrls = (url) => {
  const parts = split(url, '/')
  return parts[parts.length - 1]
}
