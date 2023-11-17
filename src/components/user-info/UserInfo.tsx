type UserInfoProps = {
  currentUser: any;
};

function UserInfo(props: UserInfoProps) {
  return <div>{JSON.stringify(props.currentUser)}</div>;
}

export default UserInfo;
