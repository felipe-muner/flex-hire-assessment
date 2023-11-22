import { AppQuery$data } from "src/__generated__/AppQuery.graphql";
import { UserInfo } from "../components";

interface ProfilePageProps {
  data: AppQuery$data;
}

function ProfilePage({ data }: ProfilePageProps) {
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
