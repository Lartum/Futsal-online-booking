import { Button, Box, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from "formik";

const RegisterWithEmail = ({ applicationVerifier, vendor }) => {
  const router = useRouter();
  const { createUserWithEmailAndPasswords } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, helpers) => {
      try {
        createUserWithEmailAndPasswords(values.email, values.password).then(
          (authUser) => {
            router.push("/home");
          }
        );
      } catch (error) {
        helpers.setErrors({ submit: error.message });
      }
    },
    validationSchema: registerSchema,
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      ></Box>
      <TextField
        fullWidth
        sx={{
          marginTop: 3,
        }}
        label="Email Address"
        name="email"
        value={formik.values.email}
        error={formik.touched.email}
        helperText={formik.touched.email && Boolean(formik.errors.email)}
        onChange={formik.handleChange}
      ></TextField>
      <TextField
        sx={{
          marginTop: 3,
        }}
        type="password"
        fullWidth
        label="Password"
        name="password"
        value={formik.values.password}
        error={formik.touched.password}
        helperText={formik.touched.password && Boolean(formik.errors.password)}
        onChange={formik.handleChange}
      ></TextField>
      <TextField
        sx={{
          marginTop: 3,
        }}
        fullWidth
        label="Confirm Password"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        error={formik.touched.confirmPassword}
        helperText={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        onChange={formik.handleChange}
      ></TextField>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 3,
        }}
      >
        <Button variant="contained" type="submit" name="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterWithEmail;
