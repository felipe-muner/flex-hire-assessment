import React from "react";
import { usePreloadedQuery } from "react-relay";

function JobsPage({
  queryReference,
  query,
}: {
  queryReference: any;
  query: any;
}) {
  const data = usePreloadedQuery(query, queryReference);
  console.log("data", data);
  return (
    <div>
      <h1>This is a Jobs</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}

export default JobsPage;
