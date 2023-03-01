import signIn from "@/utils/firebase/auth/signin";
import { loginSchema } from "@/utils/validation";
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
import { useFormik } from "formik";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, helpers) => {
      try {
        signIn(values.email, values.password).then(() => {
          console.log("Success. Sign In Success");
          router.push("/home");
        });
      } catch (error) {
        helpers.setErrors({ submit: error.message });
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <Container maxWidth="sm" sx={{ height: "80vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <Paper
          sx={{ padding: 3 }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
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
                  value={formik.values.email}
                  error={formik.touched.email}
                  helperText={
                    formik.touched.email && Boolean(formik.errors.email)
                  }
                  onChange={formik.handleChange}
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
                  value={formik.values.password}
                  error={formik.touched.password}
                  helperText={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  onChange={formik.handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              }
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </FormGroup>
        </Paper>
      </Box>
    </Container>
  );
}
