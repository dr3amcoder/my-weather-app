import React from "react";
 import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #e0f7fa, #fff9c4)",
        p: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Cute Weather App
        </Typography>
      </Container>
    </Paper>
  )
}

export default App
