import { QueryRenderer } from "react-relay";
import { RelayEnvironment } from "../../RelayEnvironment";
import graphql from "babel-plugin-relay/macro";

const query = graphql`
  query UserInfoQuery {
    currentUser {
      name
      avatarUrl
      userSkills {
        skill {
          name
        }
        experience
      }
    }
  }
`;

type UserInfoProps = {
  currentUser: any;
};

function UserInfo(props: UserInfoProps) {
  return <div>{JSON.stringify(props.currentUser)}</div>;
}

type UserInfoContainerProps = {
  apiKey: string;
};

function UserInfoContainer(props: UserInfoContainerProps) {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={query}
      variables={{}}
      render={({ error, props }) => {
        console.log("error", error);

        if (error) return <div>Error!</div>;
        if (!props) return <div>Loading...</div>;
        console.log("props");

        return <UserInfo currentUser={{ ...props }} />;
      }}
    />
  );
}

export default UserInfoContainer;
