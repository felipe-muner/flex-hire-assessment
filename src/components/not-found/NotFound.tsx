import { Box, Typography } from "@mui/material";


const NOT_FOUND_MESSAGE = "Not Found, please contact the admin";

function NotFound() {
  return (
    <Box style={{ marginTop: "20px" }}>
      <Typography gutterBottom variant="h4">
        {NOT_FOUND_MESSAGE}
      </Typography>
    </Box>
  );
}
export default NotFound;
