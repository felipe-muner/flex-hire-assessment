import { Box, Typography } from "@mui/material";

interface NotFoundProps {}

function NotFound(props: NotFoundProps) {
  return (
    <Box style={{ marginTop: "20px" }}>
      <Typography gutterBottom variant="h4">
        Not Found, please contact the admin
      </Typography>
    </Box>
  );
}
export default NotFound;
