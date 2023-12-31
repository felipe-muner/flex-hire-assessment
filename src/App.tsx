import { Container } from "@mui/material";
import "./App.css";
import { Header, Loading, TabsPanel } from "./components";
import { Form } from "./components/form";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useQueryLoader } from "react-relay";
import { query } from "./AppQuery";

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
            minHeight: "500px",
          }}
        >
          <Form
            apiKey={apiKey}
            setApiKey={setApiKey}
            loadQuery={loadQuery}
            dispose={dispose}
            showDispose={!!queryReference}
          />
          {queryReference && (
            <React.Suspense fallback={<Loading />}>
              <TabsPanel queryReference={queryReference} query={query} />
            </React.Suspense>
          )}
        </Container>
      </div>
    </Router>
  );
}

export default App;
