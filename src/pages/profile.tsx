import { UserInfo } from "../components";
import { usePreloadedQuery } from "react-relay";

function ProfilePage({
  queryReference,
  query,
}: {
  queryReference: any;
  query: any;
}) {
  const data = usePreloadedQuery(query, queryReference);
  console.log("data", data);

  return <UserInfo currentUser={data} />;
}

export default ProfilePage;
