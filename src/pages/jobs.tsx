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

  const user = {
    name: data.currentUser?.name ?? "",
    avatarUrl: data.currentUser?.avatarUrl ?? "",
    answers:
      data.currentUser?.answers?.map((answer) => {
        return {
          url: answer?.answer?.video?.url ?? "",
          questionTitle: answer?.answer?.video?.question?.title ?? "",
        };
      }) ?? [],
    userSkills:
      data.currentUser?.userSkills?.map((skill) => {
        return {
          skill: {
            name: skill?.skill?.name ?? "",
          },
          experience: skill?.experience ?? 0,
        };
      }) ?? [],
  };

  

  return (
    <div>
      <h1>Available Jobs</h1>
      <Jobs currentUser={user} />
    </div>
  );
}

export default JobsPage;
