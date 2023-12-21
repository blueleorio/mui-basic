// import "./App.css";
import SearchAppBar from "./components/Appbar";
// import GridLayout from "./layouts/GridLayout";
import Container from "@mui/material/Container";
import { Box, Grid, Pagination, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar />
      <main>This app is using the dark mode</main>
      <Pagination count={10} variant="outlined" color="primary" />
    </ThemeProvider>
  );
}
