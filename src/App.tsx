import { Button, Container } from "@mui/material";
import "./App.css";
import { Header, Loading } from "./components";
import { Form } from "./components/form";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profile";
import JobsPage from "./pages/jobs";
import { useQueryLoader } from "react-relay";
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
          }
        }
      }
      userSkills {
        skill {
          name
        }
        experience
      }
    }
  }
`;

function App() {
  const [apiKey, setApiKey] = useState<string>("");
  const [queryReference, loadQuery, dispose] = useQueryLoader(query);
  return (
    <Router>
      <div className="App">
        <Header />
        <Container
          maxWidth="lg"
          style={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginTop: "5rem",
          }}
        >
          <Form apiKey={apiKey} setApiKey={setApiKey} loadQuery={loadQuery} />
          {queryReference && <Button onClick={() => dispose()}>dispose</Button>}
          {queryReference && (
            <>
              <nav style={{ marginBottom: "20px" }}>
                <Link to="/profile">Profile</Link> |{" "}
                <Link to="/jobs">Jobs</Link>
              </nav>
              <React.Suspense fallback={<Loading />}>
                <Routes>
                  <Route
                    path="/profile"
                    element={
                      <ProfilePage
                        queryReference={queryReference}
                        query={query}
                      />
                    }
                  />
                  <Route
                    path="/jobs"
                    element={
                      <JobsPage queryReference={queryReference} query={query} />
                    }
                  />
                </Routes>
              </React.Suspense>
            </>
          )}
        </Container>
      </div>
    </Router>
  );
}

export default App;
