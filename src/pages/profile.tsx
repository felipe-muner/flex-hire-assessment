import { UserInfo } from "../components";
import {
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";
import { AppQuery } from "../__generated__/AppQuery.graphql";
import { OperationType } from "relay-runtime";
import { DUMMY_CURRENT_USER } from "../dummy";

interface ProfilePageProps {
  queryReference:
    | PreloadedQuery<OperationType, Record<string, unknown>>
    | null
    | undefined;
  query: GraphQLTaggedNode;
}

function ProfilePage(props: ProfilePageProps) {
  // const data = usePreloadedQuery<AppQuery>(
  //   props.query,
  //   props.queryReference as PreloadedQuery<AppQuery, Record<string, unknown>>
  // );
  const data = DUMMY_CURRENT_USER;

  const user = {
    name: data.currentUser?.name ?? "",
    avatarUrl: data.currentUser?.avatarUrl ?? "",
    userSkills: data.currentUser?.userSkills ?? [],
  };

  return <UserInfo currentUser={user} />;
}

export default ProfilePage;
