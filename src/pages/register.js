import RegisterWithEmail from "@/components/auth/Register/RegisterWithEmail";
import RegisterWithPhone from "@/components/auth/Register/RegisterWithPhone";
import { Button, Container, Paper, Box, Typography } from "@mui/material";
import { useState } from "react";

const auth = firebaseAuth();
export default function Register() {
  const [showVendor, setShowVendor] = useState(false);
  const [phoneSignin, setPhoneSignin] = useState(false);
  const [applicationVerifier, setApplicationVerifier] = useState(null);

  function handleChange() {
    setShowVendor(!showVendor);
    setPhoneSignin(false);
  }
  return (
    <Container maxWidth="sm" sx={{ height: "80vh" }}>
      <Paper sx={{ marginTop: 3, padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography component="h6">
            {showVendor ? "Vendor" : "Customer"} Registeration
          </Typography>
        </Box>
        {phoneSignin ? (
          <RegisterWithPhone
            applicationVerifier={applicationVerifier}
            vendor={showVendor}
          />
        ) : (
          <RegisterWithEmail
            applicationVerifier={applicationVerifier}
            vendor={showVendor}
          />
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {phoneSignin ? (
            <Button
              sx={{ marginTop: 3 }}
              variant="outlined"
              onClick={() => setPhoneSignin(false)}
            >
              Login Via Email
            </Button>
          ) : (
            <Button
              sx={{ marginTop: 3 }}
              variant="outlined"
              onClick={() => setPhoneSignin(true)}
            >
              Login Via Phone
            </Button>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{ marginTop: 3 }}
            variant="outlined"
            onClick={handleChange}
          >
            Register as a {showVendor ? "Vendor" : "Customer"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
