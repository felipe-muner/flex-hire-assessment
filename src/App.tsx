import { Container, Typography } from "@mui/material";
import "./App.css";
import { Header } from "./components";
import { Form } from "./components/form";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profile";
import JobsPage from "./pages/jobs";

function App() {
  const [apiKey, setApiKey] = useState<string>("");
  return (
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
        <Form apiKey={apiKey} setApiKey={setApiKey} />
        <Router>
          <nav>
            <Link to="/profile">Profile</Link> | <Link to="/jobs">Jobs</Link>
          </nav>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
        </Router>        
      </Container>
    </div>
  );
}

export default App;
