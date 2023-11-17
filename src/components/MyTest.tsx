import { Button, TextField } from "@mui/material";
import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePreloadedQuery, useQueryLoader } from "react-relay";

const query = graphql`
  query MyTestQuery($timestamp: String) {
    currentUser {
      name
      avatarUrl
      userSkills {
        skill {
          name
        }
        experience
      }
    }
  }
`;

export default function MyTest() {
  const [queryReference, loadQuery, dispose] = useQueryLoader(query);
  const [apiKey, setApiKey] = React.useState("");

  const getUser = () => {
    localStorage.setItem("FLEXHIRE-API-KEY", apiKey);
    loadQuery({}, { fetchPolicy: "network-only" });
  };

  const getUser2 = () => {
    localStorage.setItem("FLEXHIRE-API-KEY", "");
    loadQuery({}, { fetchPolicy: "network-only" });
  };

  return (
    <>
      <TextField
        label="API key"
        variant="outlined"
        size="small"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <Button onClick={getUser}> user1 </Button>
      <Button onClick={getUser2}> user2 </Button>

      {queryReference && (
        <React.Suspense fallback="Loading">
          <NameDisplay queryReference={queryReference} dispose={dispose} />
        </React.Suspense>
      )}
    </>
  );
}

function NameDisplay({
  queryReference,
  dispose,
}: {
  queryReference: any;
  dispose: any;
}) {
  const disposeQuery = () => {
    dispose();
  };
  const data = usePreloadedQuery(query, queryReference);

  return (
    <>
      <Button onClick={disposeQuery}> dispose </Button>
      <h1>{JSON.stringify(data)}</h1>
    </>
  );
}
