import { Button, Box, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";

const RegisterWithPhone = ({ applicationVerifier, vendor }) => {
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState("");
  const [firebaseOtp, setFirebaseOtp] = useState("");

  const formik = useFormik({
    initialValues: {
      phonenumber: "",
    },
    onSubmit: async (values, helpers) => {
      try {
        setSubmitted(true);
        var confirmationResult = await signInWithPhoneNumber(
          auth,
          values.phonenumber,
          applicationVerifier
        );
        console.log(confirmationResult);
        alert("Form Submitted");
      } catch (error) {
        helpers.setErrors({ submit: error.message });
      }
    },
    validationSchema: registerPhoneSchema,
  });

  function handleOtpSubmit() {}

  return (
    <>
      {submitted ? (
        <Box>
          <TextField
            component="form"
            onSubmit={handleOtpSubmit}
            fullWidth
            sx={{
              marginTop: 3,
            }}
            label="One Time Password"
            name="otp"
            // error={formik.errors.otp}
            helperText={formik.errors.otp}
            onChange={(e) => setOtp(e.target.value)}
          ></TextField>
        </Box>
      ) : (
        <Box component="form" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            sx={{
              marginTop: 3,
            }}
            type="phone"
            label="Phone Number"
            name="phonenumber"
            //  error={formik.errors.phonenumber}
            helperText={formik.errors.phonenumber}
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
            <div id="recaptcha-container"></div>
          </Box>
        </Box>
      )}
    </>
  );
};

export default RegisterWithPhone;
