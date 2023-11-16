import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src="https://flexhire-images.s3.amazonaws.com/images/logos/flexhire-logo-white.png"
            style={{ width: "200px", height: "auto" }}
            alt="Flexhire Logo"
          />
          <Typography variant="h5" ml={4}>
            Felipe Muner
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
