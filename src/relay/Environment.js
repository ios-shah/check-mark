import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';
import config from '../config';

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch(config.checkApiGraphqlUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      credentials: 'include'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({ network, store });

export default environment;