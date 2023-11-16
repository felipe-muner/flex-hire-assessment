import { Container, Typography } from "@mui/material";
import "./App.css";
import { Header } from "./components";
import { Form } from "./components/form";

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" component="h4" gutterBottom mt={10}>
          Use your API key to fetch data
        </Typography>
        <Form />
      </Container>
    </div>
  );
}

export default App;
