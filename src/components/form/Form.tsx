import { Button, FormHelperText, Grid, TextField } from "@mui/material";
import { useState, FormEvent, Dispatch, SetStateAction } from "react";

export type FormProps = {
  /**
   * To show the current value on the input.
   */
  apiKey: string;
  /**
   * To set a new value for the api key.
   */
  setApiKey: Dispatch<SetStateAction<string>>;
};

function Form(props: FormProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.apiKey !== "") {
      setIsSubmitted(true);
    }
    if (props.apiKey === "") {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} mt={3}>
        <Grid item>
          <TextField
            label="API key"
            variant="outlined"
            size="small"
            value={props.apiKey}
            onChange={(e) => props.setApiKey(e.target.value)}
            error={isSubmitted && props.apiKey === ""}
          />
          {isSubmitted && props.apiKey === "" && (
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
