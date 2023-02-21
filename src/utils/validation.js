import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email:Yup.string().email("Please Enter a valid email").required("Email is required"),
  password:Yup.string().min(7, "Password is not secure").required("Password is required"),
}) 


export const registerSchema = Yup.object({
  email:Yup.string().email("Please Enter a valid email").required("Email is required"),
  password:Yup.string().min(7, "Password is not secure").required("Password is required"),
  // get confirmPassword() {return Yup.string().matches(this.password).required("Confirm Password is required") },
}) 

export const registerPhoneSchema = Yup.object({
  phonenumber:Yup.string()
  .min(10,"Please Enter a valid Phone Number")
  .max(10,"Please Enter a valid Phone Number")
  .required("Phone Number is required"),
}) 

// export const otpSchema = Yup.object({
//   otp:Yup.string()
//   .min(10,"Please Enter a valid Phone Number")
//   .max(10,"Please Enter a valid Phone Number")
//   .required("Phone Number is required"),
//   get firebaseOtp() {return Yup.string().matches(this.otp, "").required("Firebase Otp is required") },
// }) 


