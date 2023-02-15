import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { useState } from "react";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [value, setValue] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit() {
    if (value.email.length || value.password) {
    }
    console.log("email: ", value.email);
    console.log("password: ", value.password);
  }

  return (
    <Container maxWidth="sm" sx={{ height: "80vh" }}>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <Paper sx={{ padding: 3 }}>
          <FormLabel
            component="h1"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Login
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <TextField
                  value={initialValues.email}
                  error={false}
                  onChange={handleChange}
                  required
                  type="email"
                  name="email"
                  label="Email"
                />
              }
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <TextField
                  required
                  value={initialValues.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              }
            />
          </FormGroup>
          <FormGroup>
            <Button variant="contained" onClick={handleSubmit}>
              Login
            </Button>
          </FormGroup>
        </Paper>
      </Box>
    </Container>
  );
}
