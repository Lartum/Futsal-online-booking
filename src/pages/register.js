import { Button, Container, Paper, Box, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { registerSchema, registerPhoneSchema } from "@/utils/validation";
import { firebaseAuth } from "@/utils/firebase/firebaseAuth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useAuth } from "@/components/auth/authUserProvider";

const auth = firebaseAuth();
const SignInWithEmail = () =>{
  const router = useRouter();
  const { createUserWithEmailAndPasswords } = useAuth();
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
      confirmPassword:""
    },
    onSubmit: (values, helpers) => {
      
      try {
        console.log(values)
        createUserWithEmailAndPasswords(values.email, values.password).then(authUser => {
        console.log("Success. The user is created in Firebase")
        router.push("/home");
      })
        // alert("Form Submitted")
      } catch(error){
        helpers.setErrors({submit:error.message})
      }
    },
    validationSchema:registerSchema
  })
  return(
    <Box
    component="form"
     onSubmit={formik.handleSubmit}
     >
     <Box
      sx={{
       display:"flex",
       justifyContent:"center",
            }}
     >
     </Box>
         <TextField
         fullWidth
         sx={{
           marginTop:3
         }}
         label="Email Address"
         name="email"
         error={formik.errors.email}
         helperText={formik.errors.email}
         onChange={formik.handleChange}
         >
         </TextField>
         <TextField
         sx={{
           marginTop:3
         }}
         type="password"
         fullWidth
         label="Password"
         name="password"
         error={formik.errors.password}
         helperText={formik.errors.password}
         onChange={formik.handleChange}
         >
         </TextField>
         <TextField
         sx={{
           marginTop:3
         }}
         fullWidth
         label="Confirm Password"
         name="confirmPassword"
         error={formik.errors.confirmPassword}
         helperText={formik.errors.confirmPassword}
         onChange={formik.handleChange}
         >
         </TextField>
         <Box
          sx={{
           display:"flex",
           justifyContent:"center",
           marginTop:3
         }}
         >
         <Button     
         variant="contained" type="submit" name="submit">
           Submit
           </Button>
         </Box>
     </Box>
  )
}

const SignInWithPhone = () => {
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState("");
  const [firebaseOtp, setFirebaseOtp] = useState("");

  const formik = useFormik({
    initialValues:{
      phonenumber:"",
    },
    onSubmit: async (values, helpers) => {
      console.log("before try");
      try {
        console.log("Application verifier starts");
       
        console.log(applicationVerifier)
        setSubmitted(true);
        var confirmationResult = await signInWithPhoneNumber(auth, values.phonenumber, applicationVerifier);
        console.log(confirmationResult) 
        alert("Form Submitted");
      } catch(error){
        helpers.setErrors({submit:error.message})
      }
    },
    validationSchema: registerPhoneSchema
  })
  
 function handleOtpSubmit(){

 }

  return(
    <>
    {submitted 
    ? 
    <Box> 
      <TextField
      component="form"
      onSubmit={handleOtpSubmit}
      fullWidth
      sx={{
        marginTop:3
      }}
      label="One Time Password"
      name="otp"
      // error={formik.errors.otp}
      helperText={formik.errors.otp}
      onChange={(e) =>setOtp(e.target.value)}
      >
      </TextField>
    </Box>
    :
    <Box
    component="form"
    onSubmit={formik.handleSubmit}
   >
     <TextField
         fullWidth
         sx={{
           marginTop:3
         }}

         type="phone"
         label="Phone Number"
         name="phonenumber"
        //  error={formik.errors.phonenumber}
         helperText={formik.errors.phonenumber}
         onChange={formik.handleChange}
         >
         </TextField>
         <Box
          sx={{
           display:"flex",
           justifyContent:"center",
           marginTop:3
         }}
         >
         <Button   
          
          variant="contained"
          type="submit" 
          name="submit">
           Submit
          </Button>
         </Box>
     </Box>

    }
    </>
  )
}


export default function Register() {
  const [showVendor, setShowVendor] = useState(false);
  const [phoneSignin, setPhoneSignin] = useState(false);
  const [applicationVerifier, setApplicationVerifier] = useState(null);
  // useEffect(() => { 
  //   function fetchApplicationVerifier(){
  //     const response = new RecaptchaVerifier('recaptcha-container', {"size":"invisible"}, auth)
  //     setApplicationVerifier(response);
  //   }
  //   fetchApplicationVerifier();
  // },[])
  function handleChange (){
    setShowVendor(!showVendor);
    setPhoneSignin(false);
  }
  return (
  <Container maxWidth="sm" sx={{ height: "80vh" }}> 
      <Paper sx={{marginTop:3, padding:3}}>
      <Box
      sx={{
       display:"flex",
       justifyContent:"center",
      }}
     >
     <Typography 
      component="h6"
      >
      {showVendor ? "Vendor" : "Customer"}
      {" "}Registeration
     </Typography>
     </Box>
      {phoneSignin ? <SignInWithPhone applicationVerifier={applicationVerifier}/> : <SignInWithEmail applicationVerifier={applicationVerifier} />}
      <Box
        sx={{display:"flex", justifyContent:"center"}}
        >
          {phoneSignin ? 
           <Button sx={{marginTop:3}} variant="outlined" onClick={() => setPhoneSignin(false)}>
           Login Via Email 
           </Button> : 
          
          <Button sx={{marginTop:3}} variant="outlined" onClick={() => setPhoneSignin(true)}>
          Login Via Phone 
          </Button>}
         
        </Box>
        <Box
        sx={{display:"flex", justifyContent:"center"}}
        >
          <Button 
          sx={{marginTop:3}} 
          variant="outlined" 
          onClick={handleChange}>
            Register as a {showVendor ? "Vendor" : "Customer"}
          </Button> 
          <div id="recaptcha-container"></div>
        </Box>
      </Paper>
    </Container>
    );
}
