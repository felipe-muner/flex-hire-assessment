import { UserInfo } from "../components";
import {
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";
import { AppQuery } from "../__generated__/AppQuery.graphql";
import { OperationType } from "relay-runtime";

interface ProfilePageProps {
  queryReference:
    | PreloadedQuery<OperationType, Record<string, unknown>>
    | null
    | undefined;
  query: GraphQLTaggedNode;
}

function ProfilePage(props: ProfilePageProps) {
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

  return <UserInfo currentUser={user} />;
}

export default ProfilePage;
