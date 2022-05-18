import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState('light');

  const darkThem = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkThem}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box >
    </ThemeProvider>
  );
}

export default App;
