import { Alert, Grid } from "@mui/material";

const NOT_FOUND_MESSAGE = "Not Found, please contact the admin";

function NotFound() {
  return (
    <Grid container spacing={2} my={5}>
      <Grid item xs={12} md={6}>
        <Alert severity="info">{NOT_FOUND_MESSAGE}</Alert>
      </Grid>
    </Grid>
  );
}
export default NotFound;
