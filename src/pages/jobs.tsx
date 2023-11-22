import React from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { AppQuery, AppQuery$data } from "../__generated__/AppQuery.graphql";
import { Jobs } from "../components";

interface JobsPageProps {
  data: AppQuery$data;
}

function JobsPage(props: JobsPageProps) {
  const jobs =
    props.data.currentUser?.jobOpportunities?.edges?.map((job) => {
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

  return <Jobs jobs={jobs} />;
}

export default JobsPage;
