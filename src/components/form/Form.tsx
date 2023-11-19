import {
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState, Dispatch, SetStateAction } from "react";
import { UseQueryLoaderLoadQueryOptions } from "react-relay";
import { useNavigate } from "react-router-dom";
import { Variables } from "relay-runtime";

export type FormProps = {
  /**
   * To show the current value on the input.
   */
  apiKey: string;
  /**
   * To set a new value for the api key.
   */
  setApiKey: Dispatch<SetStateAction<string>>;
  /**
   * To reload the query passing new header.
   */
  loadQuery: (
    variables: Variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => void;
  /**
   * To dispose the query.
   */
  dispose: () => void;
  /**
   * To toggle the dispose button.
   */
  showDispose: boolean;
};

function Form(props: FormProps) {
  console.log("Form rendered", props.dispose);
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("FLEXHIRE-API-KEY", props.apiKey);
    setIsSubmitted(true);
    if (props.apiKey === "") {
      return;
    }
    props.loadQuery({}, { fetchPolicy: "network-only" });
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom mt={4}>
        Search user info using the API key
      </Typography>
      <Grid container spacing={2} mt={3} mb={3}>
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
        {props.showDispose && (
          <Grid item>
            <Button onClick={() => props.dispose()}>dispose</Button>
          </Grid>
        )}
      </Grid>
    </form>
  );
}

export default Form;
