import { Button, FormHelperText, Grid, TextField } from "@mui/material";
import { useState, FormEvent } from "react";


function Form() {
  const [apiKey, setApiKey] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (apiKey === "") {
      return;
    }
    
    setIsSubmitted(true);
  };


  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} mt={3}>
        <Grid item>
          <TextField
            label="API key"
            variant="outlined"
            size="small"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            error={isSubmitted && apiKey === ""}
          />
          {isSubmitted && apiKey === "" && (
            <FormHelperText error>Please enter an API key</FormHelperText>
          )}
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
