import { UserInfo } from "../components";
import { GraphQLTaggedNode, usePreloadedQuery } from "react-relay";
import { AppQuery } from "../__generated__/AppQuery.graphql";

interface ProfilePageProps {
  queryReference: any;
  query: GraphQLTaggedNode;
}

function ProfilePage(props: ProfilePageProps) {
  const data = usePreloadedQuery<AppQuery>(props.query, props.queryReference);

  return (
    <UserInfo
      currentUser={{
        name: data.currentUser?.name ?? "",
        avatarUrl: data.currentUser?.avatarUrl ?? "",
        // pass skills as an empty array if it's null
        userSkills: data.currentUser?.userSkills ?? [],
      }}
    />
  );
}

export default ProfilePage;
