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
      "FLEXHIRE-API-KEY": localStorage.getItem("FLEXHIRE-API-KEY") || "",
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
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
