import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

// @TODO: conditional dev vs prod (proxy on local to pass CORS)
const HTTP_ENDPOINT = "https://flexhire.com/api/v2";

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch("/api/v2", {
    method: "POST",
    headers: {
      "FLEXHIRE-API-KEY": "er9bff8zc82ju2w6",
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      // <-- Additional headers like 'Authorization' would go here
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
  });

  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
