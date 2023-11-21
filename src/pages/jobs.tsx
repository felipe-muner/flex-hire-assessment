import React from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { AppQuery } from "../__generated__/AppQuery.graphql";
import { Jobs } from "../components";

interface JobsPageProps {
  queryReference:
    | PreloadedQuery<OperationType, Record<string, unknown>>
    | null
    | undefined;
  query: GraphQLTaggedNode;
}

function JobsPage(props: JobsPageProps) {
  const data = usePreloadedQuery<AppQuery>(
    props.query,
    props.queryReference as PreloadedQuery<AppQuery, Record<string, unknown>>
  );

  const jobs =
    data.currentUser?.jobOpportunities?.edges?.map((job) => {
      return {
        title: job?.node?.title ?? "",
        firmName: job?.node?.firm?.name ?? "",
        status: job?.node?.status ?? "",
        user: {
          avatarUrl: job?.node?.user?.avatarUrl ?? "",
          name: job?.node?.user?.name ?? "",
          email: job?.node?.user?.email ?? "",
        },
      };
    }) ?? [];

  return (
    <div>
      <h1>Available Jobs</h1>
      <Jobs jobs={jobs} />
    </div>
  );
}

export default JobsPage;
