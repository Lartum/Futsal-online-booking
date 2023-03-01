// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { Button } from "@mui/material";
// import { useAuthContext } from "@/components/auth/AuthContext";
// import logOut from "@/utils/firebase/auth/logout";

// const HomeVendor = () => {
//   const { user } = useAuthContext();
//   const router = useRouter();

//   // Listen for changes on loading and authUser, redirect if needed
//   useEffect(() => {
//     if (user == null) router.push("/");
//     // if (user.role !== "vendor") router.push("/");
//   }, [user]);
//   return (
//     //Your logged in page
//     <div>
//       Protected
//       <Button onClick={logOut}>Sign Out</Button>
//     </div>
//   );
// };

// export default HomeVendor;
