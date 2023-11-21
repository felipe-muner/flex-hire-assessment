import graphql from "babel-plugin-relay/macro";

export const query = graphql`
  query AppQuery {
    currentUser {
      name
      avatarUrl
      answers {
        answer {
          video {
            url
            question {
              title
            }
          }
        }
      }
      userSkills {
        skill {
          name
        }
        experience
      }
      jobOpportunities(first: 10) {
        edges {
          node {
            id
            title
            status
            firm {
              name
            }
            user {
              name
              email
              avatarUrl
            }
            questions {
              title
              videoAnswer {
                video {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
