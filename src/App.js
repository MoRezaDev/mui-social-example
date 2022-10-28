import {
  Button,
  Container,
  Typography,
  Box,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Settings } from "@mui/icons-material";

import Add from "./components/Add";

import { SideBar, Navbar, RightBar, Feed } from "./components";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
