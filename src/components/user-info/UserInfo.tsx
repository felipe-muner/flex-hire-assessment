export interface UserInfoProps {
  currentUser: CurrentUser;
}

export interface Skill {
  readonly name: string | null | undefined;
}

export interface UserSkill {
  readonly skill: Skill | null | undefined;
  readonly experience: number | null | undefined;
}

export interface CurrentUser {
  name: string;
  avatarUrl: string;
  userSkills: readonly UserSkill[] | undefined;
}

function UserInfo(props: UserInfoProps) {
  return <div>{JSON.stringify(props.currentUser.userSkills)}</div>;
}

export default UserInfo;
