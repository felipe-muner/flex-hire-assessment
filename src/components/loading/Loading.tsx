import { Grid, Skeleton, Box } from "@mui/material";
function Loading() {
  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Grid container spacing={2}>
        {Array.from(new Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton width="100%" animation="wave" />
            <Skeleton width="60%" animation="wave" />
            <Skeleton width="40%" animation="wave" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Loading;
